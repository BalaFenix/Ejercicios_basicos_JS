const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

const filteredPlaces = placesToTravel.filter(
  (place) => place.id !== 11 && place.id !== 40
)
//Comprobamos por consola si la función es correcta
console.log(filteredPlaces)
