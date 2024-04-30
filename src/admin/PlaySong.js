import axios from 'axios';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import config from '../config';
import './admin.css';

export default function PlaySong() {
    const { songname } = useParams();
    const [songs, setSongs] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRefs = useRef([]);
    const [currentTimes, setCurrentTimes] = useState([]);
    const [durations, setDurations] = useState([]);

    useEffect(() => {
        const fetchSongData = async () => {
            try {
                const response = await axios.get(`${config.url}/playsong/${songname}`);
                setSongs(response.data);
                setCurrentTimes(response.data.map(() => 0));
                setDurations(response.data.map(() => 0));
                audioRefs.current = response.data.map(() => React.createRef());
            } catch (error) {
                console.error(error.message);
            }
        };

        if (songname) {
            fetchSongData();
        }
    }, [songname]);

    const playAudio = useCallback((index) => {
        audioRefs.current[index].current.src = `${config.url}/songaudio/${songs[index].file}`;
        const playPromise = audioRefs.current[index].current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setCurrentSongIndex(index);
                    setIsPlaying(true);
                })
                .catch((error) => console.error('Autoplay was prevented:', error));
        }
    }, [songs]);
    
    useEffect(() => {
        // Play the first song automatically when component mounts
        if (songs.length > 0) {
            playAudio(0);
        }
    }, [songs, playAudio]); // Added playAudio to the dependency array



    const toggleAudio = (index) => {
        if (currentSongIndex === index) {
            if (isPlaying) {
                audioRefs.current[index].current.pause();
                setIsPlaying(false);
            } else {
                playAudio(index);
            }
        } else {
            if (currentSongIndex !== null && isPlaying) {
                audioRefs.current[currentSongIndex].current.pause();
            }
            playAudio(index);
        }
    };

    const updateTime = (index) => {
        setCurrentTimes((prevTimes) => {
            const newTimes = [...prevTimes];
            newTimes[index] = audioRefs.current[index].current.currentTime;
            return newTimes;
        });
    };

    const updateDuration = (index) => {
        setDurations((prevDurations) => {
            const newDurations = [...prevDurations];
            newDurations[index] = audioRefs.current[index].current.duration;
            return newDurations;
        });
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const nextSong = () => {
        const nextIndex = (currentSongIndex + 1) % songs.length;
        toggleAudio(nextIndex);
    };

    const prevSong = () => {
        const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        toggleAudio(prevIndex);
    };

    const forwardSong = () => {
        const newTime = currentTimes[currentSongIndex] + 5; // Forward 5 seconds
        audioRefs.current[currentSongIndex].current.currentTime = Math.min(newTime, durations[currentSongIndex]);
    };

    const backwardSong = () => {
        const newTime = currentTimes[currentSongIndex] - 5; // Backward 5 seconds
        audioRefs.current[currentSongIndex].current.currentTime = Math.max(newTime, 0);
    };

    return (
        <div className="main_content">
            <div className="info">
                <h1 align="center" style={{fontSize:"35px"}}>Music Player</h1>
                <div className="playlist" >
                    {songs.map((song, index) => (
                        <div key={index} className='card2'>
                            <div className='playsong_img'>
                            <img src={`${config.url}/albumimage/${song.image}`} alt={song.songname} className="songImage" />
                            <audio
                                ref={audioRefs.current[index]}
                                onTimeUpdate={() => updateTime(index)}
                                onDurationChange={() => updateDuration(index)}
                                onEnded={nextSong}
                            />
                            </div>
                            <div className='playsong_right'>
                            <div className="title">{song.songname}</div>
                            <div className="songContainer">
                                <div className="songDetails">
                                    <div className="controls">
                                    <FontAwesomeIcon icon={faBackward} className="controlIcon" onClick={backwardSong} />
                                    <FontAwesomeIcon icon={faStepBackward} className="controlIcon" onClick={prevSong} />
                                        <FontAwesomeIcon
                                            icon={isPlaying && currentSongIndex === index ? faPause : faPlay}
                                            className="controlIcon"
                                            onClick={() => toggleAudio(index)}
                                        />
                                        <FontAwesomeIcon icon={faStepForward} className="controlIcon" onClick={nextSong} />
                                        <FontAwesomeIcon icon={faForward} className="controlIcon" onClick={forwardSong} />
                                    </div>
                                    <div className="timeBarContainer">
                                        <div className="timeBar">
                                            <div className="progressBar" style={{ width: `${(currentTimes[index] / durations[index]) * 100}%` }}></div>
                                        </div>
                                        <div className="timeDisplay">{formatTime(currentTimes[index])} / {formatTime(durations[index])}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
