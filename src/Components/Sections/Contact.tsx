const Contact = () => {
  return (
    <div className="flex w-full justify-center items-center h-32">
      <div className="p-4 bg-[#d2d2d2] rounded-xl">
        <div className="p-2 border-dashed border-2 border-white rounded-xl">
          <button className="px-4 py-2 bg-slate-800 shadow-xl lowercase font-thin font-serif text-lg rounded-lg text-white tracking-wider">
            {`get in touch.`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
