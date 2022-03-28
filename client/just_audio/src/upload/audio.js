import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Readable } from 'stream';
import axios from 'axios';
import '../static/css/audio.css';
import preloader from '../static/images/preloader.svg';
import { stringify } from 'querystring';
// function Audio(props) {
//     const [audio, setAudio] = useState([]);
//     const url = 'http://localhost:8000/files';

//     useEffect(() => {
//         const res = axios.get(url)
//             .then(res => {
//                 setAudio(res.data);
//                 console.log(res.data);
//             })
//     }, [])

//     return (
//         <div>
//             <h1>Audio</h1>
//             {audio.map(audio => {
//                 return (
//                     <div>
//                         <p>{audio.filename}</p>
//                         <audio controls>
//                             <source src={audio.filename} type="audio/mp3" />
//                         </audio>
//                     </div>
//                 )
//             }
//             )}
//         </div>

//     )
// }
async function get(url) {
    try {
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/ogg', 'image/png', 'image/jpg', 'image/jpeg']
            }
        })
        const blob = await response.blob()
        return [URL.createObjectURL(blob), null];
    }
    catch (error) {
        console.error(`get: error occurred ${error}`);
        return [null, error]
    }
}

function Foo(props) {
    const {filename} = useParams();
    const [audio, setAudio] = useState(undefined)
    const [audio_details, setAudio_details] = useState(undefined)
    const [audio_img, setAudio_img] = useState(undefined)
    const [audio_img_url, setAudio_img_url] = useState(undefined)
    const url = `http://localhost:8000/audio/${filename}`
    const detail_url = `http://localhost:8000/details/${filename}`

    useEffect(() => {
        async function fetchData() {
            // You can await here


            // console.log('fetching data')
            const result = await fetch(detail_url)
                .then(res => res.json())
            setAudio_details(result)
            console.log(audio_img_url)
            if (audio_details) {
                setAudio_img_url(`http://localhost:8000/audio/${audio_details['audio_imgID']}`)
                const [img_response, err] = await get(audio_img_url)
                if (err) {
                    console.error(`get: error occurred ${err}`);
                    return [null, err]
                }
                setAudio_img(img_response)
            }

            const [response, error] = await get(url)

            if (error)
                console.error(`Foo: error occurred ${error}`);
            else {
                console.log(`Foo: response received ${response}`);
                setAudio(response)
                // setAudio_details(detail_response)
                // document.getElementById('audio').src = response;
            }
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //         await axios.get(detail_url).then(res => {
    //             setAudio_details(res.data)
    //             console.log(res.data);
    //         })
    //     }
    //     fetchData();
    // }, [detail_url])
    useEffect(() => {
        async function fetchData() {
            await axios.get(detail_url).then(res => {
                setAudio_details(res.data)
                console.log(res.data);
            })
        }
        fetchData();
    }, [detail_url])
    


    return (
        <div className="audio">
            <div className="audio_section">
                <div className="audio_title">
                    {/* <img src={`http://localhost:8000/audio/${audio_details['audio_imgID']}`} alt="" /> */}
                    {audio_details ? <h1>{audio_details['audio_name']}</h1> : <p className="notification">Loading...</p>}

                </div>
                {audio_details?<img className="audio_img" src={`http://localhost:8000/audio/${audio_details['audio_imgID']}`} alt="showing screen capture" />:<p className="notification">Loading...</p>}
            </div>
            {audio ?
                <div className="audio_play">
                    <audio controls controlsList='nodownload' autoPlay>
                        <source src={audio} type="audio/mp3" />
                    </audio>
                </div> : <img id="preloader" src={preloader}></img>}

        </div>
    )
    //         <audio controls>
    //             <p>{audio}</p>
    //             <source src={audio} type="audio/mp3" name="audio"/>
    //         </audio>
    //     </div>
    // )
}
export default Foo;