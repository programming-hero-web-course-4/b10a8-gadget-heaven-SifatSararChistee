import Error from "../assets/404 Page.jpeg"
const ErrorPage = () => {
    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <img className="rounded-3xl mb-4" src={Error} alt="" />
      <h1 className="text-7xl font-bold">404 Error</h1>
      <p className="py-6">
        PAGE NOT FOUND!!!
      </p>
    </div>
  </div>
</div>
    );
};

export default ErrorPage;