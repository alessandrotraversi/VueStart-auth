import Vue from 'vue';
import Vuex from 'vuex';
import JwtToken from '../services/jwt-token';
import { Time, User } from '../services/resources';
import SessionStorage from '../services/session-storage';

Vue.use(Vuex);


const state = {
    auth: {
        check: JwtToken.token != null,
        user: SessionStorage.getObject('user')
    }
};

const mutations = {
    setUser(state, user) {
        SessionStorage.setObject('user', user);
        state.auth.user = user;
    },
    authenticated(state) {
        state.auth.check = true;
    },
    unauthenticated(state) {
        state.auth.check = false;
        state.auth.user = null;
        SessionStorage.remove('user');
        JwtToken.token = null;
    }
};

const actions = {
    login(context, { email, password }) {
        return JwtToken.accessToken(email, password).then(response => {
            context.commit('authenticated');
            context.dispatch('getUser');
            return response;
        })
    },
    getUser(context) {
        User.query().then(response => {
            context.commit('setUser', response.data.user);
        })
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});