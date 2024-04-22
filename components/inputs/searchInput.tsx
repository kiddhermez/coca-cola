import React from "react";
import { Input } from "@nextui-org/input";

import { SearchIcon } from "../icons";
import { useBlurEffect } from "@/states/blurEffect";
import { useSearchTerm } from "@/states/searchTerm";
import { shallow } from "zustand/shallow";

interface SearchInputProps {
  className?: string;
}

function SearchInput({ className }: SearchInputProps) {
  const setBlurState = useBlurEffect((state) => state.setBlurState);
  const { searchTerm, setSearchTerm } = useSearchTerm(
    (state) => state,
    shallow,
  );
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (event: { ctrlKey: any; key: string }) => {
      if (event.ctrlKey && event.key === "k") {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }

      if (
        event.key === "Enter" &&
        inputRef.current === document.activeElement
      ) {
        inputRef.current?.blur();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Input
      isClearable
      size="sm"
      className="text-foreground"
      classNames={{
        base: className,
        inputWrapper: "bg-default-300",
      }}
      value={searchTerm}
      onValueChange={(value) => setSearchTerm(value)}
      label="Buscar"
      radius="full"
      onFocus={(e) => {
        e.preventDefault();
        setBlurState(true);
      }}
      onBlur={async (e) => {
        e.preventDefault();
        await new Promise((resolve) => setTimeout(resolve, 200));
        if (inputRef.current === document.activeElement) return;
        setBlurState(false);
      }}
      ref={inputRef}
    />
  );
}

export default SearchInput;
