const OpenAI = require("openai");

async function fetchOpenAICompletionsStream(messages, callback) {
  const OPENAI_API_KEY = "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";
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

  const aiModel = "gpt-4-1106-preview";
  try {
    const completion = await openai.chat.completions.create({
      model: aiModel,
      messages: messages,
      temperature: 1,
      stream: true,
    });

    for await (const chunk of completion) {
      callback(chunk);
    }
  } catch (error) {
    console.error("Error fetching data from OpenAI API:", error);
    throw new Error("Error fetching data from OpenAI API.");
  }
}

module.exports = { fetchOpenAICompletionsStream };
