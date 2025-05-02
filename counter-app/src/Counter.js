import React from 'react';
import { connect } from 'react-redux';


//Action
function incrementCounter(num){
    return { 
        type: 'INCREMENT',
        num: num
      } 
}

function decrementCounter(num){
    return { 
        type: 'DECREASE',
        num: num
      } 
}



const Counter = (props) => {
    function incrementClick() {
        props.incrementCounter(1);
    }

    function decreaseClick() {
        props.decrementCounter(3);
    }
    return (
        <div>
            <p>{props.count}</p>
            <button onClick={incrementClick}>Increment</button>
            <button onClick={decreaseClick}>Decrement</button>
        </div>
    )
}



//mapStateToProps
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

//mapDispatchToProps    
const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
}

//connect


export default connect(mapStateToProps, mapDispatchToProps)(Counter);