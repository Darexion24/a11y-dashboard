export type ThemeMode = 'light' | 'dark' | 'high-contrast';

export interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
}