import React from "react";
import {  Dialog} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../ui/Button";
import PropTypes from 'prop-types';
import { notification } from "antd";






export const SuccessMatchModal = (props) => {

  const SaveMatch = async () => {
    try {
      const response = await fetch("https://dress-ai.onrender.com/save-styles/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ images: matchedOutfits }) 
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Saved successfully:", result);
        props.onClose();
        notification.success({
          message: "Success",
          description: "Saved succesfully",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save match');
      }
    } catch (error) {
      console.error("Error saving matched outfits:", error);
      notification.error({
        message: "Error occured while saving",
        description: error.message,
      });
    }
  }
  
  
  SuccessMatchModal.propTypes = {
    matchedOutfits: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  const matchedOutfits = props.matchedOutfits || [];

  return (
    <Dialog open={props.open} onClose={props.close}>
      <div className="p-10">
        <div className="flex flex-row justify-between mb-5">
          <p></p>
          <AiOutlineClose
            size={25}
            className="cursor-pointer primary_text_color"
            onClick={props.onClose}
          />
        </div>
        <h1 className="text-center text-2xl secondary_text_color">
          Now go Slay!!!
        </h1>
        <div className="flex flex-row flex-wrap w-11/12">
        {Array.isArray(matchedOutfits) && matchedOutfits.map((imageUrl, index)  => (
            <div
              key={index}
              className="p-2 m-5 w-full  matchedItem shadow-md rounded-lg"
            >
              <img src={imageUrl} alt={`outfit-${index}`} className="w-full" />
            </div>
          ))}
        </div><Button
          text={"Save"}
          className="w-fullflex flex-row items-center justify-center mx-4"
          onClick={SaveMatch}
        />
      </div>
       
    </Dialog>
  );


};
