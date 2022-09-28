/*
选择排序: 选择选择，即选择最小的出来先
使用嵌套循环
第一层循环指定从0开始指定元素v[i]
第二层循环从i+1开始，让v[i+1],v[i+2]....与第一层循环选中的元素v[i]进行比较
小于v[i]则替换
为避免每次都得替换，这里使用minIndex保存最小值的索引
*/

let arr = [10, 9, 8, 1, 7, 6, 5];

function selectionSort (arr) {
    let minIndex;
    for(let i = 0; i < arr.length; i++) {
        minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort(arr))