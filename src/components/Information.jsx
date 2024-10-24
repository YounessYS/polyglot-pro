import { useState, useEffect, useRef } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

export default function Information(props) {
  const { output, finished } = props;
  const [tab, setTab] = useState("transcription");
  const [translation, setTranslation] = useState(null);
  const [toLanguage, setToLanguage] = useState("Select language");
  const [translating, setTranslating] = useState(null);

  const worker = useRef();

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(
        new URL("../utils/translate.worker.js", import.meta.url),
        {
          type: "module",
        }
      );
    }

    const onMessageReceived = async (e) => {
      switch (e.data.status) {
        case "initiate":
          break;
        case "progress":
          break;
        case "update":
          setTranslation(e.data.output);
          break;
        case "complete":
          setTranslating(false);
          break;
      }
    };

    worker.current.addEventListener("message", onMessageReceived);

    return () =>
      worker.current.removeEventListener("message", onMessageReceived);
  });

  const textElement =
    tab === "transcription" ? output.map((val) => val.text) : translation || "";

  function handleCopy() {
    navigator.clipboard.writeText(textElement);
  }

  function handleDownload() {
    const element = document.createElement("a");
    const file = new Blob([textElement], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `PolyglotPro_${new Date().getMilliseconds()}.txt`;
    document.body.appendChild(element);
    element.click();
  }

  function generateTranslation() {
    if (translating || toLanguage === "Select language") {
      return;
    }

    setTranslating(true);

    worker.current.postMessage({
      text: output.map((val) => val.text),
      src_lang: "eng_Latn",
      tgt_lang: toLanguage,
    });
  }

  return (
    <main className="flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 w-full max-w-prose mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your <span className="text-white bold">Transcription</span>
      </h1>

      <div className="grid grid-cols-2 mx-auto bg-white shadow rounded-full overflow-hidden items-center">
        <button
          onClick={() => setTab("transcription")}
          className={
            "px-4 rounded duration-200 py-1 " +
            (tab === "transcription"
              ? " bg-black text-white"
              : " text-black hover:opacity-80")
          }
        >
          Transcription
        </button>
        <button
          onClick={() => setTab("translation")}
          className={
            "px-4 rounded duration-200 py-1  " +
            (tab === "translation"
              ? " bg-black text-white"
              : " text-black hover:opacity-80")
          }
        >
          Translation
        </button>
      </div>
      <div className="my-8 flex flex-col">
        {tab === "transcription" ? (
          <Transcription {...props} textElement={textElement} />
        ) : (
          <Translation
            {...props}
            toLanguage={toLanguage}
            translating={translating}
            textElement={textElement}
            setTranslating={setTranslating}
            setTranslation={setTranslation}
            setToLanguage={setToLanguage}
            generateTranslation={generateTranslation}
          />
        )}
      </div>
      <div className="flex items-center gap-4 mx-auto">
        <button
          onClick={handleCopy}
          title="Copy"
          className="bg-white hover:opacity-70 duration-200 text-black px-2 aspect-square grid place-items-center rounded"
        >
          <i className="fa-solid fa-copy"></i>
        </button>
        <button
          onClick={handleDownload}
          title="Download"
          className="bg-white hover:opacity-70 duration-200 text-black px-2 aspect-square grid place-items-center rounded"
        >
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </main>
  );
}
