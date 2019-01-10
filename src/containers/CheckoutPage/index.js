import React from 'react';
import { Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

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


const CheckoutPage = () => (
    <Container>
        <Navigation/>
        <Switch>
            <Route path="/" component={CheckAccount}/>
            <Route path="/" component={CreateAccountOrShipping}/>
            <Route path="/" component={ShippingDetails}/>
            <Route path="/" component={PaymentDetails}/>
            <Route path="/" component={ReviewOrder}/>
            <Route path="/" component={OrderConfirmation}/>
        </Switch>
    </Container>
);

export default CheckoutPage;