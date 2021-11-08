import { render } from '@testing-library/react';

import RfUiShared from './rf-ui-shared';

describe('RfUiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RfUiShared />);
    expect(baseElement).toBeTruthy();
  });
});
