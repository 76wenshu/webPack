<template>
<div>
    <!-- <div> 心里有火，眼里有光 </div>
    <input type="text" v-model="inputModel" />
    <button @click="addLI">添加</button>
    <ul v-for="(item, index) of tooData" :key="index">
        <li >{{ item }}</li>
    </ul> -->
    <main-header></main-header>
</div>
</template>
<script>
import "./assets/styles/global.styl"
import MainHeader from "./components/Mainheader.vue"
    export default {
        name:"App",
        // data(){
        //     return {
        //         inputModel:"",
        //         tooData:["tooData1","tooData2","tooData3"]
        //     }
        // },
        // methods:{
        //     addLI: function(){
        //         this.tooData.push(this.inputModel)
        //     }
        // }
        components:{
            //组件名：组件对象
            MainHeader:MainHeader
        }
    }
</script>
<style lang="stylus">
</style>