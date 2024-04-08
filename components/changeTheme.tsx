"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { MoonIcon, SunIcon } from "./icons";

function ChangeTheme() {
  const [theme, setTheme] = React.useState("dark");
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <Button
      className="bg-transparent text-foreground"
      isIconOnly
      onClick={changeTheme}
    >
      {theme === "light" ? (
        <MoonIcon width={20} className="fill-current" />
      ) : (
        <SunIcon width={20} className="fill-current" />
      )}
    </Button>
  );
}

export default ChangeTheme;
