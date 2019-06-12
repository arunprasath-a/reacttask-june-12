import React from "react";
import { connect } from "react-redux";
import "../css/testpage.css";
import {IncNumber,DecNumber} from "../store/actions/actions";


import { bindActionCreators } from 'redux'

//const DummyComp = () => <div>{this.props.dummy}</div>


class TestPagePageComponent2 extends React.Component {

    // constructor(props) {
    //     super(props);

    // }

    static getDerivedStateFromError() {
        return null
    }
    componentWillMount() {
        console.log("child component will mount");
        console.log("--------------");

    }

    componentDidMount() {
        console.log("child component did mount");
        console.log("--------------");
    }

    componentDidUpdate() {
        console.log(" child component did update");
        console.log("--------------");
    }

    componentWillUnmount() {
        console.log("child component will unmount");
        console.log("--------------");
    }

    shouldComponentUpdate(nextprops, nextstate) {
        console.log("child should comp update")
        console.log("--------------");
        if (nextprops.ignoreprop &&
            this.props.ignoreprop !== nextprops.ignoreprop) {
            console.log("child should comp update--do not render")
            return false;

        }
        console.log("child should comp update-- render")
        return true;

    }


    componentDidCatch(error, info) {
        console.log("did catch")
    }

    render() {
        console.log("child rendering started");
        console.log("--------------");
        return (

            <React.Fragment>
                <h1 className="TestPageh1">Test Page {this.props.username}</h1>
                <div><span>Number:{this.props.counter}</span></div>
                <button onClick={this.props.IncNumber}>increase</button>
                <button onClick={this.props.DecNumber}>decrease</button>
                
            </React.Fragment>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        username: state.mainReducer.userName,
        counter: state.mainReducer.counter,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         inc: () => dispatch({ type: "ON_INC" }),
//         dec: () => dispatch({ type: "ON_DEC" }),
//     }
// }


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({ 
        IncNumber: IncNumber,
        DecNumber:DecNumber
    },dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TestPagePageComponent2);