// Program to calculate the area of a overlap rectangle from two rectangle in a coordinate system.

function area_overlapRectangle(rect1, rect2) {
  const overlapRect_length = distance(rect1.bottom.x, rect2.bottom.x, rect1.top.x, rect2.top.x);
  const overlapRect_height = distance(rect1.bottom.y, rect2.bottom.y, rect1.top.y, rect2.top.y);  
  return overlapRect_length * overlapRect_height;
}

function distance(x1, x2, y1, y2) {
  return (Math.min(y1,y2) - Math.max(x1,x2));
}

var rect1 = {
  bottom : {
    x: -2,
    y: -1,
  },
  top: {
    x: 5,
    y: 5, 
  }
}
var rect2 = {
  bottom : {
    x: -3,
    y: -2,
  },
  top: {
    x: 5,
    y: 7, 
  }
}
console.log(area_overlapRectangle(rect1, rect2));
