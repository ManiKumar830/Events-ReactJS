// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onClickImage = () => {
    setActiveId(id, registrationStatus)
  }

  const imageBorder = isActive ? 'event-image-border' : 'event-image'

  return (
    <li className="list-container">
      <button onClick={onClickImage} className="image-button" type="button">
        <img className={imageBorder} alt="event" src={imageUrl} />
        <p className="name">{name}</p>
        <p className="location-container">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
