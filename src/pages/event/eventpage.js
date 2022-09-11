import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../component/firebase/firebase";

export default function EventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  function getEvents() {
    const eventsCollection = collection(db, "events");

    getDocs(eventsCollection)
      .then((response) => {
        const items = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setEvents(items);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h3>Events</h3>
      <ul className="events-list">
        {events.map((event) => (
          <li className="event-item" key={event.id}>
            <p>{event.data.name}</p> <p>{event.data.string}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
