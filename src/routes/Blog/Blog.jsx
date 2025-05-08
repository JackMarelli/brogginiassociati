import React from "react";
import { Link } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import NewsCard from "../../components/NewsCard/NewsCard";

// Sample blog data - you can move this to a separate data file later
const blogArticles = [
  {
    id: "flat-tax-paperoni-residenza-italia",
    title:
      "Aumenta a 200.000 la Flat Tax per i 'Paperoni' che trasferiscono la residenza in Italia",
    excerpt:
      "Flat Tax raddoppiata a 200.000€ per i nuovi residenti esteri in Italia. Scopri chi può aderire e quali redditi sono agevolati. Consulenza fiscale personalizzata.",
    image: "/assets/images/news1.png",
    date: "16 Luglio 2024",
    categories: ["Novità legislative", "Tasse"],
    content: {
      introduction:
        "L'articolo 2-quater della L. 7/10/2024 n.143 – che ha convertito il D.L. 113/2024 – consente ai soggetti che:",
      points: [
        "hanno applicato gli indici sintetici di affidabilità fiscale (ISA);",
        "e che aderiscono entro il 31 ottobre 2024 al concordato preventivo biennale (CPB)",
      ],
      additionalText:
        "di adottare una forma di 'ravvedimento speciale' che è stato assimilato per le sue caratteristiche da molti ad una sorta di ''condono'' o 'sanatoria'.",
      sections: [
        {
          title: "In cosa consiste?",
          content:
            "L'adesione al 'condono fiscale' consente, con riferimento agli anni d'imposta dal 2018 al 2022, di ottenere l'esclusione da eventuali accertamenti – ma non tutte le tipologie – sui maggiori redditi d'imposta o di lavoratore autonomo effettuabili dall'Amministrazione Finanziaria a fronte del pagamento di un'imposta sostitutiva delle imposte sui redditi e delle relative addizionali nonché dell'IRAP, da versarsi entro il 31/03/2025 in unica soluzione o in un massimo di 24 rate mensili. L'adesione all'istituto si perfeziona con il pagamento dell'intero importo dovuto.",
        },
        {
          title: "Determinazione dell'imposta sostitutiva",
          content:
            "L'imposta sostitutiva è calcolata:\n- per quanto riguarda le imposte sui redditi e relative addizionali, in funzione dei punteggi ISA conseguiti in ciascun anno dal contribuente (con un minimo di € 1.000 per annualità);\n- per quanto riguarda l'IRAP, dovrebbe essere calcolata all'aliquota ordinaria del 3,9% sulla maggiore base imponibile determinata.",
        },
        {
          title: "Cause Ostative",
          content:
            "Non è possibile accedere all'istituto in oggetto in presenza di processi verbali di constatazione, schemi di atto di accertamento e atti di recupero di crediti inesistenti.",
        },
        {
          title: "Cause di decadenza",
          content:
            "Si decade dagli effetti della sanatoria:\n- in caso di decadenza dal concordato preventivo biennale;\n- in presenza di una misura cautelare per reati tributari nei periodi 2018-2022;\n- reati tributari, false comunicazioni sociali, riciclaggio.",
        },
        {
          title: "Considerazioni",
          content:
            "L'istituto in esame non offre una 'copertura tombale' come potrebbe sembrare ad un primo esame in quanto:\n- l'attività di accertamento viene limitata ma non esclusa,\n- ai fini IVA non ha rilevanza,\n- proroga per i soggetti aderenti i termini di accertamento.",
        },
      ],
    },
  },
];

export default function Blog() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="py-12 px-8 text-center">
        <h1 className="text-5xl font-medium mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tieniti aggiornato con le ultime circolari redatte dal nostro studio
        </p>
      </section>

      {/* Featured Article */}
      <section className="w-full relative mb-16">
        <Link to={`/blog/${blogArticles[0].id}`}>
          <div className="relative h-[60vh]">
            <img
              src={blogArticles[0].image}
              alt={blogArticles[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-4xl font-medium mb-4">
                {blogArticles[0].title}
              </h2>
              <p className="text-lg mb-2">{blogArticles[0].excerpt}</p>
            </div>
          </div>
        </Link>
      </section>

      {/* Blog Grid */}
      <section className="px-8 md:px-16 mb-16">
        <div className="grid grid-cols-12 gap-8">
          {blogArticles.map((article) => (
            <NewsCard
              to={`/blog/${article.id}`}
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
            />
          ))}
          {/* Duplicate article for demo purposes */}
          {blogArticles.map((article) => (
            <NewsCard
              to={`/blog/${article.id}`}
              key={`${article.id}-duplicate-1`}
              title={article.title}
              description={article.description}
              image={article.image}
            />
          ))}
          {blogArticles.map((article) => (
            <NewsCard
              to={`/blog/${article.id}`}
              key={`${article.id}-duplicate-2`}
              title={article.title}
              description={article.description}
              image={article.image}
            />
          ))}
        </div>
      </section>
    </BaseLayout>
  );
}
