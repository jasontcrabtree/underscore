import { useState } from 'react';
import { blockList, elementList, modifierList } from '../data/properties';

import ClassListBox from '../components/ClassListBox';

export default function Home(props) {
  console.log(props);

  const [selectedBlock, setSelectedBlock] = useState(blockList[1]);
  const [selectedElement, setSelectedElement] = useState(elementList[5]);
  const [selectedModifier, setSelectedModifier] = useState(modifierList[6]);

  return (
    <>
      <section className="content__intro-wrapper">
        <h1>Underscore</h1>
        <p className="content__subhead">Block__Element--Modifier</p>
        <p>
          A small utility to explore different BEM combinations. No guarantees
          provided, no returns accepted.
        </p>
      </section>
      <section className="class-name-output__text--lg">
        {selectedBlock?.name}__{selectedElement?.name}--
        {selectedModifier?.name}
      </section>
      <section className="selectors-grid__wrapper">
        <ClassListBox
          cardTitle="Block"
          classProperty={selectedBlock}
          setClassProperty={setSelectedBlock}
          propertyList={blockList}
        />
        <ClassListBox
          cardTitle="__Element"
          classProperty={selectedElement}
          setClassProperty={setSelectedElement}
          propertyList={elementList}
        />
        <ClassListBox
          cardTitle="--Modifier"
          classProperty={selectedModifier}
          setClassProperty={setSelectedModifier}
          propertyList={modifierList}
        />
      </section>
    </>
  );
}
