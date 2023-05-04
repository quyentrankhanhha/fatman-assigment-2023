import { FullPeopleData } from 'src/types/people.type'

const people = [
  {
    name: 'Luke Skywalker',
    height: 172,
    weight: 77,
    starship: ['X-wing', 'Millennium Falcon', 'Jedi Interceptor'],
    created: '1977-05-25T10:30:00.000Z'
  },
  {
    name: 'Leia Organa',
    height: 150,
    weight: 49,
    starship: ['Tantive IV', 'X-wing'],
    created: '1977-05-25T11:45:00.000Z'
  },
  {
    name: 'Han Solo',
    height: 180,
    weight: 80,
    starship: ['Millennium Falcon'],
    created: '1977-05-25T12:15:00.000Z'
  },
  {
    name: 'Chewbacca',
    height: 228,
    weight: 190,
    starship: ['Millennium Falcon'],
    created: '1977-05-25T13:20:00.000Z'
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    weight: 77,
    starship: ['Delta-7 Aethersprite-class interceptor'],
    created: '1977-05-25T14:00:00.000Z'
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    weight: 84,
    starship: ['Jedi Interceptor'],
    created: '1977-05-25T15:30:00.000Z'
  },
  {
    name: 'Padmé Amidala',
    height: 165,
    weight: 45,
    starship: ['J-type diplomatic barge'],
    created: '1977-05-25T16:45:00.000Z'
  },
  {
    name: 'Darth Vader',
    height: 202,
    weight: 136,
    starship: ['TIE Advanced x1'],
    created: '1977-05-25T18:10:00.000Z'
  },
  {
    name: 'Yoda',
    height: 66,
    weight: 17,
    starship: ['Eta-2 Actis-class light interceptor', 'Millennium Falcon'],
    created: '1977-05-25T19:25:00.000Z'
  },
  {
    name: 'Lando Calrissian',
    height: 177,
    weight: 79,
    starship: ['Millennium Falcon', 'TIE Advanced x1'],
    created: '1980-05-21T20:50:00.000Z'
  }
] as FullPeopleData[]

export default people
