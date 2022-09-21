/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    
    let combined = nums1.concat(nums2);
    combined.sort(function(a, b){return a-b});
    
    // Check if odd
    if((combined.length)%2 != 0){
        return combined[Math.floor(combined.length/2)];
    }else{
        return ((combined[(combined.length)/2-1]) + (combined[(combined.length)/2]))/2
    }
};