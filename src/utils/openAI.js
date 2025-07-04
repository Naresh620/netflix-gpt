import OpenAI from "openai";

const openaiKey = "process.env.REACT_APP_OPENAI_KEY;"

const openai = new OpenAI({
  apiKey: openaiKey,  
  dangerouslyAllowBrowser: true,  
});

export default openai;
