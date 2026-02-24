
export default function decorate(block) {
  /* change to ul, li */
  block.innerHTML =`<div class="preact-example">
    <div class="preact-example__content">
      <h2>Preact Example</h2>
      <p>This is an example of a Preact component.</p>
    </div>
  </div>`;
}
