import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const ProfileCreator = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field label='Full Name' control='input' />
      <Form.Field label='Gender' control='select'>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='neutral'>Neutral</option>
      </Form.Field>
      <Form.Field label='Weight' control='input' />
      <Form.Field label='Height' control='input' />
      <Form.Field label='Full Name' control='input' />
      <Input
        label={{ basic: true, content: 'kg' }}
        labelPosition='right'
        placeholder='Enter weight...'
      />

    </Form.Group>


  </Form>
)

export default ProfileCreator
