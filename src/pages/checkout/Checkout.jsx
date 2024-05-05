import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";




const Checkout = () => {
    const services = useLoaderData()
    const {  title,_id, price,img } = services;
    const { user } = useContext(AuthContext)
    


    const handleCheckout = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;

        const order = {
            customerName: name,
            date,
            email,
            img,
            price: price,
            service_id: _id,
            service_title: title,
        }
        console.log(order);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log("this data form backend",data);
            if(data){
                alert("your submit successfully")
            }
        })
    }

    return (
        <div>
            <div className="font-[sans-serif] bg-white p-4 min-h-screen">
                <div className="">
                    <h2 className="text-3xl font-extrabold text-[#333]">Make Checkout</h2>
                    <p className="text-[#333] text-base mt-6">We can fixed your problems right time.</p>
                    <form onSubmit={handleCheckout} className="mt-12 px-10 space-y-5">
                        <div className="flex lg:flex-row md:flex-row flex-col gap-10">
                            <input type="name" name="name" defaultValue={user?.displayName} placeholder="name"
                                className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                            <input type="Date" name="date"
                                className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                        </div>
                        <div className="flex lg:flex-row md:flex-row flex-col gap-10">
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email"
                                className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                            <input type="text" name="price" defaultValue={"$ " + price}
                                className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                        </div>
                        {/* <div className="">
                            <textarea name="massage" id="massage" className="resize-none h-20 w-full  border rounded-md focus:border-purple-500 outline-none"></textarea>
                        </div> */}

                        <input type="submit" className="btn  btn-primary w-full" value="added" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;