import styles from "./header.module.css";

export default function Header({ setPage }) {
  const handleClick = (page) => {
    setPage(page);
  };
  return (
    <header className={styles.header}>
      <h1>Secure<span>Code</span></h1>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#home" onClick={() => handleClick("home")}>
            Home
          </a>
          <a href="#about" onClick={() => handleClick("about")}>
            About
          </a>
        </nav>
      </div> 
    </header>
  );
}
