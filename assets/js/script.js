async function convertirMoneda() {
  const montoCLP = document.getElementById("montoCLP").value;
  const moneda = document.getElementById("currency").value;
  const resultado = document.getElementById("resultado");
  const error = document.getElementById("error");

  resultado.textContent = "";
  error.textContent = "";

  if (!montoCLP || !moneda) {
    error.textContent = "Ingrese el monto y seleccione una moneda.";
    return;
  }

  try {
    const response = await fetch("https://mindicador.cl/api");
    const data = await response.json();

    let valorCambio;
    if (moneda === "dolar") {
      valorCambio = data.dolar.valor;
    } else if (moneda === "euro") {
      valorCambio = data.euro.valor;
    }

    const montoConvertido = (montoCLP / valorCambio).toFixed(2);
    resultado.textContent = `El monto en ${
      moneda === "dolar" ? "Dólares" : "Euros"
    } es: ${montoConvertido}`;
  } catch (err) {
    error.textContent =
      "Hubo un problema al obtener los datos. Intente más tarde.";
  }
}
