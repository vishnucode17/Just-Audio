import React from 'react'
import '../static/css/sidebar.css';
import { Avatar } from '@material-ui/core';
export default function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1557683304-673a23048d34?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNvbGlkJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="" />
                <Avatar src="" className="sidebar__avatar" />
                <h2>Vishnu</h2>
                <h4>vishuvishnu1717@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statnumber">1,234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on the post</p>
                    <p className="sidebar__statnumber">2,434</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('coding')}
                {recentItem('fullstack')}
                {recentItem('ai')}
            </div>
        </div>
    )
}

