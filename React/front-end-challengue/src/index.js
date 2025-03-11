import React, { createContext, useContext, useState } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
const languages = ['JavaScript', 'Python']

// contexto
const LanguagesContext = createContext(languages[0]);

function App() {
  const [favoriteLanguage, changeFavoriteLanguage] = useState(languages[0]);

  return (
    <LanguagesContext.Provider value={ favoriteLanguage }> 
      <MainSection />
      <Button onClick={()=> {
        changeFavoriteLanguage(favoriteLanguage === languages[0] ? languages[1] : languages[0])
      }}>
        toggle language
      </Button>
    </LanguagesContext.Provider>  
  );
}

function MainSection(){
  const language = useContext(LanguagesContext);  
  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: { language }</p>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button id="changeFavorite" onClick={onClick}>
      {children}
    </button>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <App />
);