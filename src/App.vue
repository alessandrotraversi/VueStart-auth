<template>
    <main>
        <nav class="navbar navbar-default">
            <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Logo</a>
                </div>
                <ul class="nav navbar-nav">
                    <li>
                        <router-link :to="{name: 'start'}">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'auth.login'}">Login</router-link>
                    </li>
                    <li v-if="isAuth">
                        <router-link :to="{name: 'auth.logout'}">Logout</router-link>
                    </li>
                </ul>
        </nav>
        <div class="container">
            <div class="row">
                <router-view></router-view>
            </div>
        </div>
    </main>
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
