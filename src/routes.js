import Main from './components/main'
import Person from './components/person'


export default [{
  path: '/',
  component: Main
}, {
  path: '/people/:id',
  component: Person
}]
