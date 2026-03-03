import dotenv from "dotenv";
import Groq from "groq-sdk";
import { eventDocuments } from "./eventsData.js";
import { systemPrompt } from "./prompt.js";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

let lastEvent = null;

/* ---------------- NORMALIZE ---------------- */
function normalize(text) {
  return text
    ?.toLowerCase()
    .replace(/\?/g, "")
    .replace(/\bwt\b/g, "what")
    .replace(/\bwht\b/g, "what")
    .replace(/\bu\b/g, "you")
    .replace(/\br\b/g, "are")
    .trim() || "";
}

/* ---------------- KEYWORD FILTER ---------------- */
function keywordFilter(query) {
  const q = normalize(query);

  const filtered = eventDocuments.filter(e => {
    const text = e.text.toLowerCase();

    return (
      text.includes(q) ||
      q.split(" ").some(word => text.includes(word))
    );
  });

  return filtered;
}

/* ---------------- MAIN FUNCTION ---------------- */
export async function askQuestion(userQuestion) {
  const q = normalize(userQuestion);

  if (["hi", "hello", "hey"].some(g => q.startsWith(g)))
    return "Hello! 👋 Ask me anything about IMPETUS 26.0 events.";

  // Try keyword filtering first
  let relevantEvents = keywordFilter(userQuestion);

  // If nothing matched, try fallback: return all events
  if (relevantEvents.length === 0) {
    relevantEvents = eventDocuments;
  }

  const context = relevantEvents.map(e => e.text).join("\n---\n");

  const finalPrompt = `
${systemPrompt}

Event Data:
${context}

User Question:
${userQuestion}

If the question is unrelated to events, say:
"I'm trained only for IMPETUS event information. For more details, please visit the Contact section."

Otherwise answer properly.
`;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: finalPrompt }
      ],
      temperature: 0.4
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error(error);
    return "Error processing your question.";
  }
}
