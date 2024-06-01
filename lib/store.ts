import { reactive } from 'vue'

interface IStore {
  navigationIsShown: boolean,
  modalOpen: boolean,
  totalSlides: number[],
  actualSlide: number,
}

export const store = reactive<IStore>({
  navigationIsShown: true,
  modalOpen: false,
  totalSlides: [],
  actualSlide: 1,
})
