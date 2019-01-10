// Container for Holding Checkout Routes and Consuming Context API
import React from 'react';
import { Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import { CheckoutContext } from '../../containers/CheckoutProvider/context'

import Navigation from '../../components/checkout/Navigation'
import CheckAccount from '../../components/checkout/1.CheckAccount';
import CreateAccountOrShipping from '../../components/checkout/2.CreateAccountOrShipping';
import ShippingDetails from '../../components/checkout/3.ShippingDetails';
import PaymentDetails from '../../components/checkout/4.PaymentDetails';
import ReviewOrder from '../../components/checkout/5.ReviewOrder';
import OrderConfirmation from '../../components/checkout/6.OrderConfirmation';


const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

// Holds all routes and context consumer to pass down state to checkout components
const CheckoutPage = () => (
    <CheckoutContext.Consumer>
        { checkout => (
        <Container>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={CheckAccount}/>
                <Route path="/1" component={CreateAccountOrShipping}/>
                <Route path="/2" component={ShippingDetails}/>
                <Route path="/3" component={PaymentDetails}/>
                <Route path="/4" component={ReviewOrder}/>
                <Route path="/5" component={OrderConfirmation}/>
            </Switch>
        </Container>    
        )}
    </CheckoutContext.Consumer>
);

export default CheckoutPage;