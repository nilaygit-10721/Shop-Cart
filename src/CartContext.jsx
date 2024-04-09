import { createContext,useState } from "react";
import {productsArray,getarray} from   "./ProdductStore"

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function Cartprovider({children}){
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id){
        const quntity = cartProducts.find(product=>product.id === id)?.quntity;
        if(quntity === undefined){
            return 0;
        }
        return quntity;
    }

    function addOneToCart(id){
        const quntity = getProductQuantity(id);

        if(quntity === 0){
            setCartProducts([
                ...cartProducts,
                {
                    id:id,
                    quntity:1,
                }
            ])
        }
        else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ?{...product,quntity:product.quntity + 1}
                    :product
                )
            )
        }
    }

    function removeOneFromCart(id){
        const quntity = getProductQuantity(id);

        if(quntity == 1){
            deleteFromCart(id);
        }
        else{
            setCartProducts(
                cartProducts.map(
                    product=>
                    product.id === id
                    ?{...product,quntity:product.quntity - 1}
                    :product
                )
            )
        }
    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currp=>{
                return currp.id != id;
            })
        )
    }

    function getTotalCost(){
        let total = 0;
        cartProducts.map((cartitem) => {
            const productdata = getarray(cartitem.id);
            total += (productdata.price * cartitem.quntity);
        });
        return total;
    }
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default Cartprovider;


