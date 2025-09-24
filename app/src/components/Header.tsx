import { NavLink } from "react-router";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  const activeList = (isActive: boolean) =>
    isActive
      ? "bg-black dark:bg-white text-white dark:text-black p-2 rounded-2xl cursor-pointer"
      : "hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl cursor-pointer";

  return (
    <div className="m-4 flex justify-center">
      <nav className="p-3 w-full md:w-[40%] rounded-full shadow-[0_0_20px_2px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)]  bg-white dark:bg-black">
        <div>
          <ul className="flex gap-4 md:gap-8 justify-center items-center font-medium text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => activeList(isActive)}
              >
                /
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => activeList(isActive)}
              >
                About me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => activeList(isActive)}
              >
                Get in touch
              </NavLink>
            </li>
            <div className="relative right-0 top-0">
              <ThemeBtn />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
