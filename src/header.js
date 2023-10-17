import React from 'react';
import './header.css';

export default function Header() {
    return(
        <div className='header' id='home'>
            <div className='header-left'>
                <div className='header-left-wrapper'>
                    <h2 className='header-intro'>Hello, My name is</h2>
                    <br/>
                    <h1 className='header-name'>Emily Nguyen</h1>
                    <br/>
                    <div className='header-title'>
                        <div className='header-title-wrapper'>
                            <div className='header-title-item'>Some of My Favorite Things...</div>
                            <div className='header-title-item'>Sushi</div>
                            <div className='header-title-item'>Travel</div>
                            <div className='header-title-item'>Design</div>
                            <div className='header-title-item'>Movies</div>
                        </div>
                    </div>
                    <br/>
                    <p className='header-about'>
                        I am a current senior studying computer science at the University of Michigan!
                    </p>
                </div>
            </div>
        </div>
    );
}