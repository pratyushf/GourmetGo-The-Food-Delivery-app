import React from 'react';

const Accordion = ({ title, content, activeAccordion, setActiveAccordion }) => {
  const isOpen = activeAccordion === title;

  const toggleAccordion = () => {
    setActiveAccordion(isOpen ? null : title);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen ? <div className="accordion-content">{content}</div> : null}
    </div>
  );
};

export default Accordion;

