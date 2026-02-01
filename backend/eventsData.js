import { events } from "../src/data/events.js";

export const eventDocuments = events.map(event => ({
  id: event.id,
  title: event.title,
  category: event.category,
  date: event.date,
  time: event.time,
  venue: event.venue,
  teamSize: event.teamSize,
  fee: event.fee,
  prizePool: event.prizePool,
  description: event.description,
  rules: event.rules,
  coordinators: event.coordinators,
  text: `
Event Name: ${event.title}
Category: ${event.category}
Date: ${event.date}
Time: ${event.time}
Venue: ${event.venue}
Team Size: ${event.teamSize}
Fee: ${event.fee}
Prize Pool: ${event.prizePool}
Description: ${event.description}
Rules: ${event.rules.join("; ")}
`
}));
