import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {

    state = {
        count:0
    }

    increament =() => {
        /*this.setState ({
            count: this.state.count + 1
        }); */

        this.props.dispatch({ type:'INCREMENT'});

    }
    decreament = () => {
        /*this.setState ({
            count: this.state.count - 1 
        }); */
        this.props.dispatch({ type: 'DECREMETN'});
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET'});
    }
    render () {
        return(
            <div>
                <h2>
                    Counter
                </h2>

                <div>
                    <span>{this.props.count}</span>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.reset}>reset</button>
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