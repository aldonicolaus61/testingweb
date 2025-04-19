import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Check if user has a preference stored
  const savedTheme = localStorage.getItem('theme');
  // Check if user has a system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // If saved preference exists, use that
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Otherwise use system preference
    return prefersDark;
  });

  // Effect to update localStorage and document classes when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Effect to listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
}

export default useDarkMode;