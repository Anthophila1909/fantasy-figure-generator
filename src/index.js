function displayFantasyFigure(response) {
  console.log("Fantasy Figure generated");

  new Typewriter("#generated-result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

function generateFigure(event) {
  event.preventDefault();

  let userImput = document.querySelector("#user-input");

  let apiKey = "93tdd4d3b4c2db3bcc87b00foc83ce4a";
  let context =
    "You are an Export for Fantasy Figures. You are very creative and familiar with the possibilities in the fantasy world. Generate the description of a fantasy figure following the topic of user instruction. Make it short and precise. Your mission is to generate a short overview in basic HTML. Do not display the HTML form at the beginning or the end. Display the charakter Name in <h2> at the top. Display the race, class, the appearance, the abilities and the personality.";
  let prompt = `User instruction: Creatively build a fantasy figure charakter about ${userImput.value}.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayFantasyFigure);

  console.log("Generating Fantasy Figure");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateFigure);
