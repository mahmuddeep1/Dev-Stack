
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Card from "./Card";
import SideBar from "./SideBar";



const MainCard = () => {
    const [technologies, setTechnologies] = useState([])
    const [stack, setStack] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("/Data.json");
            const data = await response.json();

            setTechnologies(data);
        };
        fetchData()

        .catch((error) => {
                console.error("Error loading technologies:", error);
                setLoading(false);
                toast.error("Failed to load technologies");
            });

    }, []);
    console.log(technologies);

    const Add = (technology) => {
        if (stack.some((item) => item.id === technology.id)) {
            toast.warning(`${technology.name} is already in your stack`)
            return;
        }
        setStack((prev) => [...prev, technology])
        toast.success(`${technology.name} added to stack`)
    }
    
    const handleRemove = (id) => {
        setStack((prev) =>
            prev.filter((item) => item.id !== id))
        toast.info(` removed from stack`)

    }
    const handleRemoveAll = () => {
        if (stack.length === 0) {
            return;
        }
        setStack([]);
        toast.info("All technologies removed from stack");
    }
    return (
        <div className="mt-10 w-[95%] mx-auto px-8 py-8">
            <div className='w-full mb-10'>
                <h1 className='text-4xl font-bold mb-3'>Explore the <span className='text-4xl font-bold bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h1>
                <p className='text-xl text-gray-500 '>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-4">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                {technologies.map((technology) => (
                    <Card key={technology.id}
                        {...technology}
                        onAdd = {Add}
                        isSelected = {stack.some(
                            (item) => item.id === technology.id
                        )} />
                ))}

            </div>
            <div className="lg:col-span-1">
                <SideBar   
                stack = {stack}
                onRemove = {handleRemove}
                onRemoveAll = {handleRemoveAll} />
            </div>
            </div>
        </div>
    );
};

export default MainCard;