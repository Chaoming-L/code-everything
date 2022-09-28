function fuckSearch(nums, target) {
  let l = 0
  let r = nums.length - 1
  
  while(l <= r) {
    const mid = Math.ceil((r + l) / 2)
    if (nums[mid] === target) {
      return mid
    } 
    
    // 有序
    if (nums[mid] < nums[r]) {
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    } else {
      // 无序
      if (nums[l] < target && target <= nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
    
  }
  
  return  -1
}

fuckSearch([4, 5, 6, 7, 8, 0, 1, 2, 3], 2)