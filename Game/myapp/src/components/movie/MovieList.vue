<template>
    <div>
        <ul class="movie-List">
            <li class="movie" v-for="movie in movieList" :key="movie.id">
                <div class="movie-img"><img :src="movie.img" /></div>
                <div class="movie-info">
                    <p>{{movie.nm}}</p>
                    <p>{{movie.ver}}</p>
                    <p>主演：{{movie.star}}</p>
                    <p>{{movie.showInfo}}</p>
                </div>
            </li>
            <div class="loading" v-show="loadingShow">
                <img src="@/assets/img/loading.gif">
            </div>
        </ul>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            movieList:[],//接收来自api的数据
            loadingShow: false,
        }
    },methods:{
        loadData(){// let url1 = API_PROXY+"http：//api.douban.com/v2/movie/top250";
        let url2 = '/static/data/moviedata.json'
        Axios.get(url2).then((res)=>{
        let list = res.data.data.movies;
        this.movieList = list.slice(0,5);
        this.loadingShow = true;
    }).catch(
        // ()=>{alert('数据接收失败！')}
    )

    }
    },
    mounted() {
        this.loadData();
        //监听滚动条事件；
        window.onscroll = ()=>{
            let clientHeight = document.documentElement.clientHeight;
            let scrollTop = document.documentElement.scrollTop || document.body.scrollHeight;
            let scrollHeight = document.documentElement.scrollHeight;
            console.log(clientHeight,scrollTop,scrollHeight);
            if (Math.ceil(scrollTop) + clientHeight == scrollHeight) {
                this.loadingShow = true;
                console.log('到底儿了！')
            }
        }
    }
    
}
</script>
<style scoped>
/*flex: 1 1 0;===[flax-grow(放大)，flax-shrink(缩小),flax-basis]*/
.movie-List{margin: 1rem 0;}
.movie{display: flex;padding: 0.2rem;border-bottom: 1px solid #abc;}
.movie-img{flex: 1 1 0;margin-right: 0.2rem;}
.movie-info{flex: 2 1 0;}
.movie-info p:first-child{font-weight: bold;color: #903;}
.loading{margin-bottom: 1rem;text-align: center;}
</style>

