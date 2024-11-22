import React, { FC } from "react";
type Props = {
  error: string;
};
const ErrorMessage: FC<Props> = ({ error }) => {
  return (
    <div>
      {error && <p>Some error ocurred {error}. Please? try again later.</p>}
    </div>
  );
};

export default ErrorMessage;
