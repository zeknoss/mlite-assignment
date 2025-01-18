<template>
    <footer class="layer-toolbar">
        <MBtn @click="duplicate"><MIcon>content_copy</MIcon></MBtn>
        <MBtn @click="remove"><MIcon>delete</MIcon></MBtn>
    </footer>
</template>

<script lang="ts" setup>
import MBtn from '@/components/Generic/MBtn.vue';
import MIcon from '@/components/Generic/MIcon.vue';
import { useAppStore } from '@/stores/app';
import type { GroupLayer, ImageLayer, TextLayer } from '@/types/CanvasLayer';
import type { PropType } from 'vue';

const props = defineProps({
    layer: {
        type: Object as PropType<TextLayer|ImageLayer|GroupLayer>,
        required: true,
    },
    editActive: {
        type: Boolean,
        default: false,
    }
});

const emit = defineEmits(['change']);

const store = useAppStore();

const duplicate = () => {
    store.addLayer(Object.assign({}, props.layer));
    emit('change');
};

const remove = () => {
    const c = confirm('Are you sure you wish to delete this block?');

    if (c)
        store.deleteLayer(props.layer.id);

    emit('change');
};
</script>
