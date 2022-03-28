import React, { useState, useEffect } from 'react';
import Audio from '../upload/audio';
import '../static/css/audio.css';
import ImageIcon from '@material-ui/icons/Image';
import { useParams } from 'react-router-dom';

function AudioList(props) {
    const [audio_name, setAudioName] = useState([]);
    const audio_language=useParams().language;
    console.log(audio_language);
    useEffect(() => {
        async function getAudio() {
            const result = await fetch(`http://localhost:8000/file/${audio_language}`)
                .then(res => res.json())
            setAudioName(result);
            console.log(result);
        }
        getAudio();
    },[])
    return (
        <div>
            <div className="audio_list">
                <h1>List of Audio</h1>
                {audio_name.length>0?audio_name.map(audio => {
                    return (
                        <>
                            <div className="audio_list_item" key={audio['_id']}>
                            <div className="audio_list_item_img">
                                {audio['audio_imgID']?
                                <img src={`http://localhost:8000/audio/${audio['audio_imgID']}`} alt="audio_img" />
                                : <ImageIcon id="image_icon"/>}
                            </div>
                            <div className="audio_list_details">
                            <a className="audio_title" href={"/audio/"+audio['audioID']}><h2>{audio['audio_name']}</h2></a>
                           
                                <p>{audio['audio_author']}</p>
                            
                            </div>
                        </div>
                        <br />
                        </>
                        
                    )
                }):<p>No Audio Found!!</p>}
            </div>
        </div>
    )

}
export default AudioList;