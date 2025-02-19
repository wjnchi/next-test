import Top from "@/components/mission2/Top";
import Center from "@/components/mission2/Center";
import Bottom from "@/components/mission2/Bottom";
import { useState } from "react";

const Mission2: React.FC = () => {
  const [whichPage, setWhichPage] = useState<number>(0);

  const handlePageChange = (page: number) => {
    setWhichPage(page);
  };

  return (
    <div className="main-container flex h-[100vh] justify-between flex-col">
      <div className="main-top bg-yellow-300 border w-[100%] h-[100px] mb-5 ">
        <Top onPageChange={handlePageChange} />
      </div>
      <div className="main-center bg-pink-300 border  w-[100%] flex-1 ">
        <Center whichPage={whichPage} />
      </div>
      <div className="main-bottom bg-green-300 border w-[100%] h-[80px]">
        <Bottom />
      </div>
    </div>
  );
};

export default Mission2;
