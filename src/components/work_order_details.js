import React, { Component } from "react";
import axios from "axios";
// import Workers from "./wokers";

export default class WorkOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workOrderData: [],
      workerData: "",
      allworkerId: "",
      search: "",
    };
  }
  updateSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  async componentDidMount() {
    axios
      .get(`https://www.hatchways.io/api/assessment/work_orders`)
      .then(async (response) => {

        let workerIdAlreadySeen = [];

        for (let i = 0; i < response.data.orders.length; i++) {
          let wokerIdValue = response.data.orders[i].workerId;
          if (workerIdAlreadySeen.indexOf(wokerIdValue) == -1) {
            //return true;
            workerIdAlreadySeen.push(wokerIdValue);

          }
        }
        orders = [{
          name: "asdf",
          workerId: 4
        }]
        let t = [1,2,3,4]

        let allWorkOrderDetails = {
          1: {

          },
          2: axios.get('asdfasdf')

        };
        for (let i = 0; i < workerIdAlreadySeen.length; i++) {

        }

       

        
        this.setState({
          workOrderData: response.data.orders,
        });
        
      })
      .then((response) => {
        this.setState({
          workerData: response.data.worker,
        });
      })
      .catch((error) => {
      });
  }

  render() {
    let workerIdD = this.state.workerData;
    let workerOrder = this.state.workOrderData;
    let workerFilter = this.state.workOrderData.filter((work) => {
      return (
        work.name
          .toLowerCase()
          .indexOf(this.state.search.toLocaleLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <div>
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>

        {workerOrder.map((work) => (
          <ul key={work.id}>
            <li>
              <div className="order_detail">
                <h5>{work.name}</h5>
                <hr className="new1"></hr>
                <hr className="new2"></hr>
                <hr className="new3"></hr>
                <div>worker Detail: 4</div>
                {/* <p>{work.description}</p>
                <p>{work.deadline}</p> */}
              </div>
            </li>
          </ul>
        ))}

        {Object.keys(workerIdD).map((oneKey, i) => (
          <li key={i}>{workerIdD[oneKey]}</li>
        ))}
      </div>
    );
  }
}
