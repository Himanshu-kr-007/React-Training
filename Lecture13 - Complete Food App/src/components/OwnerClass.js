import React, { Component } from "react";

// Class Based Component
class OwnerClass extends Component {
  constructor(props) {
    super(props);
    // console.log("Child Constructor Called");

    // Creating State Variables in Class Component
    this.state = {
      userInfo: {
        name: "User - Name",
        avatar_url: "Default Avatar"
      }
    };
  }

  // To make an API Call we use componentDidMount
  async componentDidMount() {
    // console.log("Child componentDidMount Called");
    const data = await fetch("https://api.github.com/users/Himanshu-kr-007");
    const json = await data.json();

    this.setState({
      userInfo: json
    });
    // console.log(json);
  }

  // componentDidUpdate() {
  //   console.log("Child Component Did Update");
  // }

  // This Will Called when we go to next page
  // componentWillUnmount() {
  //   console.log("Child Component will Unmount will called");
  // }

  render() {
    // console.log("Child Render Called");
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className="owner-card my-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 hover:shadow-2xl transition duration-300 transform hover:scale-105">
        <img src={avatar_url} alt={`${name}'s avatar`} className="owner-photo w-24 h-24 rounded-full ring-2 ring-indigo-500" />
        <div>
          <h2 className="owner-name text-xl font-semibold text-gray-900">{name}</h2>
        </div>
      </div>
    );
  }
}

export default OwnerClass;
