import Comment from "./components/comment/Comment";
import "./main.css";

import Data from "../data.json";

const App = () => {
  console.log(Data);
  return (
    <div className="container">
      <Comment />
      <Comment />
    </div>
  );
};

export default App;
