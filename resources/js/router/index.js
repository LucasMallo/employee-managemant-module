import { createRouter, createWebHistory } from "vue-router";

import EmployeesIndex from '@/components/employees/EmployeesIndex.vue'
import EmployeesCreate from '@/components/employees/EmployeesCreate.vue'
import EmployeesEdit from '@/components/employees/EmployeesEdit.vue'
import Login from '@/components/Auth/Login.vue'
import GuestLayout from '@/layouts/Guest.vue'
import AuthenticatedLayout from '@/layouts/Authenticated.vue'

function auth(to, from, next) {
    if (JSON.parse(localStorage.getItem('loggedIn'))) {
        next()
    }

    next('/login')
}

const routes = [
    {
        path: '/',
        redirect: { name: 'login' },
        component: GuestLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login
            },
        ]
    },
    {
        component: AuthenticatedLayout,
        beforeEnter: auth,
        children: [
            {
                path: '/employees',
                name: 'employees.index',
                component: EmployeesIndex
            },
            {
                path: '/employees/create',
                name: 'employees.create',
                component: EmployeesCreate
            },
            {
                path: '/employees/:id/edit',
                name: 'employees.edit',
                component: EmployeesEdit,
                props: true
            },
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})