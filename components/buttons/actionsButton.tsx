import { Button } from "@nextui-org/button";
import ModalBase from "../modals/modalBase";
import { useDisclosure } from "@nextui-org/modal";

interface ActionsButtonProps {
  icon: React.JSX.Element;
  color?: "default" | "danger";
  mobile?: boolean;
}

function ActionsButton({
  icon,
  color = "default",
  mobile,
}: ActionsButtonProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  let className = mobile ? "md:hidden" : "hidden md:flex";
  className +=
    color === "danger" ? " [&>*]:fill-black/60" : " [&>*]:fill-foreground";

  return (
    <>
      <Button
        onPress={onOpen}
        size="sm"
        className={className}
        color={color}
        isIconOnly
      >
        {icon}
      </Button>
      <ModalBase isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

export default ActionsButton;
