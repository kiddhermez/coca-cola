import { Button } from "@nextui-org/button";
import { useModal } from "@/states/showModal";

interface ActionsButtonProps {
  icon: React.JSX.Element;
  color?: "default" | "danger";
  mobile?: boolean;
  name: string;
  form: React.JSX.Element;
}

function ActionsButton({
  icon,
  color = "default",
  mobile,
  name,
  form,
}: ActionsButtonProps) {
  const { setShowModal, setModalInfo } = useModal((state) => state);
  let className = mobile ? "md:hidden" : "hidden md:flex";
  className +=
    color === "danger" ? " [&>*]:fill-black/60" : " [&>*]:fill-foreground";

  return (
    <Button
      size="sm"
      className={className}
      color={color}
      isIconOnly
      onClick={() => {
        setShowModal(true);
        setModalInfo(name, form);
      }}
    >
      {icon}
    </Button>
  );
}

export default ActionsButton;
