
import { useState } from 'react';
// import serviceImg1 from '../../../assets/images/services/1.jpg'
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])

    return (
        <div className="mb-10">
            <div className="flex flex-col items-center space-y-4">
                <h1 className=" text-center text-xl text-orange-500">Services</h1>
                <h1 className="text-3xl font-bold text-center text-[#151515]">Our Service Areas</h1>
                <p className="text-center w-7/12">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-3 md:gap-6 mt-10'>
                {
                    service.map(data => <ServiceCard key={data._id} data={data}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;