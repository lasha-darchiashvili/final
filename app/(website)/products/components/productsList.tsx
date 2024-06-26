import React from "react";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

interface ProductsListProps {
  productsData: Product[];
}

export default function ProductsList({ productsData }: ProductsListProps) {
  return (
    <div className="w-[75%] border border-border-color">
      <div className="grid grid-cols-4 gap-4 p-[2rem]">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg p-4 h-[32rem] flex flex-col border border-border-color"
          >
            <div className="max-w-[20rem] mx-auto h-[15rem] mt-[2rem] overflow-hidden">
              <img
                className="rounded-lg max-h-[15rem]"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
            <div className="w-[20rem] mx-auto mt-[1rem] flex flex-col">
              <div className="text-[1.4rem] font-semibold">{product.title}</div>
              <div className="text-gray-700 mt-[0.5rem]">{product.price} $</div>
            </div>
            <button className="text-[1.4rem] w-full block bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none mt-auto">
              Add to the cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
