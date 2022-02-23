import {ref} from "vue";


export const useFirstTask = () => {
    const userName = ref('');
    const onChange = (e: any) => {
        userName.value = e.target.value
    }

    return {
        userName,
        onChange
    }
}