import Item from '@/components/item';
import Navbar from '@/components/navbar';
import items from '@/data/items.json';

export default function Home() {
  return (
    <main className="bg-coke-background h-screen w-screen flex flex-col items-center py-5">
      <Navbar />
      <section className="flex justify-between items-center py-10 px-10 w-full">
        <div className="flex w-full justify-start gap-5">
          <button className="rounded-full bg-coke-accent py-3 px-6">
            Añadir item
          </button>
          <button className="rounded-full bg-coke-accent py-3 px-6  ">
            Eliminar item.
          </button>
          <button className="rounded-full bg-coke-accent py-3 px-6  ">
            Editar item
          </button>
        </div>
        <div>
          <button className="rounded-full bg-coke-accent py-3 px-6  ">
            Ver Transportistas
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-5 w-full py-5 px-10 h-full overflow-y-scroll">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
