function countSmileys(arr) {
    let smileys = [':)', ':D', ';)', ';D', ':-)', ':-D', ';-)', ';-D', ':~)', ':~D', ';~)', ';~D'];
    return arr.filter(e => smileys.includes(e)).length;
  }

  function countSmileys(arr) {
    let smiley = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"]
    return arr.filter(e => smiley.includes(e)).length
  }