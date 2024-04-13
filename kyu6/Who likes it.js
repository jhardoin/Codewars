const likes = (names, length = names.length) => 
  length < 1 ? "no one likes this" :
  length < 2 ? `${names[0]} likes this`:
  length < 3 ? `${names[0]} and ${names[1]} like this`:
  length < 4 ? `${names[0]}, ${names[1]} and ${names[2]} like this`:
                `${names[0]}, ${names[1]} and ${length - 2} others like this`

  function likes(names) {
  if(names.length === 0)
    return 'no one likes this';
  else if(names.length === 1)
    return `${names[0]} likes this`;
  else if(names.length === 2)
    return `${names[0]} and ${names[1]} like this`;
  else if(names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}