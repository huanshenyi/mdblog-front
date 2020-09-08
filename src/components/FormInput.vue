<template>
    <div class="field">
        <label :for="name" class="label">{{ name }}</label>
        <div class="control">
            <input class="input" :type="type" id="name" @input="handleInput" :value="modelValue" />
        </div>
        <p class="help is-danger" v-if="error">{{ error }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FormInput",
    props: {
      type: {
          type: String,
          default: ()=>{
              return ""
          }
      },
      name: {
          type: String,
          require: true,
      },
      modelValue: {
          type: String,
          require: true,
      },
      error: {
        type: String  
      }
    },
    setup(props, ctx) {
       const handleInput = (event: any)=>{
          ctx.emit("update:modelValue", event.target.value);
       }
       return { handleInput }
    }
})
</script>