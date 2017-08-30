/* eslint-disable no-mixed-operators */

export default function generateLayout() {
  return (
    [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
      // Generating coordinates for top and bottom sides
      .map((num, ind) => {
        const baseAngle = Math.PI / 6;
        const offset = Math.PI / 2 - baseAngle * 2;
        const finalAngle = num * baseAngle + offset;
        const sideFlag = ind > 4 ? 1 : -1;
        return { x: Math.cos(finalAngle), y: sideFlag * Math.sin(finalAngle) };
      })
  );
}
