function solution(sequence, k) {
    let answers = [];
    
    const map = new Map([[0,0]])
    let sum = 0
    
    for (let i=0; i<sequence.length; i++){
        sum += sequence[i]
        if (map.has(sum - k)){
            answers.push([map.get(sum-k), i])
        }
        map.set(sum, i + 1)
    }
    
     answers.sort((a, b) => {
    if (a[1] - a[0] !== b[1] - b[0]) return a[1] - a[0] - (b[1] - b[0]);
    else return a[0] - b[0];
  });
    return answers[0];
}