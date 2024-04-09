import React, { useState,useContext } from 'react'
import { Button,Modal,Navbar,Container } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';


function Navbar1() {
    const cart = useContext(CartContext);

    const[show,setshow]=useState(false);
    const handleshow =()=> setshow(true);
    const handleclose = ()=> setshow(false);

    const productcount = cart.items.reduce((sum,product)=> sum + product.quntity,0)

  return (
    <>
    <Navbar expand="sm">
        <Navbar.Brand href="/">
        E-commerece
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
    <Button onClick={handleshow}>Cart ( {productcount} items)</Button>
        </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleclose} >
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {productcount>0 ?
        <>
            <p>Items in your cart:</p>
            {cart.items.map((curp,idx)=>(
                <CartProduct key={idx} id={curp.id} quntity={curp.quntity} />
            ))}
            
            <h1>Total: {cart.getTotalCost()}</h1>

            <Button variant='success'>
                purchase items!
            </Button>
        </> :
            <h1>This is no item in cart</h1>
        }
        </Modal.Body>
    </Modal>
    </>
  )
}

export default Navbar1