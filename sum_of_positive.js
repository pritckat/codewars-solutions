function positiveSum(arr) {
    return arr.filter(e=>e > 0).reduce((t,e)=>t+=e,0)
  }