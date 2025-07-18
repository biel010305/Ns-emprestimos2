
function proximaEtapa(etapa) {
  document.querySelectorAll('.etapa').forEach(e => e.style.display = 'none');
  document.getElementById('etapa' + etapa).style.display = 'block';
}

document.getElementById('simuladorForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.querySelectorAll('.etapa').forEach(e => e.style.display = 'none');
  document.getElementById('final').style.display = 'block';
});
