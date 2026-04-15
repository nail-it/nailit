import '@testing-library/jest-dom';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  }
}));

// Configure enzyme - let's simplify this by removing it from setupTests and using a better setup
// We'll handle the enzyme configuration in a separate way in the test files themselves if needed
