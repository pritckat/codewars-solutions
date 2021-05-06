function posAverage(s) {
    const nums = ['0', '4', '6', '9']
    let sArray = s.split(', ')
    const total = (sArray.length*(sArray.length -1))/2
    let byPosition = []
    for (let i = 0; i < sArray[0].length; i++) {
      let temp = []
      for (let j=0; j<sArray.length; j++) {
        temp.push(sArray[j][i])
      }
      byPosition.push(temp)
    }
    let counter = 0
    for (row in byPosition) {
      for (num in nums) {
        const rowCount = byPosition[row].filter(e => e==nums[num]).length
        if (rowCount > 1) {
          counter += factorial(rowCount)/(2*(factorial(rowCount-2)))
        }
      }
    }
    return counter/(total*(sArray[0].length))*100
  }

  //calculates n!
  function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }