const baseUrl = 'https://swapi.dev/api/starships'

export function getStarshipList() {
    return fetch(`${baseUrl}`)
    .then(res => res.json())
  }

  export function getStarshipDetails(url) {
    return fetch(url)
    .then(res => res.json())
  }
