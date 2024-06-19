async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
}

fetchJSON('https://api.origamid.dev/json/cursos.json');

