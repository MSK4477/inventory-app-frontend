
// eslint-disable-next-line react/prop-types
const Button = ({ type, text, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-96 px-4 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
    >
      {text}
    </button>
  );
};

export default Button;
