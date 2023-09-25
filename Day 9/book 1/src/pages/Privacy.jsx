import React from 'react';
import '../assets/css/Privacy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        Last updated: [Date]
      </p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect personal information such as your name, email address, and billing information when you make a purchase on our website.
        </p>
        <p>
          We also collect non-personal information such as your browser type, IP address, and browsing history to improve our website's performance and user experience.
        </p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use your personal information to process your orders, provide customer support, and send you updates about your orders.
        </p>
        <p>
          We may also use your information to personalize your shopping experience, analyze website usage, and improve our products and services.
        </p>
      </section>

      <section>
        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who help us operate our website and provide you with better service.
        </p>
        <p>
          We may also disclose your information when required by law or to protect our rights, privacy, safety, or property.
        </p>
      </section>

      <section>
        <h2>4. Your Choices</h2>
        <p>
          You can update your personal information by logging into your account on our website. You may also choose to unsubscribe from our marketing emails.
        </p>
        <p>
          You have the right to request access to, correction of, or deletion of your personal information. Please contact us to make such requests.
        </p>
      </section>

      <section>
        <h2>5. Security</h2>
        <p>
          We take reasonable measures to protect your personal information. However, no data transmission or storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        <p>
          You are responsible for keeping your account credentials confidential and for any actions taken using your account.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please contact us at:
        </p>
        <address>
          D2H Bookstore<br />
          123 Bookstore Lane<br />
          City, State 12345<br />
          Email: privacy@d2hbookstore.com<br />
          Phone: (123) 456-7890
        </address>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
