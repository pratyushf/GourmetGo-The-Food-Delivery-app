import React from 'react'
import { useState } from 'react';
import Accordion from './Accordian'
const Instamart = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    return (
        <div>
            <Accordion
                title="Accordion 1"
                content="This is the content for Accordion 1."
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
            <Accordion
                title="Accordion 2"
                content="This is the content for Accordion 2."
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
        </div>
    )
}

export default Instamart
