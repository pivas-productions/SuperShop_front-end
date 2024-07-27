'use client'
import NotifyMessage from '@/components/messages/notify-message'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RateUI } from '@/components/ui/rate'
import Image from 'next/image'
import React, { useMemo, useState, useTransition } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { AiOutlineCloseCircle } from "react-icons/ai";

const maxSize = 2097152; // 2 мегабайта

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    // borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const vrem_item = {
    name: 'INCANTO milan inspiration bianco',
    photo: {
        photo: '/hover_image.jpg'
    }
}

const CreateReviews = ({ fetch_route, item_id, item }) => {
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [success, setSuccess] = useState(false);
    const [files, setFiles] = useState([]);
    const [isPending, startTransition] = useTransition();

    const onDrop = (acceptedFiles) => {
        form.clearErrors()
        console.log('in onDrop')
        // Создаем список из существующих файлов и оставляем только названия, чтобы сравнивать
        let existingFilesSet = new Set(files.map(file => file.name));

        // Оставляем только файлы с другим названием относитетельно тех, что уже добавлены. Добавляем к ним ключ preview для отображения
        const newFiles = acceptedFiles.filter(file => !existingFilesSet.has(file.name)).map(file => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file)
            });
        });

        const totalSize = [...files, ...newFiles].reduce((acc, file) => acc + file.size, 0);

        if (totalSize <= 2097152) {
            console.log(files.length + newFiles.length <= 5, 'in onDrop', totalSize)
            if (files.length + newFiles.length <= 5) {
                const updatedFiles = [...files, ...newFiles];
                setFiles(updatedFiles);
                form.setValue('images', updatedFiles);
                // setFiles(prevFiles => [...prevFiles, ...newFiles]);
            } else {
                setNotifyMes('Общее количество файлов должно быть не более 5 штук');
                setStateNotify('error');
                form.setError('images', { type: 'manual', message: 'Общее количество файлов должно быть не более 5 штук' })
            }
        } else {
            setNotifyMes('Общий размер файлов не должен превышать 2 МБ');
            setStateNotify('error');
            form.setError('images', { type: 'manual', message: 'Общий размер файлов не должен превышать 2 МБ' })

        }


    }

    const onDropRejected = (files) => {
        console.log('in onDropRejected')

        if (files.length > 5) {
            setNotifyMes('Общее количество файлов должно быть не более 5 штук');
            setStateNotify('error');
            form.setError('images', { type: 'manual', message: 'Общее количество файлов должно быть не более 5 штук' })
        }
        console.log(files, 'ondropRejected')
    }

    const removeFile = (file) => {
        setFiles(files.filter(f => f !== file));
    }

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: { 'image/*': [] }, maxFiles: 5, maxSize: maxSize, onDropAccepted: onDrop, onDropRejected }); // maxSize 2МБ в байтах

    const styleDnD = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    const form = useForm({
        // resolver: zodResolver(ProfileSchema),
        defaultValues: {
            grade: '',
            advantages: '',
            disadvantages: '',
            comments: '',
            images: [],
        }
    });

    const onSubmit = (values) => {
        console.log(values, 'create review')
        startTransition(async () => {
            try {
                form.clearErrors();

                const uploaded_photos = new FormData();
                // files.forEach((file, i) => {
                //     uploaded_photos.append('file' + i, file)
                // });
                uploaded_photos.append('file' + 1, files[0])

                for (var pair of uploaded_photos.entries()) {
                    console.log(pair[1])
                }

                const send_data = {
                    // ...values,
                    item: item_id,
                    // photo: values.images,
                    grade: 2,
                    // photo: uploaded_photos,
                    // uploaded_photos: uploaded_photos,
                    uploaded_photos: values.images,
                    user: 1,
                    text: '123',
                    // review: 1
                }
                // delete send_data.images;

                console.log('send_data in createRevies ', send_data)
                let response = await fetch(`${fetch_route}/api/reviews/`, {
                    // let response = await fetch(`${fetch_route}/api/review_photos/`, {
                    method: "POST",
                    body: send_data,
                    headers: {
                        'Content-type': 'application/json'
                    },
                    credentials: 'include'
                });
                console.log(response.status, response.status == 500)
                console.log('response',response)
                // const data = await response.json();
                // console.log('response.data', data)
                if (response.status === 500) {
                console.log('i`m error')
                throw new Error(`HTTP error! status: ${response.status}`);
                }
                // if (data?.error) {
                //     // form.reset();
                //     console.log(data?.message)
                //     Object.entries(data?.message)?.map(([key, value]) => {
                //         console.log(key, 'key', value, 'value')
                //         form.setError(key, { type: 'manual', message: value })

                //     })
                //     setNotifyMes('Invalid data! Check data');
                //     setStateNotify('error');
                // }
                // if (data?.success) {
                //     form.reset();
                //     setNotifyMes('Вы зарегистрированы! Переход на страницу авторизации...');
                //     setStateNotify('success');
                //     setSuccess(true)
                // }
            } catch (error) {
                // Обработка ошибки
                setNotifyMes('Registration failed! Error on server');
                setStateNotify('error');
            }
        });
    };
    return (
        <>
            <Dialog modal={true} className={''} >
                <DialogTrigger asChild>
                    <button>
                        Написать отзыв
                    </button>
                </DialogTrigger>
                <DialogContent variant={'editDialog'}>
                    <DialogTitle className="w-full rounded-t-md flex justify-between" >
                        <span className='text-2xl font-semibold'>Напишите отзыв о покупке</span>
                        <DialogClose className={'rounded-full'} />
                    </DialogTitle>
                    <DialogDescription />
                    <section className=" pt-10 space-y-5 h-full">
                        <div className="name_review text-center mx-auto text-2xl font-semibold space-y-5">
                            {vrem_item.name}
                            <div className="relative w-28 h-28 mt-5 mx-auto">
                                <Image src={vrem_item.photo.photo} className='object-cover' fill alt="preview" />
                            </div>
                        </div>
                        <Form {...form}>
                            <form className='space-y-8 w-full p-2 max-h-[60vh] overflow-y-auto smooth-scroll'>
                                <FormField control={form.control} name="grade" render={({ field }) => (
                                    <FormItem className='!space-y-0 flex justify-around items-center gap-4 w-full bg-black/5 rounded-2xl p-2'>
                                        <FormLabel className='!text-lg'>Оценка</FormLabel>
                                        <FormControl >
                                            <RateUI {...field} value={field.value} disabled={isPending || success} />

                                            {/* <Input {...field} value={field.value} disabled={isPending || success} maxLength={256} placeholder="Достоинства" type="text" /> */}
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="advantages" render={({ field }) => (
                                    <FormItem className='!space-y-0 flex-col justify-center items-center gap-4 flex w-full'>
                                        <FormControl >
                                            <Input {...field} value={field.value} disabled={isPending || success} maxLength={256} placeholder="Достоинства" type="text" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="disadvantages" render={({ field }) => (
                                    <FormItem className='!space-y-0 flex-col justify-center items-center gap-4 flex w-full'>
                                        <FormControl>
                                            <Input {...field} value={field.value} disabled={isPending || success} maxLength={256} placeholder="Недостатки" type="text" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="comments" render={({ field }) => (
                                    <FormItem className='!space-y-0 flex-col justify-center items-center gap-4 flex w-full'>
                                        <FormControl>
                                            <Input {...field} value={field.value} disabled={isPending || success} maxLength={256} placeholder="Комментарии к отзыву" type="text" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="images" render={({ field }) => (
                                    <FormItem className='!space-y-0 flex-col justify-center items-center gap-4 flex w-full'>
                                        <FormLabel className='!text-lg'>Загрузите фотографии</FormLabel>
                                        <div {...getRootProps({ style: styleDnD, className: `${(isPending || success) ? 'disabled' : ''}` })} className={`border-2 border-dashed cursor-pointer hover:border-pink-500/80 p-6 w-full text-center ${isDragActive ? 'border-green-500' : 'border-gray-300'}`}>
                                            <input {...getInputProps()} />
                                            {
                                                isDragActive ?
                                                    <p>Перетащите файлы сюда ...</p> :
                                                    <p>Перетащите файлы сюда или нажмите, чтобы выбрать файлы</p>
                                            }
                                            <p>Максимум 5 файлов или 2MB общий размер</p>

                                        </div>
                                        <FormMessage />

                                        <div className="flex flex-wrap mt-4">
                                            {files.map((file, index) => (
                                                <div key={index} className="relative w-24 h-24 mr-2 mb-2 group" onClick={() => removeFile(file)}>
                                                    <Image src={file.preview} className='object-cover' fill alt="preview" />
                                                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <AiOutlineCloseCircle className="text-white text-2xl" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </FormItem>
                                )} />
                                <div className="w-full space-y-8">
                                    <div className="buttonBlock space-y-2" >
                                        <button
                                            onClick={form.handleSubmit(onSubmit)}
                                            className={
                                                "Button relative appearance-none transition-all overflow-hidden p-3 w-full h-full bg-zinc-800 rounded-2xl border border-zinc-800 justify-center items-center " +
                                                "gap-2 flex text-neutral-100 leading-none " +
                                                "hover:text-black group/buttonbuy "
                                            }
                                        >
                                            <span className="absolute inset-0 bg-white transition-all w-full duration-300 -left-full group-hover/buttonbuy:left-0 z-0"></span>
                                            <span className="relative z-10">Отправить отзыв</span>
                                            <span className="absolute h-full bg-white transition-all w-full duration-300 -right-full group-hover/buttonbuy:right-0 z-0"></span>
                                        </button>
                                        {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}
                                    </div>
                                </div>


                            </form>
                        </Form>
                    </section>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CreateReviews