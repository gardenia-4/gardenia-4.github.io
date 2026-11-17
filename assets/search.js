const controls = document.querySelector("#search-controls");
const query = document.querySelector("#query");
const status = document.querySelector("#search-status");
const entries = Array.from(document.querySelectorAll("#search-results li"), (row) => ({
  row,
  text: row.textContent.toLocaleLowerCase()
}));

function filterEntries() {
  const value = query.value.trim().toLocaleLowerCase();
  const words = value ? value.split(/\s+/) : [];
  let count = 0;

  for (const { row, text } of entries) {
    const matches = words.every((word) => text.includes(word));
    row.hidden = !matches;
    if (matches) count += 1;
  }

  status.textContent = count > 0 ? `共 ${count} 条内容` : "没有找到匹配的内容。";
}

query.addEventListener("input", filterEntries);
controls.hidden = false;
filterEntries();
