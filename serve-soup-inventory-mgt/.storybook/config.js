import { configure } from '@storybook/react';

const required = require.context('../src/components/', true, /.stories.js$/);
function loadStories() {
  required.keys().forEach(filename => required(filename));
}

configure(loadStories, module);
