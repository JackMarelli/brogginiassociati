import React from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/Button/Button";

// Compliance services data structure
const complianceData = [
  {
    id: 1,
    title: "Certificazione ISO 9001",
    description:
      "Lo Studio dott. Riccardo Broggini opera ed eroga i propri servizi in conformità alla norma ISO 9001, sistema di gestione della qualità certificato da ente terzo dal 2004.",
    image: "/assets/images/penna_elefante.jpg",
    imagePosition: "right",
    badge: "/assets/images/iso9001.png",
    buttonText: "Leggi la nostra Politica per la Qualità",
  },
  {
    id: 2,
    title: "Certificazione SR 10",
    description:
      "Dal 2023 lo Studio dott. Riccardo Broggini ha deciso di estendere il perimetro della certificazione allo standard IQNET SR10 per la responsabilità sociale.",
    image: "/assets/images/gestione_crisi_impresa.png",
    imagePosition: "left",
    badge: "/assets/images/sr10.png",
    buttonText: "Scopri di più",
  },
  {
    id: 3,
    title: "Politica per la qualità e la responsabilità sociale d’impresa",
    description:
      "Lo Studio dott. Riccardo Broggini intende mantenere e migliorare la posizione di rilievo di cui gode attualmente nel settore nel quale opera, impegnandosi ad utilizzare il Sistema Qualità come strumento quotidiano per creare valore per i clienti e per i collaboratori.",
    image: "/assets/images/vetrata.jpg",
    imagePosition: "right",
    buttonText: "Leggi la Politica per la Qualità",
  },
  {
    id: 4,
    title: "Parità di genere",
    description:
      "Lo Studio da sempre crede nell’importanza di valorizzare le proprie risorse come elemento fondamentale per il raggiungimento degli obiettivi. Nel 2024 ha conseguito la certificazione UNI PDR 125. Ha intrapreso un percorso orientato a garantire pari dignità e pari opportunità per tutti i dipendenti e collaboratori, promuovendo politiche di gestione delle differenze e tutela della maternità e paternità, indipendentemente da provenienza, cultura, religione, genere, orientamento sessuale, opinioni politiche o altre caratteristiche personali.",
    image: "/assets/images/parita.JPG",
    imagePosition: "left",
    buttonText: "Leggi la Politica per la Parità di Genere",
  },
  {
    id: 5,
    title: "Codice etico",
    description:
      "Il Codice Etico rappresenta la guida ai valori e ai principi di comportamento condivisi dallo Studio: regole chiare di trasparenza e responsabilità per tutti i collaboratori e dipendenti, a tutela dell’integrità e della reputazione dello Studio.",
    image: "/assets/images/libri.jpg",
    imagePosition: "right",
    buttonText: "Leggi il nostro Codice Etico",
  },
  {
    id: 6,
    title: "Whistleblowing - Segnalazione molestie",
    description:
      "Lo Studio ha attivato un sistema di gestione delle segnalazioni per condotte illecite o non etiche, a tutela dell’organizzazione e dei dipendenti. È possibile effettuare le segnalazioni in modo responsabile, seguendo le procedure aziendali.",
    image: "/assets/images/Occhiali.jpg",
    imagePosition: "left",
    buttonText: "Invia una segnalazione",
  },
];

const ComplianceRow = ({
  title,
  description,
  image,
  imagePosition,
  badge,
  button, // now expecting a JSX element (optional)
}) => {
  return (
    <section className="py-12 px-8 md:px-16">
      <div
        className={`h-fit flex flex-col ${
          imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-start gap-8`}
      >
        <div className="lg:w-1/2 grow h-full flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-medium mb-4">{title}</h2>
            <p className="mb-6">{description}</p>
            {badge && (
              <div className="my-4">
                <img
                  src={badge}
                  alt={`${title} badge`}
                  className="w-24 h-auto"
                />
              </div>
            )}
          </div>
          {/* Only render button if it's provided */}
          {button && <div>{button}</div>}
        </div>
        <div className="lg:w-1/2 h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
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
      <section className="w-full h-[70vh] relative bg-gray-900">
        <img
          src="/assets/images/servizi_fold.png"
          alt="Compliance"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute bottom-16 left-8 md:left-16 transform">
          <h1 className="text-white text-5xl md:text-6xl font-medium mb-6">Compliance</h1>
          <div className="max-w-[300px] max-w-2xl">
            <p className="text-white text-lg">
              Consapevoli che il principale fattore di successo di ogni impresa
              è costituito dalle risorse umane, lo Studio Dott. Riccardo
              Broggini promuove il coinvolgimento del personale nel
              raggiungimento degli obiettivi strategici aziendali e sostiene lo
              sviluppo di un ambiente di lavoro caratterizzato da lealtà,
              fiducia reciproca e collaborazione, valorizzando le competenze
              professionali attraverso attività di formazione e crescita.
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
            badge={item.badge}
            imagePosition={item.imagePosition}
            button={
              item.title === "Codice etico" ? (
                <Button
                  text="Leggi il nostro Codice Etico"
                  onClick={() =>
                    window.open("/assets/documents/codice_etico_rev1.pdf", "_blank")
                  }
                />
              ) : null
            }
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
