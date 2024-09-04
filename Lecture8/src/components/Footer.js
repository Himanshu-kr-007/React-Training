const Footer = () => {
    return (
<footer className="footer">
        <div className="container">
            <div className="section">
                <h3>Navigation</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>

            <div className="section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>

            <div className="section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                </div>
            </div>

            <div className="section">
                <h3>Contact Us</h3>
                <div className="contact-info">
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