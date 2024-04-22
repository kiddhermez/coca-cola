import RemoveForm from "@/components/forms/removeForm";
import { ConfigIcon, EditIcon, DeleteIcon } from "@/components/icons";

export const actionsButtonsData = [
  {
    icon: <ConfigIcon key={0} width={15} />,
    name: "Ajustes",
    form: (data: any) => <div>Configuraciones</div>,
  },
  {
    icon: <EditIcon key={0} width={15} />,
    name: "Editar",
    form: (data: any) => <div>Editar</div>,
  },
  {
    icon: <DeleteIcon key={0} width={15} />,
    name: "Eliminar",
    form: (data: any) => <RemoveForm data={data} />,
  },
];
