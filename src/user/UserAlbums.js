import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import ViewAlbum from '../admin/ViewAlbum';

export default function UserAlbums() {

  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewalbums`);
      setEvents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSongs = async (albumName) => {
    try {
      navigate(`/viewalbum/${albumName}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="main_content">
      <div className="info">
        {/* <div className="albumbuttons" style={{ textAlign: 'right' }}>
          <Link to="/createalbum" className="buttonn">
            Create Album
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/addsongs" className="buttonn">
            Add Songs
          </Link>
        </div> */}

        {/* <Routes>
          <Route path="/createalbum" element={<CreateAlbum />} />
        </Routes> */}

        <h1 style={{ textAlign: 'center' }}>Albums</h1>
        <div className="grid-container">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index} className="cardd">
                <img
                  src={`${config.url}/albumimage/${event.file}`}
                  alt={event.name}
                  width="50%"
                  className="imagee"
                />
                <p style={{ fontSize: '22px', fontWeight: 'bold' }}>{event.name}</p>
                <div style={{ textAlign: 'center' }}>
                  <button onClick={() => handleSongs(event.name)} style={{ padding: '10px' }} className="buttonn">
                    View Album
                  </button>
                </div>

                <Routes>
                  <Route path="/viewalbum/:albumName" element={<ViewAlbum />} />
                  {/* <Route path="/addsongs" element={<AddSongs />} /> */}
                </Routes>
              </div>
            ))
          ) : (
            <div>No Albums found</div>
          )}
        </div>
      </div>
    </div>
  );
}
