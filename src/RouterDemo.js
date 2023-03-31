import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CrudDemo from './CrudDemo';
import PersonDetails from './CrudDemo';
import { useForm } from 'react-hook-form';

const RouterDemo = () => {

    const Header = () => {
        return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
        <Link className='nav-link  text-white' to="/" ><h3>React</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
              <Link className='nav-link' to="/home" >Home</Link>
              </li>
              <li className="nav-item">
              <Link className='nav-link' to="/person" >Person</Link>
              </li>
              <li className="nav-item">
              <Link className='nav-link' to="/about" >AboutUs</Link>
              </li>
              <li className="nav-item">
              <Link className='nav-link' to="/crud" >Crud</Link>
              </li>
              
            </ul>
          </div>
        </div>
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
        return <div className='container'>
        <h4>404 - ComponentNotFound</h4>

    </div>
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