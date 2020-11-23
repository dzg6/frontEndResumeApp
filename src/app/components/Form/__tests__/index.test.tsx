import React from 'react';
import { render } from '@testing-library/react';

import { Form } from '..';

describe('<Form  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Form />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
