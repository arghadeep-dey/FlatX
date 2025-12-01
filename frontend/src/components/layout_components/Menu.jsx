export default function Menu({ isExpanded, onToggle }) {

    const menuItems = [
        { icon: '📊', label: 'Dashboard', active: true },
        { icon: '📁', label: 'Projects', active: false },
        { icon: '👥', label: 'Team', active: false },
        { icon: '📈', label: 'Analytics', active: false },
        { icon: '⚙️', label: 'Settings', active: false },
        { icon: '📝', label: 'Reports', active: false },
    ];


    return (
        <aside
            className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#1a2a33] text-white transition-all duration-300 ease-in-out z-40 ${
                isExpanded ? 'w-64' : 'w-16'
            }`}
        >
            {/* Toggle Button */}
            <button
                onClick={onToggle}
                className="absolute -right-3 top-4 w-6 h-6 bg-[#32424c] hover:bg-[#4a5a64] rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
                aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
            >
                <span className={`text-white text-xs transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}>
                    {isExpanded ? '◀' : '▶'}
                </span>
            </button>

            {/* Menu Content */}
            <div className="h-full flex flex-col pt-6">
                <nav className="flex-1 px-2">
                    <ul className="space-y-1">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                                        item.active
                                            ? 'bg-[#32424c] text-white shadow-md'
                                            : 'text-gray-300 hover:bg-[#2a3a43] hover:text-white'
                                    } ${isExpanded ? 'justify-start' : 'justify-center'}`}
                                >
                                    <span className="text-xl shrink-0">{item.icon}</span>
                                    {isExpanded && (
                                        <span className="font-medium whitespace-nowrap">{item.label}</span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom Section - Optional */}
                {isExpanded && (
                    <div className="px-4 py-4 border-t border-[#32424c]">
                        <p className="text-xs text-gray-400 text-center">
                            Flat X v1.0
                        </p>
                    </div>
                )}
            </div>
        </aside>
    );
}

