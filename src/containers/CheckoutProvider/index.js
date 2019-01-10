import * as React from 'react';
import { CheckoutContext } from './context'

class CheckoutProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
        };
    }

    handleChange = e => (
        this.setState({data: e.target.value})
    )

    handleSubmit = e =>  {
        alert(this.state.data);
        e.preventDefault();
    }
 

    render() {
        const {children} = this.props;
        
        return (
            <CheckoutContext.Provider value={this.state}>
                {children}
            </CheckoutContext.Provider>
        )
    }
}

export default CheckoutProvider