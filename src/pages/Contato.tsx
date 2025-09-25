function Contato() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold text-primary mb-4">Entre em Contato</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contatar.
        </p>
        
        
        <div className="flex justify-center items-center flex-wrap gap-4 mt-8">
          <a 
            href="mailto:lucasmpbraga001@gmail.com" 
            className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-primary-dark transform hover:scale-105">
            Enviar E-mail
          </a>
          <a 
            href="https://github.com/LucasBraga2" 
            target="_blank" rel="noopener noreferrer" 
            className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-black transform hover:scale-105">
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/lucas-braga-207671268/" 
            target="_blank" rel="noopener noreferrer" 
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-blue-700 transform hover:scale-105">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contato;