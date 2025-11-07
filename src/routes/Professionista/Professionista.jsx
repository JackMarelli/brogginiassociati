import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import professionistiData from "../../data/professionisti.json";

export default function Professionista() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [professionista, setProfessionista] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the professional by slug from combined array of soci and associati
    const allProfessionisti = [...professionistiData.soci, ...professionistiData.associati];
    const foundProfessionista = allProfessionisti.find(p => p.slug === slug);
    
    if (foundProfessionista) {
      setProfessionista(foundProfessionista);
    } else {
      // Redirect to 404 or main professionals page if not found
      navigate("/professionisti");
    }
    
    setLoading(false);
  }, [slug, navigate]);

  if (loading) {
    return (
      <BaseLayout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Caricamento...</div>
        </div>
      </BaseLayout>
    );
  }

  if (!professionista) {
    return null; // Will be redirected by the useEffect
  }

  const isSocio = professionistiData.soci.some(s => s.id === professionista.id);

  return (
    <BaseLayout>
      <div className="container mx-auto py-32 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Column */}
          <div className="h-full flex items-start justify-end">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-full aspect-[3/4] max-h-[800px]">
              <img 
                src={professionista.image} 
                alt={professionista.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          {/* Info Column */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 className="text-5xl font-medium mb-4">{professionista.name}</h1>
              <p className="text-xl text-gray-700">{professionista.role}</p>
              <div className="mt-4">
                <span className={`px-4 py-1 text-sm rounded-full ${isSocio ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                  {isSocio ? 'Socio' : 'Associato'}
                </span>
              </div>
            </div>
            
            <hr className="mb-8"/>

            {/* Areas of Expertise */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Aree di attività</h2>
              <ul className="list-disc pl-5 space-y-2">
                {professionista.areas.map((area, index) => (
                  <li key={index} className="text-gray-700">{area}</li>
                ))}
              </ul>
            </div>
            
            {/* Experience */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Esperienza</h2>
              <div className="space-y-3">
                {professionista.experience.map((exp, index) => (
                  <p key={index} className="text-gray-700">{exp}</p>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Formazione</h2>
              <div className="space-y-3">
                {professionista.education.map((edu, index) => (
                  <p key={index} className="text-gray-700">{edu}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}