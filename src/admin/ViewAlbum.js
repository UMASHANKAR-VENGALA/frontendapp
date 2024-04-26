import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useParams } from 'react-router-dom';
// import './viewuser.css';
// import './adminnavbar.css';
// import './viewalbum.css';

export default function ViewAlbum() {
  const [albumData, setAlbumData] = useState([]);
  const [albimg, setAlbimg] = useState(null); // Use useState for albimg

  const { moviename } = useParams(); // Extract email from URL parameters

  useEffect(() => {
    const fetchSongsData = async () => {
      try {
        const response = await axios.get(`${config.url}/viewsongs/${moviename}`);
        setAlbumData(response.data);
        if (response.data.length > 0) {
          setAlbimg(response.data[0]); // Set albimg if albumData is not empty
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    if (moviename) {
      fetchSongsData();
    }
  }, [moviename]); // Dependency array should only contain moviename

  return (
    <div className="main_content">
      <div className="info">
        {/* Use conditional rendering to avoid accessing albimg when it's null */}
        {albimg && <img className='play' src={`${config.url}/albumimage/${albimg.image}`} alt={albimg} />}
        <table id="playsong">
          <tr>
            <th>Sno</th>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Play time</th>
            <th>Date Added</th>
          </tr>
          {albumData.length > 0 ? (
            albumData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.songname}</td>
                <td>{data.singers}</td>
                <td>00:00</td>
                <td>{data.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" align="center">No Songs found</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}