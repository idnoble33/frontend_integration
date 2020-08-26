// import React, { Component } from 'react';
// import axios from 'axios';

// export default class Workers extends Component {
//   constructor(props){
//     super(props)

//     this.state ={
//       workers: []
//     };
//   };
//   componentDidMount(){
//     axios
//     .get(`https://www.hatchways.io/api/assessment/workers/${this.props.workOrderData.workerId}`)
//     .then((response)=>{
//       console.log(response)
//       this.setState({
//         workers: response.data
//       });
//     })
//     .catch((error) => {
//         console.log(error)
//       })
//   }
 
//   render() {
   
//     return (
//       // <div className="order_table">
//       //   <div className="order_row">
//       <div className="container">
//         {/* {this.state.workOrderData.map(work => 
//         <ul key={work.id}>
//         <li>
//          <div className="order_detail">
//          <div>{work.name}</div>
//          <div>{work.description}</div>
//          <div>{work.deadline}</div>
//          </div>
//          </li>
//         </ul> 
//         )} */}
//        </div>
      
      
//     )
//   }
// }

