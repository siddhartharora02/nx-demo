import styles from './app.module.scss';
import { RfUiShared } from '@demo/rf/ui-shared';
import * as React from "react";

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to scf!</h1>
      </header>
      <main>
        <RfUiShared img="https://cdn2.thecatapi.com/images/juhwiQGKC.jpg"/>
      </main>
    </div>
  );
}

export default App;
