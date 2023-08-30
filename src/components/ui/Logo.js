import React from "react";
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img
        height={100}
        className="cursor-pointer"
        width={150}
        src="/assets/logo.svg"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
