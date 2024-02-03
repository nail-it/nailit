import React from 'react';
import App from './App';
import {render} from "@testing-library/react";

describe('isDateToday', function() {

  it('renders without crashing', () => {
    const renderedApp = render(<App/>);
  });

  it('should return company name in footer and year', function () {
    const renderedApp = render(<App/>);
    const copyright = renderedApp.getByTestId('copyright');
    expect(copyright.textContent).toContain('nail it');
    expect(copyright.textContent).toMatch(/\d{4}/);
  });
});
