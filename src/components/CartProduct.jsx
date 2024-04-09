import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getarray } from "../ProdductStore";


function CartProduct(props){
    const cart = useContext(CartContext);
    const id = props.id;
    const quntity = props.quntity;
    const productData = getarray(id);

    return (
        <>
        <br></br>
            <img src={productData.image} alt="photo" className=" object-fill  h-[5rem]  w-[6rem]" />
            <h3>{productData.title}</h3>
            <p>{quntity} total </p>
            <p>${(quntity * productData.price)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)} >Remove</Button>
            <br></br>
            <br></br>
            <hr></hr>
        </>
    )
}

export default CartProduct;