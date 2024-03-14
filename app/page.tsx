import Navbar from '@/components/navbar';

export default function Home() {
    return <main className='bg-coke-background h-screen w-screen flex flex-col items-center py-5'>
        <Navbar />
        <div className="flex w-full justify-start py-10 px-10 gap-5">
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
    </main>;
}
