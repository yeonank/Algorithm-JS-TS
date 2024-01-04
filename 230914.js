const input = require("fs").readFileSync("example.txt").toString().split("\n"); //'/dev/stdin'
const nodes = Number(input[0]); //노드 개수
const edges = Number(input[1]); //간선 개수
const graph = [...new Array(nodes + 1)].map(() => []); //빈 배열로 초기화
const visited = [...new Array(nodes + 1)].fill(0);
let count = 0;

for (i = 0; i < edges; i++) {
  const line = input[i + 2].split(" ");
  const a = Number(line[0]);
  const b = Number(line[1]);
  //   graph[a].push(b); //a노드 배열에다가 b를 넣어둠
  //   graph[b].push(a);
  graph[a][b] = 1;
  graph[b][a] = 1;
}

function dfs(start) {
  visited[start] = 1;
  for (let i = 1; i <= nodes; i++) {
    if (graph[start][i] == 1 && !visited[i]) {
      count++;
      dfs(i);
    }
  }
}

dfs(1);
console.log(count);
// let node = Number(input[0]);
// let edge_num = Number(input[1]);
// let graph = [...new Array(node + 1)].map(() => []);
// let visited = [...new Array(node + 1)].fill(0);
// let ans = 0;
// // 그래프 생성
// for (let i = 0; i < edge_num; i++) {
//   let start = Number(input[i + 2].split(" ")[0]);
//   let end = Number(input[i + 2].split(" ")[1]);
//   graph[start].push(end);
//   graph[end].push(start);
// }
// // 1번노드 방문처리해주고 dfs 시작
// visited[1] = 1;
// function dfs(start) {
//   for (let end of graph[start]) {
//     if (!visited[end]) {
//       visited[end] = 1;
//       ans++;
//       dfs(end);
//     }
//   }
// }
// dfs(1);
// console.log(ans);

//https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4-javascript
