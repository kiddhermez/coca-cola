import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import React from "react";
import {
  InventoryIcon,
  EmployeeIcon,
  ProviderIcon,
  TransportIcon,
} from "./icons";
import { Tooltip } from "@nextui-org/tooltip";

function SecondaryNavbar() {
  return (
    <Navbar
      className="flex flex-row px-5 md:w-16 md:flex-col md:py-10"
      classNames={{
        wrapper: "flex flex-row md:justify-between md:h-full md:flex-col",
      }}
    >
      <Tooltip content="Inventario">
        <NavbarContent
          justify="center"
          className="h-[40px] w-[40px] rounded-full text-foreground hover:cursor-pointer hover:bg-foreground/70 hover:text-primary"
        >
          <InventoryIcon className="fill-current opacity-70" width={30} />
        </NavbarContent>
      </Tooltip>
      <Tooltip content="Proveedores">
        <NavbarContent
          justify="center"
          className="h-[40px] w-[40px] rounded-full text-foreground hover:cursor-pointer hover:bg-foreground/70 hover:text-primary"
        >
          <ProviderIcon className="fill-current opacity-70" width={27} />
        </NavbarContent>
      </Tooltip>
      <Tooltip content="Transporte">
        <NavbarContent
          justify="center"
          className="h-[40px] w-[40px] rounded-full text-foreground hover:cursor-pointer hover:bg-foreground/70 hover:text-primary"
        >
          <TransportIcon className="fill-current opacity-70" width={28} />
        </NavbarContent>
      </Tooltip>
      <Tooltip content="Empleados">
        <NavbarContent
          justify="center"
          className="h-[40px] w-[40px] rounded-full text-foreground hover:cursor-pointer hover:bg-foreground/70 hover:text-primary"
        >
          <EmployeeIcon className="fill-current opacity-70" width={20} />
        </NavbarContent>
      </Tooltip>
    </Navbar>
  );
}

export default SecondaryNavbar;
