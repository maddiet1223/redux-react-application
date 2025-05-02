import React from 'react';
import { connect } from 'react-redux';


//Action
function incrementCounter(num){
    return { 
        type: 'INCREMENT',
        num: num
      } 
}



const Counter = (props) => {
    function incrementClick() {
        props.incrementCounter(1);
    }
    return (
        <div>
            <p>{props.count}</p>
            <button onClick={incrementClick}>Increment</button>
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
    incrementCounter
}

//connect


export default connect(mapStateToProps, mapDispatchToProps)(Counter);