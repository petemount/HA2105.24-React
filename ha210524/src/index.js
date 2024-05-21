import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let name = "Peter"

let ownStyle = {
  color: 'brown',
  fontsSize: '45px',
  border: '2px solid red'
}


function addition(zahl1, zahl2){
  let resultat = zahl1 + zahl2;

  return resultat
}
// addition(5,6)

function quadratwurzel (zahl) {
    let quadrat = Math.sqrt(zahl);

  return quadrat
}
  
//Datum ermitteln
let heute = new Date()
let tag = String(heute.getDate()).padStart(2, '0');
let monat = String(heute.getMonth() + 1).padStart(2, '0');
let jahr = heute.getFullYear();

let datum = `${tag}.${monat}.${jahr}`

console.log(heute)
console.log(datum)
  

 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<>
<h1 className='heading'>Dies ist die erste React-Arbeit von {name}. </h1>
<h2 className='heading2'>Die ist die Line aus Headline 2.</h2>
<h3 style={{color: 'red'}}>Diese Zeile wurde mit Inline-CSS gestyled.</h3>
<h3 style={ownStyle}>Diese Zeile wurde auch über Inline-CSS per Liste gestyled.</h3>
<h3 id='result'>Das Ergebnis aus der Addition ist {addition(15,9)}</h3>
<h3 id='wurzel'>Die Quadratwurzel ist {quadratwurzel(9)}</h3>
<p id='zufallno'>Die Zufallszahl ist : {Math.round(Math.random() * 100)}</p>
<p id='aktuell'>Das Datum von heute lautet {datum}</p>




</>


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
