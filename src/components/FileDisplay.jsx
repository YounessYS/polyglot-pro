export default function FileDisplay({
  file,
  audioInput,
  handleAudioReset,
  handleFormSubmission,
}) {
  return (
    <main className="flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 w-full max-w-prose mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your <span className="text-white bold">File</span>
      </h1>
      <div className=" flex flex-col text-left my-4">
        <h3 className="font-semibold">Name</h3>
        <p className="truncate">{file ? file?.name : "Custom audio"}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handleAudioReset}
          className="text-white hover:text-gray-200 duration-200"
        >
          Reset
        </button>
        <button
          onClick={handleFormSubmission}
          className="btn px-3 p-2 rounded-lg text-black flex items-center gap-2 font-medium"
        >
          <p>Transcribe</p>
          <i className="fa-solid fa-pen-nib"></i>
        </button>
      </div>
    </main>
  );
}
