function Card(props) {
  console.log(props)

  return (
    <div className="Card">
      <span className="name">My Name is {props.name}</span>
      <p className="age">I'm {props.age} Years Old</p>
      <p className="city">I live in {props.city}</p>
      <button>Click Me!</button>
    </div>
  );
}

export default Card;
