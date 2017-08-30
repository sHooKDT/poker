/* eslint-disable no-mixed-operators */

export default function generateLayout() {
  return (
    [0, 1, 2, 3, 4, 5, 6]
      // Generating coordinates for top and bottom sides
      .map((num) => {
        const baseAngle = Math.PI / 3;
        const offset = 0;
        const finalAngle = num * baseAngle + offset;
        return { x: Math.cos(finalAngle), y: Math.sin(finalAngle) };
      })
  );
}
