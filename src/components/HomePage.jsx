export default function HomePage({ setFile, setAudioInput }) {
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Polyglot<span className="text-white bold">Pro</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record <span className="text-white">&rarr;</span> Transcribe{" "}
        <span className="text-white">&rarr;</span> Translate
      </h3>
      <button className="flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 btn px-4 py-2 rounded-xl">
        <p className="text-black">Record</p>
        <i className="fa-solid fa-microphone" />
      </button>
      <p className="text-base">
        Or{" "}
        <label className="text-white cursor-pointer hover:text-gray-200 duration-200">
          upload{" "}
          <input
            onChange={(e) => {
              const tempFile = e.target.files[0];
              setFile(tempFile);
            }}
            className="hidden"
            type="file"
            accept=".mp3,.wave"
          />
        </label>{" "}
        an mp3 file
      </p>
    </main>
  );
}
