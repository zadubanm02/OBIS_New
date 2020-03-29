import React from "react";

export const Footer = () => {
  return (
    <div>
      <div>
        <footer
          className="page-footer grey lighten-5"
          style={{ color: "#000" }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <span>Použité technológie : </span>
            <a href="https://reactjs.org/">React </a>
            <a href="https://nodejs.org/en/">NodeJS </a>
            <a href="https://cryptojs.gitbook.io/docs/">CryptoJS </a>
            <a href="https://materializecss.com/">Materialize</a>
          </div>
          <div class="footer-copyright">
            <div
              class="container"
              style={{ textAlign: "center", color: "#000" }}
            >
              © 2020 Copyright Michal Zaduban, Richard Zaduban
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
