import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faFileExcel
} from "@fortawesome/free-solid-svg-icons";

import ApproversList from "./ApproversList";

// assuming accepted are the ones who have accepted the request
const getApprovedList = (approvers) => {
  return approvers.filter((approver) => {
    return approver.status === "accepted";
  });
};

// rest all will come in pending
const getPendingList = (approvers) => {
  return approvers.filter((approver) => {
    return approver.status.indexOf("accepted") === -1;
  });
};

function RequestApproval({ request }) {
  return (
    <div className="request-container">
      <div className="request-header">
        <img src={request.service.logo} alt="" height="32px" />
        <div className="header-title">Request for {request.service.name}</div>
      </div>
      <div className="request-body">
        <div className="request-data">
          {/* custom grid */}
          <div className="request-table">
            <div className="table-row">
              <div className="row-header">Requested by</div>
              <div className="row-description">
                <img
                  src={request.requested_by.profile_picture}
                  alt=""
                  wid="24px"
                  height="24px"
                />
                <span>
                  {request.requested_by.first_name}{" "}
                  {request.requested_by.last_name}
                </span>
              </div>
            </div>
            <div className="table-row">
              <div className="row-header">Cost</div>
              <div className="row-description">${request.cost}</div>
            </div>
            {window.innerWidth > 800 ? (
              <div className="custom-row">
                <div className="renewal-frequency-container">
                  <div className="renewal-frequency">Renewal Frequency</div>
                  <div className="renewal-frequency-value">
                    {request.renewal_frequency_in_months +
                      (request.renewal_frequency_in_months === 1
                        ? " month"
                        : " months")}
                  </div>
                </div>
                <div className="annual-amount-container">
                  <div className="annual-amount">Annual Cost</div>
                  <div className="annual-amount-value">{request.cost * 12}</div>
                </div>
              </div>
            ) : (
              <>
                <div className="table-row">
                  <div className="row-header">Renewal Frequency</div>
                  <div className="row-description">
                    {request.renewal_frequency_in_months +
                      (request.renewal_frequency_in_months === 1
                        ? " month"
                        : " months")}
                  </div>
                </div>
                <div className="table-row">
                  <div className="row-header">Annual Cost</div>
                  <div className="row-description">{request.cost * 12}</div>
                </div>
              </>
            )}
            <div className="table-row">
              <div className="row-header">Expense Account</div>
              <div className="row-description">{request.expense_account}</div>
            </div>
            {window.innerWidth > 800 ? (
              <div className="table-row">
                <div className="row-header">File</div>
                <div className="row-description">
                  {}
                  <FontAwesomeIcon icon={faFileExcel} className="icon-excel" />
                  Receipt-{request.service.name}.xls
                </div>
              </div>
            ) : (
              " "
            )}
            <div className="table-row">
              <div className="row-header">Description</div>
              <div className="row-description">{request.description}</div>
            </div>
          </div>
          {/* custom grid ends*/}
          <div>
            <div className="danger-text">
              Your company is already paying for {request.service.name} on
              recurring basis.
            </div>
            <div className="light-text">(1 instance owned by John Smith.)</div>
          </div>
          {window.innerWidth > 800 ? (
            <div className="btn-container">
              <button className="approve-btn">Approve</button>
              <button className="deny-btn">Deny</button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="approver-container">
          <ApproversList
            approvers={getApprovedList(request.approvers)}
            type="approved"
          />
          <ApproversList
            approvers={getPendingList(request.approvers)}
            type="pending"
          />
        </div>
      </div>

      {window.innerWidth <= 800 ? (
        <div className="btn-container">
          <button className="approve-btn">Approve</button>
          <button className="deny-btn">Deny</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default RequestApproval;
