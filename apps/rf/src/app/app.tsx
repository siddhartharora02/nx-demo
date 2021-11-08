import styles from './app.module.scss';
import * as React from 'react';
import { IconButtonProps } from '@mui/material/IconButton';

import { RfUiShared } from '@demo/rf/ui-shared';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}


export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to rf!</h1>
      </header>
      <main>
        <RfUiShared img="https://cdn2.thecatapi.com/images/24c.jpg"/>
      </main>
    </div>
  );
}

export default App;
