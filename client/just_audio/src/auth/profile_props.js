import React from 'react';
import axios from 'axios';
import ProfileView from './profile_view';

function ProfilePage() {
    const url="http://localhost:8000/login";
    return (
        <ProfileView username="Username" userbio="This is a bio of the account" n_followers="1B" n_following="17" n_audios="300"/>
    );
}
export default ProfilePage;