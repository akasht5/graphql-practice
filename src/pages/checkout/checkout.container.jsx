import React from 'react'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import CheckoutPage from './checkout.component'

const GET_CART_ITEMS_AND_TOTAL = gql`
{
    cartItems @client
    cartTotal @client
}
`

const CheckoutContainer = () => (
    <Query query={GET_CART_ITEMS_AND_TOTAL}>
    {
        ({ data }) => {
            const { cartItems, cartTotal } = data;
            return(
                <CheckoutPage cartItems={cartItems} total={cartTotal}/>
            )   
        }
    }
    </Query>
)

export default CheckoutContainer