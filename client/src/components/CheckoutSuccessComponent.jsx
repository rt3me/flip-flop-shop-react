import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../context";

const CheckoutSuccess = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const { data } = await axios.get("/subscription-status");
      console.log("SUBSCRIPTION STATUS => ", data);
      if (data && data.length === 0) {
        navigate("/");
      } else {
        navigate("/account");
      }
    };

    if (state && state.token) getSubscriptionStatus();
  }, [state && state.token]);

  return (
    <div className="d-flex justify-content-center fw-bold" style={{ height: "90vh" }}>
      <div className="d-flex align-items-center">
        <SyncOutlined spin style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default CheckoutSuccess;
