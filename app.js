function render(){

  let container = document.getElementById("app-content");

  // SCREEN 0
  if(currentScreen === 0){
    container.innerHTML = `
      <h1>Aarogya Click</h1>
      <button onclick="go(1)">Start</button>
    `;
  }

  // SCREEN 1 - LANGUAGE
  if(currentScreen === 1){
    container.innerHTML = `
      <h2>Select Language</h2>
      <button onclick="setLang('en')">English</button>
      <button onclick="setLang('hi')">हिंदी</button>
      <br><br>
      <button onclick="go(2)">Next</button>
    `;
  }

  // SCREEN 2 - NAME
  if(currentScreen === 2){
    container.innerHTML = `
      <h2>${T[state.lang].name}</h2>
      <input id="name">
      <br><br>
      <button onclick="saveName()">Next</button>
    `;
  }

  // SCREEN 3 - BODY
  if(currentScreen === 3){
    container.innerHTML = `
      <h2>${T[state.lang].body}</h2>
      <button onclick="toggleBodyPart('Head')">Head</button>
      <button onclick="toggleBodyPart('Chest')">Chest</button>
      <p>Selected: ${state.body.join(", ")}</p>
      <button onclick="go(4)">Next</button>
    `;
  }

  // SCREEN 4 - REPORT
  if(currentScreen === 4){
    container.innerHTML = `
      ${buildReportHTML()}
      <button onclick="downloadPDF()">Download PDF</button>
    `;
  }
}

function saveName(){
  state.name = document.getElementById("name").value;
  go(3);
}

// INITIAL LOAD
render();