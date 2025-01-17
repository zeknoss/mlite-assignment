<template>
    <div>
        {{ layer.content }}
    </div>
</template>

<script lang="ts" setup>
import type { TextLayer } from '@/types/CanvasLayer';
import type { PropType } from 'vue';

defineProps({
    layer: {
        type: Object as PropType<TextLayer>,
        required: true,
    }
});
</script>
