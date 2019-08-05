import React from 'react';

class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      //const label = this.state.liked ? 'Unlike' : 'Like'
      const label = this.state.liked ? <i class="fas fa-heart"></i>:<i className="far fa-heart"></i>
      return (
        <button  className='btn bg-warning text-dark' onClick={this.handleClick}>
        {label}
        </button>
      );
    }
  
  }

  export default LikeButton;

