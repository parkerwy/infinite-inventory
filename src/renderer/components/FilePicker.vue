<template>
    <div>
        <v-text-field :label="label" :value="filePath" @click="pickFile"></v-text-field>
        <input type="file" style="display: none" ref="file" :accept="accept" @change="onFilePicked">
    </div>
</template>

<script>
  export default {
    name: 'file-picker',
    props: {
      label: String,
      accept: String,
      value: String
    },
    data: () => ({
      filePath: undefined
    }),
    methods: {
      pickFile () {
        this.$refs.file.click()
      },
      onFilePicked (e) {
        const files = e.target.files
        if (files[0] !== undefined) {
          this.filePath = files[0].path
          this.$emit('input', this.filePath)
        }
      }
    },
    mounted: function () {
      this.filePath = this.value
    }
  }
</script>