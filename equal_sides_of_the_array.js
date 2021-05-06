function findEvenIndex(arr) {
    if (arr.slice(0, arr.length - 1).reduce((t,e)=>t+=e,0) == 0) {return arr.length - 1}
    let answer = -1
    for (i in arr) {
      if (arr.slice(0, i - 1).reduce((t,e)=>t+=e,0) == arr.slice(i).reduce((t,e)=>t+=e)) {
        answer = i - 1
      }
    }
    return answer
  }