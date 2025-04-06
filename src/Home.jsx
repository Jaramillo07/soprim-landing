import React, { useState } from 'react';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const consultationTopics = [
    {
      id: 1,
      title: "Análisis de Fallas y RCA",
      description: "Jesús te guía paso a paso en la identificación de causas raíz con metodologías como 5 porqués, Ishikawa y Pareto. Ideal para equipos que desean eliminar fallas repetitivas y tomar decisiones basadas en datos reales de planta.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Optimización de Planes de Mantenimiento",
      description: "Diseña planes preventivos y predictivos ajustados a la realidad operativa de tus activos. Jesús aplica RCM y taxonomía de activos para estructurar tareas efectivas, eliminando sobrecostos por mantenimiento innecesario.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Análisis Weibull & RAMS",
      description: "Jesús aplica distribuciones de Weibull, CDF, R(t), h(t) y curvas de confiabilidad para ayudarte a determinar el comportamiento real de tus equipos a lo largo del tiempo. Incluye modelado gráfico con Power BI o Python.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "IA para cualquier proceso",
      description: "Jesús desarrolla soluciones con inteligencia artificial que se integran a tu flujo de trabajo: desde generación automática de reportes, predicción de fallas, hasta asistentes virtuales que analizan órdenes de trabajo en tiempo real.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Planning & Scheduling",
      description: "Estructura la programación semanal y mensual de mantenimiento tomando en cuenta recursos, ventanas de producción y restricciones operativas. Jesús te ayuda a automatizar este proceso utilizando IA y reglas inteligentes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Mantenimiento de Clase Mundial (WCM)",
      description: "Implementa prácticas de WCM alineadas con los pilares de mantenimiento autónomo, profesional y mejoramiento enfocado. Jesús te apoya desde la estrategia hasta la ejecución con auditorías y formación.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Dashboards Power BI & Python",
      description: "Jesús crea dashboards interactivos que reflejan tus indicadores clave (MTTR, MTBF, BAD ACTORS) y evolución de fallas. Puedes integrar fuentes como Excel, Maximo o sensores en planta.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Integración con IBM Maximo y APIs",
      description: "Jesús ha desarrollado integraciones personalizadas con la API de Maximo para leer, analizar y actualizar órdenes de trabajo, estados de activos y más. Optimiza tus procesos sin necesidad de intervención manual.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ];

  const toggleCard = (id) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#091431' }}>
      <div className="container mx-auto px-6 py-10">
        {/* Header con logo */}
        <header className="flex justify-center mb-16 w-full">
          <div className="w-full">
            <img 
              src="/images/soprim-logo.png" 
              alt="SOPRIM" 
              className="w-full max-w-full"
            />
          </div>
        </header>

        {/* Contenido principal */}
        <main className="flex flex-col items-center">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-white">Consultoría en Inteligencia</span>
              <br />
              <span className="text-blue-300">Artificial</span>
              <br />
              <span className="text-white">y Mantenimiento de Clase</span>
              <br />
              <span className="text-blue-300">Mundial</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto">
              Desarrollamos soluciones a la medida para cualquier industria
            </h2>
            
            {/* Botones principales con funcionalidad */}
            <div className="flex flex-wrap justify-center gap-6 mb-24">
              <a 
                href="https://www.linkedin.com/company/soprim-consultorias/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-medium py-3 px-8 rounded-md transition duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Visitar LinkedIn
              </a>
              
              <a 
                href="mailto:jesus.jaramillo@soprim.com.mx" 
                className="bg-transparent border-2 border-gray-500 hover:border-white text-white text-xl font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
              >
                Contáctanos
              </a>
            </div>
            
            {/* Información de contacto */}
            <div className="mb-20 text-center">
              <p className="text-blue-300 text-xl mb-2">jesus.jaramillo@soprim.com.mx</p>
              <p className="text-gray-300 text-xl">Tel: 477 815 0806</p>
            </div>
          </div>
          
          {/* Características destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mb-24">
            <div className="bg-blue-900 bg-opacity-30 p-10 rounded">
              <div className="text-white mb-6 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Soluciones Inteligentes</h3>
              <p className="text-gray-300 text-lg text-center">Algoritmos avanzados de IA para optimizar tus procesos y recursos.</p>
            </div>
            
            <div className="bg-blue-900 bg-opacity-30 p-10 rounded">
              <div className="text-white mb-6 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Mantenimiento Predictivo</h3>
              <p className="text-gray-300 text-lg text-center">Anticípate a las fallas y reduce costos con nuestros modelos predictivos.</p>
            </div>
            
            <div className="bg-blue-900 bg-opacity-30 p-10 rounded">
              <div className="text-white mb-6 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Seguridad Garantizada</h3>
              <p className="text-gray-300 text-lg text-center">Protección de datos y cumplimiento normativo en todas nuestras soluciones.</p>
            </div>
          </div>

          {/* Sección de temas de consulta interactivos */}
          <div className="w-full max-w-7xl mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Temas que puedes consultar</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultationTopics.map((topic) => (
                <div key={topic.id} className="relative">
                  <div 
                    className={`bg-blue-900 bg-opacity-30 p-6 rounded flex flex-col items-center hover:bg-opacity-40 transition-all duration-300 cursor-pointer ${activeCard === topic.id ? 'shadow-xl ring-2 ring-blue-400' : 'shadow-md'}`}
                    onClick={() => toggleCard(topic.id)}
                  >
                    <div className="text-blue-300 mb-4">
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center">
                      {topic.title}
                    </h3>
                    {activeCard === topic.id && (
                      <div 
                        className="mt-4 text-gray-300 text-base transition-all duration-500 animate-fadeIn"
                      >
                        {topic.description}
                      </div>
                    )}
                    <div className="mt-3 text-blue-400">
                      {activeCard === topic.id ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sección sobre Jesús Jaramillo - Con ícono a la izquierda (movida al final) */}
          <div className="w-full max-w-7xl mb-24">
            <div className="bg-blue-800 p-8 rounded-lg shadow-xl">
              <div className="flex flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 md:h-20 md:w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Sobre Jesús Jaramillo</h3>
                  <p className="text-lg text-gray-200 leading-relaxed text-left">
                    Jesús Jaramillo cuenta con mas de 10 años de experiencia en Proyectos, Mantenimiento y Confiabilidad, actualmente es líder en la integración de inteligencia artificial en MICHELIN con metodologías de mantenimiento de clase mundial. Con experiencia directa en la industria automotriz, Jesús ha desarrollado proyectos personalizados aplicando estrategias RAMS, RCM y análisis de fallas mediante herramientas como Python, Power BI y APIs de IBM Maximo. Su enfoque combina el análisis técnico profundo con el uso de tecnologías emergentes para mejorar la eficiencia, reducir costos y optimizar recursos en planta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nueva sección con fondo negro */}
          <div className="w-full bg-black text-white py-16">
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Soluciones que generan calidad y se adaptan a tu industria
              </h2>
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                En SOPRIM, nuestro trabajo está enfocado en entregar calidad real y resultados medibles. Con años de experiencia en la industria automotriz, hemos ajustado nuestros servicios y herramientas para responder exactamente a las necesidades de este sector, reduciendo sobrecostos y facilitando la implementación.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Al mismo tiempo, el uso de inteligencia artificial es transversal a todas las industrias. Hemos desarrollado soluciones accesibles incluso para pequeñas y medianas empresas (PyMEs), permitiendo automatizar, optimizar y predecir con bajo costo de entrada.
              </p>
            </div>
          </div>
        </main>

        {/* Modal de video */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
            <div className="relative w-full max-w-5xl">
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute -top-16 right-0 text-white hover:text-blue-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                  title="SOPRIM Demo Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-32 mb-6 text-gray-400 text-base">
          <p>© {new Date().getFullYear()} SOPRIM. Todos los derechos reservados.</p>
        </footer>
      </div>

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;