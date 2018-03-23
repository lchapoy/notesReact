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
        id: 'index0',
        title: 'hello',
        description: 'from my new app'
      },
      index3: {
        id: 'index1',
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
    axios.get('www.mysite.com/api/notes')
    GetNotes().then((notes)=>{
      this.setState({
        notes,
        loading: false
      })
    })
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

  render() {
  // const notes = this.state.notes;
    const { notes, notesFlag, loading } = this.state;
    const notesArray = Object.values(notes).map(({title, description})=>
      <Note
        title={title}
        description={description}
      />
    )
    return (
      <div className="App">
        <Header/>
        {loading && <h2>Loading</h2>}
        <button onClick={this.showNotes} style={{backgroundColor:notesFlag ? 'green' : ''}}>
          Notes
        </button>
        <button onClick={this.hideNotes} style={{backgroundColor: !notesFlag ? 'green' : ''}}>
          Add
        </button>
        <section>
        </section>
        {notesFlag ? <section>
          {notesArray}
        </section> : <AddNote
          addNoteHandler={this.addNote}
        />}
      </div>
    );
  }
}
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>

export default App;
