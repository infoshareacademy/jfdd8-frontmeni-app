import React from 'react'
import { Form, Input, Dropdown } from 'semantic-ui-react'
const countryOptions = [
  { key: 'eu', value: 'eu', flag: 'eu', text: 'Europe' },
  { key: 'us', value: 'us', flag: 'us', text: 'USA' },
  { key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom' },
  { key: 'ru', value: 'ru', flag: 'ru', text: 'Россия' },
  { key: 'jp', value: 'jp', flag: 'jp', text: '日本国' },
  { key: 'pl', value: 'pl', flag: 'pl', text: 'Polska' }
  ];

const ProfileCreator = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field label='Full Name' control='input' />
      <Form.Field label='Gender' control='select'>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='neutral'>Neutral</option>
      </Form.Field>
      <Input
        label={{ basic: true, content: 'kg' }}
        labelPosition='right'
        placeholder='Enter weight...'
      />
      <Input
        label={{ basic: true, content: 'cm' }}
        labelPosition='right'
        placeholder='Enter height...'
      />
      <Form.Field label='births' control='input' />
      <Form.Field label='country' control='input' />
      <Form.Field label='zip' control='input' />
      <Dropdown placeholder='Select Country' fluid search selection options={countryOptions} />
    </Form.Group>
    <Form.Group>
      <Form.Input placeholder='8 Wide' width={8} />
      <Form.Input placeholder='6 Wide' width={6} />
      <Form.Input placeholder='2 Wide' width={2} />
    </Form.Group>


  </Form>
)

export default ProfileCreator
