import './Home.css'
import logo from './../../assets/images/logo.webp'
import ReactTab from './../ReactTab/ReactTab';
import { useParams } from 'react-router-dom';


const Home = () => { 

    const getId = useParams();
    console.log(getId);
    return (
        <div>
            <div className='container md:flex md:justify-center md:items-center md:px-64'>
                <div className='bg-image md:w-[60vw]'>
                    <div className='flex justify-between items-center '>

                        <div>
                            <img className='h-20 w-36 mt-2 ms-6' src={logo} alt="" />
                        </div>

                        <div className='p-4 flex flex-col justify-center items-center bg-gray-800 text-white h-22  border border-spacing-3 me-4'>
                            <h1 className='font-serif text-md'>Id:{getId?.id}</h1>
                            <h1 className='font-serif text-md'>MA : 200203</h1>

                        </div>



                    </div>

                    {/* tab */}
                   <ReactTab></ReactTab>
                </div>
            </div>

        </div>

    );
};

export default Home;