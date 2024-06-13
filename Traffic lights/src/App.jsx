import Circles from './components/Circles';
function App() {
  return (
   <div className='flex justify-center items-center flex-col mt-40'>
    <h1 className='font-bold text-2xl'>Traffic Lights</h1>
    <div className='bg-black w-40 h-80 my-4 rounded-xl'>
      <Circles/>
    </div>
   </div>
  );
}

export default App;
