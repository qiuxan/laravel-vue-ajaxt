webpackJsonp([0],{

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {

    template:'<h1>Hello world</h1>'

};

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(33);


class Form{
    constructor(data){
        this.originalData=data;
        for(let field in data){
            this[field]=data[field];
        }

        this.errors=new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();

    }
    reset(){

        for(let field in this.originalData){
            this[field]='';
        }
        this.errors.clear();

    }

    data(){

        let  data={};
        for(let property in this.originalData){

            data[property]=this[property];
        }


        return data;
    }

    submit(requestType,url){

        return new Promise((resolve, reject)=>{
            axios[requestType](url,this.data())
                .then(response=>{

                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error=>{
                    // console.log(error.response.data.errors);
                    this.onFail(error.response.data.errors);


                    reject(error.response.data);

                })


        });



    }

    onSuccess(data){
        alert(data.message);
        //this.errors.clear();
        this.reset();

    }

    onFail(errors){
        //console.log(errors);
        this.errors.record(errors);

    }
}

/* harmony default export */ exports["a"] = Form;

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
        //console.log(errors);
        this.errors=errors;

    }
    clear(field){

        if(field) {
            delete this.errors[field];
            return;

        }
        this.errors={};
    }

}

/* harmony default export */ exports["a"] = Errors;

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Example__ = __webpack_require__(11);





window.axios=__WEBPACK_IMPORTED_MODULE_2_axios___default.a;
window.Form=__WEBPACK_IMPORTED_MODULE_0__core_Form__["a" /* default */];

new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({

    el:"#app",

    components:{

        Example: __WEBPACK_IMPORTED_MODULE_3__components_Example__["a" /* default */]

    },

    data:{

        form:new __WEBPACK_IMPORTED_MODULE_0__core_Form__["a" /* default */]({
            name:'',
            description:'',
        }),
    },

    methods:{

        onSubmit(){

            this.form.submit('post','/projects')
                .then(data=>console.log(data))
                .catch(errors=>console.log(errors));

        },

        onSuccess(response){

            alert(response.data.message);

            form.reset();

        },

    },

});


/***/ }

},[34]);