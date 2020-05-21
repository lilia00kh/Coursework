import React, { Component } from 'react';
import axios from 'axios';

const Arrival = props => (
    <tr>
        <td>{props.arrival.time}</td>
        <td>{props.arrival.company}</td>
        <td>{props.arrival.way}</td>
    </tr>
)

export default class ArrivalList extends Component {
    constructor(props) {
        super(props);

        this.deleteArrival = this.deleteArrival.bind(this)

        this.state = {arrival: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/arrival/')
            .then(response => {
                this.setState({ arrival: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteArrival(id) {
        axios.delete('http://localhost:5000/arrival/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            arrival: this.state.arrival.filter(el => el._id !== id)
        })
    }

    arrivalList() {
        console.log(this.state.arrival)
        return this.state.arrival.map(currentarrival => {
            return <Arrival arrival={currentarrival} deleteArrival={this.deleteArrival} key={currentarrival._id}/>;
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
                    { this.arrivalList() }
                    </tbody>
                </table>
            </div>
        )
    }
}