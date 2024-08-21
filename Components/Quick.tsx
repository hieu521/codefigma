function Quick() {
  return (
    <div
      id="container"
      className="flex flex-col lg:flex-row lg:w-1/4 w-full items-center lg:items-start px-4 py-6 lg:px-0"
    >
      {/* Mobile Money Image - Visible on mobile */}
      <div id="money-mobile" className="block lg:hidden w-full mb-4">
        <img className="w-full" src="/money2.png" alt="Money" />
      </div>

      {/* Girl Image - Hidden on mobile */}
      <div id="girl" className="hidden lg:block lg:w-[650px] lg:absolute lg:left-0 lg:-top-0.5">
        <img className="w-full" src="/girl.png" alt="Girl" />
      </div>

      {/* Content */}
      <div id="content" className="flex flex-col w-full">
        <h1 className="text-2xl text-center font-bold mb-5 lg:mb-0 lg:text-left">Quick Withdrawal</h1>

        <div className="mb-5">
          <label className="text-white text-lg mb-2 block text-left">Choose Payment Method:</label>
          <div className="relative inline-block w-full text-white">
            <div className="flex bg-gradient-to-r from-[#601414] to-[#9A0000] appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img src="/icbit.png" alt="Bitcoin Icon" className="w-6 h-6 mr-2" />
                <span>Bitcoin</span>
              </button>
              <span className="mr-5 mt-1">
                <img className="w-7" src="/down.png" alt="Dropdown" />
              </span>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="text-white text-lg mb-2 block text-left">Amount in USD:</label>
          <div className="relative inline-block w-full text-white">
            <div className="flex bg-white appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img src="/iconcash.png" alt="Cash Icon" className="w-6 h-6 mr-2" />
                <span>20</span> {/* Update placeholder value */}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="text-white text-lg mb-2 block text-left">Receiving Wallet Address:</label>
          <div className="relative inline-block w-full text-white">
            <div className="flex bg-white appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img src="/iconcash.png" alt="Wallet Icon" className="w-6 h-6 mr-2" />
                <span>1Lbcfz7sAHTD9CgdQo</span> {/* Update placeholder value */}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white text-lg py-2 px-8 rounded-xl text-center flex items-center justify-center">
            <img src="/deposit-icon.png" alt="Deposit Icon" className="w-6 h-6 mr-2" />
            Withdrawal
          </button>
        </div>

        <div id="content" className="flex flex-col w-full">
        {/* First Paragraph */}
        <p className="my-5 text-sm text-center mb-5">
          You will receive the Dollar amount in the crypto selected
        </p>

        {/* Second Paragraph */}
        <p className="text-sm text-center mb-9">
          Need assistance? Contact us via Live Chat for instant support
        </p>
      </div>
      
      </div>

      {/* Money Image - Hidden on mobile */}
      <div id="money" className="hidden lg:block lg:w-[650px] lg:absolute lg:right-0 lg:-top-0.5">
        <img className="w-full" src="/money.png" alt="Money" />
      </div>
    </div>
  );
}

export default Quick;
