import { h, render } from '../../scripts/vendor/preact.js';
import { useState } from '../../scripts/vendor/preact-hooks.js';
// import htm from '../../scripts/vendor/htm.js';

// const html = htm.bind(h);

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Count has changed to ${count}`);
//   }, [count]);

//   return html`
//     <div class="preact-example-app">
//       <h2>Preact Counter</h2>
//       <p>Current count: <strong>${count}</strong></p>
//       <button
//         type="button"
//         aria-label="Increment counter"
//         onClick=${() => setCount(count + 1)}
//       >
//         Increment
//       </button>
//     </div>
//   `;
// }

function Counter2WithoutHtm() {
  const [count, setCount] = useState(0);
  return h(
    'div',
    { className: 'preact-example-app' },
    h('h2', null, 'Preact Counter'),
    h('p', null, 'Current count: ', h('strong', null, count)),
    h(
      'button',
      {
        type: 'button',
        'aria-label': 'Increment counter',
        onClick: () => setCount(count + 1),
      },
      'Increment',
    ),
  );
}

export default function decorate(block) {
  block.replaceChildren();
  render(h(Counter2WithoutHtm), block);
}
