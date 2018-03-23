import React from 'react';

const Notes = ({title, description})=> (
    <div className="note">
      <h2 className="title"> {title} </h2>
      <p className="description"> {description}</p>
    </div>
)
//
// {
//   title,
//   description
// }

// const {title, description} = props;

export default Notes
