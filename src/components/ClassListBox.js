import { Fragment } from 'react';
import { Listbox } from '@headlessui/react';

export default function ClassListBox({
  cardTitle,
  classProperty,
  setClassProperty,
  propertyList,
}) {
  console.log(classProperty.name);

  return (
    <section className="card__wrapper">
      <h2 className="card__title--sm">{cardTitle || 'Property'}</h2>
      <Listbox value={classProperty} onChange={setClassProperty}>
        <Listbox.Button className="listbox__button">
          {classProperty?.name}
        </Listbox.Button>
        <Listbox.Options className="listbox__list-wrapper">
          {propertyList?.map((property) => (
            <Listbox.Option
              key={property.id}
              value={property}
              disabled={property.unavailable}
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
                  {selected} {property.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </section>
  );
}
