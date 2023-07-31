import { ref } from "vue";

export const useModalWindow = () => {
    const modalOpen = ref(false);
    const toggleModal = () => modalOpen.value = !modalOpen.value;

    return { modalOpen, toggleModal}
}