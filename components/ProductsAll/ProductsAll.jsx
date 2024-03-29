import React from "react";
import ProductList from "@/components/products/ProductsList";
import CategoriesMenu from "../products/CategoriesMenu";
import ProductsList from "@/components/products/ProductsList";

const ProductsAll = () => {
  return (
    <main className="flex justify-center">
      <div className="flex space-x-20 justify-center">
        <CategoriesMenu />
        <ProductsList category={"all"} />
      </div>
    </main>
  );
};

export default ProductsAll;
