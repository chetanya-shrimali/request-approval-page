import "./styles.css";
import data from "./request";
import RequestApproval from "./RequestApproval/RequestApproval";

export default function App() {
  console.log(data);
  return (
    <div className="App">
      <RequestApproval request={data} />
    </div>
  );
}
