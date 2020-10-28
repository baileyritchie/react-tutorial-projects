import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data);
  return <>
  {
    people.map((person) => {
      const {id,name} = person;
      return <div key={id} className = "item"><h4>{name}</h4></div>
    })
  }
  <button  type="button" className="btn" onClick = {() => setPeople([]) }> Clear Items</button>
  </>;
};

export default UseStateArray;
