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
      size="sm"
    >
      {theme === "light" ? (
        <MoonIcon width={15} className="fill-current" />
      ) : (
        <SunIcon width={15} className="fill-current" />
      )}
    </Button>
  );
}

export default ChangeTheme;
