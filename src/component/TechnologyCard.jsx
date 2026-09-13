
function TechnologyCard({ tech, onAddToStack, isAdded }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
            <span className="text-2xl">{tech.icon}</span>
          </div>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-600">
            {tech.badge || 'New'}
          </span>
        </div>
        <h3 className="font-bold text-base text-gray-800">{tech.name}</h3>
        <p className="text-gray-500 text-xs mt-1 line-clamp-2 leading-relaxed">{tech.description}</p>
      </div>
      <div className="border-t border-gray-100 pt-3 mt-4">
        <div className="flex justify-between text-xs text-gray-400 mb-3">
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span>⭐ {tech.rating}</span>
        </div>
        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full font-bold text-xs py-2.5 rounded-lg transition-all ${
            isAdded
              ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed'
              : 'bg-gray-800 text-white hover:bg-black shadow-sm'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}
export default TechnologyCard;
