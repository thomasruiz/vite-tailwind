import React, { useState } from 'react';

export { HomePage };

function HomePage() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter/>
        </li>
      </ul>
    </>
  );
}

function Counter() {
  const [ count, setCount ] = useState(0);
  return (
    <button className='bg-green-500 p-1' onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  );
}
