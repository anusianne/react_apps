import {useState} from 'react';
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from './components/TabButton.jsx'
import {CORE_CONCEPTS} from "./data.js";
import {EXAMPLES} from './data-with-examples.js'

function App() {
    const [selectedTopic, setSelectedTopic] = useState('components');
    let tabContent = 'Please click the button'

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(tabContent)
    }
    return (
        <div>
            <Header />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
                        <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
                        <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
                        <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton label="Components" onSelect={()=> handleClick('components')}></TabButton>
                        <TabButton label="JSX" onSelect={()=> handleClick('jsx')}></TabButton>
                        <TabButton label="Props" onSelect={()=> handleClick('props')}></TabButton>
                        <TabButton label="State" onSelect={()=> handleClick('state')}></TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>{EXAMPLES[selectedTopic].code}</pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;