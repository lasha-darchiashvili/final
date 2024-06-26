"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductsImage from "./components/productsImage";
import ProductsList from "./components/productsList";
import ProductsNavigation from "./components/productsNavigation";
import useDebounce from "../_hooks/useDebounce";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

const Products: React.FC = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchItem, setSearchItem] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [isSorted, setIsSorted] = useState<boolean>(true);

  const debouncedSearch = useDebounce(searchItem, 500);
  const debouncedPrice = useDebounce(maxPrice, 500);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductsData(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  let sortedAndFilteredData = productsData
    .slice()
    .filter((item) =>
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter((item) => item.price <= debouncedPrice);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const handleClick = () => {
    if (!isSorted) {
      sortedAndFilteredData = productsData.sort((a, b) =>
        a.id > b.id ? 1 : -1
      );
      setIsSorted(true);
    } else {
      sortedAndFilteredData = productsData.sort((a, b) =>
        a.id > b.id ? -1 : 1
      );
      setIsSorted(false);
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMaxPrice(value === 0 ? Infinity : value);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <ProductsImage />
      <main className="flex w-[160rem] m-[4rem] gap-[2rem]">
        <ProductsNavigation
          onChange={onChange}
          handleClick={handleClick}
          handleMaxPriceChange={handleMaxPriceChange}
        />
        {loading ? (
          <div className="flex justify-center items-center w-full h-full">
            <div className="loader">
              <img className="w-[4rem]" src="/assets/loader.svg" alt="" />
            </div>
          </div>
        ) : (
          <ProductsList productsData={sortedAndFilteredData} />
        )}
      </main>
    </div>
  );
};

export default Products;
