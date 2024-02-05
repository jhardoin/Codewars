function getSize(width, height, depth) {
    let area = (2 * width * height) + (2 * height * depth) + (2 * width * depth);
    let volume = width * height * depth;
    return [area,volume]
    }
  

    function getSize(width, height, depth){
        return [2 * (height * width + width * depth + height * depth), width * height * depth]
      }
      

      const getSize = (w, h, d) => [
        (w * h + w * d + h * d) * 2,
        w * h * d
      ]