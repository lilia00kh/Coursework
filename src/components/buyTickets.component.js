import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import axios from 'axios';
import TextField from "@material-ui/core/TextField";
import Moment from "react-moment";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";


const Way = props => (
    <AppBar position="static" color="default" style={{ backgroundColor: 'theme.palette.background.paper',
        width: '100%',
        minHeight: '0px',
        margin:'10px'
    }}>

    <tr style={{padding:'20px' ,position: 'relative',}}>
      <td style={{padding:'20px' }}><p style={{textDecoration: 'underline'}}>Куди:</p> {props.way.wayTo}</td>
      <td style={{padding:'20px' }}> <p style={{textDecoration: 'underline'}}>Звідки:</p> {props.way.wayFrom} </td>
        <td style={{padding:'20px' }}> <p style={{textDecoration: 'underline'}}>Компанія:</p> {props.way.company} </td>
        <td style={{padding:'20px' }}><p style={{textDecoration: 'underline'}}> Час відльоту:</p> {props.way.departureTime} </td>
      <td style={{padding:'20px' }}><p style={{textDecoration: 'underline'}}> Час прильоту: </p>{props.way.arrivalTime} </td>
      <td style={{padding:'20px' }}><p style={{textDecoration: 'underline'}}> Дата: </p><Moment format="YYYY/MM/DD">
        {props.way.date}
      </Moment> </td>
      <td style={{padding:'20px' }}><p style={{textDecoration: 'underline'}}> Ціна:</p> {props.way.price} {props.way.currency} </td>
      <td style={{padding:'20px'}}> <Button variant="contained" color="primary" style={ {  padding: '10px', margin: '25px',width:'150px',backgroundColor: 'white', text:'white'}}  > <Link to={"/order/"+props.way.id}>Вибрати</Link>      </Button>   </td>
    </tr>
    </AppBar>
)


export default class BuyTickets extends Component {
  constructor(props) {
    super(props);
    //   const useStyles = makeStyles((theme) => ({
    //       root: {
    //           '& > *': {
    //
    //           },
    //       },
    //   }));
    // const classes = useStyles();
    this.WayTo = this.WayTo.bind(this);
    this.WayFrom = this.WayFrom.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      way: [],
      wayTo: '',
      wayFrom: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/arrival/')
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

  WayTo(e) {
    console.log("hello1")
    this.setState({
      wayTo: e.target.value
    })
  }

  WayFrom(e) {
    console.log("hello2")
    this.setState({
      wayFrom: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.wayTo)

    const way = {
      wayTo: this.state.wayTo,
      wayFrom: this.state.wayFrom
    }

      if (this.state.wayTo !=="Львів") {
          axios.post('http://localhost:5000/arrival/find', way)
              .then(response => {
                  this.setState({way: response.data})
              })
              .catch((error) => {
                  console.log(error);
              })
          console.log(way);
      }
      else{
          axios.post('http://localhost:5000/departure/find', way)
              .then(response => {
                  this.setState({way: response.data})
              })
              .catch((error) => {
                  console.log(error);
              })
      }


  }


  WayList() {
          return this.state.way.map(currentWay => {
              return <Way way={currentWay} key={currentWay._id}/>;
          })

  }

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmit} >
        <div className="form-group" id="#h">
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="outlined-textarea"
                        type="text"
                        required
                        label="Куди"
                        placeholder="Країна,місто чи аеропорт"
                        variant="outlined"
                        value={this.state.wayTo}
                        onChange={this.WayTo}
                        style={ {  padding: '10px', margin: '10px',width:'200px'}}
                    />
                    <TextField
                        id="outlined-textarea"
                        type="text"
                        required
                        label="Звідки"
                        placeholder="Країна,місто чи аеропорт"
                        variant="outlined"
                        value={this.state.wayFrom}
                        onChange={this.WayFrom}
                        style={ {  padding: '10px', margin: '10px',width:'200px'}}
                    />

                        <input type="submit" value="Знайти" className="btn btn-primary" style={ {  padding: '10px', margin: '25px',width:'150px',backgroundColor: 'cornflowerblue'}}/>
                </form>
            </div>
        </div>

          {this.WayList()}

      </form>

    </div>
    )
  }
}