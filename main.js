var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 var blockImage;

function newImage()
{

    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        blockImage = Img;
        blockImage.scaleToWidth(700);
        blockImage.scaleToHeight(510);
        blockImage.set({
            top:0,
            left:0

        });
        canvas.add(blockImage);
    })
    
}

function playSound(){
	x.play();
}
