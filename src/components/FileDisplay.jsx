export default function FileDisplay({ file, audioInput, handleAudioReset }) {
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20 w-fit max-w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your <span className="text-white bold">File</span>
      </h1>
      <div className="mx-auto flex flex-col text-left my-4">
        <h3 className="font-semibold">Name</h3>
        <p>{file.name}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handleAudioReset}
          className="text-white hover:text-gray-200 duration-200"
        >
          Reset
        </button>
        <button className="btn px-4 py-2 rounded-lg text-black">
          <p>Transcribe</p>
        </button>
      </div>
    </main>
  );
}
