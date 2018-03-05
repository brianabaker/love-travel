
import React from 'react'

// i need this to show the trips after they're made

class YourTrips extends React.Component  {
  state = {
    yourTrips: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}/your_trips`)
    .then(res => res.json())
    .then(yourTripsJSON => {
      this.setState({
        yourTrips: yourTripsJSON
      })
    })
  }
// /users/:user_id/yourTrips

  render() {
    // {this.fetchYourTrips()}
    // console.log(this.state.yourTrips)
    // console.log(this.props.currentUser)
    // this.state.yourTrips.length < 0 ?
     // : "No Trips Yet!! Go book some!"}
    return(
      <div>
          {this.state.yourTrips.map(trip =>
            <div className="item">
              <p>{trip.start_date} to {trip.end_date}</p>
              <p>{trip.location.name}</p>
            </div>)}
      </div>
    )}

}

export default YourTrips