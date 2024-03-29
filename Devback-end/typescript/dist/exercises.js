"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangleCheck = exports.getCircleArea = exports.getTrapezioArea = exports.getLosangueArea = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function getLosangueArea(diameter1, diameter2) {
    return (diameter1 * diameter1) / 2;
}
exports.getLosangueArea = getLosangueArea;
function getTrapezioArea(bigBase, smallBase, height) {
    return (((bigBase + smallBase) * height) / 2);
}
exports.getTrapezioArea = getTrapezioArea;
function getCircleArea(r) {
    return (Math.PI * r ** 2);
}
exports.getCircleArea = getCircleArea;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
