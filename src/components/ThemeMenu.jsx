import React, { useEffect } from "react";

const ThemeMenu = () => {
  useEffect(() => {
    const theme = document.querySelector("body").getAttribute("theme");
    document.getElementById(`${theme}-theme-btn`).classList.add("active");
  }, []);

  const handleChangeTheme = () => {
    const newTheme =
      document.querySelector("body").getAttribute("theme") == "light"
        ? "dark"
        : "light";
    document.querySelector("body").setAttribute("theme", newTheme);
    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.getElementById(`${newTheme}-theme-btn`).classList.add("active");
  };

  return (
    <div className="theme-menu-container">
      <button
        id="dark-theme-btn"
        className="theme-btn"
        onClick={() => handleChangeTheme()}
      >
        Dark
      </button>
      <button
        id="light-theme-btn"
        className="theme-btn"
        onClick={() => handleChangeTheme()}
      >
        Light
      </button>
    </div>
  );
};

export default ThemeMenu;
