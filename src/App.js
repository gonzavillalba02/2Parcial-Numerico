import Barcaza from './barcaza';
import gaussSimple from './gauss';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [seleccion, setSeleccion] = useState([]);

  const handleSeleccion = (e) => {
    if (e.target.value === "3") {
      setSeleccion(["Barcaza 1", "Barcaza 2", "Barcaza 3"]);
    } else {
      setSeleccion(["Barcaza 1", "Barcaza 2", "Barcaza 3", "Barcaza 4", "Barcaza 5"]);
    }
  };

  const [matriz, setMatriz] = useState([
    ["","",""],
    ["","",""],
    ["","",""]
  ])

  const handleMatriz = (pos1, pos2, value) => {
    const nuevaMatriz = matriz.map((fila, indexFila) => {
      if (indexFila === pos1) {
        return fila.map((elemento, indexColumna) => {
          if (indexColumna === pos2) {
            return parseFloat(value);
          } else {
            return elemento;
          }
        });
      } else {
        return fila;
      }
    });
    setMatriz(nuevaMatriz);
  };

  const [maximos, setMaximos] = useState(["","",""])

  const handleMaximos = (pos, value) => {
    const nuevaLista = [...maximos];
    nuevaLista[pos] = parseFloat(value);
    setMaximos(nuevaLista);
  }

  const [result, setResult] = useState([]);

  return (
    <div className="App">
      <header>
        <p>Gonzalo Emiliano Villalba</p>
        <p>44.444.859</p>
      </header>
      <main>
        <select value="" onChange={handleSeleccion}>
          <option value="" disabled defaultValue>Ingrese número de barcazas</option>
          <option value="3">3</option>
          <option value="5">5</option>
        </select>
        <div>
          {seleccion.map((e, index) => (
            <Barcaza key={index} nombre={e} matriz={matriz} index={index} handleMatriz={handleMatriz}/>
          ))
          }
          {seleccion.length === 0 ? <></> :
           <div className='div-inputCants'>
              <input className='inputCants' value={maximos[0]} onChange={(e) => handleMaximos(0, e.target.value)} placeholder='Ingrese contenedores a transportar del tipo A'/>
              <input className='inputCants' value={maximos[1]} onChange={(e) => handleMaximos(1, e.target.value)} placeholder='Ingrese contenedores a transportar del tipo B'/>
              <input className='inputCants' value={maximos[2]} onChange={(e) => handleMaximos(2, e.target.value)} placeholder='Ingrese contenedores a transportar del tipo C'/>
           </div>
           }
          {seleccion.length === 0 ? <></> : <button onClick={()=>{
            const nuevaMatriz = matriz;
            const nuevosMaximos = maximos;
            setResult(gaussSimple(nuevaMatriz, nuevosMaximos))
            }}>Calcular</button>}
        </div>
        <div>
          {result.length === 0 ? <></> : 
          <>
            <p className='resultados'>La Barcaza 1 tiene que realizar {parseInt(result[0])} viajes</p>
            <p className='resultados'>La Barcaza 2 tiene que realizar {parseInt(result[1])} viajes</p>
            <p className='resultados'>La Barcaza 3 tiene que realizar {parseInt(result[2])} viajes</p>
          </>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
