import React from "react";
import { useParams, Link } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

// Import the same blog data
// In a real app, this would be in a separate file and imported in both components
const blogArticles = [
  {
    id: "flat-tax-paperoni-residenza-italia",
    title: "Aumenta a 200.000 la Flat Tax per i 'Paperoni' che trasferiscono la residenza in Italia",
    excerpt: "Flat Tax raddoppiata a 200.000€ per i nuovi residenti esteri in Italia. Scopri chi può aderire e quali redditi sono agevolati. Consulenza fiscale personalizzata.",
    image: "/assets/images/webp/news1.webp",
    date: "16 Luglio 2024",
    categories: ["Novità legislative", "Tasse"],
    content: {
      introduction: "L'articolo 2-quater della L. 7/10/2024 n.143 – che ha convertito il D.L. 113/2024 – consente ai soggetti che:",
      points: [
        "hanno applicato gli indici sintetici di affidabilità fiscale (ISA);",
        "e che aderiscono entro il 31 ottobre 2024 al concordato preventivo biennale (CPB)",
      ],
      additionalText: "di adottare una forma di 'ravvedimento speciale' che è stato assimilato per le sue caratteristiche da molti ad una sorta di 'condono' o 'sanatoria'.",
      sections: [
        {
          title: "In cosa consiste?",
          content: "L'adesione al 'condono fiscale' consente, con riferimento agli anni d'imposta dal 2018 al 2022, di ottenere l'esclusione da eventuali accertamenti – ma non tutte le tipologie – sui maggiori redditi d'imposta o di lavoratore autonomo effettuabili dall'Amministrazione Finanziaria a fronte del pagamento di un'imposta sostitutiva delle imposte sui redditi e delle relative addizionali nonché dell'IRAP, da versarsi entro il 31/03/2025 in unica soluzione o in un massimo di 24 rate mensili. L'adesione all'istituto si perfeziona con il pagamento dell'intero importo dovuto."
        },
        {
          title: "Determinazione dell'imposta sostitutiva",
          content: "L'imposta sostitutiva è calcolata:\n- per quanto riguarda le imposte sui redditi e relative addizionali, in funzione dei punteggi ISA conseguiti in ciascun anno dal contribuente (con un minimo di € 1.000 per annualità);\n- per quanto riguarda l'IRAP, dovrebbe essere calcolata all'aliquota ordinaria del 3,9% sulla maggiore base imponibile determinata."
        },
        {
          title: "Cause Ostative",
          content: "Non è possibile accedere all'istituto in oggetto in presenza di processi verbali di constatazione, schemi di atto di accertamento e atti di recupero di crediti inesistenti."
        },
        {
          title: "Cause di decadenza",
          content: "Si decade dagli effetti della sanatoria:\n- in caso di decadenza dal concordato preventivo biennale;\n- in presenza di una misura cautelare per reati tributari nei periodi 2018-2022;\n- reati tributari, false comunicazioni sociali, riciclaggio."
        },
        {
          title: "Considerazioni",
          content: "L'istituto in esame non offre una 'copertura tombale' come potrebbe sembrare ad un primo esame in quanto:\n- l'attività di accertamento viene limitata ma non esclusa,\n- ai fini IVA non ha rilevanza,\n- proroga per i soggetti aderenti i termini di accertamento."
        }
      ]
    }
  }
];

// Utility function to find an article by ID
const findArticleById = (id) => {
  return blogArticles.find(article => article.id === id) || null;
};

// Format text with bullet points
const formatContentWithBullets = (text) => {
  if (!text) return "";
  
  // Split by line breaks and process each line
  return text.split('\n').map((line, index) => {
    if (line.startsWith('- ')) {
      return (
        <li key={index} className="ml-6 mb-2">{line.substring(2)}</li>
      );
    }
    return <p key={index} className="mb-4">{line}</p>;
  });
};

export default function Article() {
  const { article_name } = useParams();
  const article = findArticleById(article_name);

  if (!article) {
    return (
      <BaseLayout>
        <div className="container mx-auto px-8 py-16 text-center">
          <h1 className="text-3xl font-medium mb-6">Articolo non trovato</h1>
          <p className="mb-8">L'articolo che stai cercando non esiste o potrebbe essere stato rimosso.</p>
          <Link to="/blog" className="bg-blue-800 text-white px-6 py-2 rounded">
            Torna al Blog
          </Link>
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-8 md:px-16 py-8">
        <h1 className="text-4xl font-medium text-center mb-6">{article.title}</h1>
        
        {/* Article Metadata */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <span className="text-gray-600">{article.date}</span>
          <div className="flex gap-2">
            {article.categories.map((category, index) => (
              <span 
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">{article.content.introduction}</p>
          
          <ul className="list-disc ml-6 mb-8">
            {article.content.points.map((point, index) => (
              <li key={index} className="mb-2">{point}</li>
            ))}
          </ul>
          
          <p className="mb-12">{article.content.additionalText}</p>

          {/* Article Sections */}
          {article.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-medium mb-4">{section.title}</h2>
              <div className="prose max-w-none">
                {formatContentWithBullets(section.content)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-6">Hai delle domande?</h2>
          <p className="mb-8">
            Prenota un colloquio conoscitivo, senza impegno.
            Saremo felici di ascoltarti, capire le tue esigenze e mostrarti come
            possiamo supportarti nello sviluppo della tua attività.
            Che tu sia un libero professionista, una startup o un'azienda
            strutturata, il primo passo è conoscerci.
          </p>
          <Link to="/contatti" className="bg-blue-800 text-white px-6 py-3 rounded inline-block">
            Contattaci
          </Link>
        </div>
      </div>

      {/* Related Articles - Commented out for now */}
      {/* <div className="container mx-auto px-8 py-16">
        <h2 className="text-3xl font-medium mb-8 text-center">Articoli correlati</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.slice(0, 3).map((relatedArticle) => (
            <Link key={relatedArticle.id} to={`/blog/${relatedArticle.id}`} className="block">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={relatedArticle.image} 
                  alt={relatedArticle.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{relatedArticle.title}</h3>
                  <p className="text-gray-600">{relatedArticle.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </BaseLayout>
  );
}