import { useState } from 'react'
import './App.css'

const alfabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function szyfruj(znak, przesuniecie) {

   

    const pozycja = alfabet.indexOf(znak);

    if(pozycja === -1) {
      return znak;
    }

    const pozycjaPoPrzesunieciu = (pozycja + przesuniecie) % alfabet.length;

    return alfabet[pozycjaPoPrzesunieciu];
  }

function App() {
    const [tekst, setTekst] = useState('HELLO');
    const [przesuniecie, setPrzesuniecie] = useState(3);

    const zaszyfrowanyTekst = tekst.split("").map((znak) => szyfruj(znak, przesuniecie)).join("");
    

  return (
    <>
     <input type="text" value={tekst} onChange={ (e) => setTekst(e.target.value)} />
     <input type="range" min={1} max={25} value={przesuniecie} onChange={ (e) =>setPrzesuniecie(parseInt(e.target.value)) } />

    <p>Tekst: {tekst}</p>
    <p>{zaszyfrowanyTekst}</p>
    <p>przesunięcie: {przesuniecie}</p>
    </>
  )
}

export default App
