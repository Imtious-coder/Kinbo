import { createContext, useEffect, useState } from "react";
// import AllProdductData from "../assets/all_product.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // ALL PRODUCTS API
  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // if (localStorage.getItem("auth-token")) {
    //   fetch("http://localhost:4000/addtocart", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/form-data",
    //       "auth-token": `${localStorage.getItem("auth-token")}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ itemId: itemId }),
    //   })
    //     .then((res) => res.json)
    //     .then((data) => console.log(data));
    // }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(itemId)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemId];
        } else {
          console.warn(`Product with ID ${itemId} not found`);
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
