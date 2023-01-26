import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function VideoPage() {
  return <div className='m-auto w-fit'>
    <h1 className='text-lg text-slate-700 p-2 mb-4 text-center'>Congratulations: you got it correct!</h1>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/92caxOecR6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>;
}

function ItemPage(proceed, error) {
  return <div className='m-auto text-center'>
    <div className='w-fit drop-shadow-md bg-white m-auto p-3 rounded-lg flex' onClick={proceed}>
      <div className='w-64 m-auto h-fit bg-slate-700 rounded-md drop-shadow-md p-3 flex-2'>
        <div className='aspect-square bg-white w-56 m-auto rounded-md'>
          <div className='rounded-2xl bg-red-700 drop-shadow-md w-full h-1 translate-y-24'></div>
        </div>
        <div className='rounded-2xl bg-red-700 drop-shadow-md w-4 h-4 m-3'></div>
      </div>
      <div className='flex-2 m-4'>
        <h1 className='font-semibold text-red-700'>Heart rate information</h1>
      </div>
    </div>

    <div className='w-fit drop-shadow-md bg-white m-auto p-3 rounded-lg flex mt-2' onClick={error}>
      <div className='w-64 m-auto h-fit bg-slate-700 rounded-md drop-shadow-md p-3 flex-2'>
      </div>

      <div className='flex-2 m-4'>
        <h1 className='font-semibold text-red-700'>Fall detecting mats</h1>
      </div>
    </div>
    
  </div>;
}

function App() {
  const VIDEO_PAGE = "video page";
  const ITEM_PAGE = "item page";

  const [page, setPage] = useState(ITEM_PAGE);
  const [error, setError] = useState("");

  function openVideoPage() {
    setPage(VIDEO_PAGE);
  }

  function showError() {
    setError("While fall detecting mats can show that someone has fallen, using their heart rate information can help detect abnormalities which could lead to heart problems");
  }

  return (
    <div className="bg-slate-100 h-screen">
      <h1 className='text-lg text-white p-2 mb-4 bg-red-700  text-center'>Escape Room Question 2</h1>

      <h1 className='text-lg text-slate-700 p-2 mb-4 text-center'>Question 2: What data can best be used to detect and predict the likelihood of heart problems?</h1>

      {
        error.length > 0 && <h1 className='bg-red-700 rounded-md p-2 text-white text-semibold m-auto m-2 text-center'>{error}</h1>
      }

      {
        page === ITEM_PAGE ? ItemPage(openVideoPage, showError) : VideoPage()
      }
    </div>
  );
}

export default App;
