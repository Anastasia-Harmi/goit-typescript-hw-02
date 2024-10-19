import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div>
      {error && <p>Some error ocurred {error}. Please? try again later.</p>}
    </div>
  );
};

export default ErrorMessage;
