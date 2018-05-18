import React from 'react';
import {Segment} from 'semantic-ui-react'
import marked from 'marked';
import Layout from './Layout'

class MarkdownExample extends React.Component {
  state = {markupText: "", inputText: "# Marked in the browser\\n\\nRendered by **marked**."};

  getMarkdownText(event) {
      marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          smartypants: false
      });
      console.log(event.value);
      let c = marked(event.value, {
          sanitize: true
      });
      this.setState({markupText:c})
  }

  render() {
    return (

        <div>
            <Layout markupText={this.state.markupText} getMyMarkdownText={this.getMarkdownText.bind(this)}></Layout>
        </div>
    );
  }
}

export default MarkdownExample;