export default function Avatar({ size }) {
    let width = 'w-12';
    if (size === 'big') {
        width = 'w-32'
    }
    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src="https://i.pinimg.com/originals/4b/f1/de/4bf1de780b55b9e27f1075830d4fc860.jpg" alt="" />
        </div>
    )
}