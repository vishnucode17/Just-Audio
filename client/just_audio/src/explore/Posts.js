import React from 'react';
import '../static/css/post.css';
import {Avatar} from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import FeedOptions from './FeedOptions';
export default function posts(props) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p>{props.timestamp}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{props.message}</p>
                <img src={props.image} alt="" className="post__image" />
            </div>
            <div className="post__buttons">
                <FeedOptions Icon={ThumbUpAltOutlinedIcon} Title="Like" color='grey' />
                <FeedOptions Icon={ChatOutlinedIcon}  Title="Comment" color='grey' />
                <FeedOptions Icon={ShareOutlinedIcon}  Title="Share" color='grey' />
                <FeedOptions Icon={SendRoundedIcon}  Title="Send" color='grey' />
            </div>
        </div>
    )
}
