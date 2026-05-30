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
            <div className="h-6 w-11 rounded-full bg-gray-400 dark:bg-gray-500 border border-gray-300 dark:border-none transition-colors duration-300 peer-checked:bg-red-700" />

            {/* Knob */}
            <div className="absolute left-1 size-[18px] rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-5" />
        </label>
    );
}