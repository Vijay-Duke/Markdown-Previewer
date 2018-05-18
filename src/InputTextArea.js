import React from 'react'
import {Form, TextArea,Segment} from 'semantic-ui-react'

const InputTextArea = () => {
  return (

      <Segment raised >
        <Form> <TextArea autoHeight style={{minHeight: 1000}}></TextArea></Form>
      </Segment>);
}

export default InputTextArea;