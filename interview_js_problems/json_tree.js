// Problem Statement:
// Implement a Depth-First Traversal (DFS) for a tree data structure in JavaScript.
//
// Requirements:
// 1. The tree is represented as a nested object with `value` and `children`.
// 2. Traverse the tree using depth-first search and return an array of visited node values.
// 3. Ensure recursive traversal visits children before backtracking.
//
// Example Tree:
//          A
//        /   \
//       B     C
//      / \   / \
//     D   E F   G
//
// Expected Output (DFS Order):
// [ "A", "B", "D", "E", "C", "F", "G" ]
const tree = {
    value: "A",
    children: [
        {
            value: "B",
            children: [
                {
                    value: "D",
                    children: []
                },
                {
                    value: "E",
                    children: []
                }
            ]
        },
        {
            value: "C",
            children: [
                {
                    value: "F",
                    children: []
                },
                {
                    value: "G",
                    children: []
                }
            ]
        }
    ]
};


function depthFirstTraversal(tree) {
    let values = [tree.value];

    if (tree.children) {
        for (const child of tree.children) {
            values = values.concat(depthFirstTraversal(child))
        }
    }
    
    return values;
}

console.log(depthFirstTraversal(tree));
// Output: [ 'A', 'B', 'D', 'E', 'C', 'F', 'G' ]