import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";
import ProductDetails from "../components/ProductDetails";
import { ShopContext } from "../context/ShopContext";
import "../styles/Products.css";

const Product = () => {
  const { AllProdductData } = useContext(ShopContext);
  const { productId } = useParams();
  const product = AllProdductData.find((e) => e.id === Number(productId));
  return (
    <section>
      <Breadcrums product={product} />
      <ProductDetails product={product} />
    </section>
  );
};

export default Product;
