const sections = ["About", "Skills", "Contact"];

const returnToTopIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
    />
  </svg>
);

const nav = () => {
  const returnToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <div className="text-xl w-full flex justify-center py-4">
      <button onClick={returnToTop} className="fixed top-0 left-0 p-4 m-4">
        {returnToTopIcon}
      </button>

      {sections.map((title) => {
        return (
          <button key={title} className="p-4 tracking-wider lowercase">
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default nav;
