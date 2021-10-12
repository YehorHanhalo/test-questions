import Div from './components/Div'
import styles from './App.module.css';

declare global {
  interface Window {
    setDivHeight(height: number): void;
  }
}

let divHeight: number;
window.setDivHeight = (height: number) => divHeight = height;

function App() {
  window.setDivHeight(100)

  return (
    <>
    <section className={styles.section}>
      <Div divHeight={divHeight} />
    </section>
    </>
  );
}

export default App;
