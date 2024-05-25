import { createContext } from "react";
import AllProdductData from "../assets/all_product.js";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { AllProdductData };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
