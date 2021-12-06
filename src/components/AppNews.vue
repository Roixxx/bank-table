<template>
  <div class="card">
    <h2>{{ title }}</h2>

    <app-button class="btn" @action="open">
      {{ isOpen ? 'Закрыть': 'Открыть' }}
    </app-button>

    <div v-if="isOpen">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam aperiam autem beatae debitis delectus dolore doloremque esse est eum facere labore natus, nihil obcaecati quaerat quidem, repellat sequi similique.</p>
      <app-button v-if="!wasRead" color="primary" @action="read">Прочесть новость</app-button>
    </div>

  </div>
</template>

<script>

import AppButton from "./AppButton";

export default {
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
      isOpen: false,                                    // Это нужно было вынести в исходный массив новостей для каждой новости
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
  },

  components: {AppButton},
}




</script>
