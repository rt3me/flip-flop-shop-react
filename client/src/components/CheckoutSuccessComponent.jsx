import React, { useState, useEffect } from "react";
import axios from "axios";
import { SyncOutlined } from "@ant-design/icons";

const CheckoutSuccess = () => {
  return (
    <div className="d-flex justify-content-center fw-bold" style={{ height: "90vh" }}>
      <div className="d-flex align-items-center">
        <SyncOutlined spin style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default CheckoutSuccess;
