interface Props {
  whichPage: number;
}

const Center: React.FC<Props> = ({ whichPage }) => {
  const returnPages = () => {
    switch (whichPage) {
      case 0:
        return <div>000</div>;
      case 1:
        return <div>111</div>;
      case 2:
        return <div>222</div>;
    }
  };
  return <div className="flex justify-center">{returnPages()}</div>;
};
export default Center;
