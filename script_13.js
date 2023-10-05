var itemList = document.getElementById("items");

function logFormData() {
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var datetime = document.getElementById("datetime").value;

   // console.log("Name: " + name);
   // console.log("Email: " + email);
   // console.log("Phone: " + phone);
   // console.log("Date-time: " + datetime);

   localStorage.setItem(email, JSON.stringify({ name, phone, datetime }));

   //creating li
   var li = document.createElement("li");
   li.className = "list-group-item";
   li.id=email;
   li.appendChild(
      document.createTextNode(
         name + " || " + email + " || " + phone + " || " + datetime
      )
   );
   
   //creating del btn
   var delbtn = document.createElement("button");
   delbtn.className = "btn btn-danger btn-sm float-right delete";
   delbtn.appendChild(document.createTextNode("Delete"));

   //creating edit btn
   var editBtn = document.createElement("button");
   editBtn.className = "btn btn-success btn-sm float-right mr-2 edit";
   editBtn.appendChild(document.createTextNode("Edit"));

   li.appendChild(delbtn);
   li.appendChild(editBtn);
   itemList.appendChild(li);

   name="";
   email="";
   phone="";
   datetime="";
}


itemList.addEventListener("click", deleteItem);
function deleteItem(e) {
   if (e.target.classList.contains("delete")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
        
      localStorage.removeItem(li.id);
   }
}

itemList.addEventListener("click",editItem);
function editItem(e){
   if (e.target.classList.contains("edit")) {
      var li = e.target.parentElement;
      var name=document.getElementById('name').value;
      
   var name = document.getElementById("name").value;
   name="helper";
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var datetime = document.getElementById("datetime").value;

   console.log("Name: " + name);
   console.log("Email: " + email);
   console.log("Phone: " + phone);
   console.log("Date-time: " + datetime);

      itemList.removeChild(li);
      localStorage.removeItem(li.id);
   }

}