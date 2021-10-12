import Parent from './components/Parent'
import styles from './App.module.css';

function App() {
  window.setDivHeight(100)

  return (
    <>
    <section className={styles.section}>
      <Parent />
    </section>
    </>
  );
}

export default App;
