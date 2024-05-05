import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { useContext } from "react";
import { ContextAll } from "../provider/ContextApi";
import { CirclesWithBar } from "react-loader-spinner";

const Main = () => {
    const {loading} = useContext(ContextAll)
    if(loading){
        return <div className="flex justify-center min-h-screen items-center"><CirclesWithBar 
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /></div>
    }
    return (
        <div>
            <Navber />
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;