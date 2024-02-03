import {render, screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import React, { useState as useStateMock } from "react";

// Mock state.
jest.mock('react', () => ({
  useState: jest.fn()
}))
const setState = jest.fn()

const reactionToCopy = (data) => {
  return;
}

describe('Button', () => {
  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState])
  })

  it("should copy nip text (first CopyButton) to clipboard", async () => {
    const {getByRole} = render(<Contact/>);
    Object.assign(window.navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });
    await waitFor( () => userEvent.click(screen.getAllByTestId('copy-button')[0]));
    expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith('8133378612');
  });

  // it('tests the button props', () => {
  //   render(<Contact/>);
  //   expect(screen.getByRole('Toast').not.toBeInTheDocument())
  // })
  // it('renders the button as disabled when state is false', () => {
  //   useStateMock.mockImplementationOnce((init) => [init, setState])
  //   render(<Button label="poopy" icon="icons" />)
  //   expect(screen.getByRole('button', {name: 'poopy'})).not.toBeDisabled()
  // })
  // it('renders the button not as disabled when state is true', () => {
  //   useStateMock.mockImplementationOnce(() => [true, setState])
  //   render(<Button label="poopy" icon="icons" />)
  //   expect(screen.getByRole('button', {name: 'poopy'})).toBeDisabled()
  // })
})
