function domainName(url){
    let a = url.replace('http://', '').replace('https://', '').replace('www.','')
    return a.split('.')[0]
}