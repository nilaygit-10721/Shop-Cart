import { Card,Button,Form,Row,Col } from "react-bootstrap"
import { CartContext } from "../CartContext";
import { useContext } from "react";

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const quntity = cart.getProductQuantity(product.id);
    console.log(cart.items);

  return (
    <Card>
        <Card.Body>
        <img src={product.image} alt="photo" className=" h-[15rem] w-[18rem] object-fill " />
            <Card.Title>{product.Title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            {quntity > 0?
            <>
              <Form as={Row} >
              <Form.Label column="true" sm="6">In Cart:{quntity}</Form.Label>
              <Col sm="6">
                <Button sm="6" className="mx-2" onClick={()=>cart.addOneToCart(product.id)} >+</Button>
                <Button sm="6" className="mx-2" onClick={()=>cart.removeOneFromCart(product.id)} >-</Button>
              </Col>
              </Form>
              <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
           </>:
            <Button variant="primary" onClick={()=> cart.addOneToCart(product.id)} >Add to cart</Button>
            }
        </Card.Body>
    </Card>
  )
}

export default ProductCard