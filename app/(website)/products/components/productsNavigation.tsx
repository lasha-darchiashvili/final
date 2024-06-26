import React from "react";

interface SearchBarProps {
  handleClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductsNavigation: React.FC<SearchBarProps> = ({
  handleClick,
  onChange,
  handleMaxPriceChange,
}) => {
  return (
    <div className="w-[25%] border border-border-color p-[2rem] grow-0">
      <p className=" w-[90%] mx-auto text-[2.2rem] mb-[1rem]">Search Here...</p>

      <form className="flex justify-center w-full gap-[1rem] w-full">
        <div className="w-[90%] flex flex-col gap-[2rem]">
          <input
            className="pl-[1rem] focus:outline-none w-5/6 h-[5rem] text-[1.4rem] border bored-border-color"
            type="search"
            placeholder="Search"
            onChange={onChange}
          />
          <p className="text-[1.6rem]">Set price</p>

          <div className="flex  gap-[1rem]">
            <input
              className="pl-[1rem] focus:outline-none w-5/6 h-[5rem] text-[1.4rem] border bored-border-color"
              type="number"
              placeholder="Price"
              min="0"
              onChange={handleMaxPriceChange}
            />
            {/* <button
              type="submit"
              className=" w-1/6 h-[5rem] flex justify-center items-center bg-border-color"
              onClick={handleClick}
            >
              <img className="w-[2.5rem]" src="/assets/search.svg" alt="" />
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductsNavigation;
