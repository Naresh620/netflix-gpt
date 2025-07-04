import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BackgroundImg_URL } from "../utils/Contents";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <img className="object-cover w-screen h-screen absolute -z-10" src={BackgroundImg_URL} alt="banner" />
      <GptSearchBar />
      <GptMovieSuggestion/>
    </div>
  );
};

export default GptSearch;
