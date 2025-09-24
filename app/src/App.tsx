import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Header />
      <main className="flex-1 flex">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
