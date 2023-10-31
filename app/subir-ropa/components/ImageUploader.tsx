import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/button';
import NextImage from 'next/image';
import { DragEventHandler, useRef, useState } from 'react';
import { BsImageFill } from 'react-icons/bs';

type ImageUploaderProps = {
    isError: boolean;
    errorMessage: string | null;
};

function ImageUploader(props: ImageUploaderProps) {
    const { isError, errorMessage } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isSelected, setIsSelected] = useState(false);
    const [isDragActive, setIsDragActive] = useState(false);
    const [isInvalidFiletype, setIsInvalidFiletype] = useState(false);

    const handleInputChange = () => {
        if (inputRef.current === null || !inputRef.current.files) return;

        if (inputRef.current.files.length > 0) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    };

    const handleDrag: DragEventHandler<HTMLElement> = event => {
        event.preventDefault();
        event.stopPropagation();
        console.log(event);
        setIsInvalidFiletype(false);

        if (event.type === 'dragenter' || event.type === 'dragover') {
            setIsDragActive(true);
        } else if (event.type === 'dragleave') {
            setIsDragActive(false);
        }
    };

    const handleFileDrop: DragEventHandler<HTMLDivElement> = event => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragActive(false);
        const file = event.dataTransfer?.files[0];

        if (!(file.type === 'image/png' || file.type === 'image/jpeg'))
            return setIsInvalidFiletype(true);

        if (file) {
            const list = new DataTransfer();
            list.items.add(file);
            if (inputRef.current) inputRef.current.files = list.files;
            setIsSelected(true);
        }
    };

    const handleRemoveImageClick = () => {
        if (inputRef.current === null || !inputRef.current.files) return;

        inputRef.current.value = '';
        setIsSelected(false);
    };

    const getSelectedImageURL = (file: File) => URL.createObjectURL(file);

    return (
        <div
            data-testid='ImageUploaderContainer'
            className={`flex flex-col gap-2 select-none ${
                isError ? 'text-danger' : ''
            }`}
        >
            <input
                type='file'
                name='image'
                id='imageInput'
                className='hidden'
                aria-hidden
                accept='image/png, image/jpeg'
                ref={inputRef}
                onChange={handleInputChange}
            />
            {!isSelected ? (
                <label
                    htmlFor='imageInput'
                    className='relative'
                    onDragEnter={handleDrag}
                    tabIndex={0}
                >
                    <Card
                        shadow='none'
                        classNames={{
                            base: 'relative border-2 border-dashed border-divider transition-colors hover:bg-default-50',
                            body: 'flex-col items-center gap-1 py-8',
                        }}
                    >
                        <CardBody>
                            <BsImageFill size='32px' color='#71717a' />
                            <p
                                className={
                                    !isInvalidFiletype
                                        ? 'text-foreground-500'
                                        : 'text-danger'
                                }
                            >
                                {!isInvalidFiletype
                                    ? 'Arrastre su imagen o haga click aquí'
                                    : 'Solo se aceptan imágenes de tipo PNG o JPEG'}
                            </p>
                        </CardBody>
                    </Card>
                    {isDragActive && (
                        <div
                            className='absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0'
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleFileDrop}
                        ></div>
                    )}
                </label>
            ) : (
                <Card
                    shadow='none'
                    classNames={{
                        base: `border-1 ${
                            isError ? 'border-danger' : 'border-divider'
                        }`,
                        body: 'flex-col items-center gap-4',
                    }}
                >
                    <CardBody>
                        <Image
                            as={NextImage}
                            src={
                                inputRef.current?.files
                                    ? getSelectedImageURL(
                                          inputRef.current.files[0]
                                      )
                                    : ''
                            }
                            alt='Icono de imagen'
                            width={52}
                            height={52}
                            shadow='md'
                            radius='sm'
                            className='w-[120px] aspect-square'
                        />
                        <Button
                            variant='flat'
                            className='w-full'
                            onClick={handleRemoveImageClick}
                        >
                            Seleccionar otra imagen
                        </Button>
                    </CardBody>
                </Card>
            )}
            {isError ? (
                <p className='text-sm text-danger'>{errorMessage}</p>
            ) : null}
        </div>
    );
}

export default ImageUploader;
