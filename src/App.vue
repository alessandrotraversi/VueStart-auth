<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store/store';
export default {
  name: 'app',
  computed: {
      isAuth(){
          return store.state.auth.check;
      },
      /*created(){
            if(this.isAuth) {
                //do somethings
                // store.dispatch('');
            }
      },*/
      user(){
          return store.state.auth.user ? store.state.auth.user : {'name': ''};
      }
      /*watch: {
        isAuth(value){
            if (value) {
                //do somethings
                //store.dispatch('');
            }
        }
      }*/
  }
}
</script>

<style lang="scss">
@import './app.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
