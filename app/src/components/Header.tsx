import { NavLink } from "react-router";

const Header = () => {
  const activeList = (isActive: boolean) =>
    isActive
      ? "bg-black text-white p-2 rounded-2xl cursor-pointer"
      : "hover:bg-gray-100 p-2 rounded-2xl cursor-pointer";

  return (
    <div className="m-4 flex justify-center">
      <nav className="rounded-3xl shadow-[0_0_20px_2px_rgba(0,0,0,0.2)] p-4 w-full md:w-[70%] bg-white">
        <div>
          <ul className="flex gap-8 justify-center items-center font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => activeList(isActive)}
              >
                Home
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
