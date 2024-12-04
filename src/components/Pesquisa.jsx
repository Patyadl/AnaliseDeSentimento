import React, { useState } from 'react';

const Pesquisa = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    await onSearch(keyword);
    setLoading(false);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 sm:w-2/3 lg:w-1/3 bg-white rounded-full shadow-md flex items-center px-4 py-2">
        <input
          type="text"
          placeholder="Pesquise aqui..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-grow px-4 py-2 text-gray-800 rounded-l-full focus:outline-none"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-2 rounded-full hover:from-blue-400 hover:to-red-400 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? 'Carregando...' : 'Analisar'}
        </button>
      </div>
    </div>
  );
};

export default Pesquisa;
