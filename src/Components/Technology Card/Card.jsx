
const badgeColors = {
  Popular: "bg-blue-50 text-blue-500",
  Versatile: "bg-green-50 text-green-600",
  Fast: "bg-orange-50 text-orange-500",
  Standard: "bg-green-50 text-green-600",
  "Top SQL": "bg-blue-50 text-blue-500",
  Cache: "bg-red-50 text-red-500",
  Ubiquitous: "bg-yellow-50 text-yellow-600",
  Essential: "bg-purple-50 text-purple-500",
  Robust: "bg-blue-50 text-blue-500",
  Modern: "bg-cyan-50 text-cyan-500",
  Containers: "bg-sky-50 text-sky-500"
};
//transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-2
const Card = (props) => {
    return (
        <div className={`flex flex-col w-full p-4 bg-white rounded-2xl border shadow-sm 
        ${props.isSelected ? "border-pink-500 shadow-md" : "border-slate-200 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"}`}>
            <div className='flex justify-between items-center'>
                <img src={props.icon} alt="{props.name}" className='h-10 w-10 object-contain' />

                <p className={`px-3 py-1 text-xs font-medium rounded-full ${badgeColors[props.badge] ||
                     "bg-slate-100 text-slate-100"}`}>
                    {props.badge}
                </p>
            </div>

            <div className='mt-4'>
                <h1 className='="text-lg font-semibold text-slate-900'>{props.name}</h1>
                <p className='="mt-3 mb-3 min-h-[50px] text-xs leading-5 text-slate-400'>{props.description}</p>
            </div>

            <div className='="mt-5 flex justify-between items-center gap-2 border-t-[1px] border-gray-100'>
                <span className='rounded-md bg-slate-100 px-2 py-1 mt-2 text-[10px] text-slate-500'>{props.category}</span>
                <span className='text-[12px] text-slate-500'>{props.difficulty}</span>
                <span className='text-[12px] text-slate-500'>⭐ {props.rating}</span>
            </div>

            <div className='flex justify-center mt-1'>
                <button
                    onClick=
                    {() => props.onAdd(props)}
                    disabled={props.isSelected} 
                    className={`mt-4 w-full rounded-lg bg-slate-950 py-2.5 text-xs font-medium transition-all duration-200
                    ${
                        props.isSelected ? "cursor-not-allowed border border-pink-500 bg-white text-pink-600" : "cursor-pointer bg-slate-950 text-white hover:bg-slate-800"
                    }`}>
                    {props.isSelected ? "Added to Stack" : "Add to Stack"}
                </button>
            </div>

        </div>

    )
}

export default Card