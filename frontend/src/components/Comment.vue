
<template>
  <form @submit.prevent="postComment" class="formbox">
     <div id="commentBox">
        <label for="textbox">comment</label>
        <input id="comment" type="text" v-model="article">
    </div>
         <button id="commmentbutton">Comment</button>
         <div> {{article}} </div>
    </form>
        
    
</template>





<script>
import axios from 'axios';
export default {
   name: 'comment',
   data(){
       return{
         //  /comment:{         
          article: [], 
          // id:'607202a2324d6a29f435385e',
         //  userId: ''
                    
      //  }
      }

   },
   methods:{
      
        postComment() {
          
         //   console.log(this.postComment)
         //  const response = await axios.post('/api/comment', {
               // commentaire: this.commentaire,
               // userId: this.userId,
               // id: this.id
               axios.post("/api/comment"
               ,{
            // headers: {
            //   Authorization: "Bearer " + localStorage.getItem("token")
      //   },
             article: this.article
            //  commentaire: this.commentaire,
        }),
         axios.get('api/comment', {
               article: this.article
               }),
      //   console.log(response)
        this.$router.push('/page')
        }
        }}
        
</script>

<style>
input{
   margin-left: 5px;
}
button{
   margin-left: 70px ;
}
</style>