const getColorGradient = (fadeFraction, rgbColor1, rgbColor2, rgbColor3) => {
  var color1 = rgbColor1;
  var color2 = rgbColor2;
  var fade = fadeFraction;

  if (rgbColor3) {
    fade = fade * 2;

    if (fade >= 1) {
      fade -= 1;
      color1 = rgbColor2;
      color2 = rgbColor3;
    }
  }

  var diffRed = color2.red - color1.red;
  var diffGreen = color2.green - color1.green;
  var diffBlue = color2.blue - color1.blue;

  var gradient = {
    red: parseInt(Math.floor(color1.red + (diffRed * fade)), 10),
    green: parseInt(Math.floor(color1.green + (diffGreen * fade)), 10),
    blue: parseInt(Math.floor(color1.blue + (diffBlue * fade)), 10),
  };

  return 'rgb(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ')';
}



const colors = {
  getColorGradient,
  red: {red: 234, green: 153, blue: 153},
  green: {red: 182, green: 215, blue: 168},
  yellow: {red: 255, green: 229, blue: 153}
};

export default colors;