import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../context";

const CheckoutSuccess = ({ history }) => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const { data } = await axios.get("/subscription-status");
      console.log("SUBSCRIPTION STATUS => ", data);
      if (data && data.length === 0) {
        history.push("/");
      } else {
        history.push("/account");
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
