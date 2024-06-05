import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";
import DescriptionBox from "../components/DescriptionBox";
import ProductDetails from "../components/ProductDetails";
import RelatedProducts from "../components/RelatedProducts";
import { ShopContext } from "../context/ShopContext";
import "../styles/Products.css";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));
  return (
    <section>
      <Breadcrums product={product} />
      <ProductDetails product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </section>
  );
};

export default Product;
