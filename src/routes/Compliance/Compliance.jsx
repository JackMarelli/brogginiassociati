import React from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/Button/Button";

// Compliance services data structure
const complianceData = [
  {
    id: 1,
    title: "Certificazione ISO 9001",
    description:
      "Lo Studio dott. Riccardo Broggin opera ed eroga i propri servizi in conformità alla norma ISO 9001 sistema di gestione della qualità certificato da ente terzo dal 2003.",
    image: "/assets/images/consulenza_aziendale_societaria.png",
    imagePosition: "right",
    buttonText: "Scopri di più",
  },
  {
    id: 2,
    title: "Certificazione SR 10",
    description:
      "Dal 2023 lo Studio dott. Riccardo Broggin ha deciso di estendere il perimetro della certificazione allo standard IQNET SR10 per la responsabilità sociale.",
    image: "/assets/images/consulenza_contabile_fiscale.png",
    imagePosition: "left",
    buttonText: "Scopri di più",
  },
  {
    id: 3,
    title: "Politica per la qualità e la responsabilità sociale di impresa",
    description:
      "Lo Studio dott. Riccardo Broggin intende mantenere e migliorare la posizione di rilievo di cui gode attualmente nel settore nel quale opera impegnandosi ad utilizzare quale strumento quotidiano il Sistema Qualità.",
    image: "/assets/images/contenzioso_tributario.png",
    imagePosition: "right",
    buttonText: "Scopri di più",
  },
  {
    id: 4,
    title: "Certificazione parità di genere",
    description:
      "Lo Studio da sempre opera per promuovere una cultura paritaria, fornire risorse necessarie per il raggiungimento di obiettivi. Nel 2024 lo Studio ha conseguito la certificazione UNI PDR 125.",
    image: "/assets/images/gestione_crisi_impresa.png",
    imagePosition: "left",
    buttonText: "Scopri di più",
  },
  {
    id: 5,
    title: "Politica per la parità di genere",
    description:
      "Lo Studio dott. Riccardo Broggin ha intrapreso un percorso di certificazione della Parità di Genere orientato a garantire pari dignità e pari opportunità per tutti i dipendenti e collaboratori nell'ambito di un rapporto di lavoro trasparente e rispettoso, quale appartenenza di ruolo professionale, responsabilità, percorsi di attribuzione, posizioni di gestione delle differenze, tutela della maternità e della paternità, a prescindere dai paesi di origine, dalla cultura religiosa di appartenenza, dal genere, dall'orientamento sessuale, dalle opinioni politiche e da ogni altra caratteristica e stile personale.",
    image: "/assets/images/consulenza_aziendale_societaria.png",
    imagePosition: "right",
    buttonText: "Scopri di più",
  },
];

// Reusable Compliance Row Component
const ComplianceRow = ({
  title,
  description,
  image,
  imagePosition,
  buttonText,
}) => {
  return (
    <section className="py-12 px-8 md:px-16">
      <div
        className={`h-96 flex flex-col ${
          imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-8`}
      >
        <div className="lg:w-1/2 grow h-full flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-medium mb-4">{title}</h2>
            <p className="mb-6">{description}</p>
          </div>
          <Button text={buttonText} />
        </div>
        <div className="lg:w-1/2 h-full">
          <img src={image} alt={title} className="w-full h-full rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
};

export default function Compliance() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="w-full h-[70vh] relative bg-gray-900">
        <img
          src="/assets/images/servizi_fold.png"
          alt="Compliance"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute bottom-16 left-16 transform">
          <h1 className="text-white text-6xl font-medium mb-6">Compliance</h1>
          <div className="max-w-2xl">
            <p className="text-white text-lg">
              Consapevoli che il principale fattore di successo di ogni impresa
              è costituito dalle risorse umane, lo STUDIO DOTT. RICCARDO BROGGIN
              promuove il coinvolgimento del personale nel raggiungimento degli
              obiettivi strategici aziendali e sostiene lo sviluppo di un
              ambiente di lavoro caratterizzato da lealtà, fiducia reciproca e
              collaborazione, valorizzando le competenze professionali
              attraverso attività di formazione e crescita.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Sections */}
      {complianceData.map((item, index) => (
        <React.Fragment key={item.id}>
          <ComplianceRow
            title={item.title}
            description={item.description}
            image={item.image}
            imagePosition={item.imagePosition}
            buttonText={item.buttonText}
          />
          {index < complianceData.length - 1 && (
            <div className="flex justify-center">
              <hr className="w-1/2 border-t border-gray-300 my-4" />
            </div>
          )}
        </React.Fragment>
      ))}
    </BaseLayout>
  );
}
