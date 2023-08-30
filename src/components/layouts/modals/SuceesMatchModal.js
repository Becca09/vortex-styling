import React, { useState } from "react";
import {
  Dialog,
  Checkbox,
  ListItemText,
  FormControlLabel,
  Menu,
  MenuItem,
  DialogContent,
} from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../../ui/Button";
import Gap from "../Gap";




export const SuccessMatchModal = (props) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const outfitImages = [
    "./assets/skirt.png",
    "./assets/skirt.png",
    "./assets/skirt.png",
    "./assets/skirt.png",
    "./assets/skirt.png",
  ];
  const openSuccessMatch = () => {
    setDialogOpen(true);
  };

  return (
    <Dialog open={props.open} onClose={props.clodse}>
      <div className="p-3">
        <div className="flex flex-row justify-between">
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
          {outfitImages.map((imageUrl, index) => (
            <div
              key={index}
              className="p-2 m-5 w-1/5  matchedItem shadow-md rounded-lg"
            >
              <img src={imageUrl} alt={`outfit-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};
