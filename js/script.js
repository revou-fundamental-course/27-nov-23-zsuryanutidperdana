

// Button Interaction
    // Disable Enter for Form Submission
const formArea = document.getElementById("myFormArea");
formArea.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        alert("Please use the Calculate Button to Submit.");
    }
})
const formCirc= document.getElementById("myFormCirc");
formCirc.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        alert("Please use the Calculate Button to Submit.");
    }
})
    // Show Text Area
function showTextArea(){
    let func1 = document.getElementById('propertyArea').style.display='block';
    let func2 = document.getElementById('propertyCirc').style.display='none';
    return (func1, func2) ;
}
    // Show Text Circumference
    function showTextCirc(){
        let func1 = document.getElementById('propertyArea').style.display='none';
        let func2 = document.getElementById('propertyCirc').style.display='block';
        return (func1, func2) ;
    }
    // Calculate Area
    function calculateArea(){
        let heightTri = parseFloat(document.getElementById('height').value);
        let baseTri = parseFloat(document.getElementById('base').value);
        let result=  0.5 * heightTri * baseTri;
        if(heightTri === 0 || baseTri === 0){
            return alert("Invalid Input. Please input number above 0");
        } else if(heightTri > 0 && baseTri > 0) {
        return alert("The Area of the Triangle is " + result);
        }
        else{
            return alert("Invalid Input. Please fill the form.");    
            }
    }
    // Calculate Circumference
    function calculateCirc(){
        let line1 = parseFloat(document.getElementById('line1').value);
        let line2 = parseFloat(document.getElementById('line2').value);
        let line3 = parseFloat(document.getElementById('line3').value);
        let result = line1 + line2 + line3;
        if(line1 === 0 || line2 === 0 || line3 === 0){
        return alert("Invalid Input. Please input number above 0");
        } 
        else if(line1 > 0 && line2 > 0 && line3 > 0){
        return alert("The Circumference of the Triangle is " + result);
        }
        else{
        return alert("Invalid Input. Please fill the form.");    
        }
    }