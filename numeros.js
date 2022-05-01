const comparation = ()=>{
  let num1;
  let num2;
  while(isNaN(num1)||isNaN(num2)){
    num1 = Number(prompt('Ingrese el 1° número'));
    num2 = Number(prompt('Ingrese el 2° número'));
    if(isNaN(num1)||isNaN(num2)){
      alert('Numeros no válidos');
    }
  }
  if (num1 == num2) {
    alert('Ambos numeros son iguales');
} else {
    if (num1>num2) {
        alert('El 1° número es mayor que el 2° número');
    } else {
        alert('El 1° número es menor que el 2° número');
    }  
}
}

