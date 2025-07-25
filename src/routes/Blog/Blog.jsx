import React, { useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import NewsCard from "../../components/NewsCard/NewsCard";
import Button from "../../components/Button/Button";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import news from "../../data/news.json";

export default function Circolari() {
  const [selectedYear, setSelectedYear] = useState("Tutti");
  const [sortNewestFirst, setSortNewestFirst] = useState(true);

  const sortedByDate = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latest = sortedByDate[0];
  const rest = sortedByDate.slice(1);

  const years = [
    ...new Set(news.map((n) => new Date(n.date).getFullYear().toString())),
  ].sort((a, b) => b - a);

  const filteredNews = rest
    .filter((n) => selectedYear === "Tutti" || n.date.startsWith(selectedYear))
    .sort((a, b) =>
      sortNewestFirst
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-8 text-center">
        <h1 className="text-4xl font-medium mb-4">Circolari</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Tieniti aggiornato con le ultime circolari redatte dal nostro studio
        </p>
      </section>

      {/* Featured Article */}
      <section className="w-full px-6 relative mb-16">
        <a href={latest.file} target="_blank" rel="noopener noreferrer">
          <div className="relative h-[60vh] rounded-lg overflow-hidden">
            <img
              src={latest.cover}
              alt={latest.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white xl:text-center z-20">
              <h2 className="text-3xl font-medium mb-2">{latest.title}</h2>
              <p className="text-md text-gray-100">{latest.description}</p>
            </div>
            <div className="absolute top-0 right-o bottom-0 left-0 w-full h-full bg-gradient-to-t from-accent to-transparent z-10"></div>
          </div>
        </a>
      </section>

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

      {/* Lista circolari */}
      <section className="grid grid-cols-12 gap-4 px-2 lg:px-8 pb-16">
        {filteredNews.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            description={article.description}
            to={article.file}
            date={article.date}
          />
        ))}
      </section>
    </BaseLayout>
  );
}
