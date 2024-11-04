const Footer = () => {
    return (
<footer className="footer bg-white text-black p-10 flex flex-col justify-center items-center space-y-6">
  <div className="text-center  w-full flex flex-col items-center space-y-2">
  <h1 className="text-3xl font-bold">Gadget Heaven</h1>
  <p className="text-xl font-light">Leading the way in cutting-edge technology and innovation.</p>
  </div>
  <div className="flex justify-evenly w-full">
  <nav className="flex flex-col space-y-2">
    <h6 className="text-lg font-bold">Services</h6>
    <a className="link link-hover">  Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav className="flex flex-col space-y-2">
    <h6 className="text-lg font-bold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
  </nav>
  <nav className="flex flex-col space-y-2">
    <h6 className="text-lg font-bold">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div>

</footer>
    );
};

export default Footer;