function firstNonRepeatingLetter(s) {
    let letter = ''
    s.split('').forEach(l => {
      let count = 0;
      for (let i = 0; i < s.length; i++) {
        if (l.toLowerCase() == s[i].toLowerCase()) {
          count++
        }
      }
      if (count == 1 && letter === '') {
        letter = l
      }
    })
    return letter
  }