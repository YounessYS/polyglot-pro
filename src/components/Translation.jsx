import { LANGUAGES } from "../utils/presets";

export default function Translation({
  textElement,
  toLanguage,
  translating,
  setToLanguage,
  generateTranslation,
}) {
  return (
    <div className="flex flex-col gap-2 max-w-[400px] w-full mx-auto">
      {textElement && !translating && <p>{textElement}</p>}
      {!translating && (
        <div className="flex flex-col gap-1 mb-4">
          <p className="text-xs sm:text-sm font-medium text-white mr-auto">
            To language
          </p>
          <div className="flex items-stretch gap-2 sm:gap-4">
            <select
              value={toLanguage}
              className="flex-1 outline-none w-full focus:outline-none bg-white text-black duration-200 p-2 rounded hover:opacity-80"
              onChange={(e) => setToLanguage(e.target.value)}
            >
              <option value={"Select language"}>Select language</option>
              {Object.entries(LANGUAGES).map(([key, value]) => {
                return (
                  <option key={key} value={value}>
                    {key}
                  </option>
                );
              })}
            </select>
            <button
              onClick={generateTranslation}
              className="btn px-3 py-2 rounded-lg text-black hover:opacity-80 duration-200"
            >
              Translate
            </button>
          </div>
        </div>
      )}
      {translating && (
        <div className="grid place-items-center">
          <i className="fa-solid fa-spinner animate-spin"></i>
          <p>This may take a while.</p>
        </div>
      )}
    </div>
  );
}
