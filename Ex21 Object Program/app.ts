type polygon = {
    name: string;
    nameT: string;
    vertices: number;
}

let triangle: polygon = { name: "triangle", nameT: "trigon", vertices: 3 };
let square: polygon = { name: "square", nameT: "quadralateral", vertices: 4 };
let parallelogram: polygon = {name: "parallelogram", nameT: "quadralateral", vertices: 4 };
let pentagon: polygon = {name: "pentagon", nameT: "pentagon", vertices: 5 };
let hexagon: polygon = { name: "hexagon", nameT: "hexagon", vertices: 5 };

let polygons: polygon[] = [triangle, square, parallelogram, pentagon, hexagon];

polygons.forEach(shape => {
    console.log(`This is a ${shape.name}.\nIt has ${shape.vertices} vertices.\nIts technical name is ${shape.nameT}\n`);
});