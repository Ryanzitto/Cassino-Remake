import '../styles/global.css'
import { useState, useEffect } from 'react'

const Display = () => {
  const [multiplicador, setMultiplicador] = useState(1.00)
  const [randonNumber] = useState(0)
  const incremento = 0.01

  useEffect(() => {
    let currentRandomNumber = randonNumber; // armazena o valor atual de randonNumber em uma variável local

    const interval = setInterval(() => {
      setMultiplicador((multiplicador) => multiplicador + incremento)
      currentRandomNumber = Math.random() * 50; // atualiza a variável local com o novo valor de randonNumber
      console.log(currentRandomNumber)
      if (multiplicador > currentRandomNumber) { // compara o valor armazenado com o multiplicador atualizado
        clearInterval(interval)
        
      }
    }, 100);

    return () => clearInterval(interval); 
  }, [])

  return (  
    <div className="w-100 h-screen bg-black flex justify-center">
      <div className="w-2/3 h-1/3 bg-violet-600 rounded-xl flex justify-center items-center mt-8">
        <h1 className='text-5xl'>{multiplicador.toFixed(2)}X</h1>
      </div>
    </div>
  );
}

export default Display;
