import "./App.css";
import React, { useEffect } from "react";
import AppContent from "./components/AppContent";

function App() {
  useEffect(() => {
    // async function getAllRepositories() {
    //   const repositories = await fetch(
    //     "https://api.github.com/users/kenedyLima/repos",
    //     {
    //       headers: {
    //         Authorization: "token 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",
    //         Accept: "application/vnd.github+json",
    //       },
    //     }
    //   )
    //     .then((data) => data.json())
    //     .then((result) => console.log(result));
    // }
    // getAllRepositories();
  }, []);
  return <AppContent />;
}

export default App;
