import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Form, Field } from 'formik'
import Input from '../Input'
import Button from '../Button'
import Text from '../Text'
import Card from '../Card'

const LoginForm = ({
  touched,
  errors,
  isSubmitting
}) => {
  const isEmailError = touched.email && errors.email;
  const isPasswordError = touched.password && errors.password;
  return (
    <Card width='400px'>
      <Text marginBottom='20px'>Hi! Welcome back</Text>
      <Form>
        <div style={{ marginBottom: '20px' }}>
          <Field type='email' name='email' placeholder='Email' component={Input} isError={isEmailError} autoComplete='off' />
          {touched.email && errors.email && <Text isError={isEmailError} marginTop='10px'>{errors.email}</Text>}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Field type='password' name='password' placeholder='Password' component={Input} isError={isPasswordError} />
          {touched.password && errors.password && <Text isError={isPasswordError} marginTop='10px'>{errors.password}</Text>}
        </div>
        <Button type='submit' fullWidth height='45px'>
          {isSubmitting ? <CircularProgress color='inherit' size={25} /> : 'Sign In'}
        </Button>
      </Form>
    </Card>
  )
}

export default LoginForm
