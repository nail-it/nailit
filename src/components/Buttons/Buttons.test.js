import {render} from "@testing-library/react";
import React from "react";
import Buttons from "./Buttons";

it('renders without crashing', () => {
  const renderedApp = render(<Buttons/>);
});
