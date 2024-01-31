import './Character.css'

function Character({name,image,origin}) {
    console.log(name)
  return (
    <div className = "type-container">
    <h2 className="name"> {name} </h2>
    <img src={image} alt={name} className="img"/>
    <h3> Origin: {origin.name}</h3>
    </div>
  )
}

export default Character