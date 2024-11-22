import React, { FC } from "react";
type Props = {
  onClick: () => void;
};
const LoadMoreBtn: FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Load more</button>;
};

export default LoadMoreBtn;
