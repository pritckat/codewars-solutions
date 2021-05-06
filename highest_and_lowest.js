function highAndLow(numbers){
    let array = numbers.split(' ').map(e=>Number(e)).sort((a,b)=>(a<b)?1:-1)
    return `${array[0]} ${array[array.length-1]}`
  }