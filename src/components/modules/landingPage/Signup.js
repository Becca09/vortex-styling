/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Container from "../../layouts/common/Container";
import Input from "../../ui/Input";
import Gap from "../../layouts/Gap";
import { Button } from "../../ui/Button";

const Signup = () => {
  const imgStyle = {
    width: " 30rem",
    height: "auto",
  };

  const onchangeHandler = {};
  return (
    <Container>
      <div className="flex flex-row w-full justify-center items-center gap-12">
        <div>
          <img src="./assets/signup.png" alt="signp" style={imgStyle} />
        </div>

        <div className="w-2/6 py-5 px-3">
          <div className="flex flex-row justify-between">
            <h1></h1>
            <h1 className="primary_text_color font-bold">Signup Here</h1>
          </div>
          <Input
            id="firstName"
            type="text"
            onChange={onchangeHandler}
            label="First Name"
            styling="outline text-gray-500 p-2 rounded"
            labelClassName="label  my-2"
          />
          <Gap v={1} />

          <Input
            id="lastName"
            type="text"
            onChange={onchangeHandler}
            label="Last Name"
            styling="outline text-gray-500 p-2 rounded"
            labelClassName="label  my-2"
          />
          <Gap v={1} />

          <Input
            id="username"
            type="text"
            onChange={onchangeHandler}
            label="Username"
            styling="outline text-gray-500 p-2 rounded"
            labelClassName="label  my-2"
          />
          <Gap v={1} />
          <Input
            id="email"
            type="text"
            onChange={onchangeHandler}
            label="Email"
            styling="outline text-gray-500 p-2 rounded"
            labelClassName="label  my-2"
          />
          <Gap v={1} />

          <Input
            id="password"
            type="password"
            onChange={onchangeHandler}
            label="Password"
            styling="outline text-gray-500 p-2 rounded"
            labelClassName="label my-2"
          />
          <Gap v={1} />

          <Input
            id="confimrPassword"
            type="password"
            onChange={onchangeHandler}
            label="Confirm Password"
            styling="outline text-gray-500 p-2 rounded"
            labelClassName="label  my-2"
          />
          <Gap h={2} />

          <Button text={"Register"} className={"w-full"} />
        </div>
      </div>
    </Container>
  );
};

export default Signup;
