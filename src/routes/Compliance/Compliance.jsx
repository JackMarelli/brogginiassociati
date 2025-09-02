import React from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/Button/Button";
import FoldSection from "../../components/FoldSection/FoldSection";

// Compliance services data structure
const complianceData = [
  {
    id: 1,
    title: "Certificazione ISO 9001",
    description:
      "Avendo come obiettivo generale il conseguimento di elevati standard qualitativi, lo Studio applica, sin dal 2004, un sistema di gestione per la qualità in conformità alla norma UNI EN ISO 9001/2015",
    image: "/assets/images/webp/csqa.png",
    imagePosition: "right",
    imageHeight: "200px",
    // pdf facoltativo: se non presente, il bottone non compare
  },
  {
    id: 2,
    title: "Certificazione SR10",
    description:
      "Consapevole della responsabilità che una struttura come la nostra ha all’interno della società in cui opera, dal 2024 abbiamo implementato un Sistema di Gestione della Responsabilità Sociale in conformità con lo Standard SR 10 di IQNet così da essere aiutati a raggiungere la soddisfazione dei bisogni e delle aspettative degli stakeholder e a contribuire allo sviluppo sostenibile, tutto attraverso un comportamento trasparente ed etico.",
    image: "/assets/images/webp/sr10.webp",
    imagePosition: "left",
  },
  {
    id: 3,
    title: "Parità di genere",
    description:
      "Lo Studio da sempre crede nell’importanza di valorizzare le proprie risorse come elemento fondamentale per il raggiungimento degli obiettivi. Nel 2024 ha conseguito la certificazione UNI PDR 125. Ha intrapreso un percorso orientato a garantire pari dignità e pari opportunità per tutti i dipendenti e collaboratori, promuovendo politiche di gestione delle differenze e tutela della maternità e paternità, indipendentemente da provenienza, cultura, religione, genere, orientamento sessuale, opinioni politiche o altre caratteristiche personali.",
    image: "/assets/images/webp/UNI_PDR_125_PARITA_DI_GENERE_Editable__1_.webp", // <-- sostituisci con il path reale
    imageHeight: "240px",
    imagePosition: "right",
  },
  {
    id: 4,
    title: "Codice etico",
    description:
      "Il Codice Etico rappresenta la guida ai valori e ai principi di comportamento condivisi dallo Studio: regole chiare di trasparenza e responsabilità per tutti i collaboratori e dipendenti, a tutela dell’integrità e della reputazione dello Studio.",
    image: "/assets/images/webp/libri.webp",
    imageHeight: "300px",
    imagePosition: "left",
    pdf: "/assets/documents/codice_etico_rev1.pdf", // <-- ora il bottone appare grazie a 'pdf'
  },
  {
    id: 5,
    title: "Whistleblowing - Segnalazione molestie",
    description:
      "Lo Studio ha attivato un sistema di gestione delle segnalazioni per condotte illecite o non etiche, a tutela dell’organizzazione e dei dipendenti. È possibile effettuare le segnalazioni in modo responsabile, seguendo le procedure aziendali.",
    image: "/assets/images/webp/whistleblowing.webp",
    imageHeight: "300px",
    imagePosition: "right",
  },
];

const ComplianceRow = ({
  title,
  description,
  image,
  imagePosition,
  pdf,
  imageHeight, // <--- nuova prop
}) => {
  return (
    <section className="py-12 px-8 leading-tight">
      <div
        className={`flex flex-col ${
          imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
        } lg:items-stretch items-start gap-8`}
      >
        {/* Colonna testo */}
        <div className="lg:w-1/2 flex flex-col justify-start">
          <div>
            <h2 className="text-2xl 2xl:text-5xl font-medium mb-4 2xl:mb-8">
              {title}
            </h2>
            <p className="2xl:text-xl">{description}</p>
          </div>

          {/* Azioni sempre in basso */}
          <div className="mt-6 flex flex-col gap-3">
            {pdf && (
              <Button text="Visualizza" onClick={() => window.open(pdf, "_blank")} />
            )}
          </div>
        </div>

        {/* Colonna immagine */}
        <div
          className={`lg:w-1/2 overflow-hidden lg:flex items-start ${
            imagePosition === "right" ? "justify-end" : "justify-start"
          }`}
        >
          <img
            src={image}
            alt={title}
            style={{ height: imageHeight || "100%" }} // <-- altezza da JSON
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default function Compliance() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <FoldSection
        title="Compliance"
        text="Consapevoli che il principale fattore di successo di ogni impresa è costituito dalle risorse umane, lo Studio Dott. Riccardo Broggini promuove il coinvolgimento del personale nel raggiungimento degli obiettivi strategici aziendali e sostiene lo sviluppo di un ambiente di lavoro caratterizzato da lealtà, fiducia reciproca e collaborazione, valorizzando le competenze professionali attraverso attività di formazione e crescita."
        image="/assets/images/webp/news1.webp"
        height="h-[85vh]"
        overlay={true}
        gradientDirection="r"
        textMaxWidth="md:max-w-3xl"
      />

      {/* Compliance Sections */}
      {complianceData.map((item, index) => (
        <React.Fragment key={item.id}>
          <ComplianceRow
            title={item.title}
            description={item.description}
            image={item.image}
            imagePosition={item.imagePosition}
            pdf={item.pdf}
            imageHeight={item.imageHeight}
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
