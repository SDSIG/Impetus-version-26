export const chatbotResponses = {
  greeting: [
    "Hello! I'm NEXUS, your AI assistant for IMPETUS 26.0. How can I help you today?",
    "Hey there! Welcome to IMPETUS 26.0. What would you like to know?",
    "Greetings! I'm here to assist you with all things IMPETUS. What can I help with?"
  ],
  events: [
    "We have exciting events across three categories: Flagship, General, and Gaming. Our flagship events include Robo Wars, CodeStorm Hackathon, and AI Innovation Challenge. Would you like details on any specific event?",
    "IMPETUS 26.0 features 20+ events including technical competitions, gaming tournaments, and innovation challenges. Check out the Events section to explore all of them!",
    "Our events span robotics, coding, AI, circuit design, web development, gaming, and more. Which category interests you?"
  ],
  registration: [
    "Registration is open now! Click the 'GET ALL-ACCESS PASS' button in the navbar or visit our registration portal. Early bird discounts available!",
    "You can register for individual events or get an all-access pass. Registration fees vary by event. Check the Event Details page for specific pricing.",
    "Registration is live! Head to the Events section, select your event, and follow the registration link. Need help with a specific event?"
  ],
  dates: [
    "IMPETUS 26.0 takes place on March 14-15, 2024. Mark your calendars!",
    "The fest runs for two days: March 14th and 15th, 2024. See you there!",
    "Save the dates: March 14-15, 2024. Two days of technical excellence!"
  ],
  venue: [
    "IMPETUS 26.0 is hosted at UVCE (University Visvesvaraya College of Engineering), Bangalore. Different events are held across various venues on campus.",
    "The fest is at UVCE, Bangalore. Each event has its specific venue - check the Event Details page for exact locations.",
    "UVCE Bangalore is our host. Campus map and venue details are available in the event descriptions."
  ],
  prizes: [
    "Total prize pool exceeds ₹10 Lakhs! Individual event prizes range from ₹15,000 to ₹75,000. Check each event page for specific prize amounts.",
    "We have a massive prize pool of ₹10+ Lakhs distributed across all events. Flagship events offer the highest rewards!",
    "Win big! Our total prize pool is ₹10+ Lakhs. Top performers in flagship events can win up to ₹75,000!"
  ],
  contact: [
    "For general inquiries, reach out through the Contact section. For event-specific questions, contact the coordinators listed on each event's detail page.",
    "You can find contact information in the Contact section. Event coordinators' details are available on individual event pages.",
    "Check the Contact section for general inquiries. Each event has dedicated coordinators - their contact info is on the event detail pages."
  ],
  about: [
    "IMPETUS is the annual national-level technical fest organized by IEEE UVCE. This is our 26th edition, celebrating engineering excellence and innovation.",
    "IMPETUS 26.0 is IEEE UVCE's flagship technical fest, bringing together students from across India to compete, learn, and innovate.",
    "We're IEEE UVCE's premier technical fest, now in our 26th year. We celebrate technology, innovation, and engineering talent."
  ],
  theme: [
    "This year's themes are: AI (Artificial Intelligence), Robotics, Sustainability, and Space. Our events are designed around these cutting-edge domains.",
    "IMPETUS 26.0 focuses on four key themes: AI, Robotics, Sustainability, and Space - the frontiers of modern engineering.",
    "Our themes this year are AI, Robotics, Sustainability, and Space. Events showcase innovations in these exciting fields!"
  ],
  default: [
    "I'm not sure I understand. Could you rephrase that? I can help with events, registration, dates, venue, prizes, and more!",
    "Let me help you better. I can answer questions about IMPETUS 26.0 events, registration, schedule, and other fest details.",
    "I might need more context. Try asking about events, registration, dates, prizes, or contact information!"
  ]
};

export const getResponse = (message) => {
  const lowerMessage = message.toLowerCase();
  
  // Intent matching
  if (lowerMessage.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
    return chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)];
  }
  
  if (lowerMessage.match(/\b(event|events|competition|competitions|what events|which events)\b/)) {
    return chatbotResponses.events[Math.floor(Math.random() * chatbotResponses.events.length)];
  }
  
  if (lowerMessage.match(/\b(register|registration|sign up|how to register|register for)\b/)) {
    return chatbotResponses.registration[Math.floor(Math.random() * chatbotResponses.registration.length)];
  }
  
  if (lowerMessage.match(/\b(date|dates|when|schedule|timing|time)\b/)) {
    return chatbotResponses.dates[Math.floor(Math.random() * chatbotResponses.dates.length)];
  }
  
  if (lowerMessage.match(/\b(venue|location|where|place|address)\b/)) {
    return chatbotResponses.venue[Math.floor(Math.random() * chatbotResponses.venue.length)];
  }
  
  if (lowerMessage.match(/\b(prize|prizes|prize pool|reward|rewards|winning|winner)\b/)) {
    return chatbotResponses.prizes[Math.floor(Math.random() * chatbotResponses.prizes.length)];
  }
  
  if (lowerMessage.match(/\b(contact|reach|phone|email|coordinator|help|support)\b/)) {
    return chatbotResponses.contact[Math.floor(Math.random() * chatbotResponses.contact.length)];
  }
  
  if (lowerMessage.match(/\b(about|what is|tell me about|impetus|ieee)\b/)) {
    return chatbotResponses.about[Math.floor(Math.random() * chatbotResponses.about.length)];
  }
  
  if (lowerMessage.match(/\b(theme|themes|topic|topics|focus|domain)\b/)) {
    return chatbotResponses.theme[Math.floor(Math.random() * chatbotResponses.theme.length)];
  }
  
  return chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)];
};
