const HitPointsPanel = () => {
    return (
      <div className="flex flex-col gap-2 p-4 rounded-xl bg-gray-900 text-white w-full md:w-1/2">
        <div className="flex flex-col gap-1">
          <label>HP Atual</label>
          <input type="number" className="bg-gray-700 p-2 rounded" />
        </div>
        <div className="flex flex-col gap-1">
          <label>HP Temporário</label>
          <input type="number" className="bg-gray-700 p-2 rounded" />
        </div>
        <div className="flex gap-2 mt-4">
          <button className="bg-green-600 px-4 py-2 rounded">Short Rest</button>
          <button className="bg-blue-600 px-4 py-2 rounded">Long Rest</button>
        </div>
      </div>
    );
  };

export default HitPointsPanel; // <- ESSENCIAL!