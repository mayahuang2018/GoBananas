import React from "react";

function DeleteBtn(props) {
  return (
    <span className="delete-btn btn bg-warning text-dark" {...props} role="button" tabIndex="0">
      <i className="fas fa-trash-alt"></i>
    </span>
  );
}

export default DeleteBtn;