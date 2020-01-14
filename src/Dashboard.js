import React from "react";
import { Link } from "react-router-dom";
import Dropzone from "./Dropzone";

const Dashboard = () => {
  return (
    <main>
      <h1>Super Duper Report Generator</h1>
      <h2>1. Upload Excel files</h2>
      <Dropzone />

      <h2>2. Generate a report</h2>
      <Link to="/average" target="_blank">
        <button>Average Report</button>
      </Link>
      <button>Colbert Report</button>
      <button>TPS Report</button>
    </main>
  );
};

export default Dashboard;
