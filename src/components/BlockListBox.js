import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';

const blockElements = [
  { id: 0, name: ' ', unavailable: false },
  { id: 1, name: 'Grid', unavailable: false },
  { id: 2, name: 'Form', unavailable: false },
  { id: 3, name: 'Gallery', unavailable: false },
  { id: 4, name: 'Billboard', unavailable: false },
  { id: 5, name: 'Content', unavailable: false },
  { id: 6, name: 'List', unavailable: false },
];

export default function BlockListbox() {
  const [selectedBlockElements, setSelectedBlockElements] = useState(
    blockElements[1]
  );

  console.log(selectedBlockElements.name);

  return (
    <section className="card__wrapper">
      <h2>Block</h2>
      <Listbox
        value={selectedBlockElements}
        onChange={setSelectedBlockElements}
      >
        <Listbox.Button className="listbox__button">
          {selectedBlockElements.name}
        </Listbox.Button>
        <Listbox.Options className="listbox__list-wrapper">
          {blockElements.map((element) => (
            <Listbox.Option
              key={element.id}
              value={element}
              disabled={element.unavailable}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={`${
                    active
                      ? 'first listbox__list-item listbox__list-item--highlighted'
                      : 'second listbox__list-item'
                  }`}
                >
                  {selected} {element.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </section>
  );
}
