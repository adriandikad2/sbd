import DMJLogo from "./assets/DMJLogo.svg"

export default function DMJ({ isInverted }) {
  return (
    <div id="dmj" className="flex-1 p-4">
      <div
        className={`${isInverted ? "bg-white text-black" : "bg-card text-white"} backdrop-blur-sm rounded-lg p-4 border-l-4 border-dmj h-full`}
      >
        <div className="flex flex-col items-center mb-4">
          <div className={`${isInverted ? "bg-white" : "bg-dmj bg-opacity-20"} p-3 rounded-full mb-2`}>
            <img src={DMJLogo || "/placeholder.svg"} alt="DMJ Logo" className="h-16 w-16" />
          </div>
          <h2 className={`text-2xl font-bold ${isInverted ? "text-black" : "text-dmj"}`}>DripMyJeans</h2>
        </div>
        <p className={`${isInverted ? "text-black" : "text-white"} mb-3`}>Lorem Ipsum.</p>
        <p className={`${isInverted ? "text-gray-700" : "text-gray-300"} text-sm`}>Lorem Ipsum.</p>
      </div>
    </div>
  )
}
