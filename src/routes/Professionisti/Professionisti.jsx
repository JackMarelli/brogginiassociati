import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import professionistiData from "../../data/professionisti.json";
import FoldSection from "../../components/FoldSection/FoldSection";
import ProfessionalCard from "../../components/ProfessionalCard/ProfessionalCard";

export default function Professionisti() {
  const { soci, associati } = professionistiData;

  return (
    <BaseLayout>
      {/* Hero Section */}
      <FoldSection
        title="I professionisti"
        text="Guidiamo i nostri clienti verso la soluzione migliore con flessibilità ed efficienza, grazie a una solida esperienza e a competenze tecniche specifiche, sempre aggiornate. Il nostro team è in grado di affrontare e gestire problematiche altamente complesse e di farsi carico di ogni questione che preoccupa chi fa impresa."
        image="/assets/images/webp/prof_fold.webp"
        height="h-[85vh]"
        overlay={true}
        textMaxWidth="md:max-w-xl"
      />

      {/* Soci Section */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-5xl 2xl:text-7xl font-medium text-center mb-16 2xl:mb-20">Soci</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {soci.map((socio) => (
            <ProfessionalCard
              key={socio.id}
              slug={socio.slug}
              image={socio.image}
              name={socio.name}
              role={socio.role}
            />
          ))}
        </div>
      </section>

      {/* Associati Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-5xl 2xl:text-7xl font-medium text-center mb-16 2xl:mb-20">Associati</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {associati.map((associato) => (
            <ProfessionalCard
              key={associato.id}
              slug={associato.slug}
              image={associato.image}
              name={associato.name}
              role={associato.role}
            />
          ))}
        </div>
      </section>
    </BaseLayout>
  );
}
