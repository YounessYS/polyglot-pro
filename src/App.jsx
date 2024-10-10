import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FileDisplay from "./components/FileDisplay";

export default function App() {
  const [file, setFile] = useState(null);
  const [audioInput, setAudioInput] = useState(null);

  const audioExists = file || audioInput;

  function handleAudioReset() {
    setFile(null);
    setAudioInput(null);
  }

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {audioExists ? (
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
