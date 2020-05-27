import React , {Component} from "react";
import axios from 'axios'
import '../sass/index.css'

export default class Order extends Component{
    constructor(props) {

        super(props);

        this.state = {
            code: 0,
            shipsname: '',
            mass: 0,
            ships: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/arrival/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    code: response.data.code,
                    shipsname: response.data.shipsname,
                    mass: response.data.mass,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
            return(
                <div className="wrapper container-fluid">
                    <div className="row mainPart">
                        <div className="col">
                            <h3 id="2">Оформіть замовлення</h3>
                        </div>
                    </div>
                </div>
            )
    }


}
