const CalcularFrete = () => {
  return (
    <div className="bg-gray-500 flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Calculadora de Frete
        </h1>
        <form className="space-y-6">
          <div className="space-y-2 text-left">
            <label
              htmlFor="distancia"
              className="block text-white font-bold"
            >
              Distância(Km)
            </label>
            <input
              type="number"
              id="distancia"
              min="0"
              required
              className="text-white w-full px-4 py-3 border border-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2 text-left">
            <label
              htmlFor="transporte"
              className="block text-white font-bold"
            >
              Transporte
            </label>
            <select
              id="transport"
              className="text-white w-full px-4 py-3 border border-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className="bg-gray-800">Bicicleta</option>
              <option className="bg-gray-800">Carro</option>
              <option className="bg-gray-800">Drone</option>
            </select>
          </div>
          <button className=" font-bold w-full py-3 bg-blue-700 rounded-2xl text-white text-2xl hover:bg-blue-400 transition-colors duration-300">
            Calcular
          </button>
        </form>
        <div className="mt-6 p-4 bg-blue-300 border-blue-600 rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-700 "> Valor do Frete</h2>
        </div>
         <h6 className="text-white">&copy; 2025 - Todos os direitos reservados </h6>
      </div>
    </div>
  );
};

export default CalcularFrete;
