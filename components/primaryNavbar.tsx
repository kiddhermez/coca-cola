"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Avatar } from "@nextui-org/avatar";
import { Divider } from "@nextui-org/divider";

import Logo from "./logo";
import ChangeTheme from "./changeTheme";
import { useBlurEffect } from "@/states/blurEffect";

interface TopNavbarProps {
  actualSection: string;
}

function PrimaryNavbar({ actualSection }: TopNavbarProps) {
  const blurState = useBlurEffect((state) => state.blurState);
  return (
    <Navbar className="h-[13%]">
      <NavbarBrand className="text-foreground">
        <Logo className="fill-current" width={50} />
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem className="flex gap-5">
          <h2>{actualSection}</h2>
          <Divider
            orientation="vertical"
            className="h-5 bg-foreground opacity-80"
          />
          <div className="flex gap-2">
            <Avatar size="sm" className="h-5 w-5" />
            <p className="hidden md:flex">User</p>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!blurState && (
          <Kbd className="hidden bg-background/30 md:flex" keys={["command"]}>
            k para busqueda y opciones
          </Kbd>
        )}
        <ChangeTheme />
      </NavbarContent>
    </Navbar>
  );
}

export default PrimaryNavbar;
