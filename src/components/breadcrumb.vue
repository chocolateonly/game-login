<template>
  <div class="mb-10" v-if="pathArr">
<!--  <el-breadcrumb separator="/">-->
<!--    <el-breadcrumb-item v-for="(p,index) in pathArr" :key="index">-->
<!--      <div style="display: flex;align-items: center">-->
<!--      <el-icon v-if="p.icon" style="margin-right: 5px;" size="16">-->
<!--        <component :is="p.icon"></component>-->
<!--      </el-icon>-->
<!--      <span>{{ p.title }}</span>-->
<!--      </div>-->
<!--    </el-breadcrumb-item>-->
<!--  </el-breadcrumb>-->
  </div>
</template>

<script setup name="breadcrumb" lang="ts">
import { useSidebarStore } from '../store/sidebar';
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
const sidebar = useSidebarStore();
//树结构  查找某一项子节点路径
const findPath = (tree:Array<any>, id:String, path:Array<string>) => {
  for (let i = 0; i < tree.length; i++) {
    const element = tree[i];
    let tempPath:Array<string> = [...path]
    tempPath.push(element)
    if (element.index == id) {
      return tempPath
    }
    if (element.subs) {
      const result:any = findPath(element.subs, id, tempPath)
      if (result) return result
    }
  }
}
interface PathObj{
  title:string
}
let pathArr = ref<Array<PathObj>>([])
const route = useRoute()
watch(()=>route.path,()=>{
   pathArr.value = findPath(sidebar.menu,route.path,[])
},{immediate:true})

</script>

<style scoped>
.mb-10{
  margin-bottom: 10px;
}
</style>