import React, { Component } from 'react';
import { Route, NavLink  } from 'react-router-dom';
import './Toolbar.css';
import Home from '../../Home/Home';
import Students from '../../Students/Students';

class Toolbar extends Component {
    render() {
        return (
        <div>
            <header className="toolbar"> 
                <nav>
                    <ul>
                        <li><NavLink to="/home"> Home </NavLink></li>
                        <li><NavLink to="/students">Students</NavLink></li>
                        <li><NavLink to="/lessons"> Lessons </NavLink></li>
                        <li><NavLink to="/fees"> Fees </NavLink></li>
                        <li><NavLink to="/help"> Help </NavLink></li>
                    </ul>
                </nav>
            </header>
                <div className="component">
                    <Route path="/home" exact component={Home} />
                    <Route path="/students" exact component={Students} />
                    {/* <Route path="/lessons" exact component={Lessons} />
                    <Route path="/fees" exact component={Fees} />
                    <Route path="/help" exact component={Help} /> */}
                </div>
        </div>
        )
    }
    
}

export default Toolbar;
