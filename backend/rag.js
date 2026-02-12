import dotenv from "dotenv";
import Groq from "groq-sdk";
import { eventDocuments } from "./eventsData.js";
import { systemPrompt } from "./prompt.js";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

let lastEvent = null;

// Normalize casual text
function normalize(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/\bwt\b/g, "what")
    .replace(/\bwht\b/g, "what")
    .replace(/\br\b/g, "are")
    .replace(/\bu\b/g, "you")
    .replace(/\?/g, "")
    .trim();
}

function findEvent(query) {
  return eventDocuments.find(e =>
    query.includes(e.title.toLowerCase()) ||
    query.includes(e.id.replace("-", ""))
  );
}

export async function askQuestion(userQuestion) {
  const q = normalize(userQuestion);

  /* -------------------------
     1️⃣ BASIC CHAT
  ------------------------- */
  if (["hi", "hello", "hey", "hai"].some(g => q.startsWith(g)))
    return "Hello! 👋 Ask me about any IMPETUS event.";

  if (q.includes("thank"))
    return "You're welcome! 😊";

  if (q.includes("bye"))
    return "Bye! 👋 See you at IMPETUS 26.0 🚀";

  /* -------------------------
     2️⃣ EVENT IDENTIFICATION
  ------------------------- */
  const event = findEvent(q) || lastEvent;
  if (event) lastEvent = event;

  /* -------------------------
     3️⃣ SUMMARY / EXPLANATION
  ------------------------- */
  if (
    q.startsWith("what is") ||
    q.startsWith("tell me about") ||
    q.startsWith("explain") ||
    q === "this event" ||
    q === "this"
  ) {
    if (!event) return "I don't have information about that.";

    return `**${event.title}** is a ${event.category} event held on ${event.date} at ${event.venue}.
It focuses on ${event.description.split(".")[0]}.
Team size: ${event.teamSize}. Fee: ${event.fee}.`;
  }

  /* -------------------------
     4️⃣ DIRECT QUESTIONS
  ------------------------- */
  if (q.includes("rule") && event)
    return event.rules.join("; ");

  if (q.includes("team") && event)
    return event.teamSize;

  if (q.includes("fee") && event)
    return event.fee;

  if (q.includes("venue") && event)
    return event.venue;

  if (q.includes("time") && event)
    return event.time;

  if (q.includes("coordinator") && event)
    return event.coordinators
      .map(c => `${c.name} (${c.phone})`)
      .join(", ");

  /* -------------------------
     5️⃣ SUGGESTIONS → LLM
  ------------------------- */
  const context = eventDocuments.map(e => e.text).join("\n---\n");

  const prompt = `
${systemPrompt}

Event Information:
${context}

User Question:
${userQuestion}

Rules:
- Suggestions only → bullet points
- No paragraphs
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2
  });

  return completion.choices[0].message.content.trim();
}
