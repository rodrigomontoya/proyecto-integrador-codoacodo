document.addEventListener('DOMContentLoaded', function () {
  const cantidadInputs = document.querySelectorAll('.producto-cantidad input');
  const precioUnitarioElements = document.querySelectorAll('.precioUnitario');
  const productoTotalElements = document.querySelectorAll('.producto-total span');
  const subtotalElement = document.querySelector('.subtotal-fila-2 .desc-numero');
  const totalElement = document.querySelector('.total-fila-4 span');
  const deleteButtons = document.querySelectorAll('.producto-eliminar img');

  function updateTotals() {
    let subtotal = 0;
    let itemCount = 0;

    cantidadInputs.forEach((input, index) => {
      const cantidad = parseInt(input.value) || 0;
      const precioUnitario = parseFloat(precioUnitarioElements[index].textContent);
      const total = cantidad * precioUnitario;
      productoTotalElements[index].textContent = '$' + total.toFixed(2);
      subtotal += total;
      itemCount += cantidad;
    });

    subtotalElement.textContent = '$' + subtotal.toFixed(2);
    totalElement.textContent = '$' + subtotal.toFixed(2);

    document.querySelector('.cant-fila-1 .desc-numero').textContent = itemCount;
  }

  const incrementButtons = document.querySelectorAll('.producto-cantidad button:nth-child(1)');
  const decrementButtons = document.querySelectorAll('.producto-cantidad button:nth-child(2)');

  incrementButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      let cantidad = parseInt(cantidadInputs[index].value) || 0;
      cantidad++;
      cantidadInputs[index].value = cantidad;
      updateTotals();
    });
  });

  decrementButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      let cantidad = parseInt(cantidadInputs[index].value) || 0;
      if (cantidad > 0) {
        cantidad--;
        cantidadInputs[index].value = cantidad;
        updateTotals();
      }
    });
  });

  // Agregar evento para eliminar productos
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      // Encuentra el elemento padre del botón (div) y elimina ese elemento
      const cartItem = button.closest('.cart-prod-fila');
      updateTotals();
    });
  });

  // Llama a updateTotals después de cargar la página
  updateTotals();
});
