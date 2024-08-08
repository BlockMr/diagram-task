export default function PointsList({ pointsList }) {
    return(
        <div className="pointsList">
            {pointsList.map((obj, index) => (
                <p key={index}>X: {obj.x} Y: {obj.y}</p>
            ))}
        </div>
    )
}