"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <>
      <nav className="absolute left-0 top-0 z-50 w-screen py-5">
        <Logo className="mx-auto w-28 fill-foreground" />
      </nav>
      <main className="relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-background from-65% to-primary">
        <Card isBlurred className="h-1/2 w-1/2 bg-background/80">
          <CardHeader className="flex justify-center py-5 text-xl font-bold">
            Iniciar Sesion
          </CardHeader>
          <CardBody>
            <form className="flex flex-col gap-10">
              <Input
                label="Nombre de Usuario"
                color="default"
                variant="bordered"
              />
              <Input
                label="Contraseña"
                color="default"
                type="password"
                variant="bordered"
              />
            </form>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button variant="bordered">Submit</Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
