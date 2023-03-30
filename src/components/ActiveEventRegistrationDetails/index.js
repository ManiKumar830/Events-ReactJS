// Write your code here
import './index.css'

const activeRegistrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderYetToRegister = () => (
    <div className="yet-to-register">
      <img
        className="yet-to-register-image"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p className="yet-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="buttonEl">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="registered-container">
      <img
        className="registered-image"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="closed-container">
      <img
        className="closed-image"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1 className="registered-closed-text">Registrations Are Closed Now!</h1>
      <p className="closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderInitial = () => (
    <div className="description-container">
      <p className="description">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const getResult = () => {
    switch (registrationStatus) {
      case activeRegistrationStatus.yetToRegister:
        return renderYetToRegister()
      case activeRegistrationStatus.registered:
        return renderRegistered()
      case activeRegistrationStatus.registrationsClosed:
        return renderRegistrationClosed()
      default:
        return renderInitial()
    }
  }

  return <div className="result-container">{getResult()}</div>
}
export default ActiveEventRegistrationDetails
