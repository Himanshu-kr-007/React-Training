const Footer = () => {
    return (
        <footer className="footer bg-gray-800 border-2 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="section">
                    <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Menu</a></li>
                        <li><a href="#" className="hover:underline">Orders</a></li>
                        <li><a href="#" className="hover:underline">Profile</a></li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">FAQs</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="social-icons flex space-x-4">
                        <a href="#" className="hover:text-gray-400"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>

                <div className="section">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <div className="contact-info space-y-2">
                        <p>Address: 123 Food St, Food City, FC 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@foodapp.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
