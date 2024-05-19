// Section.js

import React from 'react';

function Section({ id, title }) {
  return (
    <section id={id}>
      <h1>{title}</h1>
    </section>
  );
}

export default Section;
