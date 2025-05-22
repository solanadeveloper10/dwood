import React from "react";

const StartScreen: React.FC<{ onOpen: () => void }> = ({ onOpen }) => (
  <div style={{ display: "contents" }}>
    <div className='fullscreen-bg2 svelte-1nqy9sb'>
      <div className='centered svelte-1nqy9sb'>
        <h1
          className='text-5xl text-white font-bold'
          data-svelte-h='svelte-5at49r'
        >
          WELECOME TO KEKEC CITY!
        </h1>
        <button
          onClick={onOpen}
          className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-pulse'
          data-svelte-h='svelte-743hbk'
          id='hover1'
        >
          ENTER NOW
        </button>
        <img src='loading.gif' className='w-1/2 mx-auto' />
      </div>
    </div>
  </div>
);

export default StartScreen;
