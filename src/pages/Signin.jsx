import Auth from "../components/Auth";
import Quote from "../components/Quote";
import SSheader from "../components/SSheader";

function Signin() {
  return (
    <>
      <SSheader />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type={"signin"} />
        </div>
        <div className="hidden lg:block">
          <Quote type={"signin"} />
        </div>
      </div>
    </>
  );
}

export default Signin;
