import React from "react";

const Error = img => {
  return (
    <div className="container-img">
      <div className="p-5">
        <div className="container">
          <div className="text-left ml-1 mt-5">
            <h1 className="text-light ml-1 text-shadow">
              Error <br></br>
            </h1>
            <h5 className="text-light ml-1 mt-4 text-shadow">
              Something went wrong...<br></br>Please try again.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Error;
