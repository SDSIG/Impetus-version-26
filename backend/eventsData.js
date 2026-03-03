import data from "../src/data/events.json" with { type: "json" };

const events = data.flagshipEvents;

export const eventDocuments = events.map((event, index) => ({
  id: index + 1,
  title: event.name,
  category: "Flagship Event",
  date: event.date,
  venue: event.mode,
  teamSize: event.teamSize,
  fee: event.ticketPrice,
  prizePool: event.cashPrize,
  description: event.description,
  coordinators: event.contacts,
  text: `
Event Name: ${event.name}
Date: ${event.date}
Mode: ${event.mode}
Team Size: ${event.teamSize}
Ticket Price: ${event.ticketPrice}
Cash Prize: ${event.cashPrize}
Description: ${event.description}
Contacts: ${event.contacts?.map(c => `${c.name} (${c.phone})`).join("; ")}
`
}));
