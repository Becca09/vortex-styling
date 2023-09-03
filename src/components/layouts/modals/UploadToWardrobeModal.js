/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {  Dialog, Checkbox,  ListItemText,  FormControlLabel,  Menu,  MenuItem,} from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../ui/Button";
import Gap from "../Gap";
import { notification } from 'antd';


export const UploadToWardrobeModal = (props) => {
    const [categoriesAnchorEl, setcategoriesAnchorEl] = useState(null);
    const [seasonAnchorEl, setSeasonAnchorEl] = useState(null);
    const [occasionAnchorEl, setOccasionAnchorEl] = useState(null);
    const [selectedSeasonOptions, setSelectedSeasonOptions] = useState([]);
    const [selectedOcassionOptions, setSelectedOcassionOptions] = useState([]);
    const [selectedCategoriesOptions, setSelectedCategoriesOptions] = useState([]);
    const isSeasonOpen = Boolean(seasonAnchorEl);
    const isOccasionOpen = Boolean(occasionAnchorEl);
    const isCategoriesOpen = Boolean(categoriesAnchorEl);
   
    const handleCategoriesClick = (event) => {
      setcategoriesAnchorEl(event.currentTarget);
    };
  
    
    const handleSeasonClick = (event) => {
      setSeasonAnchorEl(event.currentTarget);
    };
  
    const handleOccasionClick = (event) => {
      setOccasionAnchorEl(event.currentTarget);
    };
    const handleCategoriesClose = () => {
      setcategoriesAnchorEl(null);
    };

    const handleSeasonClose = () => {
      setSeasonAnchorEl(null);
    };
  
    const handleOccasionClose = () => {
      setOccasionAnchorEl(null);
    };
    
    const handleSeasonCheckboxChange = (event) => {
      const { value } = event.target;
  
      setSelectedSeasonOptions((prevOptions) =>
        prevOptions.includes(value)
          ? prevOptions.filter((option) => option !== value)
          : [...prevOptions, value]
      );
    };
  
    const handleOccasionCheckboxChange = (event) => {
      const { value } = event.target;
  
      setSelectedOcassionOptions((prevOptions) =>
        prevOptions.includes(value)
          ? prevOptions.filter((option) => option !== value)
          : [...prevOptions, value]
      );
    };
  
    const handleCategoriesCheckboxChange = (event) => {
      const { value } = event.target;
  
      setSelectedCategoriesOptions((prevOptions) =>
        prevOptions.includes(value)
          ? prevOptions.filter((option) => option !== value)
          : [...prevOptions, value]
      );
    };
  
  
    const handleUploadClick = async () => {
      const payload = {
          image: props.uploadedImage,
          category: selectedCategoriesOptions,
          event: selectedOcassionOptions,
          season: selectedSeasonOptions
      };
  
      const result = await uploadClothingData(payload);
      if (result) {
       
        console.log('good')

      }
  };
    async function uploadClothingData(data) {
      try {
          const response = await fetch("https://dress-ai.onrender.com/add-cloth/", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
          });
  
          const result = await response.json();
          if (response.ok) {
            props.onClose()
              notification.success({
                  message: 'Success',
                  description: 'Image uploaded successfully!',
              });
              return result;
          } else {
              throw new Error(result.message || 'Failed to upload');

          }
      } catch (error) {
        props.onClose()
          notification.error({
              message: 'Error',
              description: error.message
          });
          return null;
      }
  }

  
  
  
    return (
      <Dialog
        open={props.open}
        onClose={props.onClose}
        maxWidth="sm"
        fullWidth
        sx={{ padding: "2rem" }}
      >
        <div className="flex flex-row justify-between">
          <p></p>
          <AiOutlineClose
            size={25}
            className="cursor-pointer primary_text_color"
            onClick={props.onClose}
          />
        </div>
        <div className="flex flex-row justify-center items-center my-5">
          <div></div>
          <div className="w-6/12 rounded-xl">
            <img
              src={props.uploadedImage}
              alt="outfit"
              className="w-full object-contain rounded"
            />
          </div>
        </div>
        <Gap h={3} />
        <div
          onClick={handleCategoriesClick}
          className="my-3 gray_outline cursor-pointer px-3 py-2 mx-4 rounded primary_text_color flex flex-row justify-between"
        >
          <span className="mt-2">Select Categories</span>
          <IoMdArrowDropdown size={30} color="black" />
        </div>
        <Menu
          anchorEl={categoriesAnchorEl}
          open={isCategoriesOpen}
          onClose={handleCategoriesClose}
        >
          {[
            "Dresses",
            "Shirts",
            "Jeans",
            "Shoes",
            "Shorts",
            "Skirts",
            "Sweaters",
            "Legggins",
          ].map((Categories, index) => (
            <MenuItem
              key={index}
              className="flex flex-col item-center justify-center bg-white"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategoriesOptions.includes(Categories)}
                    onChange={handleCategoriesCheckboxChange}
                    value={Categories}
                  />
                }
                label={<ListItemText primary={Categories} />}
              />
            </MenuItem>
          ))}
        </Menu>{" "}
        <Gap h={3} />
        

      <div
          onClick={handleOccasionClick}
          className="my-3 gray_outline cursor-pointer px-3 py-2 mx-4 rounded primary_text_color flex flex-row justify-between"
        >
          <span className="mt-2">Select an ocassion</span>
          <IoMdArrowDropdown size={30} color="black" />
        </div>
        <Menu
          anchorEl={occasionAnchorEl}
          open={isOccasionOpen}
          onClose={handleOccasionClose}
        >
          {[
            "Wedding",
            //   "Beach",
            "Work",
            "Church",
            "Lunch",
            "Casual",
            "Dinner",
          ].map((occasion, index) => (
            <MenuItem
              key={index}
              className="flex flex-col item-center justify-center bg-white"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedOcassionOptions.includes(occasion)}
                    onChange={handleOccasionCheckboxChange}
                    value={occasion}
                  />
                }
                label={<ListItemText primary={occasion} />}
              />
            </MenuItem>
          ))}
        </Menu>{" "}
        <Gap h={3} />
      
        <div
          onClick={handleSeasonClick}
          className="my-3 gray_outline cursor-pointer px-3 py-2 mx-4 rounded primary_text_color flex flex-row justify-between"
        >
          <span className="mt-2">Select a size</span>
          <IoMdArrowDropdown size={30} color="black" />
        </div>
        <Menu
          anchorEl={seasonAnchorEl}
          open={isSeasonOpen}
          onClose={handleSeasonClose}
        >
          {["Small", "Large", "Medium", "x-Large", "x-Small"].map((season, index) => (
            <MenuItem
              key={index}
              className="flex flex-col item-center justify-center bg-white"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSeasonOptions.includes(season)}
                    onChange={handleSeasonCheckboxChange}
                    value={season}
                  />
                }
                label={<ListItemText primary={season} />}
              />
            </MenuItem>
          ))}
        </Menu>
        <Button
          text={"Upload"}
          className="w-7/12 flex flex-row items-center justify-center mx-4 mt-3 mb-3"
          onClick={handleUploadClick}
        />
      </Dialog>
    );
  };
  