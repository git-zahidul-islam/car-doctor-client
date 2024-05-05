import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdOutlineEditLocationAlt } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div className="mb-5 flex gap-20 justify-center lg:flex-row md:flex-row flex-col bg-[#151515] text-white p-10">
            <div className="flex gap-2 items-center">
                <div>
                    <FaCalendarDays size={28}></FaCalendarDays>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className="text-xl font-semibold">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <MdOutlineAddIcCall size={30}></MdOutlineAddIcCall>
                </div>
                <div>
                    <p>Have a question?</p>
                    <h3 className="text-xl font-semibold">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <MdOutlineEditLocationAlt size={30}></MdOutlineEditLocationAlt>
                </div>
                <div>
                    <p>Have a question?</p>
                    <h3 className="text-xl font-semibold">+2546 251 2658</h3>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;