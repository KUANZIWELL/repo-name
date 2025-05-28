async function renderExcel() {
  try {
    // 读取 GitHub 上的 Excel 文件（Raw 链接）
    const response = await fetch('https://raw.githubusercontent.com/KUANZIWELL/repo-name/data.xlsx');
    const buffer = await response.arrayBuffer();
    
    // 解析 Excel 并渲染为 HTML
    const workbook = XLSX.read(buffer, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const html = XLSX.utils.sheet_to_html(sheet, { header: 1 });
    
    document.getElementById('table').innerHTML = html;
  } catch (error) {
    document.getElementById('table').textContent = `错误：${error.message}`;
  }
}
window.onload = renderExcel();
