import Header from "./header/Header";
import Body from "./body/Body";
import Button from "../button/Button";

import "./Comment.css";

const Comment = () => {
  return (
    <div className="comment">
      <div>
        <Button />
      </div>
      <div>
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default Comment;
