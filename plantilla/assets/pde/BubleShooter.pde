float theta, dt;
int R, radio_burbuja;
PVector flecha, centro, punta, posBurbuja, velBurbuja;
Boolean lanzar;

void setup(){

  size(600,500);
  R = 100;
  lanzar = false;
  radio_burbuja = 20;
  centro = new PVector(width/2, height - height/16);
  flecha = new PVector();
  punta = new PVector();
  velBurbuja = new PVector();
  posBurbuja = new PVector(2*width, -2*height);
  
  theta = PI/2;
}


void draw(){
  
  background(255); //Borrar figuras anteriores, borrar el frame buffer
  strokeWeight (10); //grosor Pincel
  
  //Eje Suelo
  stroke(0);
  line(0, height - height/16, width,  height - height/16);
  
  dibujarControles();
  dibujarFlecha();
  dibujarBurbuja();
}

void dibujarFlecha()
{

  flecha.x = R * cos(theta);
  flecha.y = R * sin(theta);
  
  line(centro.x, centro.y, centro.x + flecha.x, centro.y - flecha.y);
  fill(0);

}

void dibujarControles()
{
  textSize(12);
  fill(0,0,0);
  text("(Espacio) Lanzar Burbuja", width - width/3, 50);
  text("(Flecha Derecha) Rotar Derecha", width - width/3, 65);
  text("(Flecha Izquierda) Rotar Izquierda", width - width/3, 80);
}

boolean estaFuera()
{
  return(posBurbuja.x > width|| posBurbuja.x < 0 || -posBurbuja.y > 0);
}

boolean lanzarBurbuja()
{
  if (lanzar)
  {
    lanzar = false;
    return true;
  }
   else
    return lanzar;
}

void dibujarBurbuja()
{
  stroke(255,0,0);
  fill(255,0,0);
  
  if (estaFuera() && lanzarBurbuja())
  {
    posBurbuja = new PVector(centro.x + flecha.x, centro.y - flecha.y);
    //print("posBurbuja X --> " + posBurbuja.x + " Y -->"+ posBurbuja.y + "\n");
    velBurbuja.x = (centro.x + flecha.x) - centro.x;
    velBurbuja.y = (centro.y - flecha.y) - centro.y;
    velBurbuja.normalize();
    velBurbuja.mult(50);
  }

  posBurbuja = posBurbuja.add(PVector.mult(velBurbuja, 0.1));
 // print("posBurbuja X --> " + posBurbuja.x + " Y -->"+ posBurbuja.y + "\n");
  ellipse(posBurbuja.x, posBurbuja.y, radio_burbuja, radio_burbuja);
 
}

void keyPressed()
{
 
    if (keyCode ==  37 && theta < PI)
    {
      theta += 0.05;  
    }
    else if (keyCode == 39 && theta > 0)
    {
      theta -= 0.05;
    }
    else if(keyCode == 32)
    {
      lanzar = true;
    }

}
