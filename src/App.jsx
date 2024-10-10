import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FileDisplay from "./components/FileDisplay";
import Transcribing from "./components/Transcribing";
import Information from "./components/Information";

export default function App() {
  const [file, setFile] = useState(null);
  const [audioInput, setAudioInput] = useState(null);
  const [output, setOutput] = useState(true);
  const [loading, setLoading] = useState(false);

  const audioExists = file || audioInput;

  function handleAudioReset() {
    setFile(null);
    setAudioInput(null);
  }

  useEffect(() => {
    console.log(audioInput);
  }, [audioInput]);

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {output ? (
          <Information />
        ) : loading ? (
          <Transcribing />
        ) : audioExists ? (
          <FileDisplay
            file={file}
            audioInput={setAudioInput}
            handleAudioReset={handleAudioReset}
          />
        ) : (
          <HomePage setFile={setFile} setAudioInput={setAudioInput} />
        )}
      </section>
      <footer></footer>
    </div>
  );
}
