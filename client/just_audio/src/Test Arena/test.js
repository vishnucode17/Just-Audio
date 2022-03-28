import React from 'react';
import { useState } from 'react';
import audio from '../static/audio.wav';
import '../static/css/player.css';
import Header from '../Home/header';
import Form from './form';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
const song = new Audio(audio);
const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };
function Test() {
    const [playing, setPlaying] = useState(false);
    return (
        <div>
            <button id="play_btn" onClick={() => {
                if (playing) {
                    song.pause();
                    setPlaying(false);
                } else {
                    song.play();
                    setPlaying(true);
                }
            }}>{playing ? <PauseCircleFilledIcon style={styles.largeIcon}/> : <PlayCircleFilledIcon style={styles.largeIcon}/>}</button>

        </div>
    )
}
function music_player(props) {
    return (
        <>

            <div className="playback_div">
                <div className="player_banner">
                    <img src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="" />
                </div>
                <div className="playback_controls">
                    <Test />
                </div>
            </div>
            <Form />
        </>
    )
}
export default music_player;