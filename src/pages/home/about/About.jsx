
import about_person from '../../../assets/images/about_us/person.jpg'
import about_parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-32 lg:flex-row px-0">
                <div className='relative lg:w-1/2'>
                    <img src={about_person} className="h-[60vh] w-[460px]" />
                    <img src={about_parts} className="h-[40vh] w-[327px] absolute top-1/2  -right-20 border-[10px] border-white" />
                </div>
                <div className='lg:w-1/2 h-full space-y-4'>
                    <h1 className='text-3xl font-bold text-orange-500'>About Us</h1>
                    <p className="text-5xl font-bold w-4/5">We are qualified & of experience in this field</p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;