
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import LoginMain from './routes/Loginmain';
import Event from './routes/Events';
import Contact from './routes/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import EventBooking from './components/Booking';

// function App() {
//   return (
//    <EventBooking />
//   );
// }

// export default App;

