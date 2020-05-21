import React, { Component } from 'react';
import axios from 'axios';

const Departure = props => (
    <tr>
        <td>{props.departure.time}</td>
        <td>{props.departure.company}</td>
        <td>{props.departure.way}</td>
    </tr>
)

export default class DepartureList extends Component {
    constructor(props) {
        super(props);

        this.deleteDeparture = this.deleteDeparture.bind(this)

        this.state = {departure: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/departure/')
            .then(response => {
                this.setState({ departure: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteDeparture(id) {
        axios.delete('http://localhost:5000/departure/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            departure: this.state.departure.filter(el => el._id !== id)
        })
    }

    departureList() {
        console.log(this.state.departure)
        return this.state.departure.map(currentdeparture => {
            return <Departure departure={currentdeparture} deleteDeparture={this.deleteDeparture} key={currentdeparture._id}/>;
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Час</th>
                        <th>Компанія</th>
                        <th>Напрямок</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.departureList() }
                    </tbody>
                </table>
            </div>
        )
    }
}