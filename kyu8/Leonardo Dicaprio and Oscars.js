function leo(oscar){
    if(oscar == 88) return "Leo finally won the oscar! Leo is happy"
    if(oscar == 86) return "Not even for Wolf of wallstreet?!"
    if(oscar < 88) return "When will you give Leo an Oscar?"
    else return "Leo got one already!"
  }

  function leo(oscar){
    return oscar == 88 ? "Leo finally won the oscar! Leo is happy" :
           oscar == 86 ? "Not even for Wolf of wallstreet?!" :
           oscar < 88 && oscar !== 86 ? "When will you give Leo an Oscar?" :
            "Leo got one already!"
  }