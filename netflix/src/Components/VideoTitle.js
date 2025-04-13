const VideoTitle  = ({titleName, description}) =>{

   
    return (<div className="pt-[25%] p-10 absolute text-white bg-gradient-to-r  ">
        <div className=" w-6/12  m-2">
        <h1 className="text-3xl font-bold m-2">{titleName}</h1>
        <p className="whitespace-normal break-words">{description}</p>
        </div>
        <div>
            <button className="m-4 p-2 px-10 rounded-lg   bg-white text-black bg-opacity-1  hover:bg-opacity-90">  Play</button>
            <button className="m-4 p-2 px-9 rounded-lg bg-gray-500 text-white bg-opacity-1 hover:bg-opacity-50">  More info </button>
        </div>
    </div>)
}

export default VideoTitle;