/**
 * @jest-environment jsdom
 */

import{render, fireEvent, screen} from '@testing-library/react'
import Calculator from '../calculator/Calculator';



test("Sumar dos numeros positivos y mostrar el resultado", () =>{
    render(<Calculator/>);
    const menos = screen.getByText("+");
    const igual = screen.getByText("=");
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(menos);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(igual);
    
    const respuesta = screen.getByText('Resultado: 26');
    
    expect(respuesta).toBeTruthy();
});


test("Restar dos numeros positivos y mostrar el resultado", () =>{
    render(<Calculator/>);
    const menos = screen.getByText("-");
    const igual = screen.getByText("=");
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(screen.getByText("9"));
    fireEvent.click(menos);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(igual);
    
    const respuesta = screen.getByText('Resultado: 69');
    
    expect(respuesta).toBeTruthy();
});

test("Multiplicar dos numeros y mostrar el resultado", () =>{
    render(<Calculator/>);
    const menos = screen.getByText("-");
    const mul = screen.getByText("*")
    const igual = screen.getByText("=");
    fireEvent.click(menos);
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(mul);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(igual);
    
    const respuesta = screen.getByText('Resultado: -50');
    
    expect(respuesta).toBeTruthy();
});


test("Dividir dos numeros y mostrar el resultado", () =>{
    render(<Calculator/>);
    const menos = screen.getByText("-");
    const div = screen.getByText("/")
    const igual = screen.getByText("=");
    fireEvent.click(menos);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(div);
    fireEvent.click(menos);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(igual);
    
    const respuesta = screen.getByText('Resultado: 10');
    
    expect(respuesta).toBeTruthy();
});



test("Escribir un numero mal y mostrar error", () =>{
    render(<Calculator/>);
    const point = screen.getByText(".");
    const igual = screen.getByText("=");
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(point);
    fireEvent.click(point);
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(igual);
    
    const respuesta = screen.getByText('Error: debe ingresar un numero valido');
    
    expect(respuesta).toBeTruthy();
});

test("No escribir nada y mostrar error", () =>{
    render(<Calculator/>);
    const igual = screen.getByText("=");    
    fireEvent.click(igual);
    
    const respuesta = screen.getByText('Error: debe ingresar un dato');
    
    expect(respuesta).toBeTruthy();
});


test("Multiplicacion de decimales", () =>{
    render(<Calculator/>);
    const menos = screen.getByText("-");
    const point = screen.getByText(".");
    const mul = screen.getByText("*");
    const igual = screen.getByText("=");
    fireEvent.click(menos);
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(point);
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(mul);
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(point);
    fireEvent.click(screen.getByText("9"));
    fireEvent.click(igual);
    
    const respuesta = screen.getByText('Resultado: -45.03');
    
    expect(respuesta).toBeTruthy();
});

test("Exponente", () =>{
    render(<Calculator/>);
    const mul = screen.getByText("*");
    const igual = screen.getByText("=");
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(mul);
    fireEvent.click(mul);
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(igual);
    
    const respuesta = screen.getByText('Resultado: 78125');
    
    expect(respuesta).toBeTruthy();
});