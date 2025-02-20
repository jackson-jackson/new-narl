import React from 'react';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
// import logo from './img/logo.png'

function Home() {
    return (
        <Jumbotron className='f1 box' style={{width: 'fit-content', margin: 'auto', marginTop:'25px'}}>
            <div className='home-jumbo'>
                <h1 style={{fontSize: '50px'}}>North American Racing League</h1>
                <h4>North Americas Finest Racing League.</h4>
                <br/>
                <p>
                    North American Racing League (NARL) is the NA's best racing league. Home of the friendliest, cleanest, and most importantly, the fastest drivers.
                    No matter your skill, you can find a home here with us.
                </p>
                <p>
                    Race times are 8pm CT every sunday following the Formula 1 calander.
                </p>
                <p>
                    Think you have what it takes? Apply to Drive!
                </p>
                <Button variant='warning'>Apply</Button>
                <p style={{fontSize:'10px'}}>Functionality pending</p>
                <br/>
                <br/>
                <br/>
                <h3>Already a driver and enjoing the close competition?<span style={{fontSize: '8px', marginLeft: '-5px'}}>and this gorgeous website</span></h3>
                <p>Please donate! All procedes will be put right back into the league!</p>
                <a href='https://www.paypal.com/donate?business=X8RLSA8DMG4VW&currency_code=USD' target='blank'><Button variant='warning'>Donate</Button></a>
            </div>
        </Jumbotron>
    )
}

export default Home;