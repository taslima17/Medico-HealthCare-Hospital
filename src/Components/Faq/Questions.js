import React, { useContext, useState } from 'react';
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import { render } from 'react-dom';
import useJson from '../../Hooks/useJson';
function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button" className="bg-primary"
            style={{ color: "white", fontSize: "20px", fontWeight: "600", border: "0", width: "100%", textAlign: "left", padding: '10px' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const Questions = () => {
    const [data] = useJson("faq");

    console.log(data);
    return (
        <Accordion defaultActiveKey="0" className="container  mx-auto">

            {data.map(f => <Card key={f.id} style={{ textAlign: "left" }} >
                <Card.Header className="bg-primary d-flex justify-content-between text-white align-items-center">
                    <ContextAwareToggle eventKey={f.id} className="border-0 bg-none">{f.question}</ContextAwareToggle>
                    <div className="fs-4"><i class="fas fa-chevron-circle-down"></i></div>
                </Card.Header>
                <Accordion.Collapse className="fs-5 " eventKey={f.id}>
                    <Card.Body>{f.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>)}
        </Accordion>
    );
};
// render(<Questions />);
export default Questions;