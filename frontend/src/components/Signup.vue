<template>
  <form @submit.prevent="signup" class="formbox">
     <div id="pseudobox">
        <label for="textbox">pseudo</label>
        <input id="pseudo" type="text" v-model="pseudo">
    </div>
    <div id="loginbox">
        <label for="textbox">email</label>
        <input id="login" type="text" v-model="email">
    </div>
    <div id="passbox">
        <label for="textbox">password</label>
        <input id="pass" type="password" v-model="password">
      
        <div id="copielogin">{{ email }}</div>
    </div>
        <button id="loginbutton">Login</button>
    </form>
        
    
</template>

<script>
import axios from 'axios';
export default {
   name: 'signup',
   data(){
       return{
           pseudo: '',
           email: '',
           password: ''

       }

   },
   methods:{
        async signup() {
        const response = await axios.post('/auth/signup', {
                pseudo: this.pseudo,
                email: this.email,
                password: this.password
        })
        console.log(response)
        this.$router.push('/comment')
    //   const response = await axios.post('register', data)
    //     .then(
    //         res => {
    //             console.log(res)
    //         }
    //     ).catch(
    //         err => {
    //             console.log(err)
    //         }
    //     )
    }
     
  
  }
}
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
   
  .formbox{
    width: 220px;
    height: auto;
    margin-top: 50px;
    margin-left: 40vw;
    border: 0.2vw black solid;
  
  }

  label{
      margin-top: 10px;
      margin-left: 5px;
  }
      #pseudo{
          margin-top: 0px;
          margin-left: 5px;
          margin-bottom: 0px;
      }
      #login{
          margin-top: 0px;
          margin-left: 5px;
          margin-bottom: 0px;
      }

      #pass{
          margin-left: 5px;
          margin-bottom: 10px;
      }

     

      #copielogin{
          margin-left: 80px;
        
         
     
      }

      button{
        margin-left: 80px;
        margin-bottom: 10px;
      }
      </style>
