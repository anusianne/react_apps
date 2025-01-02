import {useState} from 'react';
// import Header from "./components/Header/Header.jsx";
// import TabButton from './components/TabButton.jsx'
// import Examples from "./components/Examples.jsx";
// import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";

function App() {

    return (
        // <div>
        //     <Header />
        //     <main>
        //       <CoreConcepts/>
        //        <Examples/>
        //     </main>
        // </div>
       <>
           <Card/>
           <Card/>
           <Student name="Bob" age="30" isStudent={true}/>
           <Student name="Patrick" age={42} isStudent={false}/>
       </>
    );
}

export default App;