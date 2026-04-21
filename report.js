function buildReportHTML(){
  return `
    <h2>Patient Report</h2>
    <p><b>Name:</b> ${state.name}</p>
    <p><b>Gender:</b> ${state.gender}</p>
    <p><b>Age:</b> ${state.age}</p>
    <p><b>Body:</b> ${state.body.join(", ")}</p>
    <p><b>Pain:</b> ${state.pain.join(", ")}</p>
    <p><b>Intensity:</b> ${state.intensity}</p>
    <p><b>Duration:</b> ${state.duration}</p>
    <p><b>Symptoms:</b> ${state.symptoms.join(", ")}</p>
  `;
}

function downloadPDF(){
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();

  doc.text("Aarogya Click Report", 10, 10);
  doc.text(JSON.stringify(state, null, 2), 10, 20);

  doc.save("report.pdf");
}