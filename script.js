function mincost(arr) {
    // Sort the array of rope lengths in ascending order
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // Iterate until there is only one rope left
    while (arr.length > 1) {
        // Take the two smallest ropes
        const rope1 = arr.shift();
        const rope2 = arr.shift();

        // Calculate the cost of connecting the two ropes and add it to the total cost
        const cost = rope1 + rope2;
        totalCost += cost;

        // Insert the new rope back into the array
        arr.push(cost);

        // Resort the array
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
