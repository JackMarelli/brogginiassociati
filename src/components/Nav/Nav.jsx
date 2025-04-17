import Button from "../../components/Button/Button";
import NavOption from "../../components/NavOption/NavOption";

export default function Nav() {
  return (
    <div className="sticky top-0 w-full h-fit bg-white z-40 flex flex-row justify-between items-center px-16 py-8">
      <div>
        <img
          className="w-16 aspect-square"
          src="assets/logo/logo.png"
          alt="Logo di Broggini Associati"
        />
      </div>
      <div className="flex gap-8">
        <NavOption text="Lo Studio" to="studio" />
        <NavOption text="I Professionisti" to="professionisti" />
        <NavOption text="Servizi" to="servizi" />
        <NavOption text="Compliance" to="compliance" />
        <NavOption text="Blog" to="blog" />
      </div>
      <Button text="Contattaci" />
    </div>
  );
}
