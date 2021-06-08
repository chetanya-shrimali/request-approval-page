import "./styles.css";
import data from "./request";
import RequestApproval from "./RequestApproval/RequestApproval";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faLock,
  faFileExcel
} from "@fortawesome/free-solid-svg-icons";

import airbase from "./assets/airbase-logo.svg";

export default function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="airbase-logo">
        <img src={airbase} alt="" height="24px" />
      </div>
      <div className="light-text security-text">
        <span className="warning-text">
          <FontAwesomeIcon icon={faLock} className="icon-lock" />
          Security Message
        </span>
        {"  "}
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
        elit non mi porta gravida at eget metus.
      </div>
      <RequestApproval request={data} />
    </div>
  );
}
