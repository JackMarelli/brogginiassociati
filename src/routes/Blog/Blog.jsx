import React, { useMemo, useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import NewsCard from "../../components/NewsCard/NewsCard";
import Button from "../../components/Button/Button";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import news from "../../data/news.json";

/**
 * Ordinamento richiesto:
 *  - ignorare giorno/mese -> usare SOLO "year"
 *  - priorità 1: year
 *  - priorità 2: number
 *  - il toggle inverte entrambi (desc/asc)
 */
function makeComparator(sortNewestFirst = true) {
  return (a, b) => {
    const yearDiff = sortNewestFirst ? b.year - a.year : a.year - b.year;
    if (yearDiff !== 0) return yearDiff;

    const numDiff = sortNewestFirst ? b.number - a.number : a.number - b.number;
    if (numDiff !== 0) return numDiff;

    // fallback stabile, non influisce sulla logica
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    return sortNewestFirst ? db - da : da - db;
  };
}

export default function Circolari() {
  const [selectedYear, setSelectedYear] = useState("Tutti");
  const [sortNewestFirst, setSortNewestFirst] = useState(true);

  // anni disponibili per il filtro
  const years = useMemo(() => {
    const ys = [...new Set(news.map((n) => n.year.toString()))];
    return ys.sort((a, b) => Number(b) - Number(a));
  }, []);

  // elenco completo ordinato (serve sia per hero che per lista)
  const sortedAll = useMemo(() => {
    const cmp = makeComparator(true); // anno desc + numero desc
    return [...news].sort(cmp);
  }, []);

  const latest = sortedAll[0];

  // lista (INCLUDE l'ultimo: niente slice)
  const filteredNews = useMemo(() => {
    const cmp = makeComparator(sortNewestFirst);
    return [...news]
      .filter((n) => selectedYear === "Tutti" || n.year.toString() === selectedYear)
      .sort(cmp);
  }, [selectedYear, sortNewestFirst]);

  return (
    <BaseLayout>
      {/* Hero */}
      <section className="pt-32 pb-12 px-8 text-center">
        <h1 className="text-4xl 2xl:text-7xl font-medium mb-4">Circolari</h1>
        <p className="text-lg 2xl:text-xl text-gray-600 max-w-3xl mx-auto">
          Tieniti aggiornato con le ultime circolari redatte dal nostro studio
        </p>
      </section>

      {/* Featured Article */}
      {latest && (
        <section className="w-full px-6 relative mb-16">
          <a href={latest.file} target="_blank" rel="noreferrer">
            <div className="relative h-[60vh] rounded-lg overflow-hidden">
              <img
                src={latest.cover}
                alt={latest.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white xl:text-center z-20">
                <h2 className="text-3xl 2xl:text-4xl font-medium mb-2">{latest.title}</h2>
                <p className="text-md 2xl:text-lg text-gray-100">{latest.description}</p>
                <div className="mt-2 text-sm text-gray-200">
                  N. {latest.number} • {latest.year}
                </div>
              </div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-accent to-transparent z-10"></div>
            </div>
          </a>
        </section>
      )}

      {/* Filter & Sort Controls */}
      <section className="px-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <CustomSelect
          value={selectedYear}
          onChange={setSelectedYear}
          options={["Tutti", ...years]}
        />
        <Button
          text={`Ordina: ${sortNewestFirst ? "più recenti" : "più vecchie"}`}
          onClick={() => setSortNewestFirst((prev) => !prev)}
        />
      </section>

      {/* Lista circolari (include anche la più recente) */}
      <section className="grid grid-cols-12 gap-4 px-2 lg:px-8 pb-16">
        {filteredNews.map((article) => (
          <NewsCard
            key={`${article.year}-n${article.number}`}
            title={article.title}
            description={article.description}
            to={article.file}
            date={article.date} /* mantengo la data per compatibilità con NewsCard */
          />
        ))}
      </section>
    </BaseLayout>
  );
}
