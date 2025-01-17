<template>
    <div class="text-layer">
        <div v-if="!editActive" @click="toggleEdit">{{ content }}</div>
        <div v-else>{{ content }}</div>
    </div>
</template>

<script lang="ts" setup>
import type { TextLayer } from '@/types/CanvasLayer';
import { computed, ref, type PropType } from 'vue';

const props = defineProps({
    layer: {
        type: Object as PropType<TextLayer>,
        required: true,
    }
});

const content = computed(() => props.layer.content.length > 0 ? props.layer.content : 'Enter text content here');

const editActive = ref(false);
const toggleEdit = () => editActive.value = true;
</script>
