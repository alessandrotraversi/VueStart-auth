import LoginComponent from '../components/Login.vue';
import LogoutComponent from '../components/Logout.vue';
import HelloComponent from '../components/Hello.vue';

export default [
  {
    name: 'auth.login',
    path: '/login',
    component: LoginComponent,
    meta: { auth: false }
  },
  {
    name: 'auth.logout',
    path: '/logout',
    component: LogoutComponent,
    meta: { auth: true }
  },
  {
    name: 'auth.hello',
    path: '/hello',
    component: hello,
    meta: { auth: true }
  },
];