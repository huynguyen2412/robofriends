import React from "react";

/* @id : the index of each object from robot.js file
  name, email : the key correspond to each value from robot.js file
*/
const Card = ({ id, name , email}) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>       
        </div>
    </div>
  );
}

export default Card;