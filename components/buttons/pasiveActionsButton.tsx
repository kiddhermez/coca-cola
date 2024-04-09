import React from "react";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";

interface PasiveActionsButtonProps {
  icon: React.JSX.Element;
  name: String;
}

function PasiveActionsButton({ icon, name }: PasiveActionsButtonProps) {
  return (
    <Button className="rounded-full p-0 text-foreground" size="sm">
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
