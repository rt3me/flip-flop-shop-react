import React, { useState, useEffect } from "react";
import axios from "axios";
import { SyncOutlined } from "@ant-design/icons";

const CheckoutSuccess = ({ history }) => {
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

    getSubscriptionStatus();
  }, []);

  return (
    <div className="d-flex justify-content-center fw-bold" style={{ height: "90vh" }}>
      <div className="d-flex align-items-center">
        <SyncOutlined spin style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default CheckoutSuccess;
