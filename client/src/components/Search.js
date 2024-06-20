export default function Search({ children }) {
    return (
        <div className="flex bg-white font-2 rounded-lg mb-5 p-2">

            <input aria-owns="typeaheadDropdown-3" autoCapitalize="sentences" autoComplete="off" autoCorrect="off" placeholder="Search Chatterbox" />
        </div>
    )
}