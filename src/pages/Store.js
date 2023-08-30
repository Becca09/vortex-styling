import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Gap from "../components/layouts/Gap";
import { Button } from "../components/ui/Button";
import NavBar from "../components/layouts/NavBar";

const Store = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      image: "./assets/skirt.png",
      name: "Black Shiffon Top",
      price: 10000,
    },
    {
      id: 2,
      image: "./assets/item1.png",
      name: "White Cotton Shirt",
      price: 8000,
    },
    {
      id: 3,
      image: "./assets/item7.png",
      name: "White Cotton Shirt",
      price: 7000,
    },
    {
      id: 4,
      image: "./assets/skirt.png",
      name: "White Cotton Shirt",
      price: 14000,
    },
    {
      id: 5,
      image: "./assets/item4.png",
      name: "White Cotton Shirt",
      price: 5000,
    },
    {
      id: 6,
      image: "./assets/item7.png",
      name: "White Cotton Shirt",
      price: 6000,
    },
    {
      id: 7,
      image: "./assets/item6.png",
      name: "White Cotton Shirt",
      price: 12000,
    },
    {
      id: 8,
      image: "./assets/item7.png",
      name: "White Cotton Shirt",
      price: 20000,
    },
    {
      id: 9,
      image: "./assets/item8.png",
      name: "White Cotton Shirt",
      price: 9000,
    },
  ];

  console.log("items", items)

  return (
    <div className="p-7">
      <NavBar />
      <div className="mx-20">
        <div className="flex flex-row justify-between">
          <h1 className="text-center text-2xl font-bold\ primary_text_color pb-5">
            My Saved Styles
          </h1>
          <div
            className="flex flex-row cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <BiArrowBack className="secondary_text_color" size={30} />
            <Gap h={1} />
            <span>Back</span>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          {items.map((item) => (
            <div
              key={item.id}
              className="shadow-md rounded-lg my-3 mx-7 p-3 w-1/5"
            >
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <Gap h={1} />
                <div className="mb-1 secondary_text_color">{item.name}</div>
                <div className="text-2xl primary_text_color font-bold">
                  ₦{item.price}
                </div>
                <Button text={"Buy Now"} className="mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
