export default function Toggle({ toggleData, id, checked}) {

    return (
        <label className="relative inline-flex cursor-pointer items-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleData(id)}
                className="peer sr-only"
            />

            {/* Track */}
            <div className="h-6 w-11 rounded-full border border-gray-700 peer-checked:border-red-700 bg-gray-500 transition-colors duration-300 peer-checked:bg-black" />

            {/* Knob */}
            <div className="absolute left-1 size-[18px] rounded-full bg-gray-700 peer-checked:bg-red-700 transition-transform duration-300 peer-checked:translate-x-5" />
        </label>
    );
}