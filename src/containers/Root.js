import React, {Component} from 'react';
import {connect} from 'react-redux';

class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="App">

                <h1>React Redux</h1>

            </div>


        )
    }

}


function mapStateToProps(state) {
    return {
        state
    };
}

const RootConnect = connect(mapStateToProps)(Root);

export  default  RootConnect;