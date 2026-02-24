// import { h, render, createContext } from '../../scripts/vendor/preact.js';
// import { useContext, useState } from '../../scripts/vendor/preact-hooks.js';

import { h, render, createContext } from '@dropins/tools/preact.js';
import { useState, useContext } from '@dropins/tools/preact-hooks.js';

import htm from '../../scripts/vendor/htm.js';

const html = htm.bind(h);
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeBadge() {
  const { theme } = useContext(ThemeContext);

  return html`<p class="preact-context__badge">Active theme: ${theme}</p>`;
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return html`
    <button
      class="preact-context__button"
      type="button"
      aria-label=${`Switch theme to ${nextTheme}`}
      onClick=${toggleTheme}
    >
      Switch to ${nextTheme}
    </button>
  `;
}

function ThemePanel() {
  const [theme, setTheme] = useState('light');

  const value = {
    theme,
    toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  };

  return html`
    <${ThemeContext.Provider} value=${value}>
      <section class=${`preact-context__panel preact-context__panel--${theme}`}>
        <h2>Preact Context API</h2>
        <p>This block shares state without prop drilling.</p>
        <${ThemeBadge} />
        <${ThemeButton} />
      </section>
    </>
  `;
}

export default function decorate(block) {
  block.replaceChildren();
  render(html`<${ThemePanel} />`, block);
}
