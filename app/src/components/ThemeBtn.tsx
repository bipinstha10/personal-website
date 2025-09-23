import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { type RootState } from "../redux/store";
import { toggleTheme } from "../redux/slices/themeSlice";

const ThemeBtn = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  // Sync <html> with theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`p-2 rounded-full transition border border-gray-300 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <img
        className="w-5 md:w-6"
        src={`/logos/${theme}.png`}
        alt="theme toggle"
      />
    </button>
  );
};

export default ThemeBtn;
