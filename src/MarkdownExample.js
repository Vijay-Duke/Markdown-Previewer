import React from 'react';
import {Segment} from 'semantic-ui-react'
import marked from 'react-marked'
import Layout from './Layout'

class MarkdownExample extends React.Component {
  state = {markupText: "", inputText: ""}

  getMarkdownText(inputText) {
    let v = inputText.toString()
    console.log("GOT INPUT " + inputText.join());
    var rawMarkup = marked(v, {sanitize: true});
    this.setState({markupText: rawMarkup})
  }

  render() {
    return (<Layout getMarkdownText={this.getMarkdownText}></Layout>);
  }
}

export default MarkdownExample;