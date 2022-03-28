import React from 'react';
import '../static/css/FeedOptions.css';
export default function FeedOptions({Icon,Title,color}) {
    return (
        <div className="feedOptions">
            <Icon style={{color:color}}/>
            <h4>{Title}</h4>
        </div>
    )
}
