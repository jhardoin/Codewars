const areaOrPerimeter = function(l , w) {
    if(l === w) return l * w;
    else return (l * 2) + (w * 2);
  };

  const areaOrPerimeter = (l , w) => l == w ? l * w : (l*2) + (w*2)