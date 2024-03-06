import { useState } from 'react';
import { EXAMPLES } from './data.js';
import Header from './Components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConcepts from './Components/CoreConcepts/CoreConcepts.jsx';
import TabButton from './Components/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic ] = useState(''); 

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
  }

  console.log("Excutting");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>
            {/* looping though coreConcepts */}
            {CORE_CONCEPTS.map(coreConcept=>{
              return <CoreConcepts key={coreConcept.title} {...coreConcept} />
            })}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic == 'components'} onSelect={()=> handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'} onSelect={()=> handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onSelect={()=> handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onSelect={()=> handleSelect("state")}>State</TabButton>
          </menu>
          <div id='tab-content' className='tab'>
            {!selectedTopic && <p>Please select a topic.</p>}

            {selectedTopic && (<>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </>)
           }
           </div>
        </section>
      </main>
    </div>
  );
}

export default App;