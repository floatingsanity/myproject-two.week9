import { html } from 'lit';
import '../src/project-two2.js';

export default {
  title: 'ProjectTwo2',
  component: 'project-two2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <project-two2
      style="--project-two2-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </project-two2>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
