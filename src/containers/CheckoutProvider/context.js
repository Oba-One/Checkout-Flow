import { createContext } from "react";

export const CheckoutContext = createContext({
    data: null,
    handleChange: () => null,
    handleSubmit: () => null 
});

