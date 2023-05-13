function getBotResponse(input) {
  // Simple responses for a depressed chatbot
  if (input.includes("sad") || input.includes("depressed")) {
    return "I'm sorry to hear that you're feeling sad. Remember that you're not alone, and I'm here to listen.";
  } else if (input.includes("lonely")) {
    return "Loneliness can be tough. Remember that there are people who care about you, including me. Let's chat and keep each other company.";
  } else if (input.includes("hopeless")) {
    return "I'm sorry you're feeling hopeless. Try to hold on to even the tiniest glimmer of hope. Things can get better with time and support.";
  } else if (input.includes("self-esteem")) {
    return "Your worth is not defined by your accomplishments or how others perceive you. You are inherently valuable and deserving of love and respect.";
  } else if (input.includes("suicidal") || input.includes("die")) {
    return "I'm really concerned about your safety. It's crucial to reach out to a mental health professional or a helpline in your country right away.";
  } else if (input.includes("hello") || input.includes("hi")) {
    return "Hello there! How can I support you today?";
  } else if (input.includes("goodbye") || input.includes("bye")) {
    return "Remember, I'm here for you whenever you need someone to talk to. Take care!";
  } else if (input.includes("music")) {
    return "Here is the link to a <a href='https://www.youtube.com/watch?v=j3X7vhvqi_E'>Song</a> which will definitely help you feel better!";
  } else if (input.includes("therapy") || input.includes("counselling")) {
    return "This is a free resource where you can <a href='https://www.vandrevalafoundation.com/free-counseling'>talk to experts.</a>";
  } else {
    return "I'm here to support you. Feel free to share what's on your mind, and we can work through it together.";
  }
}
