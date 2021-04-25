<template>
  
<div id="newCommentBox">
        
    
     <div> <span>{{ article }}</span>
     <!-- <span>{{ article }}</span> -->
     </div>


  </div>

         
    
        
    
</template>




<script>
// import dataService from '../axios'

import axios from 'axios'
export default {
    name:'postcomponent',
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
    mounted(){

    axios.get(`api/comment/:id`, (req, res) => {
    let id = req.params.id;
    Comment.findOne({
        _id: id
    }).then((article) => {
        return res.json({
            success: true,
            article: article
        });
    }).catch((err) => {
        return res.json({
            success: false,
            message: 'Unable to get the Post.',
            err: err
        })
    })
// }
// );
            // let _id = '607202a2324d6a29f435385e'
        //     axios.get(`api/comment/`)
            
        //     .then(response => {
        //     this.article = response.data[3]
        //   })

        //  },
         })}
        }}
// }
        
        // methods:{
        // async created(){
        // try{
        //  this.article = dataService.getAll()
        // }catch(err){
        // this.error = err.message
        // }}}
// }
//          mounted(){
//             axios.get('api/comment')
//          .then(response => {
//             this.article = response.data
//          })

//          },
//         // 
//         methods:{
//         //  , {
//               //  article: this.article
//               //  }),
//         newComment() {       
//         this.$router.push('/comment')
// },
//         AddComment() {     
//           //  mounted(){
//             let _id = '60800eff585c4d250874bcb0'
//             axios.get('api/comment/:id')
//             .then(response => {
//             this.response = _id
//             // for (var i = 0; i < 1; i++){
//             // let dataId = data.find(nId => {
//             // return nId._id === oursID            
//         // })}
//             console.log(response._id)
//           // this.$router.push('/addcomment')
//           // this.router.navigate(['comment', id]);
//           // }
// }
//          )}
//         }}   
        
        


//         // console.log(response)
    
    
    

 
</script>

<style>

  /* * {
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

     */
</style>