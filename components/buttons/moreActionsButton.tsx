import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
} from "@nextui-org/navbar";
import { FilterIcon, PlusIcon, SortIcon } from "../icons";
import PasiveActionsButton from "./pasiveActionsButton";
import SearchInput from "../inputs/searchInput";
import { useBlurEffect } from "@/states/blurEffect";
import { shallow } from "zustand/shallow";

const buttons = [
  {
    name: "Añadir",
    icon: <PlusIcon width={10} />,
  },
  {
    name: "Filtrar",
    icon: <FilterIcon width={10} />,
  },
  {
    name: "Ordenar",
    icon: <SortIcon width={10} />,
  },
];

function MoreActionsButton() {
  const { blurState, setBlurState } = useBlurEffect((state) => state, shallow);
  return (
    <Navbar
      className="absolute bottom-0 left-auto right-0 top-auto h-fit w-fit bg-transparent p-0 has-[:focus]:z-50 md:-z-50"
      isBlurred={false}
      isMenuOpen={blurState}
      onMenuOpenChange={(open) => setBlurState(open)}
    >
      <NavbarMenu
        className="z-20 flex h-screen w-screen items-end justify-end bg-opacity-20 pb-52 backdrop-blur-md md:pb-36"
        motionProps={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 100 },
        }}
      >
        <NavbarItem className="flex flex-col gap-5">
          {buttons.map(({ icon, name }, i) => (
            <PasiveActionsButton key={i + name} icon={icon} name={name} />
          ))}
          <SearchInput className="md:hidden" />
        </NavbarItem>
      </NavbarMenu>
      <SearchInput className="hidden md:flex" />
      <NavbarMenuToggle className="h-[40px] w-[40px] rounded-full bg-foreground text-background md:hidden" />
    </Navbar>
  );
}

export default MoreActionsButton;
