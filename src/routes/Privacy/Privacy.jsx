import { useState, useEffect } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

export default function Privacy() {
  const [privacyData, setPrivacyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the privacy policy data from your JSON file
    fetch('../../data/privacy.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch privacy policy data');
        }
        return response.json();
      })
      .then(data => {
        setPrivacyData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading privacy policy:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Helper function to render sections recursively
  const renderSection = (section, index) => {
    return (
      <div key={index} className="mb-8">
        {section.title && (
          <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
        )}
        
        {section.content && (
          <div className="mb-4">
            {Array.isArray(section.content) ? (
              section.content.map((paragraph, i) => (
                <p key={i} className="mb-3">{paragraph}</p>
              ))
            ) : (
              <p className="mb-3">{section.content}</p>
            )}
          </div>
        )}
        
        {section.bulletPoints && (
          <ul className="list-disc pl-5 mb-4">
            {section.bulletPoints.map((point, i) => (
              <li key={i} className="mb-2">{point}</li>
            ))}
          </ul>
        )}
        
        {section.subsections && section.subsections.map((subsection, i) => (
          <div key={i} className="ml-4 mb-4">
            {renderSection(subsection, `${index}-${i}`)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Informativa sulla privacy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>Si è verificato un errore: {error}</p>
              <p>Per favore ricarica la pagina o contatta l'amministratore.</p>
            </div>
          ) : privacyData ? (
            <div className="privacy-policy">
              <h2 className="text-3xl font-bold mb-6">{privacyData.title}</h2>
              
              {privacyData.introduction && (
                <div className="mb-8">
                  {Array.isArray(privacyData.introduction) ? (
                    privacyData.introduction.map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))
                  ) : (
                    <p className="mb-4">{privacyData.introduction}</p>
                  )}
                </div>
              )}
              
              {privacyData.sections && privacyData.sections.map((section, index) => (
                renderSection(section, index)
              ))}
              
              {privacyData.conclusion && (
                <div className="mt-8 mb-8">
                  {Array.isArray(privacyData.conclusion) ? (
                    privacyData.conclusion.map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))
                  ) : (
                    <p className="mb-4">{privacyData.conclusion}</p>
                  )}
                </div>
              )}
              
              {privacyData.lastUpdated && (
                <p className="text-sm text-gray-500 mt-8">
                  Ultimo aggiornamento: {privacyData.lastUpdated}
                </p>
              )}
            </div>
          ) : (
            <div className="text-center">
              <p>Nessun dato disponibile.</p>
            </div>
          )}
        </div>
      </section>
    </BaseLayout>
  );
}