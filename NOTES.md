Extra Large Array:
    insert: 949.392521 ms
    append: 3.208943 ms
Large Array:
    insert: 5.864682 ms
    append: 684.74 μs
Medium Array:
    insert: 195.964 μs
    append: 146.55 μs
Small Array:
    insert: 52.093 μs
    append: 115.721 μs
Tiny Array:
    insert: 39.504 μs
    append: 86.849 μs

From Tiny To Extra Large
    insert: 39.504 μs
    insert: 52.093 μs
    insert: 195.964 μs
    insert: 5.864682 ms
    insert: 949.392521 ms

From Tiny To Extra Large
    append: 86.849 μs
    append: 115.721 μs
    append: 146.55 μs
    append: 684.74 μs
    append: 3.208943 ms

Explanation:
    The append function scales in a seemingly linear way
    The insert function scales in a seemingly exponential way
    The append function seems to scale better from our tests.
    You can tell that the append function scales better because the runtime for the Extra Large array was much
        faster than the runtime for the Extra large Array in the insert function
    The reason the Insert function is slower with the large array is because when using unshift it has to reassing 
        the index values for every additional number to the array. so when adding in some of the larger numbers it has to change thousands of others too.
    