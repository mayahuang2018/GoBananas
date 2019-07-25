import React from 'react';
import './Loginform.css';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
<<<<<<< HEAD
    <button {...props}  className='btn bg-warning text-dark'>
=======
    <button {...props} style={{ float: "right", marginBottom: 10 }} className='btn bg-warning text-dark'>
>>>>>>> 4f5a3b16790b1b557435491fa9e45a93a1ba582d
      {props.children}
    </button>
  );
}
