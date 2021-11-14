import styles from './app.module.scss';
import * as React from 'react';
import { IconButtonProps } from '@mui/material/IconButton';

import { RfUiShared } from '@demo/shared-ui';
import { JSONSchema7 } from "json-schema";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export function App() {
  const schema:JSONSchema7 = {
    title: "Rf Form",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Name", default: ""},
      age: {type: "number", title: "Age", default: ""},
      done: {type: "boolean", title: "Done?", default: false}
    }
  };
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to rf!</h1>
      </header>
      <main>
        <RfUiShared
          schema={schema}
        />
      </main>
    </div>
  );
}

export default App;
