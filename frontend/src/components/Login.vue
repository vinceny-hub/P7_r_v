  
<template>
  <form @submit.prevent="login" class="formbox">
    <div id="loginbox">
        <label for="textbox">login</label>
        <input id="login" type="text" v-model="email">
    </div>
    <div id="passbox">
        <label for="textbox">password</label>
        <input id="pass" type="password" v-model="password">
        <!-- {{pass}} -->
        <!-- <div id="copielogin">{{ email }}</div> -->
    </div>
        <button id="loginbutton">Login</button>
    </form>
        
    
</template>

<script>
import axios from 'axios'
export default {
   name: 'login',
   data () {
       return {
           email: '',
           password: ''
       }
   },
   methods: {
        async login() {
            const response 
            = await axios.post('/auth/login', 
            {
                email: this.email,
                password: this.password
            })
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.userId)
            console.log(response)
            this.$router.push('/page')
            
            
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
 html{
     width: 100%;
     height: 100%;
 }

  body{
     width: 100vw;
     height: 100vw;
     border: 0.1vw black solid;
         
      }
   
  .formbox{
    width: 220px;
    height: 200px;
    margin-top: 200px;
    margin-left: 40vw;
    border: 0.2vw black solid;
  
  }

  label{
      margin-top: 10px;
      margin-left: 5px;
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
        margin-left: 85px;
        margin-bottom: 10px;
      }
      </style>

