/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Container from "./common/Container";
import Logo from "../ui/Logo";
import { Button } from "../ui/Button";
import Gap from "./Gap";
import { useNavigate } from 'react-router-dom';


const NavBar = ({ setView, username, onLogout }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  
  return (
    <Container>
      <div className="flex justify-between my-8 mx-16">
        <div className="">
          <Logo />
        </div>
        <div>
          {isLoggedIn ? (
            <div className="flex items-center gap-5">
              <span className="span cursor-pointer" onClick={() =>navigate('/dashboard')}>{username} Chiamaka</span>
              <div onClick={onLogout} className="cursor-pointer">
                <img
                  height={100}
                  className="cursor-pointer"
                  width={30}
                  src="/assets/logout.svg"
                  alt="logout"
                />
              </div>
            </div>
          ) : (
            <>
              <Button text={"Login"} onClick={() => setView("login")} />
              <Gap h={1} />
              <Button text={"SignUp"} onClick={() => setView("signup")} />
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
