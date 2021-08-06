import React , {useState,createContext , useContext} from 'react' ;

import {storeProducts , detailProduct} from '../data'

export const CreateMainContext = createContext(storeProducts)

export const MainContextProvider = (props) => {

    // states
    const [mainState , setMainState] = useState({
        products : storeProducts , 
        detailsProduct : detailProduct ,  
    })
    const [modal , setModal] = useState({
        modalOpen : false , 
        modalProduct : detailProduct ,
    }) 
    const [cart , setCart] = useState([])
    const [cartCalc , setCartCalc] = useState({
        cartSubTotal : 0 ,
        cartTax : 0 , 
        cartTotal : 0
    })


    // common functions 
    const getFilterItem = (id) => {
        return mainState.products.filter(item => item.id === id)
    }
    const getFindItem = (id) => {
        return mainState.products.find(item => item.id === id)
    }
    const getDetail = (id) => {
        const findDetailProduct = getFindItem(id)
        const updateMainState = {
            ...mainState , 
            detailsProduct : findDetailProduct
        }
        setMainState(updateMainState)
    }
    const findIndexProduct = (id) => {
        const findCartProduct = getFindItem(id)
        const allProducts = mainState.products
        const index = allProducts.indexOf(findCartProduct)
        // console.log(index);
        const product = allProducts[index] ;
        // console.log(product);
        return product 
        
    }
    const updateMainStateData = (product , inCart , count , total) => {
        product.inCart = inCart ;
        product.count = count
        const price = total
        product.total = price 
    }


    // modal funcitions
    const openModal = (id) => {
        const findModalProduct = getFindItem(id)
        const updateModal = {
            ...modal , 
            modalOpen : true  ,
            modalProduct : findModalProduct
        }
        setModal(updateModal)
    }   
    const closeModal = () => {
        const updateModalState = {
            ...modal , 
            modalOpen : false  ,
        }
        setModal(updateModalState)
    }
 

    // cart functions 
    const addToCart = (id) => {
        const product = findIndexProduct(id)
        updateMainStateData(product , true , 1 , product.price) ;

        setCart([...cart , product])
    }
    const removeItem = (id) => {
        const product = findIndexProduct(id)
        updateMainStateData(product , false , 0 , 0) 
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }
    const removeItemFromCart = (id) => {
        removeItem(id)
    }
    const clearCart = () => {
        setCart([])
    }
    const increaseItem = (id) => {
        console.log('inc '+id);
        const incProduct = findIndexProduct(id)
        console.log(incProduct);
        incProduct.count = incProduct.count + 1 
        incProduct.total = incProduct.count * incProduct.price
        setCart([...cart])
        addTotal()
    }
    const decreaseItem = (id) => {
        console.log('dec '+id);
        const incProduct = findIndexProduct(id)
        if(incProduct.count === 1){
            removeItem(incProduct.id)
        }
        else{
            incProduct.count = incProduct.count - 1 
            incProduct.total = incProduct.count * incProduct.price
            setCart([...cart])
        }
        addTotal()
    }
    const getTotals = () => {
        let subTotal = 0 
        cart.map(item => (subTotal += item.total))
        return subTotal 
    }

    const addTotal = () => {
        const totals = getTotals() ;
        console.log(totals);
        const tax = totals * 0.1
        const cartTax = parseFloat(tax.toFixed(2)) 
        const cartTotalWithTax = totals + cartTax 

        const updateCartCalc = {
            ...cartCalc , 
            cartSubTotal : totals ,
            cartTax : cartTax ,
            cartTotal : cartTotalWithTax
        }
        setCartCalc(updateCartCalc)
    }


    


    return(
        <CreateMainContext.Provider
            value={{
                mainState : mainState , 
                setMainState : setMainState , 
                cart : cart , 
                getDetail : getDetail ,
                addToCart : addToCart , 
                increaseItem : increaseItem , 
                decreaseItem : decreaseItem , 
                removeItemFromCart : removeItemFromCart , 
                cartCalc : cartCalc , 
                clearCart : clearCart , 
                modal : modal ,
                openModal : openModal , 
                closeModal : closeModal ,
            }}
        >
            {props.children}
        </CreateMainContext.Provider>
    )
}

export const UseMainContext = () => {
    return useContext(CreateMainContext)
}



