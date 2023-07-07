export type ToggleSwitchProps = {
    checked: boolean,
    onChange: () => void
}

function ToggleSwitch({checked, onChange}: ToggleSwitchProps) {
    return (
        <div className="flex items-center justify-center">
            <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                <div className="mx-3 text-gray-400 text-sm font-light">
                    Required
                </div>
                <div className="relative">
                    <input type="checkbox" checked={checked} onChange={onChange} id="toggleB" className="sr-only" />
                    <div className="block toggle bg-gray-400 w-10 h-6 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
            </label>
        </div>

    )
}

export default ToggleSwitch
