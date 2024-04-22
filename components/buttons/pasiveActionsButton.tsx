import React from "react";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";

import { useBlurEffect } from "@/states/blurEffect";
import { useModal } from "@/states/showModal";

interface PasiveActionsButtonProps {
  icon: React.JSX.Element;
  name: string;
}

function PasiveActionsButton({ icon, name }: PasiveActionsButtonProps) {
  const setBlurState = useBlurEffect((state) => state.setBlurState);
  const { setShowModal, setModalInfo } = useModal((state) => state);
  return (
    <Button
      className="rounded-full p-0 text-foreground"
      onClick={() => {
        setShowModal(true);
        setModalInfo(name, <div>{name}</div>);
      }}
      size="sm"
    >
      <Chip
        size="sm"
        endContent={<div className="[&>*]:mx-2 [&>*]:fill-current">{icon}</div>}
      >
        {name}
      </Chip>
    </Button>
  );
}

export default PasiveActionsButton;
