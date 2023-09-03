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
import Gap from "../Gap";
import { Button } from "../../ui/Button";
import { notification } from "antd";
import { SuccessMatchModal } from "./SuceesMatchModal";

export const GetStyledModal = (props) => {
  const [seasonAnchorEl, setSeasonAnchorEl] = useState(null);
  const [occasionAnchorEl, setOccasionAnchorEl] = useState(null);
  const [selectedSeasonOption, setSelectedSeasonOption] = useState("");
  const [selectedOccasionOption, setSelectedOccasionOption] = useState("");
  const [successMatch, setSuccessMatchOpen] = useState(false);
  const [matchedOutfits, setMatchedOutfits] = useState([]);

  const isSeasonOpen = Boolean(seasonAnchorEl);
  const isOccasionOpen = Boolean(occasionAnchorEl);
  const handleSeasonClick = (event) => {
    setSeasonAnchorEl(event.currentTarget);
  };
  const handleOccasionClick = (event) => {
    setOccasionAnchorEl(event.currentTarget);
  };
  const handleSeasonClose = () => {
    setSeasonAnchorEl(null);
  };
  const handleOccasionClose = () => {
    setOccasionAnchorEl(null);
  };
  const handleSeasonCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedSeasonOption(value); // Simply set the value
  };

  const handleOccasionCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedOccasionOption(value); // Simply set the value
  };

  const handleMatchOutfit = async () => {
    const payload = {
      event: selectedOccasionOption,
      season: selectedSeasonOption,
    };

    const result = await matchingOutfitData(payload);
    if (result && result.dress) {
      setMatchedOutfits([result.dress]);
      console.log(result.dress);
      setSuccessMatchOpen(true);
    }
  };

  async function matchingOutfitData(data) {
    try {
      const response = await fetch(
        "https://dress-ai.onrender.com/generate-outfit/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setSuccessMatchOpen(true);
        notification.success({
          message: "Success",
          description: "Successfully Matched!",
        });
        return result;
      } else {
        throw new Error(result.message || "Failed to match");
      }
    } catch (error) {
      props.onClose();
      notification.error({
        message: "Error matchin",
        description: error.message,
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
      <DialogContent>
        <div className="flex flex-row justify-between">
          <p></p>
          <AiOutlineClose
            size={25}
            className="cursor-pointer primary_text_color"
            onClick={props.onClose}
          />
        </div>
        <div className="text-center text-2xl primary_text_color">
          Let's get you styled
        </div>
        <Gap h={3} />
        <div
          onClick={handleSeasonClick}
          className="my-3 gray_outline cursor-pointer px-3 py-2 mx-4 rounded primary_text_color flex flex-row justify-between"
        >
          <span className="mt-2">Select a season</span>
          <IoMdArrowDropdown size={30} color="black" />
        </div>
        <Menu
          anchorEl={seasonAnchorEl}
          open={isSeasonOpen}
          onClose={handleSeasonClose}
        >
          {["Summer", "Winter", "Spring", "Fall", "Dry", "Raining"].map(
            (season) => (
              <MenuItem
                key={season}
                className="flex flex-col item-center justify-center bg-white"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedSeasonOption === season}
                      onChange={handleSeasonCheckboxChange}
                      value={season}
                    />
                  }
                  label={<ListItemText primary={season} />}
                />
              </MenuItem>
            )
          )}
        </Menu>
        <div
          onClick={handleOccasionClick}
          className="my-3 gray_outline cursor-pointer px-3 py-2 mx-4 rounded primary_text_color flex flex-row justify-between"
        >
          <span className="mt-2">Select an event</span>
          <IoMdArrowDropdown size={30} color="black" />
        </div>
        <Menu
          anchorEl={occasionAnchorEl}
          open={isOccasionOpen}
          onClose={handleOccasionClose}
        >
          {[
            "Wedding",
            "Beach",
            "Work",
            "Church",
            "Brunch",
            "Casual",
            "Dinner",
          ].map((occasion) => (
            <MenuItem
              key={occasion}
              className="flex flex-col item-center justify-center bg-white"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedOccasionOption === occasion}
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
        <Button
          text={"Begin"}
          className="w-4/12 flex flex-row items-center justify-center mx-4"
          onClick={handleMatchOutfit}
        />
      </DialogContent>
      <SuccessMatchModal
        open={successMatch}
        onClose={() => setSuccessMatchOpen(false)}
        matchedOutfits={matchedOutfits}
      />
    </Dialog>
  );
};
