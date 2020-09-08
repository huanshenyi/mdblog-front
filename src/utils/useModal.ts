/*
ログインのポップアップを表示か非表示にする
*/
import { ref } from "vue";

const visible = ref(false);

export function useModal (){
    return {
        visible,
        showModal: () => (visible.value = true),
        hideModal: () => (visible.value = false)
    }
}