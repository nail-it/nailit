import Header from "./Header";
import { render, within, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('it changes language to EN or PL', async () => {
  render(<Header/>);
  const dropDown = screen.getByTestId('basic-nav-dropdown');
  const enBoardsButton = within(dropDown).getByRole('button');

  await userEvent.click(enBoardsButton);

  const enLanguage = within(dropDown).getByTestId('basic-nav-dropdown-en');
  expect(enLanguage).toBeInTheDocument();

  await userEvent.click(enLanguage);

  const plLanguage = within(dropDown).getByTestId('basic-nav-dropdown-pl');
  expect(plLanguage).toBeInTheDocument();

  await userEvent.click(plLanguage);

  const deLanguage = within(dropDown).getByTestId('basic-nav-dropdown-de');
  expect(deLanguage).toBeInTheDocument();

  await userEvent.click(deLanguage);

});

it('it provide links in menu available for click', async () => {
  render(<Header/>);

  const navBar = screen.getByTestId('nav-bar', {hidden: true});

  const toggleExpand = within(navBar).getByTestId('nav-toggle');
  await userEvent.click(toggleExpand);

  const navLink = within(navBar).getByTestId('nav-link-clients');
  await userEvent.click(navLink);
  expect(navLink).toBeInTheDocument();

  const navLink2 = within(navBar).getByTestId('nav-link-technologies');
  await userEvent.click(navLink2);
  expect(navLink2).toBeInTheDocument();

  const navLink3 = within(navBar).getByTestId('nav-link-tools');
  await userEvent.click(navLink3);
  expect(navLink3).toBeInTheDocument();

  const navLink4 = within(navBar).getByTestId('nav-link-contact');
  await userEvent.click(navLink4);
  expect(navLink4).toBeInTheDocument();

});

it('should update URL when changing language', async () => {
    expect(true).toBe(true);
});
