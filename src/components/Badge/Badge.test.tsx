import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';
import { Progress } from '../../Enums/Progress';

describe('Badge Component', () => {
  test('renders done state correctly', () => {
    render(
      <Badge progress={Progress.Done} />
    );

    expect(screen.getByText('done')).toBeInTheDocument();
    expect(screen.getByTestId('done-badge-svg')).toBeInTheDocument();
  });

  test('renders in progress state correctly', () => {
    render(
      <Badge progress={Progress.InProgress} />
    );

    expect(screen.getByText(/90% done/i)).toBeInTheDocument();
    expect(screen.getByTestId('inprogress-badge-svg')).toBeInTheDocument();
  });
});
