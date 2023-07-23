import React, {useState} from 'react';
import {useForm} from "@mantine/form";
import {IconDatabase} from "@tabler/icons-react";
import {notifications} from "@mantine/notifications";
import {Button, Textarea, TextInput} from "@mantine/core";
import style from "./Form.module.scss";
import {DataType, sendMessageApi} from "api/mainApi";

/**
 * Form - компонент - форма отправки данных
 */
export const Form = () => {

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            message: '',
        } as DataType,
        validate: {
            name: (value: string) => (value.length < 2 || value.length > 50 ? 'Invalid name' : null),
            email: (value: string) => (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? null : 'Invalid email'),
            message: (value: string) => (value.length > 1000 ? 'Too long message!' : null),
        },
    })
    const [load, setLoad] = useState(false)
    const onSendHandler = async (values: DataType) => {
        try {
            setLoad(true)
            await sendMessageApi.sendEmail(values)
            form.reset()
            notifications.show({
                title: 'Sent 👌',
                message: 'Your message has been sent! I reply to you email:)',
                autoClose: 7000
            })
        } catch (e) {
            notifications.show({
                color: 'red',
                title: 'Some error 😲',
                message: 'Message was not sent. Please try later',
                autoClose: 7000
            })
        } finally {
            setLoad(false)
        }
    }

    return (
        <form onSubmit={form.onSubmit(onSendHandler)} className={style.formSide}>
            <TextInput placeholder={'Name'} {...form.getInputProps('name')}/>
            <TextInput placeholder={'Email'} {...form.getInputProps('email')}/>
            <Textarea placeholder={'Message'} {...form.getInputProps('message')}/>
            <Button leftIcon={<IconDatabase size="1rem"/>} type={'submit'} loading={load}>
                Submit
            </Button>
        </form>
    );
};