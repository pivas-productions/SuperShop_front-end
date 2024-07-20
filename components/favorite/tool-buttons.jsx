'use client'
import { useState, useTransition } from "react";
import { Button, Modal } from 'antd';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import NotifyMessage from '../messages/notify-message';
import { useForm, SubmitHandler } from "react-hook-form"
import { FaTrashAlt } from "react-icons/fa";
import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from "../ui/tooltip";
import { MdDriveFileRenameOutline } from "react-icons/md";


const ToolButtons = (fetch_route) => {
    const [open, setOpen] = useState(false);

    const [openDialog, setOpenDialog] = useState(false);
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        defaultValues: {
            listName: ""
        }
    })
    const onSubmit = (values) => {
        startTransition(async () => {
            console.log(values)
            try {
                let response = await fetch(`${fetch_route}/api/favorite/newlist`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-type': 'application/json'
                    },
                    credentials: 'include'
                })
                if (response.status === 500) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log('response', response)
                console.log('response.headers', response.headers.get('Set-Cookie'))
                const data = await response.json();
                console.log('response.data', data)
                if (data?.error) {
                    form.reset();
                    setNotifyMes(data.message);
                    setStateNotify('error');
                }
                if (data?.success) {
                    console.log('success');
                    location.reload();
                }
            } catch (error) {
                console.error('Error:', error);
                // Обработка ошибки
                setNotifyMes('List created failed! Error on server');
                setStateNotify('error');
            }
        }
        )
    };

    return (
        <div className='flex w-11/12 mx-auto justify-between items-center '>
            <h3 className='toolButtons text-3xl'>
                Название списка
            </h3>
            <div className="flex justify-normal gap-4">
                <Dialog open={openDialog} onOpenChange={setOpenDialog} modal={true} className='' >
                    <DialogTrigger asChild>
                        <TooltipProvider delayDuration={500}>
                            <TooltipRoot >
                                <TooltipTrigger>
                                    <div onClick={() => setOpenDialog(!openDialog)} className=" bg-white  p-2 flex justify-center hover:shadow-mega-shadow duration-75 hover:-translate-y-2 items-center rounded-3xl hover:scale-110 border-solid border-2 border-black cursor-pointer ">
                                        <MdDriveFileRenameOutline />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent sideOffset={5} className='!bg-white'>
                                    Переименовать список
                                </TooltipContent>
                            </TooltipRoot>
                        </TooltipProvider>
                    </DialogTrigger>
                    <DialogContent variant={'editDialog'}>
                        <DialogTitle className="w-full rounded-t-md flex justify-between" >
                            <span className='text-2xl font-semibold'>Переименовать список</span>
                            <DialogClose className={'rounded-full'} />
                        </DialogTitle>
                        <DialogDescription />
                        <section className=" pt-10">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-4">
                                        <>
                                            <FormField control={form.control} name="listName" render={({ field }) => (<FormItem>
                                                <FormLabel>Введите новое название списка:</FormLabel>
                                                <FormControl>
                                                    <Input {...field} variant="default" disabled={isPending} type="text" placeholder="Название списка" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>)} />
                                        </>
                                    </div>
                                    {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}
                                    <Button type="submit" disabled={isPending} className="w-full hover:bg-sky-400">
                                        {"Подтвердить"}
                                    </Button>
                                </form>
                            </Form>
                        </section>
                    </DialogContent>
                </Dialog>
                <TooltipProvider delayDuration={500}>
                    <TooltipRoot >
                        <TooltipTrigger>
                            <Button danger={true} className=" bg-white  p-2 flex justify-center hover:shadow-mega-shadow duration-75 hover:-translate-y-2 items-center rounded-3xl hover:scale-110 border-solid border-2 border-black cursor-pointer h-fit"
                                type="primary"
                                onClick={() => {
                                    Modal.confirm({
                                        title: 'Удаление списка товаров',
                                        content: 'Вы уверены, что хотите удалить список? Вернуть список будет невозможно.',
                                        onOk: handleOk,
                                        footer: (
                                            <div className='text-center space-x-2 space-y-4'>
                                                <Button danger={true} type="primary" onClick={handleOk}>
                                                    Удалить
                                                </Button>
                                                <Button onClick={() => Modal.destroyAll()}>
                                                    Отмена
                                                </Button>
                                            </div>
                                        ),
                                    });
                                }}
                            >
                                <FaTrashAlt />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent sideOffset={5} className='!bg-white'>
                            Удалить список
                        </TooltipContent>
                    </TooltipRoot>
                </TooltipProvider>
            </div>
        </div>
    );
};

export default ToolButtons;
