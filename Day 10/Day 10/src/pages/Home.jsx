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
        <div className="poster moving-poster" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/pile-colorful-books_23-2147767726.jpg?size=626&ext=jpg&ga=GA1.1.935352241.1695635298&semt=ais")' }}>
          <h2>New Arrivals!</h2>
          <p>Discover the latest books in our collection.</p>
          <Link to="/new-arrivals" className="explore-button">Explore</Link>
        </div>

        <div className="poster moving-poster" style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1460007248/photo/library-research-and-row-of-books-on-bookshelf-for-reading-knowledge-and-educational-learning.jpg?s=2048x2048&w=is&k=20&c=7ND5fA6MU0oj9eRM-jJ-KvJAOXeM8zfJ_iRaZ1qjrHg=")' }}>
          <h2>Best Sellers!</h2>
          <p>Check out our top-rated books.</p>
          <Link to="/best-sellers" className="explore-button">Explore</Link>
        </div>

        <div className="poster moving-poster" style={{ backgroundImage: 'url("https://media.istockphoto.com/id/501794256/photo/book-books-piledbooks.jpg?s=612x612&w=0&k=20&c=OJfqQCKCzT2PBUxPEa17DOs3vyaDJzAsmwUkh5LTFyA=")' }}>
          <h2>Summer Reads!</h2>
          <p>Get ready for your summer reading list.</p>
          <Link to="/summer-reads" className="explore-button">Explore</Link>
        </div>

        <div className="poster moving-poster" style={{ backgroundImage: 'url("https://www.shutterstock.com/shutterstock/photos/2227936693/display_1500/stock-vector-promo-sale-banner-for-library-bookshop-and-bookstore-a-large-number-of-books-stacked-in-piles-2227936693.jpg")' }}>
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
