export const Glasses = ({ glassesOffsetX, glassesOffsetY }) => (
  <>
    <rect
      fill="none"
      stroke="black"
      x={-glassesOffsetX}
      y={-glassesOffsetY}
      width="20"
      height="20"
      stroke-width="10"
    />
    <rect
      fill="none"
      stroke="black"
      x={glassesOffsetX - 150}
      y={-glassesOffsetY}
      width="20"
      height="20"
      stroke-width="10"
    />
  </>
);
