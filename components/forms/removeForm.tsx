import { useState } from "react";
import { Button } from "@nextui-org/button";
import axios from "axios";

import { useSearchTerm } from "@/states/searchTerm";
import { useModal } from "@/states/showModal";
import { useActualList } from "@/states/actualList";
import { getData } from "@/interfaces/get";

interface RemoveFormProps {
  data: any;
}

function RemoveForm({ data }: RemoveFormProps) {
  const setSearchTerm = useSearchTerm((state) => state.setSearchTerm);
  const {
    actualCategory: { category },
    setIsLoading,
    setActualList,
  } = useActualList((state) => state);
  const setShowModal = useModal((state) => state.setShowModal);
  const [buttonLoading, setButtonLoading] = useState(false);

  return (
    <div className="flex h-full w-full flex-col gap-5">
      <div className="text-center">
        ¿Estás seguro de que deseas eliminar el elemento {"'"}
        {data.name}
        {"'"}?
      </div>
      <p className="text-center text-sm text-danger">
        Esta accion es irreversible
      </p>
      <div className="flex justify-center gap-2">
        <Button
          color="danger"
          isLoading={buttonLoading}
          size="sm"
          onClick={() => {
            setButtonLoading(true);
            axios
              .delete(`/api/${category}/${data.id}`)
              .then(() => {
                axios
                  .get<getData>(`/api/${category}`)
                  .then(({ data: { result } }) => {
                    setActualList(result.data);
                  });
              })
              .finally(() => {
                setIsLoading(true);
                setShowModal(false);
                setSearchTerm("");
              });
          }}
        >
          Eliminar
        </Button>
        <Button size="sm" onClick={() => setShowModal(false)}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}

export default RemoveForm;
