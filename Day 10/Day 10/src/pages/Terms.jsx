import React from 'react';
import '../assets/css/Terms.css';

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to D2H Bookstore! These terms and conditions outline the rules and regulations for the use of our website.
      </p>
      <p>
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use D2H Bookstore if you do not agree to all of the terms and conditions stated on this page.
      </p>

      <section>
        <h2>1. Book Orders</h2>
        <p>
          Orders placed through our website are subject to product availability. We reserve the right to cancel any order for any reason, at any time.
        </p>
        <p>
          We make every effort to display as accurately as possible the colors, features, specifications, and details of the books available on our website. However, we do not guarantee that the colors, features, specifications, and details of the books will be accurate, complete, reliable, current, or free of other errors.
        </p>
      </section>

      <section>
        <h2>2. Pricing and Payment</h2>
        <p>
          All prices displayed on our website are in USD and are exclusive of applicable taxes and shipping charges. We reserve the right to change pricing at any time without prior notice.
        </p>
        <p>
          We accept various payment methods through secure payment gateways. By providing your payment information, you represent and warrant that you have the legal right to use any payment method(s) used in connection with any transaction.
        </p>
      </section>

      <section>
        <h2>3. Shipping and Delivery</h2>
        <p>
          We will make every effort to ship your order within the estimated delivery time provided. However, we do not guarantee delivery dates, and any delays in shipping or delivery are beyond our control.
        </p>
        <p>
          For detailed shipping and delivery information, please refer to our Shipping Policy.
        </p>
      </section>

      <section>
        <h2>4. Returns and Refunds</h2>
        <p>
          Our Return and Refund Policy outlines the process for returning and refunding products purchased from our website. Please review this policy for detailed information.
        </p>
      </section>


      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          All content, including text, graphics, logos, images, and software, on this website is the property of D2H Bookstore and is protected by intellectual property laws. You may not use, reproduce, distribute, or modify any content from this website without our written consent.
        </p>
      </section>

      <section>
        <h2>7. Contact Information</h2>
        <p>
          If you have any questions about these terms and conditions, please contact us at:
        </p>
        <address>
          D2H Bookstore<br />
          123 Bookstore Lane<br />
          City, State 12345<br />
          Email: info@d2hbookstore.com<br />
          Phone: (123) 456-7890
        </address>
      </section>
    </div>
  );
}

export default TermsAndConditions;
