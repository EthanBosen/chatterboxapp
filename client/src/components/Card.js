export default function Card({ children, noPadding }) {
    let classes = 'bg-white md:bg-opacity-30 shadow-lg rounded-md mb-5'
    if (!noPadding) {
        classes += ' p-5';
    }
    return (
        <div className={classes}>
            {children}
        </div>

    );
}