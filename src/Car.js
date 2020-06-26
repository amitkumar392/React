//car component
// import React from 'react';

// function Car(){
//     return <h1>this is car component</h1>
// }
// export default Car;


/**
 * this is child component for Employee
 * to perform static getDerivedStateFromProps method
 */

 import React, { Component } from 'react'
 
 export default class Car extends Component {
     constructor(props){
         super(props)
         this.state={
             mroll:props.mroll

         }
     }
     static getDerivedStateFromProps(props,state){
         if(props.mroll !== state.mroll){
             return {mroll:props.mroll}
         }
         return null;
     }
     render() {
         return (
             <div>
                 <h2>this is Car child Component</h2>
         <h3>{this.state.mroll}</h3>
             </div>
         )
     }
 }
 