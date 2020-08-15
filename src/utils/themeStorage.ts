// Internal Dependencies
import { ThemeVariant } from 'utils/styled';

const darkModeStorageKey = 'darkMode';

export const getThemeFromStorage = (): ThemeVariant =>
  (localStorage.getItem(darkModeStorageKey) ? 'dark' : 'light');

export const setThemeInStorage = (theme: ThemeVariant): void => {
  if (theme === 'dark') {
    localStorage.setItem(darkModeStorageKey, 'true');
  } else {
    localStorage.removeItem(darkModeStorageKey);
  }
};
