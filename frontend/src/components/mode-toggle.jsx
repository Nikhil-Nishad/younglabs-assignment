import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun
        className={`text-black h-[1.2rem] w-[1.2rem] transition-all ${
          isDarkMode ? "rotate-0 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          isDarkMode ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ModeToggle;
