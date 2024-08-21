function Deposit() {
  return (
    <div className="bg-red-600 flex justify-center items-center">
      <div className="  bg-red-500 rounded-lg p-8 flex xs:flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-6">
        <div>
          <img src="/vi.png" alt="Wallet Icon" className="w-96 h-70 lg:w-[650px]" />
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-white text-3xl font-bold">Quick Deposit</h1>

          <div>
            <label className="text-white text-lg mb-2 block text-left">
              Choose Payment Method:
            </label>
            <div className="relative inline-block w-full text-white">
              <div className="flex bg-gradient-to-r from-[#601414] to-[#9A0000] appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
                <button className="w-full text-left pl-2 flex items-center">
                  <img
                    src="/icbit.png"
                    alt="Bitcoin Icon"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Bitcoin</span>
                </button>
                <span className="mr-5 mt-1">
                  <img className="w-7" src="/down.png" alt="khong" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-green-600 text-white text-lg py-2 px-8 rounded-xl text-center flex items-center justify-center">
              <img
                src="/deposit-icon.png"
                alt="Deposit Icon"
                className="w-6 h-6 mr-2"
              />
              Deposit
            </button>
          </div>

          <p className="text-white text-sm">
            We will credit the exact amount we receive in US Dollars.
          </p>
          <p className="text-white text-sm">
            Need assistance? Contact us via Live Chat for instant support.
          </p>
        </div>
        <div className="lg:block xs:hidden lg:w-[750px]">
          <img
            src="/tele.png"
            alt="Telegram Icon"
            className="w-96 h-96 lg:block xs:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Deposit;
