import React from 'react';

class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        saved: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      
      this.setState({
        saved: !this.state.saved
       //data-id={Users._id}
      });

    }
    
    render() {
      //const label = this.state.liked ? 'Unlike' : 'Like'
      const label = this.state.saved ? <i className="fas fa-heart"></i>:<i className="far fa-heart"></i>
      return (
        <button className='likeBrn btn bg-warning text-dark' onClick={this.handleClick}>
        {label}
        </button>
      );
    }
  
  }

  export default LikeButton;

