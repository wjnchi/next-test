
interface Props {
  onPageChange: (page: number) => void;
}

const Top: React.FC<Props> = ({ onPageChange }) => {
  return (
    <div className="flex flex-row items-center justify-start">
      <div className="icon">
        <img src="joker.png" alt="你好～" className="ml-10 " />
      </div>
      <div className="route">
        <ul className="flex flex-row gap-20 ml-10">
          <li className="p-2 border rounded-md border-gray-500 hover:scale-110 hover:shadow-lg duration-200">
            <button className="text-3xl" onClick={() => onPageChange(0)}>
              个人介绍
            </button>
          </li>
          <li className="p-2 border rounded-md border-gray-500 hover:scale-110 hover:shadow-lg duration-200">
            <button className="text-3xl" onClick={() => onPageChange(1)}>
              历史背景
            </button>
          </li>
          <li className="p-2 border rounded-md border-gray-500 hover:scale-110 hover:shadow-lg duration-200">
            <button className="text-3xl" onClick={() => onPageChange(2)}>
              现状
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Top;
