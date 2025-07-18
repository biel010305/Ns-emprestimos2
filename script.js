
document.getElementById("simuladorForm").onsubmit = function(e) {
  e.preventDefault();
  const valor = parseFloat(document.getElementById("valor").value);
  const parcelas = parseInt(document.getElementById("parcelas").value);
  if(valor && parcelas && parcelas > 0) {
    const juros = 0.02;
    const total = valor * Math.pow(1 + juros, parcelas);
    const parcela = total / parcelas;
    document.getElementById("resultado").innerHTML = 
      `<p>Total a pagar: R$ ${total.toFixed(2)}</p><p>Parcelas: ${parcelas}x de R$ ${parcela.toFixed(2)}</p>`;
  }
};
