<template lang="pug">

h1 Logout...

</template>

<script>
import store from '../store/store';
export default {
    mounted(){
        setTimeout(() => {
            this.logout();
        },2000)
    },
    methods: {
        logout(){
            store.commit('unauthenticated');
            this.$router.push({name: 'auth.login'});
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
