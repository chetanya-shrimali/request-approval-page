import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons";

import Moment from "moment";

function Approver({ approver, type }) {
  return (
    <div>
      <div className="details">
        <div>
          <FontAwesomeIcon icon={faCircle} className="icon-circle" />
        </div>
        <div className="approver-box">
          <img
            src={approver.approver.profile_picture}
            alt="no imag"
            wid="24px"
            height="24px"
          />
          <div className="approver-detail">
            <div>
              {approver.approver.first_name} {approver.approver.last_name}{" "}
              <span className="light-text">({approver.approver.email})</span>
            </div>
            <div className="light-text">
              {type === "approved"
                ? "Approved " +
                  Moment(approver.last_updated_date).format("MMM d, YYYY")
                : "Last notified " +
                  Moment(approver.last_notified_at).format("MMM d, YYYY")}
            </div>
          </div>
        </div>
        <div>
          {type === "approved" ? (
            <FontAwesomeIcon icon={faCheckCircle} className="icon-check" />
          ) : (
            <span className="inner-circle"></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Approver;
