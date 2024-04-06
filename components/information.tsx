import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import React from "react";
import { PlusIcon } from "./icons";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

function Information() {
  return (
    <section className="h-full w-full px-10 py-5">
      <Card className="h-full bg-background/40 shadow-xl" shadow="lg">
        <CardHeader>
          <Button className="ml-auto rounded-full" isIconOnly>
            <PlusIcon className="fill-foreground" width={20} />
          </Button>
        </CardHeader>
        <CardBody>
          <ScrollShadow></ScrollShadow>
        </CardBody>
      </Card>
    </section>
  );
}

export default Information;
