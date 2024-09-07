import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { Newsletter } from "../components/newsletter";
import { Products } from "../components/products";
import Image from 'next/image';

const Dashboard = () => {
  return (
    <main className="flex-1 px-10">
      <Hero />
      <Products />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Why Choose Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Equipamento Autêntico", description: "Produtos licenciados oficiais das suas faculdades favoritas." },
              { title: "Materiais de Qualidade", description: "Duráveis, confortáveis e feitos para durar." },
              { title: "Entrega Rápida", description: "Receba seus produtos a tempo para o grande jogo." },
              { title: "Ampla Seleção", description: "De camisetas a acessórios, temos de tudo." },
              { title: "Descontos para Estudantes", description: "Preços especiais para estudantes universitários atuais." },
              { title: "Devoluções Fáceis", description: "Devoluções sem complicações dentro de 30 dias." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <svg
                    className=" h-6 w-6 text-primary-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </main>
  );
};

export default Dashboard;