<!-- 自定义公共组件: transfer
    @leftData 左侧数据
    @rightData 右侧数据
    @titles 数组数据,可以不设置，左右穿梭框的标题
    @sortType 上下排序的类型，可选值为： left、right、both三选一，可以不选，默认右侧可进行上下排序 both有bug待处理
 -->
<template>
  <div class="packaged_transfer">
    <div class="left_panel">
      <div class="header">
        <div class="title" v-if="titles && titles.length">{{titles[0]}}</div>
      </div>
      <el-scrollbar style="height: 259px;">
        <div class="content-box">
          <div v-model="left" class="packaged_transfer_select">
            <div
              v-for="(item, index) in leftData"
              :label="index"
              :key="item.value"
              class="content-box-item"
            >
              <div @click="selectItem(item,index,'left')" :id="'content-box-itemL'+index">
                <!-- <i
                  :class="[item.sort == 'asc' ? 'el-icon-caret-top': 'el-icon-caret-bottom']"
                  @click="sortItem(item)"
                ></i> -->
                {{item.text}}
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div class="option-container">
      <div class="option_item" v-if="left || left === 0" @click="transferData('left')">
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="option_item disabled" v-else>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="option_item" v-if="right || right === 0" @click="transferData('right')">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="option_item disabled" v-else>
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="option_item" v-if="upActive" @click="handleSort('up')">
        <i class="el-icon-arrow-up"></i>
      </div>
      <div class="option_item disabled" v-else>
        <i class="el-icon-arrow-up"></i>
      </div>
      <div class="option_item" v-if="downActive" @click="handleSort('down')">
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="option_item disabled" v-else>
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <div class="right_panel">
      <div class="header">
        <div class="title" v-if="titles && titles.length && titles.length == 2">{{titles[1]}}</div>
      </div>
      <el-scrollbar style="height: 259px;">
        <div class="content-box">
          <div v-model="right" class="packaged_transfer_select">
            <div
              v-for="(item, index) in rightData"
              :label="index"
              :key="item.value"
              class="content-box-item"
            >
              <div @click="selectItem(item,index,'right')" :id="'content-box-itemR' + index">
                <i
                  :class="[item.sort == 'asc' ? 'el-icon-caret-top': 'el-icon-caret-bottom']"
                  @click="sortItem(item)"
                ></i>
                {{item.text}}
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import transfer from './transfer.js'
export default transfer
</script>
<style lang="scss" scoped>
@import "./index";
</style>
