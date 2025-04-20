import { useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/Button/Button";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import NewsCard from "../../components/NewsCard/NewsCard.jsx";
import Footer from "../../components/Footer/Footer";

import ReactPlayer from "react-player";

export default function Landing() {
  const services = [
    {
      title: "Consulenza Aziendale e Societaria",
      description:
        "Offriamo servizi di consulenza e assistenza societaria completa per aziende italiane e internazionali, supportando le aziende con adeguati strumenti di controllo di gestione, budgeting & reporting.",
      icon: "building",
    },
    {
      title: "Consulenza contabile e fiscale",
      description:
        "Offriamo servizi di consulenza e assistenza societaria completa per aziende italiane e internazionali, supportando le aziende con adeguati strumenti di controllo di gestione, budgeting & reporting.",
      icon: "document",
    },
    {
      title: "Contenzioso tributario",
      description:
        "Offriamo servizi di consulenza e assistenza societaria completa per aziende italiane e internazionali, supportando le aziende con adeguati strumenti di controllo di gestione, budgeting & reporting.",
      icon: "scale",
    },
    {
      title: "Gestione delle crisi di impresa",
      description:
        "Offriamo servizi di consulenza e assistenza societaria completa per aziende italiane e internazionali, supportando le aziende con adeguati strumenti di controllo di gestione, budgeting & reporting.",
      icon: "chart",
    },
  ];

  const newsItems = [
    {
      title:
        'Aumenta a 200.000 la Flat Tax per i "Paperoni" che trasferiscono la residenza in Italia',
      description:
        "Flat Tax raddoppiata a 200.000€ per i nuovi residenti esteri in Italia. Scopri chi può aderire e quali reqisiti...",
      image: "/assets/images/news1.png",
    },
    {
      title:
        'Aumenta a 200.000 la Flat Tax per i "Paperoni" che trasferiscono la residenza in Italia',
      description:
        "Flat Tax raddoppiata a 200.000€ per i nuovi residenti esteri in Italia. Scopri chi può aderire e quali reqisiti...",
      image: "/assets/images/news2.png",
    },
    {
      title:
        'Aumenta a 200.000 la Flat Tax per i "Paperoni" che trasferiscono la residenza in Italia',
      description:
        "Flat Tax raddoppiata a 200.000€ per i nuovi residenti esteri in Italia. Scopri chi può aderire e quali reqisiti...",
      image: "/assets/images/news3.png",
    },
  ];

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="w-full h-screen relative">
        <img
          src="/assets/images/fold.png"
          alt="Studio office"
          className="w-full h-full object-cover"
        />
        <div className="h-fit w-fit absolute bottom-48 left-16 flex flex-col gap-8">
          <h1 className="text-white text-7xl font-md">
            Mega titolo <br /> accattivante
          </h1>
          <h2 className="text-white text-xl font-md">
            Costruire e coltivare con dedizione un autentico rapporto di fiducia{" "}
            <br />
            tra il cliente e il suo professionista di riferimento, un legame che
            ha
          </h2>
          <Button text="Scopri di più" />
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center bg-white py-20 px-8 md:px-32 lg:px-64">
        <h2 className="text-5xl md:text-7xl font-medium text-center mb-12">
          I nostri obiettivi, <br /> da 50 anni
        </h2>
        <p className="text-2xl font-medium text-center max-w-4xl mb-12">
          Costruire e coltivare con dedizione un autentico rapporto di fiducia
          tra il cliente e il suo professionista di riferimento, un legame che
          ha resistito al passare del tempo e all'evolversi del panorama
          economico.
        </p>

        {/* Video Section */}
        <div className="w-full max-w-4xl mx-auto mb-20">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <ReactPlayer
              url="/assets/videos/50anni.mp4"
              width="100%"
              height="100%"
              controls={true}
              light="/assets/images/thumbnail.png"
              playing={false}
              pip={true}
            />
          </div>
          <p className="text-center mt-4 text-gray-500">
            Video celebrativo dei 50 anni dello Studio Broggini
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-medium mb-6 text-center">
            Le nostre competenze
          </h2>
          <p className="text-center text-xl mb-20 max-w-3xl mx-auto">
            Costruire e coltivare con dedizione un autentico rapporto di fiducia
            tra il cliente e il suo professionista di riferimento, un legame che
            ha resistito al passare del tempo e all'evolversi del panorama
            economico.
          </p>

          <div className="space-y-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-8 md:px-16">
        <h2 className="text-5xl md:text-7xl font-medium text-center mb-8">
          Rimani aggiornato
        </h2>
        <p className="text-center text-xl font-medium mb-12">
          Stai sempre aggiornato con le ultime circolari redatte dal nostro
          studio
        </p>

        <div className="grid grid-cols-12 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="w-full h-[400px] relative">
        <img
          src="/assets/images/fold.png"
          alt="Studio office"
          className="w-full h-full object-cover"
        />
        <div className="h-fit w-fit absolute top-1/2 -translate-y-1/2 left-16 flex flex-col gap-8">
          <h1 className="text-white text-7xl font-md">
            Mega titolo <br /> accattivante
          </h1>
          <h2 className="text-white text-xl font-md">
            Costruire e coltivare con dedizione un autentico rapporto di fiducia{" "}
            <br />
            tra il cliente e il suo professionista di riferimento, un legame che
            ha
          </h2>
          <Button text="Scopri di più" />
        </div>
      </section>

      {/* Footer */}
    </BaseLayout>
  );
}
