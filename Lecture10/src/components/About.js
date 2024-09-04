import Owner from "./Owner";
import OwnerClass from "./OwnerClass";
import React from "react";
import 'tailwindcss/tailwind.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false,
        };
    }

    // Toggle dark mode
    toggleDarkMode = () => {
        this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
    };

    render() {
        const { darkMode } = this.state;
        return (
            <div className={`about-container p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition duration-300 min-h-screen`}>
                <div className="about-header text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">About Us - Class Component</h1>
                    <p className="text-lg">Your favorite food delivered hot and fresh</p>
                    <button 
                        className={`mt-4 px-4 py-2 rounded ${darkMode ? "bg-gray-700 text-white" : "bg-blue-500 text-white"} hover:opacity-80 transition duration-300`}
                        onClick={this.toggleDarkMode}
                    >
                        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    </button>
                </div>
                <div className="about-content space-y-8">
                    <section className={`about-section p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"} transition duration-300`}>
                        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                        <p>
                            Established in 2020, FoodApp was born out of a passion for food and a desire to bring the best
                            culinary experiences right to your doorstep. We started as a small startup and have grown
                            into a beloved service, connecting food lovers with their favorite restaurants.
                        </p>
                    </section>
                    <section className={`about-section p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"} transition duration-300`}>
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p>
                            Our mission is simple: to make food ordering easy, convenient, and enjoyable. We strive to offer
                            a diverse selection of cuisines, timely deliveries, and excellent customer service. We believe
                            that good food can bring people together and create memorable moments.
                        </p>
                    </section>
                    <section className={`about-section p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"} transition duration-300`}>
                        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Quality: We partner with top-rated restaurants to ensure the best food experience.</li>
                            <li>Convenience: Our user-friendly app makes it easy to order food anytime, anywhere.</li>
                            <li>Customer Satisfaction: We prioritize our customers and their feedback to constantly improve.</li>
                            <li>Innovation: We continuously evolve to bring new features and better services to our users.</li>
                        </ul>
                    </section>
                    <section className={`about-section p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"} transition duration-300`}>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p>If you have any questions or feedback, we'd love to hear from you!</p>
                        <p>Email: contact@foodapp.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </section>
                </div>
                <OwnerClass name={"Harsh Kumar"} Designation={"COO"} Phone={"+919876543210"} />
            </div>
        );
    }
}

export default About;
