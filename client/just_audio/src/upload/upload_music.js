import React, { useState, useEffect } from 'react';
import uploadimg from '../static/images/upload.svg';
import '../static/css/upload.css';
import axios from 'axios';
function UploadMusic(props) {
    const url = "http://localhost:8000/upload";
    // const navigate = useNavigate();
    const [file, setFile] = useState({
        file: ""
    });
    const [audioname, setAudioname] = useState({
        audioname: ""
    })
    const [audiolanguage, setAudiolanguage] = useState({
        audiolanguage: ""
    })

    const [audioauthor, setAudioauthor] = useState({
        audioauthor: ""
    })
    const [audioimg, setAudioimg] = useState({
        audioimg: ""
    })
    const [audiodescription, setAudiodescription] = useState({
        audiodescription: ""
    })
    const [audiotags, setAudiotags] = useState({
        audiotags: [

        ]


    })

    function submit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file.file);
        formData.append('audioname', audioname.audioname);
        formData.append('audioauthor', audioauthor.audioauthor);
        formData.append('audioimg', audioimg.audioimg);
        formData.append('audiodescription', audiodescription.audiodescription);
        formData.append('audiotags', audiotags.audiotags);
        formData.append('audiolanguage', audiolanguage.audiolanguage);
        // console.log(formData.get('audioname'));
        axios.post(url, formData)
            .then(res => {
                console.log(res);
            }
            )
            .catch(err => {
                console.log(err);
            })
        for (var value of formData.values()) {
            console.log(value);
         }

    }
    return (
        <div>
            <div className="upload_section">
                <div className="upload_section_title">
                    <img src={uploadimg} alt="" />
                </div>
                <div className="upload">
                    <div className="upload__title">
                        <h1>Upload your music</h1>
                    </div>
                    <div className="upload__form">
                        <form encType="multipart/form-data" onSubmit={(e) => submit(e)} method='POST'>

                            <input type="text" placeholder="Audio Name" name="audioName" required="required" onChange={(e) => {
                                setAudioname({ audioname: e.target.value })
                            }} />

                            <select name="audiolanguage" id="audiolangauge" onChange={(e) => {
                                setAudiolanguage({ audiolanguage: e.target.value })
                            }}>
                            
                                <option value="">Select Language</option>
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                                <option value="telugu">Telugu</option>
                                <option value="kannada">Kannada</option>
                            </select>

                            <input type="text" placeholder='Artist' name="author" required="required" onChange={(e) => {
                                setAudioauthor({ audioauthor: e.target.value })
                            }} />

                            <input type="text" placeholder="Audio Tags" name="audioTags" required="required" onChange={(e) => {
                                var audiotags_list = e.target.value.split(",");
                                setAudiotags({ audiotags: audiotags_list })
                            }} />
                            <label htmlFor="audioimg">Upload Audio Image</label>
                            <input
                                className="upload__input"
                                type="file"
                                name="audioimg"
                                accept="image/*"
                                onChange={(e) => {
                                    setAudioimg({...audioimg, audioimg: e.target.files[0]})
                                }}
                                required='required'
                            />

                            <textarea  cols="30" rows="10" placeholder='Audio Description' name="audioDescription" required="required" onChange={(e) => {
                                setAudiodescription({ audiodescription: e.target.value })
                            }}></textarea>
                            

                            <label htmlFor="file">Upload Audio</label>
                            <input
                                className="upload__input"
                                type="file"
                                name="file"
                                accept="audio/*"
                                onChange={(e) => {
                                    setFile({ ...file, file: e.target.files[0] });
                                }}
                                required='required'
                            />

                            <button className="upload__button" type="submit" onClick={(e) =>alert("Uploaded Successfully")}>
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default UploadMusic;