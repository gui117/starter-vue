import { defineComponent } from 'vue'
import logo from '~/assets/logo.svg'

export default defineComponent({
  setup() {
    return () => (
      <div w-screen h-screen flex flex-col justify-center items-center>
        <img w-24 h-24 mb-8 src={logo} alt="vue" />
        <h1 font-italic text-gray text-4xl> Hello World! </h1>
      </div>
    )
  },
})
