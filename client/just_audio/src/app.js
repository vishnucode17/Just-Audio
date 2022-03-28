import React from 'react';
import Header from './Home/header';
import Intro from './Home/intro';
import Explore from './explore/Explore';
import Login from './auth/login';
import UploadMusic from './upload/upload_music';
import Signup from './auth/signup';
import Footer from './Home/footer';
import ProfileView from './auth/profile_props';
import Upload from './upload/upload';
import Audio from './upload/audio';
import AudioList from './explore/audio_list';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExploreLanguages from './explore/ExploreLanguages';
function App() {
    return (
        <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/play" element={<ExploreLanguages />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/upload" element={<UploadMusic />} />
                <Route path="/profile" element={<ProfileView />} />
                <Route path="/audio/:filename" element={<Audio/>} />
                <Route path="/audio_list/:language" element={<AudioList/>} />
            </Routes>
            {/* <Footer /> */}

        </Router>
        {/* <Router>
            <Header />
                <Switch>
                    <Route exact path="/">
                        
                        <Intro />
                    </Route>
                    <Route exact path="/play">
                       
                        <Test />
                    </Route>
                </Switch>


            </Router> */}
        </>
    );
}
export default App;