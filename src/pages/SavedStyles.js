import React, { useEffect, useState } from "react";
import NavBar from "../components/layouts/NavBar";
import { BiArrowBack } from "react-icons/bi";
import Gap from "../components/layouts/Gap";
import { useNavigate } from "react-router-dom";

const SavedStyles = () => {
  const navigate = useNavigate();
  const [savedStyles, setSavedStyles] = useState([]);

  useEffect(() => {
    const fetchSavedStyles = async () => {
      try {
        const response = await fetch(
          "https://dress-ai.onrender.com/get-styles/"
        );

        if (response.ok) {
          const data = await response.json();
          setSavedStyles(data);
        } else {
          console.error(
            "Failed to fetch saved styles. Status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching saved styles:", error);
      }
    };

    fetchSavedStyles();
  }, []);

  return (
    <div className="p-2">
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

        <div className="flex flex-wrap justify-between my-10">
          {Object.keys(savedStyles).map((styleKey, index) => (
            <div
              key={index}
              className="m-5 w-1/5 p-5 matchedItem shadow-md rounded-lg"
            >
              <div className="flex flex-wrap gap-4">
                {savedStyles[styleKey].map((imageSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imageSrc}
                    alt={`outfit-${imgIndex}`}
                    className="w-1/3"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedStyles;
