"use client";
import { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableCell,
  TableRow,
  getKeyValue,
} from "@nextui-org/table";
import axios from "axios";

import { ConfigIcon, DeleteIcon, EditIcon } from "./icons";
import MoreActionsButton from "./buttons/moreActionsButton";
import { useActualList } from "@/states/actualList";
import { useSearchTerm } from "@/states/searchTerm";
import ActionsButton from "./buttons/actionsButton";

const icons = [
  <ConfigIcon key={0} width={15} />,
  <EditIcon key={0} width={15} />,
  <DeleteIcon key={0} width={15} />,
];

function Information() {
  const [isLoading, setIsLoading] = useState(false);
  const { listRoute } = useActualList((state) => state);
  const [actualColumns, setActualColumns] = useState<any[]>([]);
  const [actualList, setActualList] = useState<any[]>([]);

  console.log(listRoute);

  useEffect(() => {
    async function fetchData() {
      const {
        data: {
          result: { data },
        },
      } = await axios.get(`/api/${listRoute}`);
      console.log(data);

      const {
        data: { result },
      } = await axios.get(`/api/${listRoute}/columns`);
      console.log(result);
    }
    fetchData();
  }, [listRoute]);

  const searchTerm = useSearchTerm((state) => state.searchTerm);

  const data = actualList.filter((rawMaterial) => {
    const values = Object.values(rawMaterial);
    return values.some((value: any) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase()),
    );
  });

  const columns = actualColumns;

  const rows = data.map((rawMaterial) => ({
    key: rawMaterial.id,
    ...rawMaterial,
    price: `$${rawMaterial.price}`,
    actions: (
      <div className="flex flex-col gap-2 md:flex-row">
        {icons.map((icon, i) => (
          <ActionsButton
            key={i}
            icon={icon}
            color={i == 2 ? "danger" : "default"}
            mobile={i == 0}
          />
        ))}
      </div>
    ),
  }));

  return (
    <section className="relative h-[90%] w-full px-10 py-5 md:h-full">
      <MoreActionsButton />
      <Card className="relative h-full bg-background/40 shadow-xl" shadow="lg">
        <CardBody>
          {/* <Table
            shadow="none"
            className="h-full"
            classNames={{
              wrapper:
                "bg-transparent scrollbar scrollbar-thumb-foreground scrollbar-w-2 scrollbar-h-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full",
            }}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody
              isLoading={isLoading}
              emptyContent={"No info"}
              items={rows}
            >
              {(item) => (
                <TableRow key={item.key}>
                  {(rows) => <TableCell>{getKeyValue(item, rows)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table> */}
        </CardBody>
      </Card>
    </section>
  );
}

export default Information;
