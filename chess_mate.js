
class Block {
  constructor(x, y,mat) {
    this.x = x;
    this.y = y;
    this.w = 80;
    this.mat = mat;
  }
move(x,y){
  this.x = x;
  this.y = y;
 // print(this.x,this.y)
}   
possiblemove(q,p){
  let X = [2, 1, -1,-2,-2,-1, 1, 2];
  let Y = [1, 2,  2, 1,-1,-2,-2,-1];
  let xp = [];
  let yp = [];
 
  for(let i = 0; i < 8; i++){
    let x1 = q + X[i];
    let y1 = p + Y[i];
    if (x1 >=0  && y1 >=0  && x1< 8 && y1< 8 && this.mat[y1][x1] == 0){
      xp.push(x1);
      yp.push(y1);
      //count++;
    }
  }
  let mat2 = [xp,yp]
 // print(mat2);
  return mat2;
}


  show() {
    image(blockImg, this.x *80, this.y*80, this.w, this.w);
  }
  
};



var kgnt;
var matboard = [ [0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0]];

//matboard[5][2] = 1;
var k1 = 3;
var k2 = 3;
matboard[k2][k1] = 1;
function preload(){
   blockImg = loadImage('block.png');
}

function chess(){

  for (let k = 0; k < 100 ; k++){
 
  stroke(255);
  for (let i = 0; i < 8; i++){
    line((i+1)*80,0,(i+1)*80,640);
  }
  stroke(255);
  
  for (let i = 0; i < 8; i++){
    line(0,(i+1)*80,640,(i+1)*80);
  }
  }
}

function setup() {
   
  createCanvas(640, 640);
  background(151);
  kgnt = new Block(k1,k2,matboard);
  frameRate(1);
  
}

var cont  = 0;
function draw() {
 // stroke(255);
  for (let k = 0; k < 100 ; k++){
  for (let i = 0; i < 8; i++){
    line((i+1)*80,0,(i+1)*80,640);
  }
  //stroke(255);
  
  for (let i = 0; i < 8; i++){
    line(0,(i+1)*80,640,(i+1)*80);
  }
  }
  kgnt.show();
  //line(0,(i+1)*80,640,(i+1)*80);
 var key = kgnt.possiblemove(k1,k2) ;
 //print("elemento: ", key);
 var min = 8;
 let yy ;
 var min_temp ;
 for (let j = 0; j<key[0].length;j++){
  var k = kgnt.possiblemove(key[0][j],key[1][j]);
  //print("el vector de movimientos es :",k);
  if  (k[0].length < min){
    min_temp = k;
    yy = j;
    min = k[0].length; 
   // print(yy,min_temp,min);   
  } 
 
 }
 k1= key[0][yy];
 k2 = key[1][yy];
 
 if (matboard[k2][k1] != 1){
  print("el elemento debe ser:",k1,k2,"de la matriz:")
    matboard[k2][k1] = 1;
    kgnt.move(k1,k2);
    fill(151);
    rect(k1*80,k2*80,80);
    
 }
 //console.log(matboard);

}
