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
        "Rappresenta la nostra responsabilità verso l’interesse pubblico, convinti che soltanto nel rispetto di tale interesse possiamo soddisfare le necessità dei nostri clienti, impegnandoci anche in un ruolo educativo alla legalità nei confronti di tutti i nostri stakeholders.​",
      icon: Shield,
    },
    {
      name: "Impegno",
      description:
        "Nel nostro lavoro, che significa affidabilità e competenza per assicurare sempre il meglio, in tutto ciò che facciamo, a tutti i nostri interlocutori. Un impegno che si estende anche nel sociale e nel servizio che, da sempre, prestiamo alle associazioni, istituzioni ed enti no profit del territorio.",
      icon: Target,
    },
    {
      name: "Squadra",
      description:
        "Rappresenta la coesione, l’organizzazione, l’interdisciplinarietà che ci contraddistingue e che indirizzano il nostro operato per una sempre maggiore integrazione fra i vari gruppi di lavoro. Per noi è importante essere una sola squadra, compatta e focalizzata, capace di agire a tutto campo e offrire la migliore soluzione possibile e creare valore per i nostri clienti e per chi lavora con noi.​",
      icon: Users,
    },
    {
      name: "Attenzione verso l’altro",
      description:
        "è un vero e proprio modo d’essere, il nostro interlocutore si sente al centro, ascoltato ed importante. Significa disponibilità, ascolto, capacità di sostituirsi all’altro a non rendere arduo e faticoso il lavoro altrui. Ci è riconosciuta dai nostri clienti, la si respira tra di noi, si percepisce nelle relazioni con i collaboratori e nel nostro essere attivi e presenti sul territorio.​",
      icon: HeartHandshake,
    },
    {
      name: "Innovazione e sguardo al futuro",
      description:
        "Significa voglia di miglioramento continuo, di modernità, di non fossilizzarsi su vecchi schemi. Questo ci ha portato al profondo processo di riorganizzazione e di crescita, cominciato negli ultimi anni e ancora attuale. Ne sono un esempio la formalizzazione, il monitoraggio e la digitalizzazione dei processi..",
      icon: Lightbulb,
    },
    {
      name: "Etica",
      description:
        "Rispetto delle regole, riservatezza delle informazioni acquisite, trasparenza, correttezza e fiducia, senso di responsabilità verso tutti i nostri stakeholders e la società civile. Questo include la promozione della coesistenza e della valorizzazione delle differenze, nel pieno rispetto di orientamenti, competenze e attitudini individuali. ​",
      icon: Scale,
    },
    {
      name: "Imprenditorialità",
      description:
        "Proattività, determinazione, tenacia, voglia di sperimentarsi e di crescere, il non ritenersi mai arrivati è l’atteggiamento che contraddistingue sia i professionisti più affermati che i giovani.​",
      icon: Rocket,
    },
    {
      name: "Eccellenza",
      description:
        "Competenza e aggiornamento continuo, precisione e attenzione al dettaglio, processi solidi e consolidati e una governance composta da professionisti senior sono le basi per garantire soluzioni articolate e ritagliate alla soddisfazione dei bisogni del cliente.​",
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
            <h2 className="text-4xl md:text-4xl 2xl:text-6xl font-medium mb-8 2xl:mb-10">
              Studio Dott.
              <br />
              Riccardo Broggini
            </h2>
            <div className="space-y-4 text-md 2xl:text-xl">
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
        <h2 className="text-xl md:text-4xl 2xl:text-7xl font-medium text-center">
          I nostri valori
        </h2>
        <div className="max-w-2xl mx-auto text-center text-gray-600 mt-4 2xl:text-xl 2xl:max-w-3xl 2xl:my-8 2xl:mb-16">
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
  <div className="hidden md:grid md:grid-cols-12 gap-8 max-w-7xl 2xl:max-w-[70%] mx-auto mt-12 2xl:mt-8">
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
