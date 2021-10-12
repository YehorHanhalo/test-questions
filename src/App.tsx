import WithDivHeight from './components/WithDivHeight'
import styles from './App.module.css';

function App() {
  window.setDivHeight(100)

  return (
    <>
    <section className={styles.section}>
      <WithDivHeight />
    </section>
    </>
  );
}

export default App;
