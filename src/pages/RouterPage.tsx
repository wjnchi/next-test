import React from "react";
import { useRouter } from "next/router";

const RouterPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className=" bg-pink-500">
      <nav className="flex h-[50px] gap-10 p-2 justify-center items-center bg-gray-100 mb-10">
        {/* 使用 router 进行编程式导航 */}
        <span className="font-bold">点击按钮,查看不同的任务哦👉</span>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/Mission1")}
        >
          任务一
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/Mission2")}
        >
          任务二
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/Mission3")}
        >
          任务三
        </button>
      </nav>
      <div className="relative h-[calc(100vh-120px)]">
        {/* <div className="animate-circle">123</div> */}
        <div
          className="  
           absolute
           top-1/2 
           left-1/2 
           -translate-x-1/2 
           -translate-y-1/2
           w-60
           h-60
           rounded-full
           animate-lovecircle
           font-bold
           text-3xl
           "
        >
          David Tao💗
        </div>
        <img
          src="image.png"
          className="absolute top-1 left-1 animate-dance  ml-10 p-0.5 bg-red-500 w-30 h-30 transition delat-150 duration-150 ease-in-out hover:scale-110 hover:bg-black border-blue-300 border-5 border-dashed rounded-md text-white text-lg font-medium italic"
        ></img>
        <img
          src="image2.png"
          className="absolute top-1 right-1 animate-dance  ml-10 p-0.5 bg-red-500 w-30 h-30 transition delat-150 duration-150 ease-in-out hover:scale-110 hover:bg-black border-blue-300 border-5 border-dashed rounded-md text-white text-lg font-medium italic"
        ></img>
        <img
          src="image3.png"
          className="fixed 
          top-1/2 
          left-1/2 
          -translate-x-1/2 
         -translate-y-[40%]
          p-0.5 
          bg-red-500 
          w-30 
          h-30 
          animate-dance 
          transition 
         duration-150 
         ease-in-out 
          hover:scale-110 
         hover:bg-black 
         border-blue-300 
         border-4 
         border-dashed 
         rounded-md"
        ></img>
        <img
          src="image4.png"
          className="absolute bottom-2 left-1 animate-dance  ml-10 p-0.5 bg-red-500 w-30 h-30 transition delat-150 duration-150 ease-in-out hover:scale-110 hover:bg-black border-blue-300 border-5 border-dashed rounded-md text-white text-lg font-medium italic"
        ></img>
        <img
          src="image5.png"
          className="absolute bottom-2 right-1 animate-dance  ml-10 p-0.5 bg-red-500 w-30 h-30 transition delat-150 duration-150 ease-in-out hover:scale-110 hover:bg-black border-blue-300 border-5 border-dashed rounded-md text-white text-lg font-medium italic"
        ></img>
      </div>
    </div>
  );
};

export default RouterPage;