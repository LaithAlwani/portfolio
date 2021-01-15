const images = ["https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"]

const personalImages = document.getElementById("personal-images");

for(var i=0; i<images.length; i++){
    const columns = document.createElement("div")
    columns.classList.add("col-lg-3");
    columns.classList.add("col-sm-4");
    const imagesDiv = document.createElement("div");
    imagesDiv.classList.add("images");
    const image = document.createElement("img");
    image.classList.add("img-fuild");
    image.setAttribute("src", images[i]);
    image.setAttribute("alt","some text");
    imagesDiv.append(image);
    columns.append(imagesDiv);
    personalImages.append(columns);

}




{/* <div class="col-lg-3 col-sm-4">
    <div class="images">
        <img class="img-fluid" src="" 
        alt="">
    </div>
</div> */}