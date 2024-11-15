const Footer = () => {
  return (
    <div className="shadow-md w-full h-[60px] border-t-2 flex items-center justify-center">
      <p className="text-sm text-gray-500">{new Date().getFullYear()} - MTOGO</p>
    </div>
  );
};

export default Footer;
