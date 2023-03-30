import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CrudDemo from './CrudDemo';
import PersonDetails from './CrudDemo';
import { useForm } from 'react-hook-form';

const RouterDemo = () => {

    const Header = () => {
        return(<nav className='nav bg-dark text-white'>
            <li className='nav-item'>
                <Link className='nav-link  text-white' to="/" >React</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/home" >Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/person" >Person</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/about" >AboutUs</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/crud" >Crud</Link>
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
                    <Route exact path="/crud" component={CrudDemo}/>
                    <Route path="/details/:id" component={PersonDetails} />

                    <Route exact path="" component={NotFound}/>
                </Switch>

            </Router>
            
        </div>
    );
};

export default RouterDemo;