"use strict";
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
}
fetchJSON('https://api.origamid.dev/json/cursos.json');
