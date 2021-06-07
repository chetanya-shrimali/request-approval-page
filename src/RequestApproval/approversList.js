import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function ApproversList({ approvers }) {
  console.log(approvers);
  return (
    <div className="approver-container">
      <div className="approved">
        <div>Approved</div>
        <div className="approved-list">
          <img src={approvers[0].approver.profile_picture} alt="no imag" />
          <div>
            {approvers[0].approver.first_name} {approvers[0].approver.last_name}
          </div>
          {/* <i className="fa fa-check-circle"></i> */}
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ color: "rgba(38, 194, 129, 1)" }}
          />
        </div>
      </div>
      <div className="pending">Pending</div>
    </div>
  );
}

export default ApproversList;
