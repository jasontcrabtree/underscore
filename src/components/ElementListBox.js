import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';

const elementElements = [
  { id: 0, name: ' ', unavailable: false },
  { id: 1, name: 'Title', unavailable: false },
  { id: 2, name: 'Input', unavailable: false },
  { id: 3, name: 'Image', unavailable: false },
  { id: 4, name: 'Item', unavailable: false },
  { id: 5, name: 'Card', unavailable: false },
  { id: 6, name: 'Wrapper', unavailable: false },
];

export default function ElementListbox() {
  const [selectedElementElements, setSelectedElementElements] = useState(
    elementElements[5]
  );

  console.log(selectedElementElements.name);

  return (
    <section className="card__wrapper">
      <h2>Element</h2>
      <Listbox
        value={selectedElementElements}
        onChange={setSelectedElementElements}
      >
        <Listbox.Button className="listbox__button">
          {selectedElementElements.name}
        </Listbox.Button>
        <Listbox.Options className="listbox__list-wrapper">
          {elementElements.map((element) => (
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
