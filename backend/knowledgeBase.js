import eventsData from "../src/data/events.json" with { type: "json" };

const flagship = eventsData.flagshipEvents || [];
const general = eventsData.generalEvents || [];

export const eventDocuments = [...flagship, ...general].map((event, index) => ({

  id: index + 1,

  title: event.name,

  text: `
Event Name: ${event.name}

Description:
${event.description}

Registration Link:
${event.reg_link}
`

}));

export const impetusDocs = [

{
id: "impetus_about",

text: `
IMPETUS is the annual technical festival organized by IEEE UVCE.

The fest hosts technical competitions, engineering challenges,
innovation events, and creative activities for students.

Students from multiple colleges participate and compete.
`
}

];