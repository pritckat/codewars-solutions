function c(k) {
    let n = Math.sqrt(k), res = 1;
    if (Math.floor(n) !== n) return 0; 
    for (let i = 2; i <= n; i++) {
      if (n % i !== 0) continue;
      let count = 0;
      while (n % i === 0) {
          n = n / i;
          count++;
      }
      res *= ((count-1) * 3) + 4;
    }            
    return res;
  }