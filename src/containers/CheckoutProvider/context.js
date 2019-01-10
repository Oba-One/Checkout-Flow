// Context Object Exposed to Components to Consume 
import { createContext } from "react";

export const CheckoutContext = createContext({
    imail: null,
    handleChange: () => null,
    handleSubmit: () => null 
});

