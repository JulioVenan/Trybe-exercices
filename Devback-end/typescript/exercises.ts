// ./exercises.ts

export function getSquareArea(side: number): number {
  return side ** 2;
}

export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function getLosangueArea(diameter1: number, diameter2: number): number  {
  return (diameter1 * diameter1) / 2;
}

export function getTrapezioArea(bigBase: number, smallBase: number, height:number): number {
return (((bigBase + smallBase) * height) / 2);
}

export function getCircleArea(r: number ):number {
    return (Math.PI * r**2 );
}

export function triangleCheck(
    sideA: number,
    sideB: number,
    sideC: number
  ): boolean {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
  }