import React from 'react';


const Scroll = (props) => {
  return (
    //style attritbute get CSS value
    //overflowY - react
    //overflow-y css
    <div style = {{ overflowY: 'scroll', 
          border:'2px solid black', height: '800px'}} >
        {props.children}
    </div>
  );
};



export default Scroll;