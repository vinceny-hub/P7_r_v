<template>
  <form @submit.prevent="sauce" class="formbox">
     <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="name" type="text" v-model="name">
    </div>
    <!-- <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="manufacturer" type="text" v-model="manufacturer">
    </div>
     <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="description" type="text" v-model="description">
    </div>
     <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="img" type="text" v-model="imageUrl">
    </div>
     <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="mainPepper" type="text" v-model="mainPepper">
    </div>
     <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="heat" type="text" v-model="heat">
    </div>
     <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="userId" type="text" v-model="userId">
    </div>
     <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="likes" type="text" v-model="likes">
    </div>
     <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="dislikes" type="text" v-model="dislikes">
    </div>-->
      <!-- <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="userLiked" type="text" v-model="userLiked">
    </div>
     <div id="sauceBox">
        <label for="textbox">comment</label>
        <input id="userDisliked" type="text" v-model="userDisliked">
    </div>-->
   
        <button id="loginbutton">Login</button>
    </form>
        
    
</template>

<script>
import axios from 'axios';
export default {
   name: 'sauce',
   data(){
       return{
            name: '',
            // manufacturer:'',
            // description: '',
            // imageUrl:'',
            // mainPepper: '',
            // heat: '',
            // userId: '',
            // likes:'',
            // dislikes: '',
            // usersLiked: '',
            // usersDisliked: '',
   
         
       }

   },
   methods:{
        async sauce() {
        const response = await axios.post('api/sauces', {
                name: this.name,
                // manufacturer: this.manufacturer,
                // description: this.description,
                // imageUrl: this.imageUrl,
                // mainPepper: this.mainPepper,
                // heat: this.heat,
                // userId: this.userId,
                // likes: this.likes,
                // dislikes: this.dislikes,
                // usersLiked: this.usersLiked,
                // userDisliked: this.usersDisliked,
               
        })
        console.log(response)
        // this.$router.push('/page')
        }}}

</script>