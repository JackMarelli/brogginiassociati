import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ValueCard from "../../components/ValueCard/ValueCard";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/Button/Button";

import { Users, Scale, Sparkles, Landmark, Lightbulb } from "lucide-react";

export default function Studio() {
  const values = [
    {
      name: "Fiducia",
      description:
        "Ci impegniamo a instaurare relazioni sincere, rapporti solidi, duraturi e leali attraverso la presenza, l'impegno e l’ascolto.",
      icon: Users,
    },
    {
      name: "Etica",
      description:
        "Crediamo nella lealtà dei rapporti e perseguiamo l’onestà e l’attenzione alle esigenze e agli interessi di clienti e collaboratori.",
      icon: Scale,
    },
    {
      name: "Efficienza",
      description:
        "Il miglioramento continuo è uno dei nostri obiettivi primari, sia in termini di competenza che di qualità organizzativa dei processi interni.",
      icon: Sparkles,
    },
    {
      name: "Comunità",
      description:
        "Abbiamo a cuore il territorio in cui viviamo e favoriamo la partecipazione attiva dei nostri professionisti e collaboratori a iniziative di associazioni, fondazioni ed enti del Terzo settore.",
      icon: Landmark,
    },
    {
      name: "Innovazione",
      description:
        "Cerchiamo sempre le soluzioni migliori per i nostri clienti, sfruttando anche l’apporto delle nuove tecnologie e degli strumenti digitali specifici per i nostri ambiti di competenza.",
      icon: Lightbulb,
    },
  ];

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="w-full h-screen md:h-fit relative">
        <img
          src="/assets/images/webp/studio_fold.webp"
          alt="Studio office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end text-center px-4 py-20">
          <h1 className="text-white text-5xl md:text-7xl xl:text-7xl font-medium mb-12">
            Una tradizione
            <br />
            che si rinnova
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-3xl">
            Costruire e coltivare con dedizione un autentico rapporto di fiducia
            tra il cliente e il suo professionista di riferimento, un legame che
            ha.
          </p>
        </div>
      </section>

      {/* About Studio Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-medium mb-8">
              Studio Dott.
              <br />
              Riccardo Broggini
            </h2>
            <div className="space-y-6 text-xl">
              <p>
                Nato all'inizio degli anni '70 per volontà di Riccardo Broggini,
                lo Studio Dott. Riccardo Broggini - Dottori Commercialisti
                Associati ha assunto la forma di studio associato nel 2001.
              </p>
              <p>
                Nel corso degli anni, abbiamo acquisito al nostro interno
                competenze professionali sempre più specializzate per garantire
                una consulenza e un servizio al passo coi tempi.
              </p>
              <p>
                Da oltre 40 anni assistiamo i nostri clienti, piccoli o grandi
                che siano, con competenza e dedizione curando e valorizzando
                anche il benessere dei nostri collaboratori e la comunità in cui
                viviamo.
              </p>
              <p>
                Crediamo nella collaborazione tra i diversi attori presenti nei
                settori in cui operiamo. Per questo, abbiamo creato
                un'importante rete di rapporti con professionisti e docenti
                universitari.
              </p>
            </div>
            <div className="mt-8">
              <Button text="Scopri i nostri professionisti" />
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/assets/images/webp/hand_pointing_books.webp"
              alt="Studio library"
              className="w-full aspect-square object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">
          I nostri valori
        </h2>

        <div className="hidden md:grid md:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className={`col-span-4 ${index == 3 ? "col-start-3" : ""}`}
            >
              <ValueCard
                name={value.name}
                description={value.description}
                icon={value.icon}
              />
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {values.map((value, index) => (
              <SwiperSlide key={index}>
                <ValueCard
                  name={value.name}
                  description={value.description}
                  icon={value.icon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </BaseLayout>
  );
}
