const OpenAI = require("openai");

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY is not set");
}

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

const systemInstruction = `
# AI Code Reviewer - Senior (7+ Years Experience)

You are an expert code reviewer with 7+ years of software development experience.
Analyze and review code while keeping feedback practical, concise, and helpful.

Focus on:
- Code quality, maintainability, and structure
- Best practices and modern patterns
- Performance bottlenecks
- Bugs, logical flaws, and security risks
- Scalability and readability
- Test coverage and documentation gaps

Feedback format:
- Issues Identified: list the problems with clear explanations.
- Recommended Fix: provide improved code when useful.
- Why It's Better: explain the benefits of the suggested changes.
`;

async function generateContent(prompt) {
  const result = await groq.chat.completions.create({
    model,
    messages: [
      { role: "system", content: systemInstruction },
      { role: "user", content: prompt },
    ],
  });

  const text = result.choices?.[0]?.message?.content;

  if (!text) {
    throw new Error("Groq returned an empty response");
  }

  return text;
}

module.exports = generateContent;
