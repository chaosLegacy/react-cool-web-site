import React from 'react';
import { Fade, Slide } from 'react-reveal';
import Button from './Button';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="/videos/video.mp4" autoPlay loop muted />
            <Slide bottom>
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
            </Slide>

            <Fade top>
                <div className="hero-btns">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        GET STARTED
                    </Button>

                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                        WATCH TRAILER
                        <i className="far fa-play-circle"></i>
                    </Button>
                </div>
            </Fade>
        </div >
    )
}

export default HeroSection
