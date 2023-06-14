var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","IndiaDAD-removebg-preview(1).png", "indian-lady-.jpg" , "IMG_20180921_200140.jpg", "IMG20180921_200133.jpg", "IMG_20201113_073535.jpg"];
var names = ["Family Book","Amar Patel", "Namrata Patel", "Krishna Patel", "Palaksh Patel", "Jainil Patel"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
