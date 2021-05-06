function evenLast(numbers) {
    let answer = 0
    if (numbers.length == 0) {return answer}
    for (n in numbers) {if (n % 2 == 0) {answer += numbers[n]}}
    return answer * numbers[numbers.length - 1]
  }