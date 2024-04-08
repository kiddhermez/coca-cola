import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import React from "react";
import Logo from "./logo";
import { Avatar } from "@nextui-org/react";
import ChangeTheme from "./changeTheme";

interface TopNavbarProps {
  actualSection: string;
}

function PrimaryNavbar({ actualSection }: TopNavbarProps) {
  return (
    <Navbar>
      <NavbarBrand className="text-foreground">
        <Logo className="fill-current" width={50} />
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <h2>{actualSection}</h2>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Avatar size="sm" />
        <p className="hidden md:flex">User</p>
        <ChangeTheme />
      </NavbarContent>
    </Navbar>
  );
}

export default PrimaryNavbar;
