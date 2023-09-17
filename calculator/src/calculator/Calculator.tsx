// src/Calculator.js
import { useState } from 'react';


const  Calculator=() => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const clickBoton = (value: string) => {
    setInput(input + value);
  };

  const Calcular = () => {
    if (input!=""){
        try {
        const result = eval(input);
        setOutput(`Resultado: ${result}`);
        } catch (error) {
        setOutput('Error: debe ingresar un numero valido');
        }
    } else{
        setOutput("Error: debe ingresar un dato");
    }

  };

  const Borrar = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div style={{gap:'1.5em', display:'flex', width:'100%', height:'80%', background:'grey', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'1.25em'}} className="container mx-auto p-4">
      <div>
        <input
            type="text"
            className="col-span-5 p-2 text-2xl text-right bg-pink-500 flex align-middle justify-center pr-1 pl-1 pt-1 pb-1"
            value={input}
            readOnly
            />
      </div>
      <div style={{display:"flex", flexDirection:"column", width:'100%', alignItems:'center', justifyContent:'center'}}>
    
        <div style={{display:"flex", flexDirection:"row", width:'50%', alignItems:'center', justifyContent:'center'}} className="grid grid-cols-5 gap-4 bg-slate-900">
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em' }} 
                onClick={() => clickBoton('7')}>7</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('8')}>8</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('9')}>9</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('+')}>+</button>
        </div>


        <div style={{display:"flex", flexDirection:"row", width:'50%', alignItems:'center', justifyContent:'center'}}>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}} 
                onClick={() => clickBoton('4')}>4</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('5')}>5</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('6')}>6</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('-')}>-</button>
        </div>

        <div style={{display:"flex", flexDirection:"row", width:'50%', alignItems:'center', justifyContent:'center'}}>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('1')}>1</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('2')}>2</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('3')}>3</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('*')}>*</button>
        </div>

        <div style={{display:"flex", flexDirection:"row", width:'50%', alignItems:'center', justifyContent:'center'}}>
        </div>

        <div style={{display:"flex", flexDirection:"row", width:'50%', alignItems:'center', justifyContent:'center'}}>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('.')}>.</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('0')}>0</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={Borrar}>C</button>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={() => clickBoton('/')}>/</button>
        </div>

        <div style={{display:"flex", flexDirection:"row", width:'50%', alignItems:'center', justifyContent:'center'}}>
            <button style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white',margin:'0.07em'}}
                onClick={Calcular} className="col-span-2">=</button>
        </div>
      </div>  
      <div className="mt-4">
        <p className="text-2xl">{output}</p>
      </div>
    </div>
  );
}

export default Calculator;
