import BlockListBox from '../components/BlockListBox';
import ElementListbox from '../components/ElementListBox';
import ModifierListbox from '../components/ModifierListBox';

export default function Home() {
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
      <section className="selectors-grid__wrapper">
        <BlockListBox />
        <ElementListbox />
        <ModifierListbox />
      </section>
    </>
  );
}
