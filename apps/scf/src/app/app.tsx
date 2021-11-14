import styles from './app.module.scss';
import { RfUiShared } from '@demo/shared-ui';
import * as React from 'react';
import {JSONSchema7} from "json-schema";

export function App() {
  const schema:JSONSchema7 = {
    title: "SCF Form",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Name", default: ""},
      age: {type: "number", title: "Age", default: ""},
      country: { type: 'string', title: 'Country', default: 'USA' },
      done: {type: "boolean", title: "Done?", default: false}
    }
  };
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to scf!</h1>
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
