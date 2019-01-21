// new Vue({
//     el: '#app',
//
//     data:{
//
//         skills:[],
//     },
//
//     mounted(){
//
//        axios.get('/skills').then(response=>console.log(response.data));
//        axios.get('/skills').then(response=>this.skills=response.data);
//     }
//
// });

class Errors {

    constructor(){

        this.errors={};
    }

    get(field){

       // console.log(this.errors);

        if (this.errors[field]){



            return this.errors[field][0];
        }

    }
    any(){
        return Object.keys(this.errors).length>0;
    }

    has(field){

        return this.errors.hasOwnProperty(field);
    }

    record(errors){
        console.log(errors);
        this.errors=errors;

    }
    clear(field){

        delete this.errors[field];

    }

}

new Vue({

    el:"#app",

    data:{

        name:'',
        description:'',
        errors:new Errors()


    },

    methods:{

        onSubmit(){

            axios.post('/projects',this.$data)
                .then(this.onSuccess)
                .catch(error=>this.errors.record(error.response.data.errors));

        },

        onSuccess(response){

            alert(response.data.message);

            this.name='';

            this.description='';

            /*
            *
            * response =>alert('success')
            *
            *
            * this.onSuccess
            * onSuccess(response){}
            *
            * */

        },

    },


});
