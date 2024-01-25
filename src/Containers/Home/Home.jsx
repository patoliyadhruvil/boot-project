import Slider from "../../components/Slider/Slider";
import Banner from "../../components/Banner/Banner"
import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact-Us/Contact-us";
import Footer from "../../components/Footer/Footer";
import Pages from "../../components/Pages/Pages";
import Shoping from "../../components/Shop/Shop";


const Home = ()=>{

    return(

        <>
            <Banner/>
            <Pages/>
            <Shoping/>
            <Blog/>
            <Slider/>
         
        </>

    )

}
export default Home;