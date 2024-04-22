import { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { Spinner } from "@nextui-org/spinner";
import { useAsyncList } from "@react-stately/data";
import { columnsProps } from "@/data/columns";

import ActionsButton from "./buttons/actionsButton";
import { useActualList } from "@/states/actualList";
import { useSearchTerm } from "@/states/searchTerm";
import { actionsButtonsData } from "@/data/actionsButtonsData";

interface modTableProps {
  columns: columnsProps[];
}

function ModTable({ columns }: modTableProps) {
  const { actualList, isLoading, setIsLoading } = useActualList(
    (state) => state,
  );

  const searchTerm = useSearchTerm((state) => state.searchTerm);

  let list = useAsyncList<any>({
    load() {
      let dataEnd = actualList;

      if (searchTerm) {
        dataEnd = dataEnd.filter((item) =>
          Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        );
      }

      dataEnd = dataEnd.map((item) => ({
        ...item,
        actions: (
          <div className="flex gap-3">
            {actionsButtonsData.map((icon, i) => (
              <ActionsButton
                key={0}
                icon={icon.icon}
                name={icon.name}
                form={icon.form(item)}
                color={i == 2 ? "danger" : "default"}
                mobile={i == 0}
              />
            ))}
          </div>
        ),
      }));

      return {
        items: dataEnd,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[(sortDescriptor.column ?? 0) as number];
          let second = b[(sortDescriptor.column ?? 0) as number];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  useEffect(() => {
    async function reloadData() {
      list.reload();
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    reloadData().finally(() => isLoading && setIsLoading(false));
  }, [actualList, searchTerm, isLoading]);

  return (
    <>
      {isLoading ? (
        <Spinner size="lg" color="danger" />
      ) : (
        <Table
          shadow="none"
          className="h-full"
          classNames={{
            wrapper:
              "bg-transparent scrollbar scrollbar-thumb-foreground scrollbar-w-2 scrollbar-h-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full",
          }}
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn allowsSorting={column.sort} key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No info"} items={list.items}>
            {(item) => (
              <TableRow key={item.name}>
                {(rows) => <TableCell>{getKeyValue(item, rows)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </>
  );
}

export default ModTable;
