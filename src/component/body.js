import { useState } from "react";
import styles from "./body.module.css";

export default function Body() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeupperLetters, setIncludeupperLetters] = useState(false);
  const [includelowerLetters, setIncludelowerLetters] = useState(false);

  const generatePassword = () => {
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~";
    const lowerletters = "abcdefghijklmnopqrstuvwxyz";
    const upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let chars = "";

    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;
    if (includeupperLetters) chars += upperletters;
    if (includelowerLetters) chars += lowerletters;

    if (!chars) {
      alert("Please select at least one character type!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className={styles.password_generator}>
      <h2>Password Generator</h2>

      <div className={styles.form_group}>
        <label>Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value) || 0)}
        />
      </div>

      <div className={styles.form_group}>
        <label>Include upper Letters:</label>
        <input
          type="checkbox"
          checked={includeupperLetters}
          onChange={(e) => setIncludeupperLetters(e.target.checked)}
        />
      </div>

      <div className={styles.form_group}>
        <label>Include lower Letters:</label>
        <input
          type="checkbox"
          checked={includelowerLetters}
          onChange={(e) => setIncludelowerLetters(e.target.checked)}
        />
      </div>

      <div className={styles.form_group}>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>

      <div className={styles.form_group}>
        <label>Include Symbols:</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>

      <button className={styles.generate_btn} onClick={generatePassword}>
        Generate Password
      </button>

      {password && (
        <div className={styles.password_display}>
          <h3>Generated Password:</h3>
          <input
            className="password-input"
            type="text"
            readOnly
            value={password}
          />
        </div>
      )}
    </div>
  );
}
