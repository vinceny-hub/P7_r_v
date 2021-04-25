<template>
  <div>


     <!-- <tbody>
        <tr v-for="A in article" :key="A._id">
         <td>{{ A.article }}</td>
         <td>{{ A._id }}</td> 
          <td><router-link :to="{name: 'edit', params: { id: post._id }}" >Edit</router-link></td> -->
         <!-- <td><button @click.prevent="deletePost(A._id)">Delete</button></td> -->
        <!-- </tr> -->
      <!-- </tbody> -->
     <button class="newCommentBox" v-on:click="newComment" >New Comment</button> 
      <div class="newCommentBox" v-for="A in article" :key="A._id">
        <span>{{ A.article }}</span><br><span>{{ A._id }}</span> 
        <!-- <button class="add" v-bind="article" v-on:click="AddComment()" id="AddCommment">AddComment</button>    -->
        <button class="badge badge-danger mr-2 add" @click.prevent="deletePost(A._id)">Delete</button> 
      </div> 
  </div>
</template>




<script>
// import dataService from '../../services/dataService'
import axios from 'axios'
// import { mapState } from "vuex"
// import DataService from '../services/dataService'
export default {
  name:'page',
    data(){
      return{
        article:[] 
      }
    },               
    mounted(){
      axios.get('api/comment')
        .then(response => {
          this.article = response.data
        })
    },
    created() {
   let uri = '/localhost:3300/api/comment';
   this.axios.get(uri).then(response => {
    this.article = response.data;
   });
  },
    
    methods:{
    //   // _id:'60800eff585c4d250874bcb0',
  //  deletePost(_id)
  //  {
  //   let uri = `/api/comment/${_id}`;
  //   axios.delete(uri).then(response => {
  //    this.article.splice(this.article.indexOf(_id), 1);
  //    console.log(response)
  //   });
  //  },


      deletePost(_id) {
     axios.delete(`/api/comment/${_id}`)
          // headers: {
          //   Authorization: "Bearer " + localStorage.getItem("token")
          // },
          .then(response => {
           this.article.splice(this.article.indexOf(_id), 1);
            // article: this.article.id,
              console.log(response)
        
        })
        .then(() => {
          window.location.reload();
        })
        .catch(error => console.log(error));
    },
    
  
      // async deleteArticle() {
      //   DataService.deleteComment(this.article) 

        // this.article = await DataService.getAll()
      
      //     article: this.article._id,
      //   })
      //     .then(() => {
      //       window.location.reload();
      //     })
      //     .catch(error => console.log(error));
      // },
      newComment() {       
        this.$router.push('/comment')
      },
      AddComment() {  
       
      
        this.$router.push('/postcomponent')  
         
          //  mounted(){
            // let _id = '60800eff585c4d250874bcb0'
            // axios.get('api/comment/:id')
            // .then(response => {
            // this.response = _id

            // for (var i = 0; i < 1; i++){
            // let dataId = data.find(nId => {
            // return nId._id === oursID            
        // })}
            // console.log(response.data._id)
          // this.$router.push('/addcomment')
          // this.router.navigate(['comment', id]);
          // }
}
        //  )}
        // }
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
 html{
     width: 100%;
     height: 100%;
 }

  body{
     width: 100vw;
     height: auto;
     /* border: 0.1vw black solid;  */
         
      }
   
  .newCommentBox{
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
    