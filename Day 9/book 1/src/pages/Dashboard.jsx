import React from 'react';
import '../assets/css/Dashboard.css';
import store from '../Redux/Store';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="user-dashboard-container">
      <header className="user-dashboard-header">
        <div className="user-info">
          <img
            src="https://cdn.pixabay.com/photo/2014/03/25/16/32/user-297330_640.png"
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-details">
            <h1 className="welcome-text">Welcome, {store.getState().email}</h1>
            <p>Email: {store.getState().email}@example.com</p>
          </div>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="user-dashboard-content">
        <section className="dashboard-section orders">
          <h2>Your Orders</h2>
          <div className="order-list">
            <div className="order-item">
              <p>Order 1</p>
              <p>Date: 2023-09-30</p>
              <p>Total: $50.00</p>
              <button className="order-details-button">View Details</button>
            </div>
            <div className="order-item">
              <p>Order 2</p>
              <p>Date: 2023-09-28</p>
              <p>Total: $65.00</p>
              <button className="order-details-button">View Details</button>
            </div>
          </div>
        </section>

        <section className="dashboard-section account-details">
          <h2>Account Details</h2>
          <div className="account-info">
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
            <button className="edit-account-button">Edit Account</button>
          </div>
        </section>

        <section className="dashboard-section payment-details">
          <h2>Payment Details</h2>
          <div className="payment-info">
            <p>Card Type: Visa</p>
            <p>Card Number: **** **** **** 1234</p>
            <p>Expiry Date: 12/24</p>
            <button className="edit-payment-button">Edit Payment</button>
          </div>
        </section>
      </main>

      <section className="dashboard-section recommended-books">
        <h2>Recommended Books</h2>
        <div className="book-list">
          <div className="book-item">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/l5jxt3k0/book/6/r/3/atomic-habits-original-imagg7dr63qqcdxk.jpeg?q=70"
              alt="Book 1"
              className="book-cover"
            />
            <p>Atomic Habits</p>
            <p>Author: James Clear</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
          <div className="book-item">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/kmax8y80/book/j/r/l/demon-slayer-kimetsu-no-yaiba-vol-23-original-imagf8rqrkcyz4bc.jpeg?q=70"
              alt="Book 2"
              className="book-cover"
            />
            <p>Demon Slayer</p>
            <p>Author: Koyogaru</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
          <div className="book-item">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/jf8khow0/poster/y/c/f/medium-bruce-lee-as-you-think-quote-poster-art-inspirational-original-imaf3q75fddhafyx.jpeg?q=70"
              alt="Book 3"
              className="book-cover"
            />
            <p>As You Think So Shall you Become</p>
            <p>Author: Bruce lee</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="dashboard-section recent-reviews">
        <h2>History</h2>
        <div className="review-list">
          <div className="review-item">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/l4fxh8w0/book/x/x/s/who-says-you-can-t-you-do-original-imagfbtecqgbyhu3.jpeg?q=70"
              alt="Book 1"
              className="book-cover"
            />
            <p>Who Says You Can't? You Do</p>
            <p>About: 
THE WORD OF MOUTH PHENOMENON THAT'S CHANGING LIVES AROUND THE WORLD Do you want to change your life? Well, who says you can't? Would you be surprised to learn that the only person stopping you achieving what you want in life is yourself.</p>
          </div>
          <div className="review-item">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/kufuikw0/book/b/a/w/start-with-why-original-imag7jt996bhfxuz.jpeg?q=70"
              alt="Book 2"
              className="book-cover"
            />
            <h4>Start With Why</h4>
            <p>About: Start with Why, compiled by Simon Sinek, is a globally bestselling book that discusses how great leaders inspire everyone to take action.</p>
          </div>
          <div className="review-item">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/book/4/t/r/-original-imagqtdtqxykbwzs.jpeg?q=70"
              alt="Book 3"
              className="book-cover"
            />
            <h4>Man's Scarch For Meaning</h4>
            <p><b>About:</b> “Ever more people today have the means to live, but no meaning to live for” - Viktor Emil Frankl's Man’s Search for Meaning is an account about all the experiences that he had at the concentration camp during the Second World War. This book describes Frankl’s observations about the various behaviours of his fellow inmates at the camp. His findings have formed a solid ground for psychological analysis, even today.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;
