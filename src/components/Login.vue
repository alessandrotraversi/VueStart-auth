<template lang="pug">

.container
    .row
        .col-md-8.col-md-offset-2
            .panel.panel-default
                .panel-heading Login
                .panel-body
                    .alert.alert-danger(v-if='error.error') {{error.message}}
                    form.form-horizontal(@submit.prevent='login()', method='post')
                        .form-group
                            label.col-md-4.control-label(for='email') E-Mail Address
                            .col-md-6
                                input#email.form-control(type='email', name='email', required='', autofocus='', v-model='user.email')
                        .form-group
                            label.col-md-4.control-label(for='password') Password
                            .col-md-6
                                input#password.form-control(type='password', name='password', required='', v-model='user.password')
                        .form-group
                            .col-md-8.col-md-offset-4
                                button.btn.btn-primary(type='submit')
</template>

<script>
import store from '../store/store';

export default {
        data(){
            return {
                user: {
                    email: '',
                    password: ''
                },
                error: {
                    error: false,
                    message: ''
                }
            }
        },
        methods: {
            login(){
                store.dispatch('login', this.user)
                    .then((response) => {
                        this.$router.push({name: 'time.list'});
                    })
                    .catch((responseError) => {
                        this.error.error = true;
                        if (responseError.status === 400) {
                            this.error.message = responseError.data.error;
                        } else {
                            this.error.message = 'Login falhou!!'
                        }
                    })
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
