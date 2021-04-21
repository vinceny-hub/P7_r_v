<template>
  
     <div id="newCommentBox">
        
       <button v-on:click="newComment" id="createNewCommment">New Comment</button>
       <div> {{article}}</div>

    </div>
         
    
        
    
</template>




<script>

// import axios from 'axios'
export default {
    name:'page',
    data(){
       return{
        //  comment:{         
          article: [], 
          // id:'607202a2324d6a29f435385e',
         //  userId: ''
                    
      //  }
      }

   },          
        
        
         
        
        methods:{
         
        //  axios.get('api/comment')
        //  .then(response => {
        //     this.article = response.data
        //  })

        //  , {
              //  article: this.article
              //  }),
        newComment() {       
        this.$router.push('/comment')
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
    