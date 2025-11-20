export default function render({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
}