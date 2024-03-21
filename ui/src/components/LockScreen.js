import { LockOpen } from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const LockScreen = ({ unLock }) => {
  const [password, setPassword] = useState("");
  return (
    <div className="lock-screen">
      <div className="lock-screen-container">
        <div className="lock-screen-logo pl-5 mb-3">
          <img
            src="https://soorajsnair333.netlify.app/src/images/coding.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div
          className="text-center "
          style={{
            color: "#fff",
            textShadow: "1px 1px 2px black",
          }}
        >
          <h3>Anand Rago</h3>
        </div>
        <div className="d-flex justify-content-center">
          <form
            onSubmit={() => {
              unLock(password);
            }}
          >
            <input
              className="form-control form-control-lg ml-5"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </form>
          <Button
            variant="primary mt-1"
            onClick={() => {
              unLock(password);
            }}
          >
            <LockOpen />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
