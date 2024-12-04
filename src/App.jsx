import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Pesquisa from './components/Pesquisa';

const App = () => {
  const handleSearch = async (keyword) => {
    console.log(`Buscando por: ${keyword}`);
    // Simulação de busca de tweets
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-blue-500">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto text-center mt-10">
          <h1 className="text-white text-4xl font-bold mb-6">Analisar sentimentos de tweets</h1>
          <Pesquisa onSearch={handleSearch} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
