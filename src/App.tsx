import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <div w-screen h-screen flex justify-center items-center>
        <h1 font-italic text-gray text-4xl> Hello World! </h1>
      </div>
    )
  },
})
