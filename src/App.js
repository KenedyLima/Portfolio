import "./css/App.css";
import "./css/General.css";
import React, { useEffect, useState } from "react";
import AppContent from "./components/AppContent";

let langBytesOfCode = {
  total: 0,
};

function App() {
  useEffect(() => {
    async function getAllRepositories() {
      return await fetch(" https://api.github.com/user/repos", {
        headers: {
          Authorization: "token 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",
          Accept: "application/vnd.github+json",
        },
      })
        .then((result) => result.json())
        .then((data) => data);
    }

    async function loadBytesOfCodeOfRepositories() {
      const repositories = await getAllRepositories();
      const data = [];
      for (let i = 0; i < repositories.length; i++) {
        const result = await getRepositoryLanguages(repositories[i].name);
        data[i] = await result.json();
      }
      calculateBytesOfCodeByLanguage(data);
    }

    function calculateBytesOfCodeByLanguage(ln) {
      ln.forEach((langObj) => {
        const langArr = Object.entries(langObj);
        langArr.forEach((lang) => {
          if (Object.keys(lang).length !== 0) {
            if (!langBytesOfCode.hasOwnProperty(lang[0])) {
              langBytesOfCode[lang[0]] = 0;
            }

            langBytesOfCode[lang[0]] += lang[1];
            langBytesOfCode.total += lang[1];
          }
        });
      });
    }

    async function getRepositoryLanguages(name) {
      return fetch(
        "https://api.github.com/repos/kenedyLima/" + name + "/languages",
        {}
      );
    }

    loadBytesOfCodeOfRepositories();
    spanSwitcher();
  }, []);

  return <AppContent languages={langBytesOfCode} />;
}

function spanSwitcher() {
  const spans = document.querySelectorAll(".subtitle-span");

  setInterval(() => {
    spans.forEach((span) => {
      span.classList.toggle("active-word");
    });
  }, 2000);
}

export default App;
