import React from "react";
import NavBar from "../components/layouts/NavBar";
import { BiArrowBack } from "react-icons/bi";
import Gap from "../components/layouts/Gap";
import { useNavigate } from "react-router-dom";

const SavedStyles = () => {
  const navigate = useNavigate();

  const savedMatches = [
    {
      matchId: 1,
      images: ["./assets/skirt.png", "./assets/skirt.png"],
    },
    {
      matchId: 2,
      images: [
        "./assets/skirt.png",
        "./assets/skirt.png",
        "./assets/skirt.png",
        "./assets/skirt.png",
        "./assets/skirt.png",
      ],
    },

    {
      matchId: 1,
      images: ["./assets/skirt.png", "./assets/skirt.png"],
    },

    {
      matchId: 1,
      images: ["./assets/skirt.png", "./assets/skirt.png"],
    },
  ];

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
    {savedMatches.map((match, index) => (
        <div key={index} className="m-5 w-1/5 p-5 matchedItem shadow-md rounded-lg">
            <div className="flex flex-wrap gap-4">
                {match.images && match.images.map((imageSrc, imgIndex) => (
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
