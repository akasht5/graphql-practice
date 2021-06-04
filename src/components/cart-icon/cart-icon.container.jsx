import React from 'react'

import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { flowRight } from 'lodash'

import CartIcon from './cart-icon.component'

const GET_ITEM_COUNT = gql`
{
    itemCount @client
}
`

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`

const CartIconContainer = ({ data: { itemCount }, toggleCartHidden }) => {
    return (
        <CartIcon itemCount={itemCount} toggleCartHidden={toggleCartHidden} />
    )
}

export default flowRight(
    graphql(GET_ITEM_COUNT),
    graphql(TOGGLE_CART_HIDDEN,{ name : 'toggleCartHidden'})
)(CartIconContainer)