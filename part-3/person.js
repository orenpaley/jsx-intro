const Person = ({name, age, hobbies}) => {
  if (name.length > 8) {
    name = name.slice(0,7)
    name += "..."
  }
  let reply;
  if (age >= 18) {
    reply = "Please Go Vote"
  }
  else {
    reply = "you must be 18"
  }
  return <div> 
    <p>Learn some information about this person</p>
    <p>Name: {name} </p>
    <p>{reply}</p>
    <ul>
      {hobbies.map(h => <li>{h}</li>)}
    </ul>
    


  </div>
}