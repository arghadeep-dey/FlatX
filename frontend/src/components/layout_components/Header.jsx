import userIcon from "../../assets/defaultUserIcon.jpg"
import softwareLogo from "../../assets/flatXLogo.jpg"
export default function Header() {
    return (
        // <div className = "fixed top-0 z-50"
        // >Header</div>
        <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#f7eddd] shadow-md px-6 py-3 z-50">
            {/* Left: Logo + Title */}
            <div className="flex items-center gap-3">
                <img
                    alt="Company Logo"
                    src={softwareLogo}
                    className="w-12 h-15 object-contain"
                />
                <h1 className="text-2xl font-semibold text-gray-800">Flat X</h1>
            </div>

            {/* Right: User profile button */}
            <button className="flex items-center gap-3 bg-[#1a2a33] hover:bg-[#32424c] transition-colors transition-duration:10ms rounded-full px-4 py-2">
                <img
                    alt="Userlcon"
                    src={userIcon}
                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
                <span className="text-gray-200 font-medium">Arghadeep Dey</span>
            </button>
        </header>
    );
}