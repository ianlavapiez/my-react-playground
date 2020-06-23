import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'

import CheckoutPage from './checkout.component'

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

const CheckoutPageContainer = compose(connect(mapStateToProps))(CheckoutPage)

export default CheckoutPageContainer
