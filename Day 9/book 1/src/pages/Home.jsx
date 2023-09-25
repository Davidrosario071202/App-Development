import React from 'react';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
import store from '../Redux/Store';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <h1>D2H Bookstore</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/ProfilePage">Profile</Link></li>
            <li><Link to="/CartPage">Cart</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/Help">Help</Link></li>
          </ul>
        </nav>
      </header>

      <div className="poster-container">
        <div className="poster moving-poster">
          {/* Content of the moving poster 1 */}
          <h2>New Arrivals!</h2>
          <p>Discover the latest books in our collection.</p>
          <Link to="/new-arrivals" className="explore-button">Explore</Link>
        </div>

        <div className="poster moving-poster">
          {/* Content of the moving poster 2 */}
          <h2>Best Sellers!</h2>
          <p>Check out our top-rated books.</p>
          <Link to="/best-sellers" className="explore-button">Explore</Link>
        </div>

        <div className="poster moving-poster">
          {/* Content of the moving poster 3 */}
          <h2>Summer Reads!</h2>
          <p>Get ready for your summer reading list.</p>
          <Link to="/summer-reads" className="explore-button">Explore</Link>
        </div>

        <div className="poster moving-poster">
          {/* Content of the moving poster 4 */}
          <h2>Discounts!</h2>
          <p>Save big on selected books this season.</p>
          <Link to="/discounts" className="explore-button">Explore</Link>
        </div>
      </div>

      <main className="main-content">
        <div className="search-bar">
          <input placeholder="Search Books" className="search-input" type="text" />
          <button className="search-button">Search</button>
        </div>
      </main>

      <footer className="footer">
        <ul>
        <li><Link to="/terms">Terms and Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/Contact us">Contact Us</Link></li>
          
        </ul>
      </footer>
    </div>
  );
}

export default Home;
