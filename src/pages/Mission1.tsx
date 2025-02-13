const Mission1: React.FC = () => {
   async function getMessage() {
    const data=await fetch('/api/hello')
    data.json().then((res)=>{
      console.log(res.name)
      return res
    })
  }
  const data=getMessage()
  console.log('****'+data)
  return <div>111</div>;
};

export default Mission1;