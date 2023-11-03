import { LitElement, html, css, property } from 'lit-element';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class ProjectTwo2 extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--project-two2-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Find the button element and add event listeners
    const button = this.shadowRoot.querySelector('.custom-button');

    button.addEventListener('click', () => {
      // Code to run when the button is clicked
      alert('Button clicked!');
    });

    button.addEventListener('mouseenter', () => {
      // Code to run when the mouse enters the button
      button.style.backgroundColor = '#ccf0ff';
      button.style.color = '#005fa9';
    });

    button.addEventListener('mouseleave', () => {
      // Code to run when the mouse leaves the button
      button.style.backgroundColor = '#0077b6';
      button.style.color = '#ffffff';
    });

    button.addEventListener('focus', () => {
      // Code to run when the button is focused
      button.style.backgroundColor = '#ccf0ff';
      button.style.color = '#005fa9';
    });

    button.addEventListener('blur', () => {
      // Code to run when the button loses focus
      button.style.backgroundColor = '#0077b6';
      button.style.color = '#ffffff';
    });
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <!-- The button element with the "custom-button" class -->
        <button class="custom-button">Click me</button>

        <p>Edit <code>src/ProjectTwo2.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
