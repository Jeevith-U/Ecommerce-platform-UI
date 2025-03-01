/*
* All the Template for this is Imported fom a library called HeadlessUI 
*/

import { Dialog, DialogTitle } from '@headlessui/react'
import { Divider } from '@mui/material';
import { useState } from 'react'
import Status from './Status';
import { MdClose, MdDone } from 'react-icons/md';

const ProductViewModel = ({ open, setOpen, product, isAvailable }) => {

    const { productId, productName, image, description, quantity, price, discount, specialPrice } = product;

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Dialog open={open} as="div" className="relative z-10" onClose={handleClose}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-[620px] md:min-w-[620px] w-full">
                            {image && (
                                <div className='flex justify-center aspect-[3/2]'>
                                    <img
                                        className="w-full h-full cursor-pointer transition-transform"
                                        src={image}
                                        alt={productName} />
                                </div>
                            )}

                            <div className='px-6 pt-10 pb-2'>
                                <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 mb-4">
                                    {productName}
                                </DialogTitle>

                                <div className='space-y-2 text-gray-700 pb-4'>
                                    <div className='flex items-center justify-between gap-2'>
                                        {specialPrice ? (
                                            <div className="flex flex-col">
                                                <span className="text-gray-400 line-through">
                                                    ${Number(price).toFixed(2)}
                                                </span>
                                                <span className="text-xl font-bold text-slate-700">
                                                    ${Number(specialPrice).toFixed(2)}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-xl font-bold text-slate-700">
                                                {"  "}
                                                ${Number(price).toFixed(2)}
                                            </span>
                                        )}

                                        { isAvailable ? (
                                            <Status
                                                text= "Instock"
                                                icon={MdDone}
                                                bg="bg-teal-200"
                                                color="text-teal-600"
                                                />
                                        ) :(
                                            <Status
                                            text= "Out-of-Stocks"
                                             icon={MdClose}
                                             bg="bg-teal-200"
                                             color="text-teal-600"
                                            />
                                        )}
                                    </div>

                                    <Divider />
                                    <p>{description}</p>
                                </div>
                            </div>

                            <div className="flex justify-end p-4">
                                <button 
                                    onClick={handleClose}
                                    type='button'
                                    className='px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-800 rounded-md'
                                >    
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProductViewModel;
