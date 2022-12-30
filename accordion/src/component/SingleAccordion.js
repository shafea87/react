import React, { useState } from 'react';

export default function SingleAccordion({ title, items }) {
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <li className='c-accordion__item'>
      <header className='c-accordion__item__header'>
        <button
          className={
            showAccordion
              ? 'c-accordion__header__btu'
              : 'c-accordion__header__btu c-accordion__header__btu--close'
          }
          onClick={() => setShowAccordion(!showAccordion)}
        >
          <h4 className='c-accordion__btu__title'>{title}</h4>
        </button>
      </header>

      <ul
        className={
          showAccordion
            ? 'c-accordion__item__content'
            : 'c-accordion__item__content c-accordion__item__content--close'
        }
      >
        {items !== undefined &&
          Object.entries(items).map(([key, value], index) => (
            <li
              className={
                showAccordion
                  ? 'c-accordion__content__item'
                  : 'c-accordion__content__item c-accordion__content__item--close'
              }
              key={`items-value-${index}`}
            >
              <a href={value}>{key}</a>
            </li>
          ))}
      </ul>
    </li>
  );
}
