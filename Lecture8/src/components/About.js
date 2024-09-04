import Owner from "./Owner";
import OwnerClass from "./OwnerClass";
import React, { Component } from "react";

// import React from "react";
// import {Component} from "react";
// class About extends Component

// Creating Class Based Component
class About extends React.Component {
    constructor (props) {
        super(props);

    }
    componentDidMount() {
    }

    render() {
        return (
            <div className="about-container">
                {/* <Owner name={"Himanshu Kumar"} Designation={"CEO"}/> */}
                <div className="about-header">
                    <h1>About Us - Class Component</h1>
                    <p>Your favorite food delivered hot and fresh</p>
                </div>
                <div className="about-content">
                    <section className="about-section">
                        <h2>Our Story</h2>
                        <p>
                            Established in 2020, FoodApp was born out of a passion for food and a desire to bring the best
                            culinary experiences right to your doorstep. We started as a small startup and have grown
                            into a beloved service, connecting food lovers with their favorite restaurants.
                        </p>
                    </section>
                    <section className="about-section">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is simple: to make food ordering easy, convenient, and enjoyable. We strive to offer
                            a diverse selection of cuisines, timely deliveries, and excellent customer service. We believe
                            that good food can bring people together and create memorable moments.
                        </p>
                    </section>
                    <section className="about-section">
                        <h2>Our Values</h2>
                        <ul>
                            <li>Quality: We partner with top-rated restaurants to ensure the best food experience.</li>
                            <li>Convenience: Our user-friendly app makes it easy to order food anytime, anywhere.</li>
                            <li>Customer Satisfaction: We prioritize our customers and their feedback to constantly improve.</li>
                            <li>Innovation: We continuously evolve to bring new features and better services to our users.</li>
                        </ul>
                    </section>
                    <section className="about-section">
                        <h2>Contact Us</h2> 
                        <p>If you have any questions or feedback, we'd love to hear from you!</p>
                        <p>Email: contact@foodapp.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </section>
                </div>
            <OwnerClass name={"Harsh Kumar"} Designation={"COO"} Phone={"+919876543210"}/>
            </div>
        );
    }
}


// const About = () => {
//     return (
//         <div className="about-container">
//             <Owner name={"Himanshu Kumar"} Designation={"CEO"}/>
//             <OwnerClass name={"Harsh Kumar"} Designation={"COO"} Phone={"+919876543210"}/>
//             <div className="about-header">
//                 <h1>About Us</h1>
//                 <p>Your favorite food delivered hot and fresh</p>
//             </div>
//             <div className="about-content">
//                 <section className="about-section">
//                     <h2>Our Story</h2>
//                     <p>
//                         Established in 2020, FoodApp was born out of a passion for food and a desire to bring the best
//                         culinary experiences right to your doorstep. We started as a small startup and have grown
//                         into a beloved service, connecting food lovers with their favorite restaurants.
//                     </p>
//                 </section>
//                 <section className="about-section">
//                     <h2>Our Mission</h2>
//                     <p>
//                         Our mission is simple: to make food ordering easy, convenient, and enjoyable. We strive to offer
//                         a diverse selection of cuisines, timely deliveries, and excellent customer service. We believe
//                         that good food can bring people together and create memorable moments.
//                     </p>
//                 </section>
//                 <section className="about-section">
//                     <h2>Our Values</h2>
//                     <ul>
//                         <li>Quality: We partner with top-rated restaurants to ensure the best food experience.</li>
//                         <li>Convenience: Our user-friendly app makes it easy to order food anytime, anywhere.</li>
//                         <li>Customer Satisfaction: We prioritize our customers and their feedback to constantly improve.</li>
//                         <li>Innovation: We continuously evolve to bring new features and better services to our users.</li>
//                     </ul>
//                 </section>
//                 <section className="about-section">
//                     <h2>Contact Us</h2> 
//                     <p>If you have any questions or feedback, we'd love to hear from you!</p>
//                     <p>Email: contact@foodapp.com</p>
//                     <p>Phone: (123) 456-7890</p>
//                 </section>
//             </div>
//         </div>
//     );
// }
export default About;
