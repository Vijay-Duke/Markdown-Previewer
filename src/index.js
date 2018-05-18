import React from 'react';
import { render } from 'react-dom';
import InputTextArea from './InputTextArea';
import Layout from './Layout';
import MarkdownExample from './MarkdownExample';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<MarkdownExample />, document.getElementById('root'));
