import { compose } from 'redux'
import { connect } from 'react-redux'

import SignIn from './sign-in.component'

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

const SignInContainer = compose(connect(null, mapDispatchToProps))(SignIn)

export default SignInContainer
