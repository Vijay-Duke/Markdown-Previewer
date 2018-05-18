import React from 'react'
import InputTextArea from './InputTextArea'
import {Grid, Segment,TextArea, Image,Form} from 'semantic-ui-react'

const Layout = (props) => {

  return (<Grid stretched>
    <Grid.Row stretched={true}>
      <Grid.Column width={8}>
        <Segment raised>
          <Form> <TextArea autoHeight style={{minHeight: 1000}}
                           onChange={(e,v) =>props.getMyMarkdownText(v)}></TextArea></Form>
        </Segment>
      </Grid.Column>

      <Grid.Column width={8} stretched={true}>
        <Segment dangerouslySetInnerHTML={{__html:props.markupText}}>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>);
}

export default Layout;