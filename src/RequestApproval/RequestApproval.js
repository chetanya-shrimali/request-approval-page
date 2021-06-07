import ApproversList from "./ApproversList";

const getApprovedList = (approvers) => {
  // console.log(approvers);
  return approvers.filter((approver) => {
    return approver.status === "accepted";
  });
};

const getPendingList = (approvers) => {
  return approvers.filter((approver) => {
    if (approver.status !== "accpeted") {
      console.log(approver.status);
      console.log(approver.status.indexOf("accepted"));
    }
    return approver.status.indexOf("accepted") === -1;
  });
};

function RequestApproval({ request }) {
  console.log(request);

  return (
    <div className="request-container">
      <div className="request-header">
        <img
          src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1426048404/y4lxnqcngh5dvoaz06as.png"
          alt="no image"
          height="32px"
        />
        <div className="header-title">{request.service.name}</div>
      </div>
      <div className="request-body">
        <div className="request-data">
          <div className="request-table">
            <div className="table-row">
              <div className="row-header">Requested by</div>
              <div className="row-description">
                <img
                  src={request.requested_by.profile_picture}
                  alt="no image"
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
            <div className="table-row">
              <div className="row-header">Expense Account</div>
              <div className="row-description">{request.expense_account}</div>
            </div>
            <div className="table-row">
              <div
                className="table-row"
                style={{
                  flex: "50%",
                  border: "None",
                  borderRight: "1px solid black",
                  padding: "0 8px 0 0"
                }}
              >
                <div className="row-header" style={{ flex: "32%" }}>
                  Renewal Frequency
                </div>
                <div className="row-description" style={{ flex: "68%" }}>
                  somedata
                </div>
              </div>
              <div
                className="table-row"
                style={{ flex: "50%", border: "None", padding: "0 8px 0 0" }}
              >
                <div className="row-header" style={{ flex: "32%" }}>
                  Annual Cost
                </div>
                <div className="row-description" style={{ flex: "68%" }}>
                  somedata
                </div>
              </div>
            </div>
            <div className="table-row">
              <div className="row-header">File</div>
              <div className="row-description">
                {request.files.map((file, index) => (
                  <div key={index}>
                    {<img src={file} alt="not available" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="table-row">
              <div className="row-header">Description</div>
              <div className="row-description">{request.description}</div>
            </div>
          </div>
          <button className="approve-btn">Approve</button>
          <button className="deny-btn">Deny</button>
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
    </div>
  );
}

export default RequestApproval;
