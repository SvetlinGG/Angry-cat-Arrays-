function calculateDamage(items, entryPoint, type) {
    let leftDamage = 0;
    let rightDamage = 0;

    
    for (let i = entryPoint - 1; i >= 0; i--) {
        if ((type === "cheap" && items[i] < items[entryPoint]) ||
            (type === "expensive" && items[i] >= items[entryPoint])) {
            leftDamage += items[i];
        } else {
            break;
        }
    }

    
    for (let i = entryPoint + 1; i < items.length; i++) {
        if ((type === "cheap" && items[i] < items[entryPoint]) ||
            (type === "expensive" && items[i] >= items[entryPoint])) {
            rightDamage += items[i];
        } else {
            break;
        }
    }

    
    let result = leftDamage >= rightDamage ?
        `Left - ${leftDamage}` :
        `Right - ${rightDamage}`;

    console.log(result);
}

calculateDamage([1, 5, 1], 1, "cheap");
calculateDamage([5, 10, 12, 5, 4, 20], 3, "cheap");
calculateDamage ([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive");
