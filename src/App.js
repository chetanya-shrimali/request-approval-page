import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import data from "./request";
import RequestApproval from "./RequestApproval/RequestApproval";
import airbase from "./assets/airbase-logo.svg";

export default function App() {
  return (
    <div className="app">
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
