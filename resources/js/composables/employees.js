import { ref, inject } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useEmployees() {
    const employee = ref([])
    const employees = ref([])

    const errors = ref('')
    const lastPage = ref(1)
    const currentPage = ref(1)
    const router = useRouter()
    const swal = inject('$swal')

    const getEmployees = async (page = 1) => {
        let response = await axios.get('/api/employees?page=' + page)
        employees.value = response.data.data
        lastPage.value = response.data.meta.last_page
        currentPage.value = response.data.meta.current_page
    }

    const getEmployee = async (id) => {
        let response = await axios.get(`/api/employees/${id}`)
        employee.value = response.data.data
    }

    const storeEmployee = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/employees', data)
            await router.push({ name: 'employees.index' })
            swal('Success')
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }

    }

    const updateEmployee = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/employees/${id}`, employee.value)
            await router.push({ name: 'employees.index' })
        } catch (e) {
            console.log(e)
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }
    }

    const destroyEmployee = async (id) => {
        swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this action!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#ef4444',
            timer: 20000,
            timerProgressBar: true,
            reverseButtons: true
        })
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete('/api/employees/' + id)
                        .then(response => {
                            getEmployees()
                            router.push({name: 'employees.index'})
                            swal({
                                icon: 'success',
                                title: 'Post deleted successfully'
                            })
                        })
                        .catch(error => {
                            swal({
                                icon: 'error',
                                title: 'Something went wrong'
                            })
                        })
                }
            })
    }

    return {
        errors,
        employee,
        employees,
        currentPage,
        lastPage,
        getEmployee,
        getEmployees,
        storeEmployee,
        updateEmployee,
        destroyEmployee,
    }
}