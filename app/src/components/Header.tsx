import { NavLink } from "react-router";
import { motion } from "framer-motion";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  const links = [
    { path: "/", label: "/" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Get in touch" },
  ];

  return (
    <div className="m-4 flex justify-center">
      <nav className="p-3 w-full md:w-[40%] rounded-full shadow-[0_0_20px_2px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)] bg-white dark:bg-black">
        <ul className="flex gap-4 md:gap-8 justify-center items-center font-medium text-sm relative">
          {links.map(({ path, label }) => (
            <li key={path} className="relative">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative z-10 p-2 rounded-2xl transition-colors ${
                    isActive
                      ? "text-white dark:text-black"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-2xl bg-black dark:bg-white -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
          <div className="relative right-0 top-0">
            <ThemeBtn />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
