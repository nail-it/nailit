import { getLanguageFromUrl, setLanguageInUrl } from './urlLanguage';

// Mock window.location and window.history
const mockWindowLocation = {
  pathname: '/pl/',
  assign: jest.fn(),
  replace: jest.fn(),
};

const mockWindowHistory = {
  replaceState: jest.fn(),
};

Object.defineProperty(global.window, 'location', {
  value: mockWindowLocation,
  writable: true,
});

Object.defineProperty(global.window, 'history', {
  value: mockWindowHistory,
  writable: true,
});

describe('URL Language Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should detect language from URL path', () => {
    // Test for polish
    mockWindowLocation.pathname = '/pl/';
    expect(getLanguageFromUrl()).toBe('pl');
    
    // Test for english
    mockWindowLocation.pathname = '/en/';
    expect(getLanguageFromUrl()).toBe('en');
    
    // Test for german
    mockWindowLocation.pathname = '/de/';
    expect(getLanguageFromUrl()).toBe('de');
    
    // Test for default language when no language code
    mockWindowLocation.pathname = '/';
    expect(getLanguageFromUrl()).toBe('pl');
    
    // Test for default language when invalid language code
    mockWindowLocation.pathname = '/xx/';
    expect(getLanguageFromUrl()).toBe('pl');
    
    // Test for default language when language code is not supported  
    mockWindowLocation.pathname = '/fr/';
    expect(getLanguageFromUrl()).toBe('pl');
  });

  test('should set language in URL correctly', () => {
    // Test changing from polish to english
    mockWindowLocation.pathname = '/pl/';
    setLanguageInUrl('en');
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/en/');
    
    // Test changing from english to german
    mockWindowLocation.pathname = '/en/';
    setLanguageInUrl('de');
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/de/');
    
    // Test changing from german to polish
    mockWindowLocation.pathname = '/de/';
    setLanguageInUrl('pl');
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/pl/');
    
    // Test with path that doesn't start with language code
    mockWindowLocation.pathname = '/';
    setLanguageInUrl('en');
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/en/');
    
    // Test with additional path after language
    mockWindowLocation.pathname = '/pl/about/';
    setLanguageInUrl('en');
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/en/about/');
    
    // Test with trailing slash in path
    mockWindowLocation.pathname = '/pl';
    setLanguageInUrl('en');
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/en');
  });
});