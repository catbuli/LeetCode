const N = 5
let q = new Array(N + 1)

function check(j) {
  for (let i = 1; i < j; i ++) {
    if (q[i] == q[j] || Math.abs(i - j) == Math.abs(q[j] - q[i])) {
      return false
    }
  }

  return true
}

// 循环方式
function queen() {
  // 一共有几组合法位置
  let answer = 0
  // 全部填充为 0
  q.fill(0)
  // 当前正在摆放第几个皇后
  let j = 1

  // 开始摆放循环
  while (j >= 1) {
    q[j] = q[j] + 1

    // 判断当前位置的皇后是否合法 如果不合法就向后面移动并重复这个操作
    while(!check(j) && q[j] <= N) {
      q[j] = q[j] + 1
    }

    // 判断 第 j 个皇后是否已经找到了一个合法的位置
    if (q[j] <= N) {

      // 如果 j == N 代表着四个皇后的位置都已经确定并且合法
      if (j == N) {
        answer ++
        console.log("方案:", answer, q.slice(1, N + 1))
      } else {
        j++
      }

    } else {
      // 如果返回上一个行的话 需要将当前行的皇后重置为未放置的状态
      q[j] = 0
      j--
    }
  }
}

console.time()
queen()
console.timeLog()

let answer2 = 0
// 递归
function recursiveQueen(j) {

  for (let i = 1; i <= N; i++) {
    q[j] = i

    if (check(j)) {
      if (j == N) {
        answer2 ++
        console.log("方案:", answer2, q.slice(1, N + 1))
      } else {
        recursiveQueen(j + 1)
      }
    }
  }
}

console.time()
recursiveQueen(1)
console.timeLog()
