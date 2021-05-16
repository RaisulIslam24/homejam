import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import Reviews from '../Reviews/Reviews';
import UpcomingShows from '../UpcomingShows/UpcomingShows';
import './Home.css'

const Home = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <UpcomingShows></UpcomingShows>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;