import React, { useState, useEffect } from 'react';
import { Home, BarChart, Copy, Bookmark, Users, Settings, ChevronDown, Sun, Moon, UserRoundSearch, Mail, Send, Inbox, Logs } from 'lucide-react';
import logo from "../assets/Logo_12.png";
import { Link } from 'react-router-dom';

export function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <aside className="flex h-full w-16 flex-col items-center overflow-y-auto bg-white dark:bg-[#101113] py-5">
        <nav className="flex flex-1 flex-col items-center space-y-6">
          <img src={logo} alt="Logo" style={{ marginBottom: "50px" }} className="h-8 w-8" />
          <Link to={'#'} className="rounded-lg p-1.5 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
            <Home size={24} />
          </Link>
          <Link to={'#'} className="rounded-lg p-1.5 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
            <UserRoundSearch size={24} />
          </Link>
          <Link to={'#'} className="rounded-lg p-1.5 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
            <Mail size={24} />
          </Link>
          <Link to={'#'} className="rounded-lg p-1.5 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
            <Send size={24} />
          </Link>
          <Link to={'#'} className="rounded-lg p-1.5 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
            <Logs size={24} />
          </Link>
          <Link to={'#'} className="rounded-lg p-1.5 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
            <Inbox size={24} />
          </Link>
          <Link to={'#'} className="rounded-lg p-1.5 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
            <BarChart size={24} />
          </Link>
        </nav>

        <div className="flex flex-col items-center space-y-6">
          <div style={{ backgroundColor: "#084f33", color: "white", height: "35px", width: "35px", padding: "5px", borderRadius: "50%" }}>
            AS
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 w-full bg-gray-100 dark:bg-[#1F1F1F] flex justify-between items-center px-4">
          <h1 className="text-xl font-semibold dark:text-white">Onebox</h1>
          <div className="flex gap-4 items-center">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
              onClick={toggleTheme}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="">
              <h1 className="flex gap-2 items-center text-gray-700 dark:text-gray-300">
                <span className='hidden md:block'>Tim's workspace</span> <ChevronDown />
              </h1>
            </div>
          </div>
        </header>

        <main className="flex-1 bg-gray-50 dark:bg-[#000000] overflow-y-auto text-gray-900 dark:text-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
