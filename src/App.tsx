import { useContext } from "react";

import Comment from "./components/comment/Comment";
import NewComment from "./components/new-comment/NewComment";
import "./reset.css";
import "./main.css";

// import Data from "../data.json";
import DataContext, { UserContext } from "./context/DataContext";

const App = () => {
  const Data = useContext(UserContext);
  console.log(Data);

  return (
    <div className="container">
      <DataContext>
        {Data.comments.map((comment: any) => (
          <Comment data={comment} />
        ))}
      </DataContext>
      <NewComment />
    </div>
  );
};

export default App;
