import React from "react";
import { db } from "../../component/firebase/firebase";

class EventPage extends React.Component {
  state = {
    events: null,
  };
  componentDidMount() {
    db.collection("events")
      .get()
      .then((snapshot) => {
        const events = [];
        events.forEach((doc) => {
          const data = doc.data();
          events.push(data);
        });
        this.setState({ events: events });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="events">
        {this.state.events &&
          this.state.events.map((event) => {
            return <div></div>;
          })}
      </div>
    );
  }
}

export default EventPage;
