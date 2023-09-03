import React, { useEffect, useState } from "react";
import NavBar from "../components/layouts/NavBar";
import { BiArrowBack } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Gap from "../components/layouts/Gap";
import { useNavigate } from "react-router-dom";

const Wardrobe = () => {
  const navigate = useNavigate();

  const [wardrobeItems, setWardrobeItems] = useState([]);

  const deleteWardrobeItem = (imageSrc) => {
    console.log("deleteing");
    setWardrobeItems((prevItems) =>
      prevItems.filter((item) => item !== imageSrc)
    );
  };

  //   try {
  //     const response = await fetch(
  //       `https://dress-ai.onrender.com/my-wardrobe/${imageSrc}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );

  //     if (response.ok) {
  //       setWardrobeItems((prevItems) =>
  //         prevItems.filter((item) => item !== imageSrc)
  //       );
  //       notification.success({
  //         message: "Success",
  //         description: "Deleted  item successfully!",
  //       });
  //     } else {
  //       console.error(
  //         "Failed to delete wardrobe item. Status:",
  //         response.status
  //       );
  //     }
  //   } catch (error) {
  //     notification.error({
  //       message: "Success",
  //       description: "Error deleting wardrobe item",
  //     });
  //     console.error("Error deleting wardrobe item:", error);
  //   }
  // };

  useEffect(() => {
    const fetchWardrobeItems = async () => {
      try {
        const response = await fetch(
          "https://dress-ai.onrender.com/my-wardrobe/",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const items = Object.values(data);
          setWardrobeItems(items);
        } else {
          console.error(
            "Failed to fetch wardrobe items. Status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching wardrobe items:", error);
      }
    };

    fetchWardrobeItems();
  }, []);

  return (
    <div className="p-2">
      <NavBar />

      <div className="mx-20">
        <div className="flex flex-row justify-between">
          <h1 className="text-center text-2xl font-bold\ primary_text_color pb-5">
            My Wardrobe
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
          {wardrobeItems.length === 0 ? (
            <p className="text-center w-full mt-5">Your wardrobe is empty!</p>
          ) : (
            wardrobeItems.map((imageSrc, index) => (
              <div
                key={index}
                className="m-5 w-2/12 shadow-md rounded-lg py-2 px-6"
              >
                <img src={imageSrc} alt={`outfit-${index}`} />
                <div className="mt-2 flex flex-row justify-between">
                  <MdDelete
                    size={20}
                    className="primary_text_color cursor-pointer"
                    onClick={() => deleteWardrobeItem(imageSrc)} // Fixed this line to pass the imageSrc
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
