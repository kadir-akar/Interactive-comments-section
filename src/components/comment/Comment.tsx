import Header from "./header/Header";
import Body from "./body/Body";
import Reaction from "../reaction/Reaction";

import "./Comment.css";

interface Props {
  data: any;
}

const Comment: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div className="comment">
      <Reaction reaction={data.score} />
      <div>
        <Header img={data.user.image.png} />
        <Body comment={data.content} />
      </div>
    </div>
  );
};

export default Comment;
