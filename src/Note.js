import React from 'react';

const Notes = ({title, description, editNote})=> (
    <div className="note">
      <h2 className="title"> {title} </h2>
      <p className="description"> {description}</p>
      <button onClick={editNote}>Edit</button>
    </div>
)
//
// {
//   title,
//   description
// }

// const {title, description} = props;

export default Notes
