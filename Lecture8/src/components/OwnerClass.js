import React, { Component } from "react";

// Class Based Component
class OwnerClass extends Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor Called")

    // Creating State Variables in Class Component
    this.state = {
      // count1: 1,
      // count2: 2,

      userInfo: {
        name: "User - Name",
        avatar_url: "Default Avatar"
      }
    };
  }

  // Method to handle count increment
  incrementCounts = () => {
    this.setState((prevState) => ({
      count1: prevState.count1 + 1,
      count2: prevState.count2 + 1
    }));
  };

  // To make an API Call we use ComponentDidMount
  async componentDidMount() {
    console.log("Child componentDidMount Called")
    const data = await fetch("https://api.github.com/users/Himanshu-kr-007");
    const json = await data.json();
     
    this.setState({
      userInfo: json
    });
    console.log(json);
  }

  componentDidUpdate(){
    console.log("Child Component Did Update")
  }

  // This Will Called when we go to next page
  componentWillUnmount(){
    console.log("Child Comonent will Unmount will called")
  }

  render() {
    console.log("Child Render Called")
    // Destructuring the Props
    // const { name1, Designation, Phone } = this.props;
    // const { count1, count2 } = this.state;
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className="owner-card">
        {/* <img src= alt={`${owner.name}'s photo`} className="owner-photo" /> */}
        <h2 className="owner-name">{name}</h2>
        {/* <p className="owner-title">{Designation}</p> */}
        {/* <p className="owner-Phone">{Phone}</p> */}
        {/* <p className="owner-count">Class Based Component State Variable Count 1: {count1}</p> */}
        {/* <p className="owner-count">Class Based Component State Variable Count 2: {count2}</p> */}
        {/* <button onClick={this.incrementCounts}>Increment Counts by 1</button> */}
        <img src={avatar_url} alt={`${name}'s avatar`} className="owner-photo"/>
      </div>
    );
  }
}

export default OwnerClass;
