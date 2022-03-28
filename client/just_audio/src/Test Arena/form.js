import React from 'react';

function Form(props) {
    return (
        <>
            <div className="form-group">
                <form action="">
                    <label htmlFor="song_name">Song Name</label>
                    <input type="text" className="form-control" id="song_name" placeholder="Song Name" />
                    <label htmlFor="artist_name">Artist Name</label>
                    <input type="text" className="form-control" id="artist_name" placeholder="Artist Name" />
                    <label htmlFor="album_name">Album Name</label>
                    <input type="text" className="form-control" id="album_name" placeholder="Album Name" />
                    <label htmlFor="genre">Genre</label>
                    <input type="text" className="form-control" id="genre" placeholder="Genre" />
                    <label htmlFor="year">Year</label>
                    <input type="text" className="form-control" id="year" placeholder="Year" />
                    <label htmlFor="song_length">Song Length</label>
                    <input type="text" className="form-control" id="song_length" placeholder="Song Length" />
                    <label htmlFor="song_file">Song File</label>
                    <input type="text" className="form-control" id="song_file" placeholder="Song File" />
                    <label htmlFor="song_file_type">Song File Type</label>
                    <input type="text" className="form-control" id="song_file_type" placeholder="Song File Type" />
                    <label htmlFor="song_file_size">Song File Size</label>
                    <input type="text" className="form-control" id="song_file_size" placeholder="Song File Size" />
                    <label htmlFor="song_file_duration">Song File Duration</label>
                    <input type="text" className="form-control" id="song_file_duration" placeholder="Song File Duration" />
                    <label htmlFor="song_file_bitrate">Song File Bitrate</label>
                    <input type="text" className="form-control" id="song_file_bitrate" placeholder="Song File Bitrate" />
                    <label htmlFor="song_file_sample_rate">Song File Sample Rate</label>
                    <input type="text" className="form-control" id="song_file_sample_rate" placeholder="Song File Sample Rate" />
                    <label htmlFor="song_file_channels">Song File Channels</label>
                    <input type="text" className="form-control" id="song_file_channels" placeholder="Song File Channels" />
                    <label htmlFor="song_file_bit_depth">Song File Bit Depth</label>
                    <input type="text" className="form-control" id="song_file_bit_depth" placeholder="Song File Bit Depth" />
                </form>
                </div>
        </>
    )
}
export default Form;