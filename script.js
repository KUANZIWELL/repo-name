async function loadExcel() {
  const res = await fetch('data.xlsx');
  const arrayBuffer = await res.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const html = XLSX.utils.sheet_to_html(sheet);
  document.getElementById('table-container').innerHTML = html;
}

loadExcel();