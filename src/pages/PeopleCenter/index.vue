<template>
    <div class="pc">
        <div class="peoplecenter">
            <router-link to="/"><span id="fontone">我的购物车</span></router-link><br>  
            <router-link to="/"><span id="fontone">我的购物车</span></router-link><br>
            <router-link to="/"><span id="fontone">我的购物车</span></router-link><br>
            <router-link to="/"><span id="fontone">我的购物车</span></router-link><br>
        </div>
        <hr id="hrclass">
    </div>
  </template>
  
  <script>
    export default {
      name: 'PeopleCenter',
      data: function() {
        return {
          username: '',
          password: ''
        }
      },
      methods: {
      }
    }
  </script>
  
  <style>
  .peoplecenter{
    background: #e11926;
    width: 100%;
    height: 120px;
  }
  #fontone{
    font-size: 15px;
    color: rgb(255,255,255);
    line-height: 30px;
    margin-left: 100px;
  }
  #hrclass{
    border-color: #c00926;
    border-radius: 5px;
  }
  </style>
  