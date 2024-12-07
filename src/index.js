function generateFigure(event) {
  event.preventDefault();

  let generatedElement = document.querySelector("#generated-result");

  new Typewriter(generatedElement, {
    strings: "placeholder",
    autoStart: true,
    delay: 35,
    cursor: "",
  });
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateFigure);
