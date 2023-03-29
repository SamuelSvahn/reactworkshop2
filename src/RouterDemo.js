import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const RouterDemo = () => {

    const Header = () => {
        return(<nav className='nav nav-pills nav-fill bg-dark text-white'>
            <li className='nav-item'>
                <Link className='nav-link' to="/" >Welcome</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/home" >Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/person" >Person</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/about" >About</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="" >NotFound</Link>
            </li>
            



        </nav>
        );

    }

    const Welcome = () =>{
        return <h3>Welcome</h3>
    }

    const Home = () =>{
        return <h3>Home</h3>
    }

    const Person = () =>{
        return <h3>Person</h3>
    }

    const About = () =>{
        return <h3>About</h3>
    }

    const NotFound = () =>{
        return <h3>NotFound</h3>
    }




    return (
        <div className='container'>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/person" component={Person}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="" component={NotFound}/>
                </Switch>

            </Router>
            
        </div>
    );
};

export default RouterDemo;