// import React, {Component} from 'react';
// const { Component } = require("react");
//react elemnet
// let el =  <h1>hello my name is amit</h1>
// export default el;


/**
 * we can create component by using two ways  by using claass and by using function
 * we are creating component by using class 
 */

// class App extends Component {
//     render(){
//         return React.createElement('h1',null,'my name is anthony');
//     }
// }
// export default App;



/**
 * this is example of creating componet by using function component with props
 */
// import React from 'react';
// function Student(props){
//     return <><h1>this is functional component</h1>
//     <h2>this is second component{props.name}</h2>
//     </>
// }
// export default Student;


/**
 * this is example of creating componet by using class with props
 */
// import React, { Component } from 'react';
// class Student extends Component{
//     render(){
//     return <h1>This is functional Component {this.props.name}</h1>
//     }
// }
// export  default Student;


/**
 * this is example of composing the componet
 */
// import React from 'react';

// import Student from './Student';
// import Employee from './Employee';
// import Car from './Car';


// function App(){
//     return (
//         <div>
//             <Student name="amit"/>
//             <Student name="sumit"/>
//             <Student name="deepak"/>
//             <Employee />
//             <Car />
//         </div>
//     )
// }
// export default App;


