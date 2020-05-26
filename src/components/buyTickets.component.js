import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import axios from 'axios';
import TextField from "@material-ui/core/TextField";
import Moment from "react-moment";
import Contacts from "../pages/Contacts";


const Way = props => (
    <tr>
      <td>{props.way.wayFrom}</td>
      <td>{props.way.wayTo}</td>
      <td>{props.way.company}</td>
      <td>{props.way.departureTime}</td>
      <td>{props.way.arrivalTime}</td>
      <td><Moment format="YYYY/MM/DD">
        {props.way.date}
      </Moment></td>
      <td>{props.way.price}</td>
      <td>{props.way.currency}</td>
      <td><Link to={"/order"}>Вибрати</Link></td>
    </tr>
)


export default class EditGoods extends Component {
  constructor(props) {
    super(props);

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

    const way = {
      wayTo: this.state.wayTo,
      wayFrom: this.state.wayFrom
    }

    console.log(way);

    axios.post('http://localhost:5000/arrival/find', way )
        .then(response => {
          this.setState({ way: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    console.log(way);
    //window.location = '/';
  }

  WayList() {
    //console.log(this.state.departure)
    return this.state.way.map(currentWay => {
      return <Way way={currentWay} key={currentWay._id}/>;
    })
  }

  render() {
    return (
        <Router>
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <div>
            <TextField
                id="outlined-textarea"
                type="text"
                required
                label="Куди"
                placeholder="Країна,місто чи аеропорт"
                multiline
                variant="outlined"
                value={this.state.wayTo}
                onChange={this.WayTo}
            />
            <TextField
                id="outlined-textarea"
                type="text"
                required
                label="Звідки"
                placeholder="Країна,місто чи аеропорт"
                multiline
                variant="outlined"
                value={this.state.wayFrom}
                onChange={this.WayFrom}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Goods Log" className="btn btn-primary" />
        </div>
        {this.WayList()}
      </form>

    </div>
        </Router>
    )
  }
}