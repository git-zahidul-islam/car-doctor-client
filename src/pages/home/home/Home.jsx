import About from "../about/About";
import Banner from "../banner/Banner";
import ContactInfo from "../contactInfo/ContactInfo";
import Services from "../services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;