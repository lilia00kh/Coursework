import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import axios from 'axios';
import TextField from "@material-ui/core/TextField";
import Moment from "react-moment";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ContactUs from "./Email"
import emailjs from 'emailjs-com';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.Email = this.Email.bind(this);
        this.Name = this.Name.bind(this);
        this.Sername = this.Sername.bind(this);
        this.Gender = this.Gender.bind(this);
        this.Count = this.Count.bind(this);
        this.NumberOfDocument = this.NumberOfDocument.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user: [],
            email: '',
            name: '',
            sername: '',
            gender: '',
            count: 0,
            numberOfDocument: 0
        }

    }

    componentDidMount() {
        axios.post('http://localhost:5000/user/')
            .then(response => {
                this.setState({
                    wayTo: response.data.wayTo,
                    wayFrom: response.data.wayFrom,
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        // axios.get('http://localhost:5000/users/')
        //   .then(response => {
        //     if (response.data.length > 0) {
        //       this.setState({
        //         users: response.data.map(user => user.username),
        //       })
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })

    }

    Email(e) {
        console.log("hello1")
        this.setState({
            email: e.target.value
        })
    }

    Name(e) {
        console.log("hello2")
        this.setState({
            name: e.target.value
        })
    }
    Sername(e) {
        console.log("hello2")
        this.setState({
            sername: e.target.value
        })
    }
    Count(e) {
        console.log("hello2")
        this.setState({
            count: e.target.value
        })
    }
    Gender(e) {
        console.log("hello2")
        this.setState({
            gender: e.target.value
        })
    }
    NumberOfDocument(e) {
        this.setState({
            numberOfDocument: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        if ((this.state.numberOfDocument/100<10) && (this.state.numberOfDocument/100>=1))
        {
            return alert("Некоректний номер документа!")
        }
        const user = {
            email: this.state.email,
            name: this.state.name,
            sername: this.state.sername,
            gender: this.state.gender,
            count: this.state.count,
            numberOfDocument: this.state.numberOfDocument,
        }




    }
    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    render() {
        return (
           <div></div>
        )
    }
}