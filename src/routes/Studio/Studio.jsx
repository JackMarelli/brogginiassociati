import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ValueCard from "../../components/ValueCard/ValueCard";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/Button/Button";
import FoldSection from "../../components/FoldSection/FoldSection";

import {
  Users,
  Scale,
  Lightbulb,
  Shield,
  Target,
  HeartHandshake,
  Rocket,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Studio() {
  const navigate = useNavigate();

  const values = [
    {
      name: "Onestà",
      description:
        "È la nostra responsabilità verso l’interesse pubblico: solo nel suo rispetto soddisfiamo i bisogni dei clienti. Promuoviamo anche un ruolo educativo alla legalità verso tutti gli stakeholder.",
      icon: Shield,
    },
    {
      name: "Impegno",
      description:
        "Affidabilità e competenza per dare sempre il meglio a tutti i nostri interlocutori. Un impegno che si estende al sociale e al servizio reso a associazioni, istituzioni ed enti non profit del territorio.",
      icon: Target,
    },
    {
      name: "Squadra",
      description:
        "Coesione, organizzazione e interdisciplinarità guidano il nostro operare. Essere una sola squadra, compatta e focalizzata, ci permette di offrire soluzioni efficaci e creare valore per clienti e collaboratori.",
      icon: Users,
    },
    {
      name: "Attenzione verso l’altro",
      description:
        "Un vero modo d’essere: il nostro interlocutore si sente al centro, ascoltato e importante. Significa disponibilità, ascolto e capacità di alleggerire il lavoro altrui; è riconosciuta da clienti e collaboratori.",
      icon: HeartHandshake,
    },
    {
      name: "Innovazione e sguardo al futuro",
      description:
        "Voglia di miglioramento continuo e modernità, senza fossilizzarsi su vecchi schemi. Ne sono prova la riorganizzazione interna e la digitalizzazione dei processi avviate negli ultimi anni.",
      icon: Lightbulb,
    },
    {
      name: "Etica",
      description:
        "Rispetto delle regole, riservatezza, trasparenza, correttezza e fiducia. Responsabilità verso tutti gli stakeholder e la società civile, valorizzando le differenze e le attitudini individuali.",
      icon: Scale,
    },
    {
      name: "Imprenditorialità",
      description:
        "Proattività, determinazione e tenacia: voglia di sperimentare e crescere, senza ritenersi mai arrivati. Un atteggiamento condiviso da professionisti senior e giovani.",
      icon: Rocket,
    },
    {
      name: "Eccellenza",
      description:
        "Competenza e aggiornamento continuo, precisione e attenzione al dettaglio. Processi solidi e una governance senior per soluzioni su misura dei bisogni del cliente.",
      icon: Award,
    },
  ];

  return (
    <BaseLayout>
      {/* Hero Section */}
      <FoldSection
        title={"Le nostre radici"}
        text="Da sempre la parola onestà rappresenta il fondamento della nostra professionalità che per noi significa, oltre a un comportamento rispettoso e a tutela dell’interesse pubblico, anche un ruolo di educazione alla legalità con tutti i nostri stakeholder."
        image="/assets/images/webp/studio_fold.webp"
        centered={true}
        height="h-[90vh]"
        textMaxWidth="max-w-2xl"
      />

      {/* About Studio Section */}
      <section className="py-20 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-4xl font-medium mb-8">
              Studio Dott.
              <br />
              Riccardo Broggini
            </h2>
            <div className="space-y-4 text-md">
              <p>
                Siamo uno studio di dottori commercialisti,{" "}
                <strong>con una storia di 50 anni</strong>, che sin dall’origine
                segue una strada ben precisa, caratterizzata da{" "}
                <strong>
                  onestà, professionalità e attenzione alle persone
                </strong>
                .
              </p>
              <p>
                Siamo una realtà{" "}
                <strong>moderna, organizzata e strutturata</strong>, capace di
                rispondere alle esigenze dei nostri clienti con cui abbiamo un
                rapporto di fiducia. In tutto ciò che facciamo mettiamo{" "}
                <strong>la persona al centro</strong> con{" "}
                <strong>
                  rispetto, disponibilità, ascolto, gentilezza e professionalità
                </strong>
                .
              </p>
              <p>
                <strong>La cura</strong> che abbiamo nei confronti dei clienti
                si traduce in una <strong>accuratezza e attenzione</strong> nel
                lavoro che svolgiamo con <strong>qualità e precisione</strong>.
              </p>
              <p>
                Ci caratterizza anche il{" "}
                <strong>grande legame con il territorio</strong>, sia con
                riferimento alla clientela sia con riferimento ai rapporti con
                gli enti e le realtà locali.
              </p>
              <p>
                Siamo uno studio che guarda con interesse{" "}
                <strong>all’innovazione e alle sfide</strong>.
              </p>
            </div>

            <div className="mt-8">
              <Button
                text="Conosci i professionisti"
                onClick={() => navigate("/professionisti")}
              />
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
        <h2 className="text-xl md:text-4xl font-medium text-center">
          I nostri valori
        </h2>
        <div className="max-w-2xl mx-auto text-center text-gray-600 mt-4">
          <p>
            I nostri valori possono essere riassunti nella parola{" "}
            <strong>Cura</strong>.
          </p>
          <p>
            Rappresentano la bussola delle nostre relazioni con tutti gli
            stakeholder dello studio: clienti, collaboratori, fornitori e
            territorio.
          </p>
        </div>

        {/* Desktop / tablet grid */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 max-w-7xl mx-auto mt-12">
          {values.map((value, index) => (
            <div
              key={index}
              className={`col-span-4 ${
                index === values.length - 2 ? "md:col-start-3" : ""
              }`}
            >
              <ValueCard
                name={value.name}
                description={value.description}
                icon={value.icon}
              />
            </div>
          ))}
        </div>

        {/* Mobile swiper */}
        <div className="md:hidden mt-8">
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
