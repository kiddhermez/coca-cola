import React from "react";
import { useActualList } from "@/states/actualList";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";

function Base() {
  const actualCategory = useActualList(
    (state) => state.actualCategory.category,
  );
  const { register, handleSubmit } = useForm();

  if (actualCategory === "rawMaterials") {
    return (
      <form className="flex h-full w-full flex-col gap-5">
        <Input {...register("")} />
      </form>
    );
  }

  return <div>Base</div>;
}

export default Base;
