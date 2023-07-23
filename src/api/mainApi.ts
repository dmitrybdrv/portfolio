import axios from "axios";

/**
 * URL - константа, хранящая значение переменной окружения 'REACT_APP_URL'.
 * Представляет базовый URL для точки доступа API, который будет использован для отправки email-сообщений.
 */
const URL = process.env.REACT_APP_URL

/**
 * instance - экземпляр объекта Axios, созданный с пользовательской конфигурацией для выполнения HTTP-запросов.
 */

const instance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json"
    }
})

/**
 * sendMessageApi - объект, содержащий метод 'sendEmail', который используется для отправки email-сообщения с данными,
 * переданными в качестве аргумента.
 */
export const sendMessageApi = {
    sendEmail(data: DataType) {
        return instance.post<ResponseDataType>(`send-email`, data)
    }
}

/**
 * ResponseDataType - типизация возвращаемых данных
 */
type ResponseDataType = {
    message?: string,
    error?: string,
}
/**
 * DataType - Типизация отправляемых данных
 */
export type DataType = {
    name: string
    email: string
    message: string
}