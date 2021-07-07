import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="How do I use flash during the day?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt.
      Tempora cumque provident et unde maxime nam, deserunt iusto corporis,
      porro obcaecati neque, nulla reprehenderit quaerat quia nostrum ipsa at!
    </Accordion>
    <Accordion title="What is the best portrait lens?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt.
      Tempora cumque provident et unde maxime nam, deserunt iusto corporis,
      porro obcaecati neque, nulla reprehenderit quaerat quia nostrum ipsa at!
    </Accordion>
    <Accordion title="Transporting machinery how do I do it?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt.
      Tempora cumque provident et unde maxime nam, deserunt iusto corporis,
      porro obcaecati neque, nulla reprehenderit quaerat quia nostrum ipsa at!
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="How do I use flash during the day?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt.
      Tempora cumque provident et unde maxime nam, deserunt iusto corporis,
      porro obcaecati neque, nulla reprehenderit quaerat quia nostrum ipsa at!
    </Accordion>
    <Accordion title="What is the best portrait lens?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt.
      Tempora cumque provident et unde maxime nam, deserunt iusto corporis,
      porro obcaecati neque, nulla reprehenderit quaerat quia nostrum ipsa at!
    </Accordion>
    <Accordion title="Transporting machinery how do I do it?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt.
      Tempora cumque provident et unde maxime nam, deserunt iusto corporis,
      porro obcaecati neque, nulla reprehenderit quaerat quia nostrum ipsa at!
    </Accordion>
  </AccordionGroup>
);
