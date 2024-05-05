
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute flex items-center top-0 h-full w-full">
                    <div className="ml-20 text-white space-y-7">
                        <h1 className="w-[450px] text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h1>
                        <p className="w-[552px] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 right-16 left-16 bottom-2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute flex items-center top-0 h-full w-full">
                    <div className="ml-20 text-white space-y-7">
                        <h1 className="w-[450px] text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h1>
                        <p className="w-[552px] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 right-16 left-16 bottom-2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute flex items-center top-0 h-full w-full">
                    <div className="ml-20 text-white space-y-7">
                        <h1 className="w-[450px] text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h1>
                        <p className="w-[552px] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 right-16 left-16 bottom-2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute flex items-center top-0 h-full w-full">
                    <div className="ml-20 text-white space-y-7">
                        <h1 className="w-[450px] text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h1>
                        <p className="w-[552px] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 right-16 left-16 bottom-2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute flex items-center top-0 h-full w-full">
                    <div className="ml-20 text-white space-y-7">
                        <h1 className="w-[450px] text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h1>
                        <p className="w-[552px] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 right-16 left-16 bottom-2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute flex items-center top-0 h-full w-full">
                    <div className="ml-20 text-white space-y-7">
                        <h1 className="w-[450px] text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h1>
                        <p className="w-[552px] text-base">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 right-16 left-16 bottom-2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;