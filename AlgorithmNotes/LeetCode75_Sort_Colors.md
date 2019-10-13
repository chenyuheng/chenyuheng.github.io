https://leetcode.com/problems/sort-colors/

## code
```java
for(int i = 0, j = 0, k = 0; k < nums.length; k++) {
	int v = nums[k];
	nums[k] = 2;
	if (v == 0 || v == 1) 
		nums[j++] = 1;
	if (v == 0)
		nums[i++] = 0;
}
```

## illustration
```
       i         j       k
       |         |       |
 0 0 0 1 1 1 1 1 2 2 2 2 0 1 2 2 1 0
|-----------------------|-----------|
 sorted                  unsorted
```

## note
v = nums[k] is the current number to be sorted.
- If k == 2, do nothing.
- If k == 1, move the sorted "2" segment rightwards, insert "1" in the consequently generated space.
- If k == 0, move the sorted "2" segment and "1" segment rightwards, insert "0" in the spac	

v == nums[k]，v值是什么，就将此值插入对应已排序好的部分末尾，并将其后的已排序好的部分往后移一格。后移时，因为已排序好的部分是连续相同的，只需改动首尾的数字即可实现移动。
	这个实现，妙啊。

## reference
[https://leetcode.com/problems/sort-colors/discuss/26479/AC-Python-in-place-one-pass-solution-O(n)-time-O(1)-space-no-swap-no-count](https://leetcode.com/problems/sort-colors/discuss/26479/AC-Python-in-place-one-pass-solution-O(n)-time-O(1)-space-no-swap-no-count)