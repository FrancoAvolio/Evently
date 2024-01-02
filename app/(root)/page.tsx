import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-gray-100 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px]">
              ¡Celebra, Conecta Y Crea Eventos En Nuestra Plataforma!
            </h1>
            <p className="text-[20px] font-normal leading-[30px] tracking-[2%] md:text-[24px] md:font-normal md:leading-[30px] md:tracking-[2%]">
              Aprende Tips De Especialistas Conectandote A Nuestra Comunidad
              Global.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explorar Ahora</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[90vh] mx-auto mt-5"
          />
        </div>
      </section>
      <section
        id="events"
        className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]">
          ¡Descubre Miles De Eventos Aqui!
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Buscar Filtrar Por Categoria
        </div>
      </section>
    </>
  );
}
