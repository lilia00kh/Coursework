import React , {Component} from "react";
import axios from 'axios'
import '../sass/index.css'
//import Login from "../Todo/Login";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";

export default class Order extends Component{
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
            count: 1,
            numberOfDocument: '',
            idWay:''
        }

    }

    componentDidMount() {



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
        if ((this.state.numberOfDocument/1000)<=1 || (this.state.numberOfDocument/1000)>=9)
        {
            return alert("Некоректний номер документа!")
        }
        if ((this.state.count)<1 )
        {
            return alert("Кількість квитків повинна бути більна за 0!")
        }
        const user = {
            email: this.state.email,
            name: this.state.name,
            sername: this.state.sername,
            gender: this.state.gender,
            count: this.state.count,
            numberOfDocument: this.state.numberOfDocument,
            idWay:this.props.match.params.id
        }

        axios.post('http://localhost:5000/order/', user)
            .then(response => {
                this.setState({
                    wayTo: response.data.wayTo,
                    wayFrom: response.data.wayFrom,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.post('http://localhost:5000/arrival/update', user)
            .then(console.log("Update"))
            .catch(function (error) {
                console.log(error);
            })
        axios.post('http://localhost:5000/departure/update', user)
            .then(console.log("Update"))
            .catch(function (error) {
                console.log(error);
            })
        alert("Бронювання успішно виконано!")
        window.location = '/';
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
            return(
                <div className="wrapper container-fluid" id="the-hash">
                    <div className="row mainPart">
                        <div className="col">
                            <h3 id="2">Оформіть замовлення</h3>
                            <div>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <div>
                                            <form className="contact-form" onSubmit={this.sendEmail}>
                                                <TextField
                                                    id="outlined-textarea"
                                                    type="email"
                                                    required
                                                    label="Email"
                                                    placeholder="email"
                                                    variant="outlined"
                                                    value={this.state.email}
                                                    onChange={this.Email}
                                                    style={ {  padding: '10px', margin: '10px',width:'200px'}}
                                                />
                                                <TextField
                                                    id="outlined-textarea"
                                                    type="text"
                                                    required
                                                    label="Ім'я"
                                                    placeholder="Ім'я"
                                                    variant="outlined"
                                                    value={this.state.name}
                                                    onChange={this.Name}
                                                    style={ {  padding: '10px', margin: '10px',width:'200px'}}
                                                />
                                                <TextField
                                                    id="outlined-textarea"
                                                    type="text"
                                                    required
                                                    label="Прізвище"
                                                    //placeholder="Прізвище"
                                                    variant="outlined"
                                                    value={this.state.sername}
                                                    onChange={this.Sername}
                                                    style={ {  padding: '10px', margin: '10px',width:'200px'}}
                                                />
                                                <TextField
                                                    id="outlined-textarea"
                                                    type="number"
                                                    required
                                                    label="Кількість"
                                                    placeholder="Кількість"
                                                    variant="outlined"
                                                    value={this.state.count}
                                                    onChange={this.Count}
                                                    style={ {  padding: '10px', margin: '10px',width:'200px'}}
                                                />
                                                <TextField
                                                    id="outlined-textarea"
                                                    type="number"
                                                    required
                                                    label="Номер документа"
                                                    //placeholder="Номер документа"
                                                    variant="outlined"
                                                    value={this.state.numberOfDocument}
                                                    onChange={this.NumberOfDocument}
                                                    style={ {  padding: '10px', margin: '10px',width:'200px'}}
                                                />
                                                <input type="submit"  value="Забронювати" className="btn btn-primary" style={ {  padding: '10px', margin: '25px',width:'150px',backgroundColor: 'cornflowerblue'}} />
                                            </form>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            )
    }


}
