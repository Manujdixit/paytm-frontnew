import Auth from "../components/Auth";
import Quote from "../components/Quote";
import SSheader from "../components/SSheader";

function Signup() {
  return (
    <>
      <SSheader />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type={"signup"} />
        </div>
        <div className="hidden lg:block">
          <Quote type={"signup"} />
        </div>
      </div>
    </>
  );
}

export default Signup;
