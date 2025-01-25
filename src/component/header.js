import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Password Generator</h1>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#home">home</a>
          <a href="#about">about</a>
        </nav>
      </div>
    </header>
  );
}
