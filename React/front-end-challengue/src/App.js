import { createContext, useContext, useState } from 'react';

const languages = ['JavaScript', 'Python']
const LanguagesContext = createContext(languages[0]);

export default function App() {
  const [favoriteLanguage, setfavoriteLanguage] = useState(languages[0]);

  return (
    <>      
      <LanguagesContext.Provider value={favoriteLanguage}> 
        <MainSection />
        <Button onClick={()=> {
          setfavoriteLanguage(favoriteLanguage === 'JavaScript' ? 'Python' : 'JavaScript')
        }}>
          Toggle language
        </Button>
      </LanguagesContext.Provider>  
    </>
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
