import React, { Component } from 'react';


class AddNote extends Component {
  constructor(){
    super();
    this.state = {
      title: 'hi',
      description: 'bye'
    }
  }

  submitHandler = ()=>{
      const { addNoteHandler } = this.props;
      const { title, description } = this.state;
      addNoteHandler(title, description);
      this.setState({
        title: '',
        description: ''
      })
  }
  titleHandler = (event)=> {
    this.setState({
      title: event.target.value
    })
  }
  descriptionHandler = (event)=> {
    this.setState({
      description: event.target.value
    })
  }

  render(){
    return(
      <section>
        <label>'Enter Title'</label>
        <input value={this.state.title} onChange={this.titleHandler}/>
        <label>'Enter Description'</label>
        <input value={this.state.description} onChange={this.descriptionHandler}/>
        <button onClick={this.submitHandler}>
          Create Note
        </button>
      </section>
    )
  }
}

export default AddNote
