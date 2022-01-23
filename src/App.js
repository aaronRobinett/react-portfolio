import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  document.title = 'Aaron Robinett';
  const [choices] = useState(['about', 'portfolio', 'contact', 'resume']);
  const [currentChoice, setCurrentChoice] = useState(choices[0]);

  return (
    <div>
      <Header
        setCurrentChoice={setCurrentChoice}
      ></Header>
      <main>
        {
          (currentChoice === 'about') ? (
            <>
              <About></About>
            </>
          ) : (
            (currentChoice === 'portfolio') ? (
              <>
                <Portfolio></Portfolio>
              </>
            ) : (
              (currentChoice === 'contact') ? (
                <>
                  <Contact></Contact>
                </>
              ) : (
                (currentChoice === 'resume') ? (
                  <>
                    <Resume></Resume>
                  </>
                ) : (
                  <></>
                )
              )
            )
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
