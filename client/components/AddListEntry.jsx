import React from 'react';
// import App;

// const AddListEntry = () => {
//   return (
//   <div>
//     <form className='vertical'>
//       <label>What to do???</label>
//       <input type='text' />
//       <button onClick={() =>  {props.addItem()}}>Okay.</button>
//     </form>
//   </div>
//   );
//   };

class AddListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:''

    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.setState({
      text : e.target.value
    });
  }

  onSubmitChange(e) {
    e.preventDefault();
    this.props.additem(this.state.text)
  }

  render() {
    
      return (
        <div>
          <form className='vertical' onSubmit={this.onSubmitChange}>
            <label>What to do???</label>
            <input type='text' onChange={this.handleInput}/>
            <button>Okay.</button>
          </form>
        </div>
      );
    };

  }



  export default AddListEntry;