// Task 5: You are given an integer array nums and you have to return a new counts array where counts[i] is the number of smaller elements to the right of nums[i].

// example:if given integer array is [5,1,6,2,3] then the result will be [3,0,2,0,0]

function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }
        counts[i] = count;
    }

    return counts;
}



