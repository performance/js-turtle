随机值 = Math.random
向下取整 = Math.floor

// Reference: shades of grey https://www.baskent.edu.tr/~tkaracay/etudio/agora/nnn/html_colors.htm. 
// Different Shades of grey can be represented by RGB with same red, green, blue value.
背景 = (屏幕宽度, 屏幕高度)=>{
  // split_time: How many times we split the 'sky'
  _此处_ 分割次数 = 5;
  // darkest_color: The darkest color of gray to use.
  _此处_ 最深色 = 48;
 // Draw 'sky' horizontally. Right rotate the pen.
  向右转(90);

  // let i = 0;
  _此处_ 循环数 = 0;
  // while(i < 5)
  当_时重复( () => 循环数 < 分割次数, () => {
    // let gray_shade = darkest_color + i * 24, calculating a lighter grey compared to last run.
    _此处_ 灰度 = 最深色 + 循环数 * 24;
    // let gray_color = '#rrggbb', where red = green = blue = gray_shade;
    _此处_ 颜色值 = "#" + 灰度.toString(16) + 灰度.toString(16) + 灰度.toString(16) ;
    // change color to gray_color
    改变颜色为(颜色值);
    // Pen size = screen_max_height / split_time
    宽度(屏幕高度/5);
    // go to corresponding start position
    改变位置(-1 * 屏幕宽度 / 2, ( 2 - 循环数 ) * ( 屏幕高度 / 分割次数));
    // forward pen and draw
    向前移动(屏幕宽度);
    // i++
    循环数 = 循环数 + 1;
  });

}

// Star(x, y, length_of_star, angle, color)
星星 = (x, y, 边长, 角度, 颜色) => {
  // penup
  抬起笔刷();
  // go to (x, y)
  改变位置(x, y);
  // pendown
  放下笔刷();
  // right rotate (angle)
  向右转(角度);

  // draw a star
  // begin_fill
  开始绘制形状()
  // repeat 4 times
  重复 (4, () => {
    // move forward length_of_star
    向前移动(边长);
    // left rotate (30)
    向左转(30);
    // move forward length_of_star
    向前移动(边长);
    // right rotate (120)
    向右转(120);
  });
  // end_fill
  停止绘制形状(颜色);
};

// demo
演示 = () => {
  // Initial 
  初始状态();
  // Gets the max size of the screen.
  _此处_ 屏幕宽度= 最大_X_值() * 2;
  _此处_ 屏幕高度= 最大_Y_值() * 2;

  // Draws backgrounds, spilts screen horizontally and fills with different shades of gray.
  背景(屏幕宽度, 屏幕高度);

  // Draws stars, draws on top half of the screen and randomizes color, position, angle and size.
  宽度(5);
  改变颜色为( "yellow" );  // 黄色 
  // Repeats 50 times, draw 50 stars.
  重复 (50, () => {
    _此处_ 随机位置_X = 向下取整(随机值() * 1200)-600;//[-600,600], spreads all over width of the screen
    _此处_ 随机位置_Y = 向下取整(随机值() * 450);//[0,450], spreads only top half height of the screen 
    _此处_ 随机大小 = 向下取整(随机值() * 25);//[0,25], randomizes star size
    _此处_ 随机起始角度 = 向下取整(随机值() * 90);//[0,90], randomizes star start angle
    _此处_ 红 = 向下取整(随机值() * 45) + 180;//[180,225], randomizes star color (red)
    _此处_ 绿 = 向下取整(随机值() * 45) + 180;//[180,225], randomizes star size (green)
    _此处_ 随机颜色 = "#" + 红.toString(16) + 绿.toString(16) + "00";// #rrgg00 will generates different shades of yellow.
  //  Generates a star.
    星星(随机位置_X, 随机位置_Y, 随机大小, 随机起始角度, 随机颜色);
  });
};

