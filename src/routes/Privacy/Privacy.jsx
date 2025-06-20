import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

export default function Privacy() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="w-full h-[20vh] md:h-[40vh] relative bg-gray-900">
          {/* Immagine di sfondo */}
          <img
            src="/assets/images/webp/servizi_fold.webp"
            alt="Codice Tributario"
            className="w-full h-full object-cover opacity-70"
          />
          
          {/* Overlay nero */}
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Testo centrato */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-xl md:text-5xl font-medium text-center">
              Privacy & Policy
            </h1>
          </div>
        </section>
      {/* <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Informativa sulla privacy
          </h1>
        </div>
      </section> */}

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl text-gray-800">
          <h2 className="text-2xl font-semibold mb-6">
            Informativa relativa al trattamento dei dati personali delle persone fisiche
          </h2>

          <p className="mb-4">
            Lo Studio dott. Riccardo Broggini - Dottori Commercialisti Associati (di seguito il “Titolare”), con sede legale in Varese, via Dandolo 5, in persona del suo legale rappresentante, nell’ambito della propria attività di consulenza e di fornitura di servizi amministrativi, contabili e organizzativi, fornisce la presente informativa ai sensi dell’articolo 13, GDPR (in breve, “Informativa”).
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">1. Identità e dati del titolare del trattamento dei dati</h3>
          <p className="mb-4">
            Studio dott. Riccardo Broggini - Dottori Commercialisti Associati<br/>
            Via Dandolo, 5 - 21100 Varese (VA)<br/>
            CF e PIVA 02694070125<br/>
            Telefono 0332 287598<br/>
            PEC studio@pec.brogginiassociati.it
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">2. Finalità del trattamento cui sono destinati i dati personali e relativa base giuridica</h3>
          <p className="mb-2 font-semibold">a. senza il consenso (articolo 6, lettere b, c, f, GDPR), per le seguenti finalità:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>adempiere agli obblighi precontrattuali e contrattuali derivanti da un incarico professionale,</li>
            <li>rispettare leggi e regolamenti nazionali o comunitari, ordini di Autorità giudiziarie o di vigilanza,</li>
            <li>esercitare i diritti del Titolare, incluso quello di difesa in giudizio.</li>
          </ul>

          <p className="mb-2 font-semibold">b. con consenso espresso (articolo 7, GDPR), per le seguenti finalità:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>organizzazione di eventi, incontri, convegni, formazione professionale,</li>
            <li>attività di marketing e promozione dei servizi, invio newsletter,</li>
            <li>comunicazione dei dati ad altre entità del Network.</li>
          </ul>

          <p className="mb-4">
            Il conferimento dei dati per le finalità di cui alla sezione b è facoltativo e il consenso può essere revocato in ogni momento.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">3. Categorie di dati personali trattati</h3>
          <p className="mb-4">
            Dati anagrafici, contatti (email, PEC, telefono), ruolo aziendale, indirizzi, dati fiscali, ecc.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">4. Categorie di destinatari dei dati personali</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Dipendenti e collaboratori autorizzati,</li>
            <li>Terzi che svolgono attività per conto del Titolare,</li>
            <li>Autorità giudiziarie, enti pubblici, altri soggetti giuridici del Network.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">5. Conservazione e trasferimento di dati personali all’estero</h3>
          <p className="mb-4">
            I dati possono essere conservati su server anche extra UE, nel rispetto delle clausole-tipo previste dal GDPR. I dati non saranno oggetto di diffusione.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">6. Periodo di conservazione dei dati personali</h3>
          <p className="mb-4">
            I dati saranno conservati per la durata del rapporto professionale e per i successivi termini di legge. I dati trattati con consenso saranno conservati fino alla revoca dello stesso.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">7. Diritti esercitabili</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Diritto di accesso (art. 15 GDPR),</li>
            <li>Rettifica (art. 16), cancellazione (art. 17), limitazione (art. 18),</li>
            <li>Portabilità dei dati (art. 20),</li>
            <li>Opposizione al trattamento (art. 21),</li>
            <li>Reclamo all’Autorità Garante.</li>
          </ul>
          <p className="mb-4">
            I diritti possono essere esercitati scrivendo alla PEC del Titolare.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Informativa Cookies</h2>

          <p className="mb-4">
            Informativa in base al Provvedimento n. 229 dell’8 maggio 2014 del Garante per la protezione dei dati personali per i siti di www.brogginiassociati.it.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Cosa sono i cookies?</h3>
          <p className="mb-4">
            I cookies sono stringhe di testo inviate dai siti al browser dell’utente per essere ritrasmesse ad ogni successiva visita. Possono provenire dal sito stesso o da terze parti (immagini, mappe, ecc.).
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">a. Cookie tecnici</h3>
          <p className="mb-4">
            Necessari per il funzionamento del sito, non richiedono consenso e comprendono navigazione, funzionalità e analytics se usati dal gestore.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">b. Cookie di profilazione</h3>
          <p className="mb-4">
            Utilizzati per inviare pubblicità personalizzata, richiedono consenso esplicito.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Cookies di navigazione</h3>
          <p className="mb-4">Essenziali per il funzionamento del sito e l’identificazione sicura dell’utente.</p>

          <h3 className="text-xl font-bold mt-8 mb-3">Performance Cookies</h3>
          <p className="mb-4">Aiutano a migliorare il sito analizzando l’utilizzo aggregato, senza identificare l’utente.</p>

          <h3 className="text-xl font-bold mt-8 mb-3">Cookies funzionali</h3>
          <p className="mb-4">Memorizzano preferenze (lingua, layout, sessioni chat) e migliorano l’esperienza utente.</p>

          <h3 className="text-xl font-bold mt-8 mb-3">Cookies di analisi</h3>
          <p className="mb-4">Servizi di analisi come Google Analytics, con link per la disattivazione e info su youronlinechoices.com.</p>

          <h3 className="text-xl font-bold mt-8 mb-3">Come posso disabilitare i cookies?</h3>
          <p className="mb-4">È possibile gestire le preferenze tramite le impostazioni del browser. Ogni browser ha una procedura diversa (vedi istruzioni nel testo originale).</p>

          <h3 className="text-xl font-bold mt-8 mb-3">Avvertenza</h3>
          <p className="mb-4">
            I cookie tecnici non richiedono consenso. I cookie di profilazione sì, ma sono facoltativi.
          </p>
        </div>
      </section>
    </BaseLayout>
  );
}
