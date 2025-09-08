import dbConnect from '@/lib/dbConnect'
import Image from 'next/image'
import React from 'react'

export default async function ServicesSection() {
    
    const serviceCollecton = dbConnect('services');
    const data = await serviceCollecton.find({}).toArray();

    if (!data || data.length === 0) {
        return <div className='text-center text-red-500'>No services available at the moment.</div>
    }


  return (
    <div>
        <h2>Our Services</h2>
        <div className='grid grid-cols-12'>
            {data.map(service => {
                return <div key={service._id} className='col-span-12 md:col-span-6 lg:col-span-4 border m-2 p-2 rounded'>
                    <Image src={service.img} width={314} height={208} alt={service.title} className='rounded'/>
                    <h3 className='text-2xl font-bold my-2'>{service.title}</h3>
                    <p className='text-xl font-semibold text-orange-600'>Price: ${service.price}</p>
                    <p className='my-2'>{service.description.slice(0,100)}...</p>
                    <button className='bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700'>Book Now</button>
                </div>
            })}
        </div>
    </div>
  )
}
