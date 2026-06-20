import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1/",
});

async function generateText() {
  const response = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content: "hello from nischay",
      },
    ],

    max_completion_tokens: 150,
  });

  let output = response.choices[0]?.message.content;

  output &&
    console.log(`
          llm-response: ${output},
          usage: ${response.usage?.total_tokens}
          `);

  return output;
}
