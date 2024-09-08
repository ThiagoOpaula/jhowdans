import { Button } from "@/app/components/ui/button";
import Image from "next/image";

const products = [
  { image: '/highJumpJhowBucket.jpg', name: 'Bucket', price: '59.99' },
  { image: '/t-shirt.jpg', name: 'Dry-fit', price: '69.99' },
  { image: '/volleyball.jpg', name: 'bola de voley', price: '79.99' },
  { image: '/shoes.jpg', name: 'bucket 2', price: '89.99' },
];


export const Products = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" >
      <div className=" px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Principais produtos</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <Image
                src={product.image}
                width={300}
                height={300}
                alt={`Product ${i}`}
                className="object-cover w-full h-[300px] transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <Button variant="secondary">Veja</Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-muted-foreground">R$ {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};