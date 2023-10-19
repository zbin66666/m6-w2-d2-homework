import React from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends React.Component {

    state = {
        count:0
    }

    increment =() => {
        /*this.setState ({
            count: this.state.count + 1
        }); */

        this.props.dispatch({ type:'INCREMENT'});

    }
    decrement = () => {
        /*this.setState ({
            count: this.state.count - 1 
        }); */
        this.props.dispatch({ type: 'DECREMENT'});
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET'});
    }
    render () {
        return(
            <div>
                <h2 className="bg-primary center-align mg-2">
                    Counter
                </h2>

                <div className="mg-1">
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button className="bg-danger" onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }
}

//mapStateToProps function

function mapStateToProps (state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);