export default function Categories() {
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Categories</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Create New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-bold">Category {i + 1}</h2>
            <p className="text-lg">Products: 100</p>
          </div>
        ))}
      </div>
    </div>
  );
}
