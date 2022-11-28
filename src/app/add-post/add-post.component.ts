import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent { 
  userid=""
  id=""
  title=""
  body=""
  readValue=()=>{
    let data={
      "User Id":this.userid,
      "Id":this.id,
      "Body":this.body
    }
    console.log(data)
  }


}
