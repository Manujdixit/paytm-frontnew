const Quote = ({ type }) => {
  return (
    <div className=" h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg  ">
          <img src={type === "signup" ? "/signup.svg" : "/login.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Quote;
