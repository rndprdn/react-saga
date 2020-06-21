import { withFormik } from 'formik'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as yup from 'yup'
import * as actions from './actions'
import LoginFormContainer from './LoginFormContainer';

const handleSubmit = (values, { props, setSubmitting }) => {
  try {
    props.actions.login(values)
  } catch (err) {
    setSubmitting(false)
  }
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email not valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

const LoginFormContainerWithFormik = withFormik({
  validationSchema,
  mapPropsToValues: () => {
    return {
      email: '',
      password: ''
    }
  },
  handleSubmit: handleSubmit,
  displayName: 'Login'
})(LoginFormContainer)

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const LoginFormContainerWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainerWithFormik)

const LoginFormContainerWithRouter = withRouter(LoginFormContainerWithRedux)

export default LoginFormContainerWithRouter;