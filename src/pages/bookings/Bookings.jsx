import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";



const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setBooking(res.data)
            })
    }, [url])
    console.log(booking);

    const handleDelete = (id) => {
        console.log(id);
        const deleteConform = confirm("are you delete this")
        if (deleteConform) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log("the data is deleted", data);
                    if (data.deletedCount > 0) {
                        alert("the data is deleted")
                        const remaining = booking.filter(book => book._id !== id)
                        setBooking(remaining)
                    }
                })
        }
    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // 
                    const remaining = booking.filter(book => book._id !== id)
                    const updated = booking.find(book => book._id === id)
                    updated.status = "confirm"
                    const newBooking = [updated, ...remaining]
                    setBooking(newBooking)
                    console.log("the remaining id", remaining);
                    console.log("which i update", updated);
                }
            })
    }



    return (
        <div>
            <p>My Data List is: {booking.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-300">
                            <th>
                                Delete
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>details roe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            booking.map(book => <tr key={book._id}>
                                <th>
                                    <button onClick={() => handleDelete(book._id)} className="btn btn-sm btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded-md w-24 h-24">
                                            <img src={book.img} />
                                        </div>
                                    </div>
                                </td>
                                <td>{book.customerName}</td>
                                <td>
                                    {book.date}
                                </td>
                                <td>{book.price}</td>
                                <th>
                                    {book.status === "confirm" ? <span className="text-green-400 text-xl font-bold">Confirmed</span> :
                                        <button onClick={() => handleConfirm(book._id)} className="btn btn-ghost btn-xs">Conform</button>}
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;