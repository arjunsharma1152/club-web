import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../component/firebase/firebase";
import "../event/eventpage.scss";
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
    <div className="events-map">
      <h1>Events</h1>
      <ul className="events-list">
        {events.map((event) => (
          <li>
            <a className="event-item" href="#" contenteditable>
              <h2>{event.data.name}</h2>
              <p>{event.data.date}</p>
              <p>{event.data.string}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
