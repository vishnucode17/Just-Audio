import React from 'react';
import '../static/css/explore.css';
function ExploreLanguages (){
    return (
        <div className="Language_container">
        <h1>Choose your Language</h1>
        <div className="language">
        <a href="/audio_list/english">
            <div className="language-details">
                <h3>English</h3>
            </div>
            </a>
            <a href="/audio_list/hindi">
            <div className="language-details">
                <h3>हिन्दी</h3>
            </div>
            </a>
            <a href="/audio_list/telugu">
            <div className="language-details">
                <h3>తెలుగు</h3>
            </div>
            </a>
            <a href="/audio_list/kannada">
            <div className="language-details">
                <h3>ಕನ್ನಡ</h3>
            </div>
            </a>
        </div>
        </div>
    );
}
export default ExploreLanguages;