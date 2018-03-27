import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Note from './Note';
import AddNote from './AddNote';
import './App.css';

// GET www.mysite.com/api/notes/id0

const GetNotes = ()=>{
  return new Promise ((res, rej)=>{
    setTimeout(()=>res({
      index0: {
        id: 'index0',
        title: 'hello',
        description: 'from my new app'
      },
      index1: {
        id: 'index1',
        title: 'bye',
        description: 'go out'
      },
      index2: {
        id: 'index2',
        title: 'hello',
        description: 'from my new app'
      },
      index3: {
        id: 'index3',
        title: 'bye',
        description: 'go out'
      }
    }),4000)

  });
}


class App extends Component {

  constructor(){
    super();
    this.state = {
      notesFlag: true,
      notes: {},
      loading: true,
    }
  }
  componentDidMount(){
    GetNotes().then((notes)=>{
      this.setState({
        notes,
        loading: false
      })
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.notesFlag
  }

  addNote = (title,description) =>{
    const { notes } = this.state;
    const index = Date.now();
    const newNotes = {
      ...notes,
      [index]: {
        title,
        description
      }
    }
    this.setState({
      notes: newNotes
    })
  };

  showNotes = ()=>{
    this.setState({
      notesFlag: true,
    })
  }

  hideNotes= ()=>{
    this.setState({
      notesFlag: false,
    })
  }

  editNote = (id)=>{
    this.setState({
      editedId: id,
      notesFlag: false,
    })
  }

  render() {
  // const notes = this.state.notes;
    const { notes, notesFlag, loading, editedId } = this.state;
    const notesArray = Object.values(notes).map(({title, description, id})=>
      <Note
        editNote={()=>this.editNote(id)}
        title={title}
        description={description}
      />
    )
    const clickedNote = notes[editedId] || {};
    return (
      <div className="App">
        <Header/>
        <button onClick={this.showNotes} style={{backgroundColor:notesFlag ? 'green' : ''}}>
          Notes
        </button>
        <button onClick={this.hideNotes} style={{backgroundColor: !notesFlag ? 'green' : ''}}>
          Add
        </button>
        {loading && <h2>Loading</h2>}

        <section>
        </section>
        { notesFlag ? <section>
          {notesArray}
        </section> :
        <AddNote
           title={clickedNote.title}
           description={clickedNote.description}
         addNoteHandler={this.addNote}
        />
      }


      </div>
    );
  }
}
// <button onClick={this.showNotes} style={{backgroundColor:notesFlag ? 'green' : ''}}>
//   Notes
// </button>
// <button onClick={this.hideNotes} style={{backgroundColor: !notesFlag ? 'green' : ''}}>
//   Add
// </button>
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>

export default App;
