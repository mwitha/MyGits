const getCart = () => {
if (localStorage.getItem("cartItems"))
return JSON.parse(localStorage.getItem("cartItems"))
}

const addItemToCart = () => {}
const removeItemFromCart = () => {}
const addItemQuantity = () => {}
const reduceItemQuantity = () => {}
const getOrders= () => {}
const addOrderItem = () => {}
const addOrderArr = () => {}
const getWishlist = () => {}
const addItemToWishlist = () => {}
const removeItemFromWishlist = () => {}
const itemPresentInWishlist = () => {}




export {
    getCart,
    addItemToCart,
    removeItemFromCart,
    addItemQuantity,
    reduceItemQuantity,
    getOrders,
    addOrderItem,
    addOrderArr,
    getWishlist,
    addItemToWishlist,
    removeItemFromWishlist,
    itemPresentInWishlist,
  };
  