import React from 'react';
import type { MateriaPrima } from '@/interfaces/item';

interface ItemProps {
  key: number;
  item: MateriaPrima;
}

function Item({ key, item }: ItemProps) {
  return (
    <div
      key={key}
      className="w-full py-2 px-4 rounded-lg bg-coke-accent flex justify-between"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">{item.nombre}</h2>
        <p className="opacity-75">
          id: {item.id} - {item.color_del_item}
        </p>
      </div>
      <div className="flex justify-center items-center h-full">
        <p>Cantidad: {item.cantidad}</p>
      </div>
    </div>
  );
}

export default Item;
