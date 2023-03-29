import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'; 
import RouterDemo from './RouterDemo';



const greetingMessage = <div>Hello React!</div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterDemo/>);