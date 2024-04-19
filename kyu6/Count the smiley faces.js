function countSmileys(arr) {
    let smileys = [':)', ':D', ';)', ';D', ':-)', ':-D', ';-)', ';-D', ':~)', ':~D', ';~)', ';~D'];
    return arr.filter(e => smileys.includes(e)).length;
  }