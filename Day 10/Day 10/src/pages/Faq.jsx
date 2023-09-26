import React, { useState } from 'react';
import '../assets/css/Faq.css'; 

const Faq = () => {
  const [faqs, setFaqs] = useState([
    { question: 'How can I place an order for books?', answer: 'To place an order, browse our collection of books, select the ones you want, and click the "Add to Cart" button. Once you have added all your desired books to the cart, proceed to checkout to complete your order.', open: false },
    { question: 'What payment methods do you accept?', answer: 'We accept various payment methods, including credit cards (Visa, MasterCard), PayPal, and online banking. Choose the payment option that suits you best during checkout.', open: false },
    { question: 'How can I track my order?', answer: 'After placing an order, you will receive an order confirmation email with a tracking link. You can use this link to monitor the status and delivery of your books.', open: false },
    { question: 'What is your return policy?', answer: 'If you are not satisfied with your purchase, you can return the books within 30 days of delivery. Please visit our "Returns and Refunds" page for detailed instructions on the return process.', open: false },
    { question: 'Do you offer international shipping?', answer: 'Yes, we offer international shipping to many countries. During checkout, you can select your country, and shipping options and fees will be displayed based on your location.', open: false },
  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFaqs(newFaqs);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${faq.open ? 'faq-open' : 'faq-close'}`} key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <div className={`faq-toggle ${faq.open ? 'faq-open' : 'faq-close'}`}></div>
            </div>
            <div className={`faq-answer ${faq.open ? 'faq-open' : 'faq-close'}`}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
