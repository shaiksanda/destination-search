// Write your code here
import './index.css'

const DestinationItem = props => {
  const {list} = props
  const {id, name, imgUrl} = list
  console.log(id)

  return (
    <li className="item">
      <img className="image" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
