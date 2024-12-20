import {useState} from 'react';
import Header from "./components/Header/Header.jsx";
import TabButton from './components/TabButton.jsx'
import Examples from "./components/Examples.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";

function App() {

    return (
        <div>
            <Header />
            <main>
              <CoreConcepts/>
               <Examples/>
            </main>
        </div>
    );
}

export default App;