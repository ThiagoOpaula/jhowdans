"user client"

import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
      <div className=" px-4 md:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src='/hero.jpg'
            width={700}
            height={400}
            alt="Hero Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Se equipe para o dia
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Mostre seu espírito universitário com nossos equipamentos esportivos premium. De camisas a acessórios, temos tudo o que você precisa para apoiar seu time.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Compre agora</Button>
              <Button size="lg" variant="outline">explore os times</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}