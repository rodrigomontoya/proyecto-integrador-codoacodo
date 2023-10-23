document.addEventListener('DOMContentLoaded', function () {
    // Obtén los botones de aumento y disminución
    const incrementButtons = document.querySelectorAll('.producto-cantidad button:nth-child(1)');
    const decrementButtons = document.querySelectorAll('.producto-cantidad button:nth-child(2)');
    const cantidadInputs = document.querySelectorAll('.producto-cantidad input');
    const precioUnitarioElements = document.querySelectorAll('.precioUnitario');
    const productoTotalElements = document.querySelectorAll('.producto-total span');
    const subtotalElement = document.querySelector('.subtotal-fila-2 .desc-numero');
    const totalElement = document.querySelector('.total-fila-4 span');
    
    let subtotal = 0;
    
    // Función para actualizar el subtotal y el total
    function updateTotals() {
      subtotal = 0;
      cantidadInputs.forEach((input, index) => {
        const cantidad = parseInt(input.value);
        const precioUnitario = parseFloat(precioUnitarioElements[index].textContent);
        const total = cantidad * precioUnitario;
        productoTotalElements[index].textContent = total.toFixed(2);
        subtotal += total;
      });
      subtotal = parseFloat(subtotal); // Convertir a número

      subtotalElement.textContent = '$' + subtotal.toFixed(2);
      totalElement.textContent = '$' + subtotal.toFixed(2); // Mostrar el total como número con dos decimales
    }
    
    // Agregar evento de clic para botones de aumento
    incrementButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        let cantidad = parseInt(cantidadInputs[index].value);
        cantidad++;
        cantidadInputs[index].value = cantidad;
        updateTotals();
      });
    });
    
    // Agregar evento de clic para botones de disminución
    decrementButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        let cantidad = parseInt(cantidadInputs[index].value);
        if (cantidad > 0) {
          cantidad--;
          cantidadInputs[index].value = cantidad;
          updateTotals();
        }
      });
    });
  });