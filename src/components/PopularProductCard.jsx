import React from "react";

import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full sm:w-full">
      <img className="w-[280px] h-[280px] " src={imgURL} alt={name} />
      <div className="flex mt-8 justify-start gap-2.5">
        <img width={24} height={24} src={star} alt="rating" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-white-400 ">
          (4.5)
        </p>
      </div>
      <h3 className="text-2xl mt-2 font-palanquin leading-normal font-semibold ">{name}</h3>
      <p className="mt-2 text-2xl font-montserrat font-semibold leading-normal text-coral-red "> {price} </p>
    </div>
  );
};

export default PopularProductCard;
