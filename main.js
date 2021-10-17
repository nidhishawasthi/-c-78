var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://media.istockphoto.com/vectors/cute-cartoon-blonde-boy-waving-and-smiling-vector-id1155707357?k=20&m=1155707357&s=612x612&w=0&h=SvyRmDfyH9E5tDVq-1JGYuEqah72fFy4rsjynpgc8W0=", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtwofTtbkZZQIBYZI5OtUqFtwfoLUwrFMJ8hURB7jRzZjTMJ110Agiv4et7sh1uAAIqI&usqp=CAU"];
var names = ["Fmaily Book","bk awasthi", "kapil awasthi", "Nidhish awasthi  ", "vedant awasthi" ,"pooja awasthi" ];
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
    var updatedImage = [images [i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names [i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}