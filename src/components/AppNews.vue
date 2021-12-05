<template>
  <div class="card">
    <h2>{{ title }}</h2>

    <button class="btn" @click="open">
      {{ isOpen ? 'Закрыть': 'Открыть'}}
    </button>
    <div v-if="isOpen">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam aperiam autem beatae debitis delectus dolore doloremque esse est eum facere labore natus, nihil obcaecati quaerat quidem, repellat sequi similique.</p>
      <button v-if="!wasRead" class="btn primary" @click="read">Прочесть новость</button>
    </div>
  </div>
</template>

<script>

export  default {
  //props: ['title'],

  props: {
    title: {
      type: String,
      required: true,
    },
    id: Number,
    wasRead: Boolean,
  },

  emits: ['opened', 'read'],                           // Для других разрабов

  data() {
    return {
      isOpen: false,    // Это нужно было вынести в исходный массив новостей для каждой новости
    }
  },

  methods: {
    open() {
      this.isOpen = !this.isOpen;

      this.isOpen ? this.$emit('opened') : false; // Выпускаем кастомное событие из компонента
    },

    read() {
      this.isOpen = false;
      this.$emit('read', this.id);
    }
  }
}

</script>
