<template>
    <div class="flex mb-4 place-content-end">
        <div class="px-4 py-2 text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700">
            <router-link :to="{ name: 'employees.create' }" class="text-sm font-medium">Create employee</router-link>
        </div>
    </div>

    <div class="min-w-full overflow-hidden overflow-x-auto align-middle sm:rounded-md">
        <table class="min-w-full border divide-y divide-gray-200">
            <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Name</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Desigantion</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Email</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Department</span>
                </th>
            </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <template v-for="item in employees" :key="item.id">
                <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.name }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.designation }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.email }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.department }}
                    </td>
                    
                    <td class="px-6 py-4 text-sm leading-5 text-center text-gray-900 whitespace-no-wrap">
                        <router-link :to="{ name: 'employees.edit', params: { id: item.id } }"
                                    class="mr-2 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                            Edit
                        </router-link>
                        <a href="#" @click.prevent="destroyEmployee(item.id)" class="ml-2">Delete</a>
                    </td>
                </tr>
            </template>
            </tbody>
            
        </table>
        <pagination :total-pages="lastPage" :current-page="currentPage" @page-selected="getEmployees"></pagination>
    </div>
</template>

<script setup>
import useEmployees from '@/composables/employees'
import { onMounted } from 'vue';
import Pagination from "@/components/Pagination.vue";


const { employees, lastPage, currentPage, getEmployees, destroyEmployee } = useEmployees()

onMounted(getEmployees)
</script>