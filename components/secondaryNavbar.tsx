"use client";
import { Navbar } from "@nextui-org/navbar";
import React from "react";
import {
  InventoryIcon,
  EmployeeIcon,
  ProviderIcon,
  TransportIcon,
} from "./icons";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import categories from "../json/categories.json";
import { useActualList } from "@/states/actualList";

interface SecondaryNavbarProps {
  setActualSection: React.Dispatch<React.SetStateAction<string>>;
}

const icons: { [key: string]: React.JSX.Element } = {
  Inventario: <InventoryIcon className="fill-current opacity-70" width={30} />,
  Empleados: <EmployeeIcon className="fill-current opacity-70" width={30} />,
  Proveedores: <ProviderIcon className="fill-current opacity-70" width={30} />,
  Transporte: <TransportIcon className="fill-current opacity-70" width={30} />,
};

function SecondaryNavbar() {
  const { setIsLoading, setCategory, actualCategory } = useActualList(
    (state) => state,
  );
  return (
    <Navbar
      className="flex flex-row px-5 md:h-full md:w-16 md:flex-col md:py-10"
      classNames={{
        wrapper: "flex flex-row md:justify-between md:h-full md:flex-col",
      }}
    >
      {categories.map((category) => (
        <Tooltip key={category.name} content={category.name}>
          <Button
            onClick={() => {
              if (category.route === actualCategory.category) return;
              setIsLoading(true);
              setCategory({ category: category.route, label: category.name });
            }}
            isIconOnly
            className="h-[40px] w-[40px] rounded-full bg-transparent text-foreground hover:cursor-pointer hover:bg-foreground/70 hover:text-primary"
          >
            {icons[category.name]}
          </Button>
        </Tooltip>
      ))}
    </Navbar>
  );
}

export default SecondaryNavbar;
