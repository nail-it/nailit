import {render, screen} from "@testing-library/react";
import React from "react";
import CopyButton from "./CopyButton";
import userEvent from '@testing-library/user-event';


function reactionToCopy(text) {
  return;
}

it("should copy text to clipboard", async () => {

  const {getByRole} = render(<CopyButton text='testText' cb={reactionToCopy}/>);

  Object.assign(window.navigator, {
    clipboard: {
      writeText: jest.fn().mockImplementation(() => Promise.resolve()),
    },
  });

  const copyButton = screen.getByTestId('copy-button');
  await userEvent.click(copyButton);

  expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith('testText');
});
