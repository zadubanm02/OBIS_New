import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Encryption from "./Encryption";
import Decryption from "./Decryption";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 style={{ borderBottom: "1px solid #EE6E73", textAlign: "center" }}>
          OBIS 2020
        </h2>
        <h4 style={{ textAlign: "center" }}>Šifrovanie </h4>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <h6 style={{ textAlign: "center" }}>
            {" "}
            Vlož správu a kľúč, podľa ktorého sa správa zašifruje{" "}
          </h6>
          <Encryption />
        </div>
        <div className="col-lg-6 col-xs-12">
          <h6 style={{ textAlign: "center" }}>
            Vlož zašifrovanú správu a kľúč, podľa ktorého bola správa
            zašifrovaná{" "}
          </h6>
          <Decryption />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
