import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "../data-with-examples.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import {useState} from "react";

export default function Examples() {

const [selectedTopic, setSelectedTopic] = useState();
let tabContent = 'Please click the button.'

function handleClick(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(tabContent)
}
    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={<menu><TabButton isSelected={selectedTopic === 'components'} label="Components"
                                      onSelect={() => handleClick('components')}></TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} label="JSX"
                  onSelect={() => handleClick('jsx')}></TabButton>
            <TabButton isSelected={selectedTopic === 'props'} label="Props"
                       onSelect={() => handleClick('props')}></TabButton>
            <TabButton isSelected={selectedTopic === 'state'} label="State"
                       onSelect={() => handleClick('state')}></TabButton></menu>}></Tabs>
            {!selectedTopic && <p>Please select a topic.</p>}
            {selectedTopic && <div id="tab-content"><h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
            </div>}
        </Section>
    )
}
