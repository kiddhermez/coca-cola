"use client";
import { useEffect } from "react";
import { Card, CardBody } from "@nextui-org/card";
import axios from "axios";

import MoreActionsButton from "./buttons/moreActionsButton";
import { useActualList } from "@/states/actualList";
import ModTable from "./modTable";
import { columns } from "@/data/columns";
import { getData } from "@/interfaces/get";

function Information() {
  const {
    actualCategory: { category },
    setActualList,
  } = useActualList((state) => state);

  useEffect(() => {
    async function fetchData() {
      const {
        data: {
          result: { data },
        },
      } = await axios.get<getData>(`/api/${category}`);
      setActualList(data);
    }
    fetchData();
  }, [category, setActualList]);

  return (
    <section className="relative h-[90%] w-full px-10 py-5 md:h-full">
      <MoreActionsButton />
      <Card className="relative h-full bg-background/40 shadow-xl" shadow="lg">
        <CardBody>
          <ModTable columns={columns[category]} />
        </CardBody>
      </Card>
    </section>
  );
}

export default Information;
