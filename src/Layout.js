import React from 'react'
import InputTextArea from './InputTextArea'
import {Grid, Segment,TextArea, Image,Form} from 'semantic-ui-react'

const Layout = (props) => {
  return (<Grid stretched>
    <Grid.Row stretched={true}>
      <Grid.Column width={8}>
        <Segment raised>
          <Form> <TextArea autoHeight style={{minHeight: 1000}} onChange={(e,v) => props.getMarkdownText(e.target.value)}></TextArea></Form>
        </Segment>
      </Grid.Column>

      <Grid.Column width={8} stretched={true}>
        <Segment>
          {props.markupText}
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>);
}

export default Layout;