import image1 from '../assets/img/socialNetwork.jpg';
import image2 from '../assets/img/todoList.jpg';
import image3 from '../assets/img/inventory.jpg';
import image4 from '../assets/img/inProgress.jpg';

export const projects = [
    {
        id: 1,
        pic: image1,
        way: 'https://dmitrybdrv.github.io/Social_network/',
        title: 'Social network',
        description: `Социальная сеть - приложение, которое позволяет пользователям создавать свой профиль, 
        добавлять друзей, обмениваться сообщениями, публиковать посты и комментировать их.`
    },
    {
        id: 2,
        pic: image2,
        way: 'https://dmitrybdrv.github.io/todolist/',
        title: 'Todo list',
        description: `Проект Todo list - это веб-приложение для создания списка задач. Оно позволяет пользователям 
        добавлять, редактировать и удалять задачи, а также отмечать их выполнение.`
    },
    {
        id: 3,
        pic: image3,
        way: 'https://klaus.dk/404/',
        title: 'Inventory',
        description: `Веб-приложение, которое позволяет пользователям вести учет имущества, добавлять, 
        редактировать и удалять его, а также отслеживать перемещения между подразделениями предприятия.`
    },
    {
        id: 4,
        pic: image4,
        way: 'src/assets/img/inProgress',
        title: 'In progress...',
        description: `...приложение находится в разработке и скоро будет доступно :)`
    },

]

export type ProjectsType = {
    id: number
    pic: string,
    way: string,
    title: string,
    description: string
}