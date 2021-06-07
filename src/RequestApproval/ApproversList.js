import Approver from "./Approver";
function ApproversList({ approvers, type }) {
  console.log(approvers);
  return (
    <div className={type === "approved" ? "approvers bb" : "approvers"}>
      <div className="light-text">
        {type === "approved" ? "Approved" : "Pending"}
      </div>
      {approvers.map((approver, index) => {
        return <Approver key={index} type={type} approver={approver} />;
      })}
    </div>
  );
}

export default ApproversList;
