import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({ data }) => {
    const { _id, title, img, price } = data;
    return (
        <div className='border-2 p-4 space-y-2'>
            <img className="" src={img} alt="service 1" />
            <h1 className='text-xl font-bold'>{title}</h1>
            <div className='flex justify-between'>
                <p className='text-red-500 font-bold'>Price: {price}$</p>
                <p className='text-red-500 font-bold'>
                    <Link to={`/checkout/${_id}`}><FaArrowRight></FaArrowRight></Link>
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;