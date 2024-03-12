const Header = () => {
  return (
    <header className=" font-Poppins bg-blue-500 px-8 py-3 flex items-center justify-between">
      <h2 className="text-lg text-white font-semibold">Segemant Page</h2>
      <a
        title="source code"
        className=""
        href="https://github.com/vedhatech002/Customer-labs-react-test"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          width={38}
          height={38}
        >
          <path
            fillRule="evenodd"
            d="M20 8a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2c-3.34.72-4-1.61-4-1.61a3.21 3.21 0 00-1.33-1.76c-1.09-.74.08-.73.08-.73a2.55 2.55 0 011.84 1.24 2.56 2.56 0 003.49 1 2.59 2.59 0 01.76-1.61c-2.66-.3-5.47-1.33-5.47-5.93a4.63 4.63 0 011.24-3.22A4.28 4.28 0 0113.7 13s1-.33 3.3 1.23a11.18 11.18 0 016 0c2.3-1.58 3.3-1.23 3.3-1.23a4.28 4.28 0 01.12 3.17 4.63 4.63 0 011.23 3.22c0 4.61-2.8 5.63-5.47 5.92a2.88 2.88 0 01.82 2.21v3.29c0 .4.21.69.82.58A12 12 0 0020 8z"
          ></path>
        </svg>
      </a>
    </header>
  );
};

export default Header;
