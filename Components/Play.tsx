function Play() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Play</h1>
        <p className="mt-2 text-sm">Your Favourite Online Poker Games.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 xs:grid-cols-2">
        <div className="bg-[#450a0a]  p-4 flex flex-col items-center lg:w-80 lg:h-60">
          <img src="/game.png" alt="Texas Hold'em" className="h-20" />
          <p className="mt-4 text-lg font-semibold">Texas Holdem</p>
        </div>

        <div className="bg-[#450a0a]  p-4 flex flex-col items-center lg:w-80 lg:h-60">
          <img src="/game.png" alt="Omaha4" className="h-20" />
          <p className="mt-4 text-lg font-semibold">Omaha4</p>
        </div>

        <div className="bg-[#450a0a]  p-4 flex flex-col items-center lg:w-80 lg:h-60">
          <img src="/game.png" alt="Omaha5" className="h-20" />
          <p className="mt-4 text-lg font-semibold">Omaha5</p>
        </div>

        <div className="bg-[#450a0a]  p-4 flex flex-col items-center lg:w-80 lg:h-60">
          <img src="/game.png" alt="Tournaments" className="h-20" />
          <p className="mt-4 text-lg font-semibold">Tournaments</p>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="#"
          className="bg-[#29d329] hover:bg-green-700 text-white font-bold py-2 px-8 rounded-2xl"
        >
          JOIN NOW!
        </a>
      </div>
    </div>
  );
}

export default Play;
