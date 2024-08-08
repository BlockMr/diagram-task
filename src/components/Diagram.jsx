import { Mafs, Coordinates, Point } from "mafs";

export default function Diagram({ pointsList }) {
  return (
    <div className="diagram">
      <Mafs viewBox={{ x: [-10, 10], y: [-10, 10] }}>
        <Coordinates.Cartesian />
        {pointsList.map((obj, index) => (
          <Point key={index} x={obj.x} y={obj.y} />
        ))}
      </Mafs>
    </div>
  );
}
