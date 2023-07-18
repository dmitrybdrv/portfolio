import image1 from './socialN.jpg';
import image2 from './counter.jpg';
import image3 from './todo.jpg';
import image4 from './Empty.jpg';

 const projects = [
    {id: 1, pic: image1, way: 'https://dmitrybdrv.github.io/Social_network/', title: 'Social network', description: 'lorem10 nesnflkjse skejfbksef esfjbsekufgnef sekfseukgf'},
    {id: 2, pic: image2, way: 'https://dmitrybdrv.github.io/counter/', title: 'Counter', description: 'lotfhfthfth nesnflkjse skejfbksef esfjbsekufgnef sekfseukg ertkelte e4te'},
    {id: 3, pic: image3, way: 'https://dmitrybdrv.github.io/todo_list/#/login', title: 'To do list', description: 'Q nesnflkjse skejfbksef esfjbsekufgnef sekfseukg'},
    {id: 4, pic: image4, way: 'https://www.timeanddate.com/worldclock/', title: 'In progress...', description: '10 nesnflkjse skejfbksef esfjbsekufgnef sekfseukg'},

]

export type ProjectsType = {
    id: number
    pic: string,
    way: string,
    title: string,
    description: string
}