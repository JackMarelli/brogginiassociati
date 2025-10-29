import { useState, useEffect } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/Button/Button";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import NewsCard from "../../components/NewsCard/NewsCard.jsx";
import FoldSection from "../../components/FoldSection/FoldSection.jsx";
import ReactPlayer from "react-player";
import news from "../../data/news.json"; // es: src/data/news.json

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Building2, FileText, Scale, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      title: "Consulenza Aziendale e Societaria",
      description:
        "Offriamo servizi di consulenza e assistenza societaria completa per aziende italiane e internazionali, supportando le aziende con adeguati strumenti di controllo di gestione, budgeting & reporting.",
      icon: Building2,
    },
    {
      title: "Consulenza contabile e fiscale",
      description:
        "Forniamo consulenza e assistenza in ambito contabile e fiscale a professionisti, imprese di ogni dimensione e per procedure concorsuali.",
      icon: FileText,
    },
    {
      title: "Contenzioso tributario",
      description:
        "Garantiamo consulenza e assistenza in sede di verifiche fiscali, accertamenti e contenziosi tributari, sia nelle fasi di pre-contenzioso (contraddittorio, accertamento con adesione, reclamo e mediazione tributaria) che nei diversi gradi di giudizio.",
      icon: Scale,
    },
    {
      title: "Gestione delle crisi di impresa",
      description:
        "Grazie a consolidate competenze specialistiche nelle procedure di gestione delle crisi d’impresa, siamo in grado di assistere i nostri clienti nelle diverse fasi di ristrutturazione del debito, attraverso l’adozione degli strumenti previsti dalla vigente normativa.",
      icon: BarChart,
    },
  ];

  // Prepara le circolari reali
  const circolari = [...news]
    .filter((n) => n.file && typeof n.file === "string")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Util per data in IT
  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  return (
    <BaseLayout>
      <FoldSection
        title="Studio dott. Riccardo Broggini – Dottori Commercialisti Associati"
        text="Da oltre 50 anni siamo a fianco dei nostri clienti con professionalità e attenzione alle persone. "
        image="/assets/images/webp/fold.webp"
        buttonText="Leggi di più"
        buttonLink="/studio"
        gradientDirection="tl"
      />

      <section className="flex flex-col items-center bg-white py-20 px-8 md:px-32 lg:px-64">
        <h2 className="text-5xl md:text-6xl 2xl:text-7xl font-semibold text-center mb-8 2xl:mb-10">
          I nostri obiettivi, <br /> da 50 anni
        </h2>
        <p className="text-xl 2xl:text-2xl font-sm text-center max-w-3xl mb-12 2xl:mb-14">
          Costruire con <span className="italic">cura</span> un rapporto di
          fiducia duraturo tra il cliente e il professionista, offrendo al
          contempo competenze diversificate e specializzazioni complementari per
          rispondere ad ogni esigenza.
        </p>
        <div className="w-full max-w-4xl mx-auto mb-20">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <ReactPlayer
              url="/assets/videos/50anni.mov"
              width="10
              height="100%"
              controls={true}
              light="/assets/images/webp/thumbnail.webp"
              playing={false}
            />
          </div>
          <p className="text-center mt-4 text-gray-500">
            Video celebrativo dei 50 anni dello Studio Broggini
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl 2xl:text-7xl font-medium mb-6 2xl:mb-8 text-center">
            Le nostre competenze
          </h2>
          <p className="text-center text-lg 2xl:text-xl mb-16 2xl:mb-20 max-w-xl mx-auto">
            Siamo un team di professionisti con competenze specialistiche che
            guidano il cliente nelle diverse aree di attività
          </p>

          <div className="hidden md:block space-y-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="md:hidden">
            {isMounted && (
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <h2 className="text-5xl md:text-5xl 2xl:text-7xl font-medium text-center mb-6 2xl:mb-8">
          Rimani aggiornato
        </h2>
        <p className="text-center text-lg 2xl:text-xl mb-12 2xl:mb-14">
          Stai sempre aggiornato con le ultime circolari redatte dal nostro
          studio
        </p>

        <div className="grid grid-cols-12 gap-4">
          {circolari.slice(0, 3).map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href={encodeURI(item.file)} // gestisce spazi/caratteri speciali
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              aria-label={`Apri PDF: ${item.title}`}
            >
              <NewsCard
                title={item.title}
                description={item.description}
                image={item.cover || "/assets/images/webp/news1.webp"}
              />
              <div className="mt-2 text-sm text-gray-500">
                {fmtDate(item.date)}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="w-full h-[600px] md:h-[400px] relative">
        <img
          src="/assets/images/webp/fold.webp"
          alt="Studio office"
          className="w-full h-full object-cover"
        />
        <div className="h-fit w-fit absolute top-1/2 -translate-y-1/2 left-8 md:left-16 flex flex-col gap-6">
          <h1 className="text-white text-6xl md:text-4xl 2xl:text-6xl font-md">
            La nostra mission
          </h1>
          <h2 className="text-white text-md 2xl:text-lg max-w-[300px] md:max-w-[45%]">
            Ci impegniamo ogni giorno per garantire ai nostri clienti
            l’attenzione e il tempo di cui hanno bisogno e per supportarli con
            professionalità, rapidità e flessibilità.
          </h2>
          <Button text="I nostri valori" onClick={() => navigate("/studio")} />
        </div>
      </section>
    </BaseLayout>
  );
}
