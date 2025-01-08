import {useState} from 'react';
// import Header from "./components/Header/Header.jsx";
// import TabButton from './components/TabButton.jsx'
// import Examples from "./components/Examples.jsx";
// import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
    const fruits = [
        {name: "apple", calories: 95, id:1},
        {name: "orange", calories: 45, id:2},
        {name: "banana", calories:105, id:3},
        {name: "coconut", calories: 159, id:4},
        {name: "pineapple", calories: 37, id:5}];

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
           <UserGreeting isLoggedIn={true} username="Anne"/>
           <List items={fruits} category="Fruits"/>
       </>
    );
}

export default App;