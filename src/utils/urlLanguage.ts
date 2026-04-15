// Funkcja do wykrywania języka z URL
export function getLanguageFromUrl() {
  const path = window.location.pathname;
  const languageMatch = path.match(/^\/([a-z]{2})(\/|$)/);
  if (languageMatch && ['en', 'pl', 'de'].includes(languageMatch[1])) {
    return languageMatch[1];
  }
  return 'pl'; // default language
}

export function setLanguageInUrl(language: string) {
  const currentPath = window.location.pathname;
  let newPath;

  if (/^\/[a-z]{2}/.test(currentPath)) {
    newPath = currentPath.replace(/^\/[a-z]{2}/, `/${language}`);
  } else {
    newPath = `/${language}${currentPath}`;
  }

  if (newPath.includes("//")) {
    newPath = newPath.replace("//", "/");
  }

  if (newPath === currentPath) {
    return;
  }

  window.history.replaceState({}, '', newPath);
}
