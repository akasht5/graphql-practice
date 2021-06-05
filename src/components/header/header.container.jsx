import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Header from './header.component'

const GET_CART_HIDDEN_AND_CURRENT_USER = gql`
{
    cartHidden @client
    currentUser @client
} 
`

const HeaderContainer = () => (
    <Query query={GET_CART_HIDDEN_AND_CURRENT_USER}>
        {
            ({ data }) => {
                const { cartHidden, currentUser } = data;
                return (
                    <Header cartHidden={cartHidden} currentUser={currentUser} />
                )
            }
        }  
    </Query>
)

export default HeaderContainer