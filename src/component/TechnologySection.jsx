
function TechnologySection({ technologies, stack, onAddToStack, onRemoveFromStack, onClearStack }) {
  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 py-12">

      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore the <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {technologies.map((tech) => {
            const isAdded = stack.some((item) => item.id === tech.id);
            return (
              <div key={tech.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-10 h-10 border border-gray-200 rounded-lg p-1 bg-gray-50 flex items-center justify-center overflow-hidden">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-600">
                      {tech.badge || 'New'}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-gray-800">{tech.name}</h3>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-2">{tech.description}</p>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{tech.category}</span>
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
          })}
        </div>
        <div className="lg:col-span-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
            <div>
              <h3 className="font-bold text-base text-gray-800">Your Stack</h3>
              <p className="text-xs text-gray-400 mt-0.5">{stack.length} Selected</p>
            </div>
            {stack.length > 0 && (
              <button 
                onClick={onClearStack}
                className="text-xs font-bold text-red-500 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded"
              >
                Remove All
              </button>
            )}
          </div>
          {stack.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <p className="text-xs text-gray-400">Your stack is empty.</p>
            </div>
          ) : (
            <div className="space-y-2 max-h-[380px] overflow-y-auto">
              {stack.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2.5 border border-gray-200 bg-white rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 border border-gray-200 rounded p-0.5 bg-gray-50 flex items-center justify-center overflow-hidden">
                      <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-gray-800">{item.name}</h4>
                      <p className="text-[10px] text-gray-400">{item.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveFromStack(item.id)}
                    className="text-gray-400 hover:text-red-500 text-xs font-bold px-1"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default TechnologySection;
