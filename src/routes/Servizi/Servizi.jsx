import React from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import PropTypes from "prop-types";

// Service data structure
const serviziData = [
  {
    id: 1,
    title: "Consulenza aziendale e societaria",
    description:
      "Offriamo servizi di consulenza e assistenza societaria nell’ambito della gestione ordinaria e straordinaria, supportando le aziende con adeguati strumenti di controllo di gestione, budgeting & reporting.",
    image: "/assets/images/consulenza_aziendale_societaria.png",
    imagePosition: "right",
    items: [
      "Costituzione di società e definizione degli aspetti statutari di governance",
      "Consulenza integrata in ambito operativo e strategico per startup innovative",
      "Operazioni straordinarie quali passaggi generazionali, fusioni, scissioni, affitti d’azienda e conferimenti",
      "Valutazioni d’azienda, relazioni di stima ex 2434 e 2465 c.c., perizie giurate in tema di rivalutazioni di beni e partecipazioni previste dalla normativa civilistica e fiscale",
      "Elaborazione di due diligence contabili e fiscali (individuazione delle aree di rischio, esame della corretta interpretazione e applicazione della normativa) di aziende o gruppi aziendali in occasione di acquisizioni, fusioni, operazioni sul capitale",
      "Valutazione d’azienda in occasione di operazioni di conferimento o trasformazione societaria",
      "Assistenza nella fase di costituzione e di sviluppo di Start Up e PMI innovative",
    ],
  },
  {
    id: 2,
    title: "Consulenza contabile e fiscale",
    description:
      "Forniamo consulenza e assistenza in ambito contabile e fiscale a professionisti, imprese di ogni dimensione e per procedure concorsuali.",
    image: "/assets/images/consulenza_contabile_fiscale.png",
    imagePosition: "left",
    items: [
      "Servizi di consulenza in materia di imposte dirette, indirette e relativi adempimenti",
      "Pareri su profili fiscali nell’ambito di operazioni straordinarie (fusioni, scissioni, conferimenti) e di ristrutturazioni societarie",
      "Attività di due diligence fiscali",
      "Formulazione di interpelli e quesiti",
      "Assistenza per la tenuta della contabilità e per la predisposizione di bilanci",
      "Consulenza in materia di principi contabili nazionali e internazionali",
    ],
  },
  {
    id: 3,
    title: "Contenzioso tributario",
    description:
      "Garantiamo consulenza e assistenza in sede di verifiche fiscali, accertamenti e contenziosi tributari, sia nelle fasi di pre-contenzioso (contraddittorio, accertamento con adesione, reclamo e mediazione tributaria) che nei diversi gradi di giudizio.",
    image: "/assets/images/contenzioso_tributario.png",
    imagePosition: "right",
    items: [
      "Assistenza nell’ambito di verifiche fiscali da parte dell’Amministrazione Finanziaria",
      "Gestione dei rapporti con l’Agenzia delle Entrate o con gli Agenti della Riscossione per quanto attiene la definizione di atti impositivi e l’adozione degli istituti deflattivi del contenzioso al fine di prevenire le liti in materia tributaria",
      "Difesa, in ogni grado di giudizio, davanti alle Commissioni Tributarie",
    ],
  },
  {
    id: 4,
    title: "Gestione delle crisi di impresa",
    description:
      "Grazie a consolidate competenze specialistiche nelle procedure di gestione delle crisi d’impresa, siamo in grado di assistere i nostri clienti nelle diverse fasi di ristrutturazione del debito, attraverso l’adozione degli strumenti previsti dalla vigente normativa.",
    image: "/assets/images/gestione_crisi_impresa.png",
    imagePosition: "left",
    items: [
      "Piani attestati ex 67 l.f., accordi di ristrutturazione del debito ai sensi dell’art. 182 bis l.f., concordati preventivi in continuità o liquidatori ex artt. 161 l.f. e 186 l.f.",
      "Attestazione di piani, accordi di ristrutturazione o concordati preventivi",
      "Presentazione delle domande di ammissione alle procedure concorsuali minori e predisposizione delle domande di nomina dell’organismo di composizione della crisi",
    ],
  },
];

// Reusable Service Row Component
const ServiceRow = ({ title, description, image, imagePosition, items }) => {
  return (
    <section className="py-16 px-8 md:px-16">
      <div
        className={`flex flex-col ${
          imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-8`}
      >
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-medium mb-6">{title}</h2>
          <p className="mb-4">{description}</p>
          <p className="font-medium mt-6 mb-2">In particolare:</p>
          <ul className="list-disc pl-6 space-y-2">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img src={image} alt={title} className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

// PropTypes for ServiceRow
ServiceRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf(["left", "right"]).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Servizi() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="w-full h-[70vh] relative bg-gray-900">
        <img
          src="/assets/images/servizi_fold.png"
          alt="Codice Tributario"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute bottom-16 left-16 transform">
          <h1 className="text-white text-6xl font-medium mb-6">
            I nostri servizi
          </h1>
          <div className="max-w-2xl">
            <p className="text-white text-lg">
              Il nostro studio è strutturato in aree professionali
              specialistiche che collaborano tra loro in maniera sinergica e
              integrata, al fine di garantire, oltre alle competenze più
              qualificate, elevata flessibilità e tempestività nella risposta al
              cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {serviziData.map((servizio, index) => (
        <React.Fragment key={servizio.id}>
          <ServiceRow
            title={servizio.title}
            description={servizio.description}
            image={servizio.image}
            imagePosition={servizio.imagePosition}
            items={servizio.items}
            bgColor="bg-white"
          />
          {index < serviziData.length - 1 && (
            <div className="flex justify-center">
              <hr className="w-1/2 border-t border-gray-300 my-4" />
            </div>
          )}
        </React.Fragment>
      ))}
    </BaseLayout>
  );
}
