import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

import CartDropdown from './cart-dropdown.component'

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const CartDropdownContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(CartDropdown)

export default CartDropdownContainer
