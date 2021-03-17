function domainName(url){
    let slug = url.split('.')
    if (url.includes('http')) {
      if (url.includes('www')) {
        return slug[1]
      }
      return slug[0].split('://')[1]
    }
    else if (url.includes('www')) {
      return slug[1]
    }
    else {
      return slug[0]
    }
  }