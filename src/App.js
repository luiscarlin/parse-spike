import React from "react";
import Dropzone from "./Dropzone";

const App = () => (
  <main>
    <h1>Super Duper Report Generator</h1>
    <h2>1. Upload your files...</h2>
    <Dropzone />

    <h2>2. Generate your report...</h2>
    <button>Average Report</button>
    <button>Colbert Report</button>
    <button>TPS Report</button>
  </main>
);

export default App;
