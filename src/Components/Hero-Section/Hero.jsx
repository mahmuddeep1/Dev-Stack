

const Hero = () => {
    return (
        <section className='w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center px-7 md:px-7 mt-5 md:py-7 gap-6 md:gap-0  '>
            <div className='w-full text-center md:w-1/2 md:text-left'>
                
                    <h1 className='text-4xl md:text-5xl font-bold leading-tight '>
                        <span>Build Your Ideal <br /></span>

                        <span className=' bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent '>Development Stack</span>
                    </h1>
                    <p className='mt-5 md:text-lg text-base leading-7 md:leading-8'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>

                

                <div className='flex items-center justify-center md:justify-start md:gap-5 gap-3 mt-6'>
                    <button className='flex-1 md:flex-none py-4 px-3 md:px-6 rounded-md text-white bg-linear-to-r cursor-pointer from-[#F97316] to-[#EC4899] hover:bg-linear-to-l'>Explore Technologies</button>
                    <button className='flex-1 md:flex-none py-4 px-3 md:px-6 border cursor-pointer border-gray-300 '>Learn More</button>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center"><img src="image/banner-stack.png" alt="" className='w-90' /></div>

        </section>

    );
};

export default Hero;