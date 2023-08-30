/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import Card from "../components/modules/Dashboard/Card";
import NavBar from "../components/layouts/NavBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Chatbot from "../components/layouts/ChatBot";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GetStyledModal } from "../components/layouts/modals/GetStyledModal";
import { SuccessMatchModal } from "../components/layouts/modals/SuceesMatchModal";
import { UploadToWardrobeModal } from "../components/layouts/modals/UploadToWardrobeModal";
import UploadWidget from "../components/layouts/modals/UploadWidget";

const Dashboard = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isStyledModalOpen, setIsStyledModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [getStyledOpen, setGetStyledOpen] = useState(false);
  const [successMatchOpen, setSuccessMatchOpen] = useState(false);
  const [url, setUrl] = useState();
  const [error, updateError] = useState();

  const handleBegin = () => {
    setGetStyledOpen(false);
    setSuccessMatchOpen(true);
  };

  function handleOnUpload(error, result, widget) {
    console.log("handleOnUpload has been triggered");
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    setUrl(result?.info?.secure_url);
    console.log(result?.info?.secure_url, 'newly set URL');
    console.log(url, 'urlkkkkkkj')
    setIsUploadModalOpen(true);

  }


  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleVortexClick = () => {
    setIsStyledModalOpen(true);
    handleClose();
  };

  const closeStyledModal = () => {
    setIsStyledModalOpen(false);
  };

  const cardData = [
    {
      imgSrc: "./assets/hangerr.png",
      cardName: "My Wardrobe",
      cardDescription: "You have 16 outfits in your wardrobe",
      route: "/wardrobe",
    },
    {
      imgSrc: "./assets/saved.svg",
      cardName: "Saved Styles",
      cardDescription: "You have 5 saved styles",
      route: "/saved",
    },
    {
      imgSrc: "./assets/profilee.png",
      cardName: "My Account",
      cardDescription: "Click to view your  profile",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <NavBar />

      <div>
        <div className="flex flex-row justify-around">
          {cardData.map((data, index) => (
            <Link to={data.route} key={index}>
              <Card
                imgSrc={data.imgSrc}
                cardName={data.cardName}
                cardDescription={data.cardDescription}
              />
            </Link>
          ))}
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mt-10 gap-8">
            <div
              className="secondary_bg py-3 text-center px-10 text-2xl font-semi-bold text-white rounded-2xl cursor-pointer"
              onClick={handleClick}
            >
              Click here to begin styling
            </div>
            <UploadWidget onUpload={handleOnUpload}>
              {({ open }) => {
                function handleOnClick(e) {
                  e.preventDefault();
                  open();
                }
                return <button onClick={handleOnClick}>Upload an Image</button>;
              }}
            </UploadWidget>
            <div
              className="secondary_bg py-3 text-center px-10 text-2xl font-semi-bold text-white rounded-2xl cursor-pointer"
              onClick={() => navigate("/store")}
            >
              Visit Vortex Store
            </div>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ border: "1px solid #FC6A03" }}
          >
            <MenuItem onClick={handleVortexClick}>Vortex AI</MenuItem>
            <MenuItem onClick={handleClose}>Manual styling</MenuItem>
          </Menu>
        </div>
        <Chatbot />
      </div>
      <GetStyledModal
        open={isStyledModalOpen}
        onClose={closeStyledModal}
        onBegin={handleBegin}
      />
      <UploadToWardrobeModal
        open={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        uploadedImage={url}
      />
      <SuccessMatchModal
        open={successMatchOpen}
        onClose={() => setSuccessMatchOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
