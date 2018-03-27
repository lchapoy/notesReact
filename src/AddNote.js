import React, { Component } from 'react';


class AddNote extends Component {
  constructor(props){
    super();
    this.state = {
      title: props.title,
      description: props.description
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
    // this.props
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
