import React, { useRef } from 'react';
import Lang from '../utils/SupportLanguages';
import { useSelector } from 'react-redux';
import openai from '../utils/openAI';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.configs.lang);
  const searchText = useRef(null);

  const handleGptSearch = async () => {
    if (!searchText.current.value) return;

    const gptQuery="Act as a Movie Recommendation System Suggest Some Movie for the query :"+
    searchText.current.value +"only give me no of 5 movies, comma separated like the example Result give ahead. Example: Don, Billa, Kaithi, Leo, Vikram";

    try {
      const gptResults = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: gptQuery }],
      });
      console.log(gptResults.choices);
    } catch (err) {
      console.error("OpenAI Error:", err);
    }
  };

  return (
    <div className="flex pt-[15%] justify-center">
      <form
        className="bg-black grid grid-cols-12 p-2 w-1/2 gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="text-black col-span-10 p-2 rounded-lg"
          type="text"
          placeholder={Lang[langKey]?.gptLangPlaceholter}
        />
        <button
          className="text-white col-span-2 bg-red-700 rounded-lg"
          onClick={handleGptSearch}
        >
          {Lang[langKey]?.Search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
