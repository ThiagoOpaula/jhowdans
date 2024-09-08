import { Button } from "@/app/components/ui/button";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src="/turist.jpg"
              width={600}
              height={600}
              alt="About CollegeSportsGear"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Sobre Jhowdans
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Em 2019, um curioso turista decidiu embarcar em uma jornada ao redor do mundo, com um único propósito: descobrir a paixão das pessoas pelo esporte. De cada país visitado, ele coletou histórias únicas sobre como o esporte conectava comunidades e celebrava culturas.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Sua missão era simples: entender como o esporte poderia ser uma linguagem universal. Ele viajou desde os campos de futebol da América Latina até as arenas de sumô no Japão, sempre encontrando a mesma energia vibrante e o amor genuíno pelo jogo, independentemente das regras ou do tipo de esporte.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Em cada parada, ele descobria não apenas a paixão pelo esporte, mas também um profundo senso de comunidade e pertencimento. De uma pequena vila na África até uma grande cidade europeia, ele viu como o esporte unia as pessoas, inspirando sonhos e criando laços que atravessam fronteiras e culturas.
              </p>

              {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Shop Now</Button>
                <Button size="lg" variant="outline">Contact Us</Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;