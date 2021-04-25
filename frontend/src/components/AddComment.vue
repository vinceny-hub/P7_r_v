<template>
  
     <div id="newCommentBox">
        
       <button v-on:click="newComment" id="createNewCommment">New Comment</button>
       <div v-for="articles in article" :key="articles.article"> <span>{{articles.article}}</span><button v-on:click="AddComment(articles)" id="AddCommment">AddComment</button></div>

    </div>
         
    
        
    
</template>




<script>

import axios from 'axios'
export default {
    name:'addcomment',
    data(){
       return{
        //  comment:{         
          article: [], 
          // id:'607202a2324d6a29f435385e',
         //  userId: ''
                    
      //  }
      }

   },                
        
        // methods:{
         mounted(){
         axios.get('api/comment/:id')
         .then(response => {
            this.article = response.data
         })

         },
        // 
        methods:{
        //  , {
              //  article: this.article
              //  }),
        newComment() {  
               
        this.$router.push('/comment')
        
},
        AddComment() {       
        this.$router.push('/addcomment')
          }
}
}
    
        
        


        // console.log(response)
    
    
    

 
</script>

<style>

  * {
	box-sizing:border-box;
	margin:0;
	padding:0;
  
}
  body{
     width: 100vw;
     height: 100%;
     border: 0.1vw black solid;
         
      }
   
  #newCommentBox{
    width: 220px;
    height: 100px;
    margin-top: 50px;
    margin-left: 40vw;
    border: 0.2vw black solid;

  
  }

  
      #createNewCommment{
        margin-top: 50px;
        margin-left:50px;
        margin-bottom: 0px;
      }

    
</style>