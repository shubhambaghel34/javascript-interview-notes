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