import React,{useState,useEffect} from 'react';
import FeedOptions from './FeedOptions';
import CreateIcon from '@material-ui/icons/Create';
import '../static/css/Feed.css';
import { Avatar } from '@material-ui/core';
import Post from './Posts';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
export default function Feed() {
    const [posts,setPosts]=useState([]);
    const [input,setInput]=useState("");
    
    const sendPost=(e)=>{
        e.preventDefault();
        
        
    }
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed_search_container">
                <Avatar src="" className="feed__avatar" />
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" placeholder="Start a post" value={input} onChange={e=>setInput(e.target.value)}/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                </div>
                <div className="feed_inputOptions">
                    <FeedOptions Icon={ImageIcon} Title='Photo' color='#70b5f9' />
                    <FeedOptions Icon={SubscriptionsIcon} Title='Video' color='#e7a33e' />
                    <FeedOptions Icon={EventIcon} Title='Event' color="#c0cbcd" />
                    <FeedOptions Icon={CalendarViewDayIcon} Title='Write article' color='#7fc15e' />
                </div>
            </div>
            {posts.map(({id,data:{name,description,message,photourl}})=>{
                return (<Post name={name} description={description} message={message} image={photourl} key={id} />)
            })}
            
        </div>
    )
}
