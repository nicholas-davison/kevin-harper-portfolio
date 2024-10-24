export const Footer = () => {
  return (
    <div className="flex justify-center items-center h-36 text-white bg-slate-950">
      <h1 className="flex flex-wrap sm:flex-col justify-center items-center text-center">
        <span className="mr-2">
          <i className="fa-regular fa-copyright"></i> 2024 Kevin Harper - All Rights Reserved 
        </span>
        <span className="ml-2 flex text-center items-center">
          Site by
          <a
            href="https://portfolio-nicholas-davisons-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center"
          >
            <img
              src="/NDLogo.png"
              className="h-8 mr-2"
              alt="Nicholas Davison Logo"
            /> 
            Nick Davison
          </a>
        </span>
      </h1>
    </div>
  );
};