import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles.about}id="about">
      <h1>About<span>U</span>s</h1>
      <h3>Welcome to SecureCode</h3>
      <div className={styles.content}>
        At SecureCode, we believe that your online security starts with strong
        passwords. Our password generator tool is designed to help you create
        unique, secure, and random passwords effortlessly. Whether you're
        protecting personal accounts or business data, we've got you covered!
      </div>

      <h3>Why Choose Us?</h3>
      <ul>
        <li>Simplicity: Our tool is straightforward and easy to use.</li>
        <li>
          Security:Generate highly secure passwords that are difficult to guess
          or hack.
        </li>
        <li>
          Customization: Create passwords of any length and choose between
          including uppercase letters, numbers, or special characters.
        </li>
        <li>
          Privacy: We do not store or track any of the passwords you generate.
        </li>
      </ul>

      <h3>How It Works</h3>
      <ul>
        <li>Select your preferred password length.</li>
        <li>
          Choose whether to include numbers, special characters, or uppercase
          letters.
        </li>
        <li>Click the Generate button.</li>
        <li>Copy your new secure password and use it with confidence!</li>
      </ul>
      <h3>Our Mission</h3>
      <div className={styles.content}>
        Our mission is to make online security accessible to everyone by
        providing a reliable tool that empowers users to take control of their
        digital safety. In today’s digital world, protecting your accounts with
        strong passwords is no longer optional—it’s essential.
      </div>
      <h3>Stay Connected</h3>
      <div className={styles.content}>
        Got questions or feedback? We'd love to hear from you! Reach out to us
        anytime through our Contact Us page.
      </div>
    </div>
  );
}
