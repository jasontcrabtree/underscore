import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';

const modifierElements = [
  { id: 0, name: ' ', unavailable: false },
  { id: 1, name: 'Active', unavailable: false },
  { id: 2, name: 'Inactive', unavailable: false },
  { id: 3, name: 'Highlighted', unavailable: false },
  { id: 4, name: 'Featured', unavailable: false },
  { id: 5, name: 'Animated', unavailable: false },
  { id: 6, name: 'Large', unavailable: false },
];

export default function ModifierListbox() {
  const [selectedModifierElements, setSelectedModifierElements] = useState(
    modifierElements[6]
  );

  console.log(selectedModifierElements.name);

  return (
    <section className="card__wrapper">
      <h2>Modifier</h2>
      <Listbox
        value={selectedModifierElements}
        onChange={setSelectedModifierElements}
      >
        <Listbox.Button className="listbox__button">
          {selectedModifierElements.name}
        </Listbox.Button>
        <Listbox.Options className="listbox__list-wrapper">
          {modifierElements.map((element) => (
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
