import React from "react";
import "./reaction.css";

interface Props {
  reaction: number;
}

const Reaction: React.FC<Props> = ({ reaction }) => {
  return (
    <div className="button">
      <button>
        <img src="../../public/images/icon-plus.svg" alt="plus" />
      </button>
      <span>{reaction}</span>
      <button>
        <img src="../../public/images/icon-minus.svg" alt="minus" />
      </button>
    </div>
  );
};

export default Reaction;
