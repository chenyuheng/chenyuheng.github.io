<https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/>

## code

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    k--;
    curr = 1;
    while (k > 0) {
        step = getSteps(n, curr, curr+1);
        if (step <= k) {
            curr++;
            k -= step;
        } else {
            curr *= 10;
            k--;
        }
    }
    return curr;
};

var getSteps = function(n, start, end) {
    step = 0;
    while (start <= n) {
        step += Math.min(n + 1 , end) - start;
        start *= 10;
        end *= 10;
    }
    return step;
};
```

## basic idea

十叉树左序遍历。

## however

一个个遍历太耗时间了。

## therefore

巧妙计算出子树步长，根据子树步长判断遍历方向，跳步遍历。

步长小于遍历次数，向下一个同层子树遍历。

步长大于遍历次数，向子树的子树遍历。

## details

一层一层算步长，算好后加上并往下一层继续算。

一般层的步长为[start, end)的数量，左闭右开，因此为end-start。

每算完一层，start和end自乘10，进入下一层。

最下面一层的一般算法算出来的步长可能会超过最大数（n），因此需要改进。判断end是否大于n+1来判断时候是最下面一层。

最下面一层的步长为[start, end]的数量，两遍都为闭区间，因此为n+1-start。

## reference

[<https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/discuss/92242/ConciseEasy-to-understand-Java-5ms-solution-with-Explaination>](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/discuss/92242/ConciseEasy-to-understand-Java-5ms-solution-with-Explaination)

## comment

上面参考资料里那位真是一个大佬，望尘莫及、望洋兴叹、难以望其项背。

十叉树左序遍历的想法很简单，但快速算步长的跳步算法的实现确实挺难想到的。