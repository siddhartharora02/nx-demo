import './rf-ui-shared.module.scss';
import {
  Card,
  CardContent,
  Box
} from '@mui/material';
import { JSONSchema7 } from "json-schema";

import Form from "@rjsf/core";

export interface RfUiSharedProps {
  schema: JSONSchema7;
}

export function RfUiShared(props: RfUiSharedProps) {
  const { schema } = props;

  const log = (type: string) => console.log.bind(console, type);
  return (
    <div className="flex">
      <Card style={{ width: '100%' }}>
        <CardContent>
          <Box>
            <Form schema={schema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")} />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default RfUiShared;
