import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventBookingStyle.css';

const API_URL = 'http://localhost:8080/api/v1/booking'; // Replace with your Spring Boot backend URL for events

function EventBooking() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
    capacity: '',
  });
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // GET operation to fetch events from the backend
    axios
      .get(API_URL)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const createEvent = () => {
    // POST operation to create a new event
    axios
      .post(API_URL, newEvent)
      .then((response) => {
        setEvents([...events, response.data]);
        setNewEvent({
          name: '',
          date: '',
          location: '',
          description: '',
          capacity: '',
        });
      })
      .catch((error) => {
        console.error('Error creating event:', error);
      });
  };

  const updateEvent = () => {
    if (selectedEvent) {
      // Create a copy of the selected event
      const updatedEvent = { ...selectedEvent };
      
      // Update only the fields that have changed
      if (newEvent.date !== '') {
        updatedEvent.date = newEvent.date;
      }
      if (newEvent.location !== '') {
        updatedEvent.location = newEvent.location;
      }
      if (newEvent.description !== '') {
        updatedEvent.description = newEvent.description;
      }
      if (newEvent.capacity !== '') {
        updatedEvent.capacity = parseInt(newEvent.capacity, 10); // Parse capacity as an integer
      }
      
      // PUT operation to update the selected event
      axios
        .put(`${API_URL}/${selectedEvent.eventid}`, updatedEvent)
        .then((response) => {
          console.log('Update response:', response.data);
          const updatedEvents = events.map((event) =>
            event.eventid === response.data.eventid ? response.data : event
          );
          setEvents(updatedEvents);
          setSelectedEvent(null);
          setNewEvent({
            name: '',
            date: '',
            location: '',
            description: '',
            capacity: '',
          });
        })
        .catch((error) => {
          console.error('Error updating event:', error);
        });
    } else {
      console.log('No changes detected in event data.');
    }
  };
  
  
  
  

  const deleteEvent = (id) => {
    // DELETE operation to delete the event with the specified ID
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        const updatedEvents = events.filter((event) => event.eventid !== id);
        setEvents(updatedEvents);
      })
      .catch((error) => {
        console.error('Error deleting event:', error);
      });
  };

  const selectEvent = (event) => {
    setSelectedEvent(event);
    setNewEvent({ ...event }); // Pre-fill form fields with event data for editing
  };

  return (
    <div className="container">
      <h1 className="title">Book Now</h1>
      <table className="event-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Capacity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.eventid}>
              <td>{event.eventid}</td>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.description}</td>
              <td>{event.capacity}</td>
              <td>
              <button onClick={() => selectEvent(event)} className='bu edit-button'>Edit</button>
<button onClick={() => deleteEvent(event.eventid)} className='bu delete-button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="event-form-container">
        <h2>Create/Update Event</h2>
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event Date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event Location"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent({ ...newEvent, location: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Event Capacity"
          value={newEvent.capacity}
          onChange={(e) =>
            setNewEvent({ ...newEvent, capacity: e.target.value })
          }
        />
<button onClick={createEvent} className='bu create-button'>Create</button>
<button onClick={updateEvent} className='bu update-button'>Update</button>      </div>
    </div>
  );
}

export default EventBooking;
