import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/Button/Button";

export default function Landing() {
  return (
    <BaseLayout>
      <div className="w-full h-screen relative">
        <img src="assets/images/fold.png" alt="" className="w-full h-full" />
        <div className="h-fit w-fit absolute bottom-48 left-16 flex flex-col gap-8">
          <h1 className="text-white text-7xl font-md">
            Mega titolo <br /> accattivante
          </h1>
          <h2 className="text-white text-xl font-md">
            Costruire e coltivare con dedizione un autentico rapporto di fiducia{" "}
            <br />
            tra il cliente e il suo professionista di riferimento, un legame che
            ha
          </h2>
          <Button text="Scopri di più"/>
        </div>
      </div>
    </BaseLayout>
  );
}
