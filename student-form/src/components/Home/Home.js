import React from 'react';
import Auxi from '../../hoc/Auxi';

const Home = (props) => {
        return (
            <Auxi>
                <h1>Welcome to Student Application</h1>
                <p> Home component Works! </p>
                <button>Click here</button>
                {/* <input value="username" type="text"></input> */}
            </Auxi>
        )
    
}

export default Home;