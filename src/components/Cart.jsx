import { useContext } from "react";
import { CartContext } from "./CartContext";

const cart = () => {
    const test = useContext(CartContext);

    console.log(test);

    return (
        <>
            <h1>Carrito</h1>
        </>
    );
}

export default Cart;