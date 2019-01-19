new Vue({
    el: '#app',
    
    data:{
    
        skills:[],
    },

    mounted(){
    
       axios.get('/skills').then(response=>console.log(response.data));
       axios.get('/skills').then(response=>this.skills=response.data);
    }

});
