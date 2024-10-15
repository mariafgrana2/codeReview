const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// 1. Renombrar las variables para brindar más claridad: con un nombre descriptivo y uso de camelCase
// 2. Se corrigen y validan uso de selectores
const refName = document.querySelector('.name'); // Se añadio el selector de clase "."
const refBlog = document.querySelector('.blog'); // Se cambio el selector de id por el de clase "."
const refLocation = document.querySelector('.location'); // Se agrego elemento y clase en html


// 3. Se actualizan el nombre de las variables que previamenet fueron modificadas
// 4. Se agrega la palabra reservada async  para que la funcións sea asincrona y podamos usar el operador await:
// 5. Aplicar sintaxis de  try y catch
async function displayUser(username) {
  try {
    refName.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Agregamos una variable para convertir la respuesta en JSON
    console.log(data);

    refName.textContent = data.name;
    refBlog.textContent = data.blog;
    refLocation.textContent = data.location;
  } catch (err) { //
    handleError(err)
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  refName.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski');