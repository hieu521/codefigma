function Loop() {
  return (
    <div
      id="container"
      className="flex w-full lg:w-1/4 flex  bg-red-500 text-white p-6"
    >
      {/* Girl Image */}
      <div id="girl" className="">
        <img
          className="hidden lg:block lg:w-[650px] lg:h-auto lg:absolute left-0 top-36 xs :flex  xs:justify-center xs: w-full"
          src="/letter.png"
          alt="Letter"
        />
      </div>

      {/* Content */}
      <div id="content" className="flex flex-col w-full">
        <div id="money-mobile" className="block lg:hidden w-full mb mt-[160px]">
          <img className="w-2/4 mx-auto" src="/letter.png" alt="Money" />
        </div>

        <h1 className="text-4xl font-bold mb-3 w-full text-center lg:w-3/4 mx-auto">
          Stay in the Loop
        </h1>
        <p className=" mb-5">
          Never miss out on the latest news, promotions, and exciting events!
          Sign up below to receive updates directly to your inbox.
        </p>
        <span className="flex mb-5">
          <img />
          <p>
            <b className="font-bold">Stay Connected: </b>
            example@aceloungeclub.com
          </p>
        </span>

        {/* Subscription Form */}
        <div className="my-5">
          <div className="relative inline-block w-full text-white">
            <div className="flex bg-white appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
              <button className="w-full text-left pl-2 flex items-center">
                <img
                  src="/iconcash.png"
                  alt="Bitcoin Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Bitcoin</span>
              </button>
            </div>
          </div>
        </div>

        {/* Text Area */}
        <textarea
          className="w-full h-48 rounded-r-3xl rounded-bl-3xl"
          placeholder="Text message"
        ></textarea>

        {/* Send Button */}
        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white text-lg py-2 px-8 rounded-xl text-center flex items-center justify-center">
            <img
              src="/deposit-icon.png"
              alt="Deposit Icon"
              className="w-6 h-6 mr-2"
            />
            Send
          </button>
        </div>

        <p className="my-5">You will receive the Dollar amount in the crypto</p>
        <p className="my-5">
          Need assistance? Contact us via Live Chat for instant support.
        </p>
      </div>

      {/* Money Image */}
      <div id="money">
        <img
          className="hidden lg:block lg:w-[670px] lg:h-auto lg:absolute bottom-0 right-3 -top-0.5"
          src="/girl2.png"
          alt="Girl"
        />
      </div>
    </div>
  );
}

export default Loop;
