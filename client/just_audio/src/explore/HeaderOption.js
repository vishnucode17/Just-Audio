import React from 'react'
import '../static/css/HeaderOption.css';
import {Avatar} from '@material-ui/core';
function HeaderOption({avatar,Icon,Title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="iconOption__icon" />}
            {avatar && <Avatar className="headerOption__icon" src={avatar} />}
            <h3 className="headerOption__title">{Title}</h3>
        </div>
    )
}
export default HeaderOption;