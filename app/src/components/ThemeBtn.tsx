import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../redux/store";
import { toggleTheme } from "../redux/slices/themeSlice";

const ThemeBtn = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(toggleTheme())}
        className={`p-2 rounded-full transition border-1 border-gray-300 ${
          theme === "light" ? "bg-white" : "bg-black"
        }`}
      >
        <img className="w-5 md:w-6" src={`/logos/${theme}.png`} alt="" />
      </button>
    </div>
  );
};

export default ThemeBtn;
