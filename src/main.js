import ReactDOM from 'https://esm.sh/react-dom@18/client';
import React     from 'https://esm.sh/react@18';
import { App }   from './components/App.js';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(React.createElement(App, null));
