<template>
  <div>
    <van-row class="title">
      <van-col span="4">签到</van-col>
      <van-col span="16" class="title_home">藏书馆</van-col>
      <van-col span="4" >
        <van-icon class="search" name="search" />
      </van-col>
    </van-row>
    <van-row class="lunbo">
      <van-col span="24">
        <van-swipe :autoplay="3000">
          <van-swipe-item class="yin" v-for="(image, index) in images" :key="index">
            <img class="lb_img" v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
    <van-row class="home_list">
      <van-col span="6" v-for="(home_list,index) in home_lists" :key="index">
        <img :src="home_list">
        <span>{{home_names[index]}}</span>
      </van-col>
    </van-row>
    <van-row class="hot">
      <van-col span="6" offset="1">
        <img class="left_banner" :src="eft_banner"><span>热门图书</span>
      </van-col>
      <van-col offset="12" span="4" class="gengduo">查看全部 ></van-col>
    </van-row>

    <van-row class="hot_book">
      <!--滑动滚动-->
      <van-swipe :loop="false" :show-indicators="false" :width="100">
        <van-swipe-item v-for="(item,index) in items" :key="index" class="ph">
            <div class="photo"><img :src="item.img" />
              <p>{{item.name}}</p>
            </div>
        </van-swipe-item>
      </van-swipe>
    </van-row>
    <van-row class="library">
      <van-col span="6" offset="1">
        <img class="left_banner" :src="eft_banner"><span>推荐图书馆</span>
      </van-col>
      <van-col offset="12" span="4" class="gengduo">查看全部 ></van-col>
    </van-row>
    <van-row class="library_list">
      <div v-for="(library,index) in librarys" :key="index" class="div_list">
          <van-col class="div_img" span="10">
            <img :src="library.img">
          </van-col>
        <van-col class="div_details" span="14">
          <h4>{{library.name}}</h4>
          <p><van-rate v-model="value" disabled disabled-color="#ffd21e"/><span>{{library.score}}分</span></p>
          <p>{{library.text}}</p>
        </van-col>
      </div>
    </van-row>


  </div>
</template>

<script>
  import request from '@/utils/request'
  export default {
    mounted(){
      // this.gitlist()
    },
    name:"home",
    methods:{
      gitlist:function(){
        request({
          url:'/book/hot_books',
          method: 'get',
        }).then(data=>{
          this.items = data.result;
          // console.log(data.result)
        }).catch(err=>{
          console.log(1)
        })
      }
    },
    data() {
      return {
        //评分
        value:1,
        items:[
          {
            id:0,img:'../static/book_list/1.png',name:'后汉书'
          },
          {
            id:1,img:'../static/book_list/2.png',name:'简·爱'
          },
          {
            id:2,img:'../static/book_list/3.png',name:'闲情偶寄'
          },
          {
            id:3,img:'../static/book_list/4.png',name:'浮士德'
          }
        ],
        librarys:[
          {id:0,img:"../static/libraryr/1.png",name:"全世纪图书馆",score:'4.5',text:"图书馆以其历史悠久、藏书丰富、建筑宏伟、环境幽雅而."},
          {id:1,img:"../static/libraryr/2.png",name:"全世纪图书馆",score:'4.5',text:"图书馆以其历史悠久、藏书丰富、建筑宏伟、环境幽雅而."},
          {id:2,img:"../static/libraryr/2.png",name:"全世纪图书馆",score:'4.5',text:"图书馆以其历史悠久、藏书丰富、建筑宏伟、环境幽雅而."}
        ],
        checked: true,
        eft_banner: '../static/main_img/left.png',
        images: [
          '../static/lunbo/1.jpg',
          '../static/lunbo/2.jpg',
          '../static/lunbo/3.jpg',
          '../static/lunbo/4.jpg'
        ],
        home_lists:[
          '../static/home_list/home.png',
          '../static/home_list/home_library.png',
          '../static/home_list/home_donate.png',
          '../static/home_list/home_list.png'
        ],
        home_names:[
          '分类',
          '图书馆',
          '排行榜',
          '赠送'
        ]
      }
    }
  }
</script>

<style>
  *{
    font-family:"Microsoft YaHei"
  }
  .title{
    text-align: center;
    height: 40px;
    font-size: 32px;
    line-height: 40px;
    color:rgb(151,151,151);
    margin-top: 26px;
  }
  .search{
    margin-top: 8px;
    width: 33px;
    height: 32px;
    font-size: 25px;
  }
  .title_home{
    color:rgb(102,102,102);
    font-size: 38px;
  }
  .lunbo{
    margin-top: 45px;
    box-shadow: 0 0 2.5em #ccc;
  }
  .lb_img{
    width: 100%;
  }
  .van-swipe{
    height: 4.15rem;
  }
  .home_list{
    margin-top: 25px;
    text-align: center;
  }
  .home_list img{
    width: 100px;
    height: 100px;
  }
  .home_list span{
    display: block;
    color: #8c8c8c;
  }
  .left_banner{
    width: 2.5px;
    padding: 0 10px;
  }
  .hot{
    margin-top: 34px;
  }
  .hot_book{
    margin-top: 30px;
  }
  .hot span{
    color:rgb(108,109,108);
    font-size: 32px;
    line-height: 20px;
    position: relative;
    top: -6px;
  }
  .gengduo{
    font-size: 24px;
    text-align: right;
    position: relative;
    top: 5px;
    color: rgb(176,176,176);
  }
  .photo{
    margin-left: 47px;
  }
  .photo img{
    height: 188px;
    box-shadow:8px 4px 20px #ccc;
  }
  .photo p{
    margin: 2px;
    font-size: 28px;
    color: rgb(108,109,108);
  }
  .van-swipe{
    height: 270px;
  }
  .library{
    margin: 2px;
    font-size: 28px;
    color: rgb(108,109,108);
  }
  .library span{
    color:rgb(108,109,108);
    font-size: 32px;
    line-height: 20px;
    position: relative;
    top: -6px;
  }
  .library_list{
    padding: 20px;
  }
  .library_list>div{
    box-shadow:8px 4px 20px #ccc;
    width: 700px;
    height: 190px;
    margin-bottom:55px;
  }

  .div_img{
    height: 188px;
  }
  .library_list img{
    height: 188px;
  }
  .library_list h4{
    margin: 10px 0;
    font-size: 32px;
    color: rgb(108,109,108);
  }
  .library_list p{
    width: 318px;
    margin: 0;
    color: rgb(128,128,128);
  }
  .van-rate__item{
    width: 30px!important;
  }
  .library_list span{
    margin-left: 10px;
  }
  .van-rate{
    display: inline-block;
  }
</style>
