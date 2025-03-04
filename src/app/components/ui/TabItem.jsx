export default function TabItem({ title, onClick, selectedTab, tab,icon }) {
  return (
    <button
      className={`py-2 px-4 w-full text-start rounded-md  ${
        selectedTab === tab ? "bg-blue-600/10 text-black" : "hover:bg-blue-600/10 text-black/60"
      }`}
      onClick={onClick}
    >
     <div className="flex ">
     <span className="p-1">{icon}</span>
      <span className="ml-2">{title}</span>
     </div>
    </button>
  );
}
