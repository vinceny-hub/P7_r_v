<template>
  
     <div id="newCommentBox">
        
       <button v-on:click="newComment" id="createNewCommment">New Comment</button>
       <div v-for="articles in article" :key="articles.article"> <span>{{articles.article}}</span><button v-on:click="AddComment" id="AddCommment">AddComment</button></div>

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
            axios.get('api/comment')
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