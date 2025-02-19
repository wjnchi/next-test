import { useState } from "react";

const Mission1: React.FC = () => {
  const [whetherShow, setWhetherShow] = useState<boolean>(false);
  const showlist = () => {
    setWhetherShow(!whetherShow);
  };
  return (
    <div className="w-[100%] h-[100vh] bg-pink-500 flex flex-col  items-center ">
      <button
        className="hover:scale-110 hover:shadow-xl text-black-600 w-20 h-10 rounded bg-green-500 text-center items-center justify-center  m-3 "
        onClick={() => showlist()}
      >
        点击
      </button>
      {whetherShow ? (
        <ul className="flex flex-col justify-center items-center bg-gray-200 p-4 border-1 border-blue-300 rounded-xl shadow-lg min-w-[200px]">
          <li className="w-[100%] h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center m-2 text-white font-bold hover:scale-110 hover:shadow-xl transition-all duration-300 ">
            1
          </li>
          <li className="w-[100%] h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center m-2 text-white font-bold hover:scale-110 hover:shadow-xl transition-all duration-300 ">
            2
          </li>
          <li className="w-[100%] h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center m-2 text-white font-bold hover:scale-110 hover:shadow-xl transition-all duration-300 ">
            3
          </li>
          <li className="w-[100%] h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center m-2 text-white font-bold hover:scale-110 hover:shadow-xl transition-all duration-300 ">
            4
          </li>
          <li className="w-[100%] h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center m-2 text-white font-bold hover:scale-110 hover:shadow-xl transition-all duration-300 ">
            5
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Mission1;
