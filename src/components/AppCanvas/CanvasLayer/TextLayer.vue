<template>
    <li class="canvas-layer text-layer">
        <template v-if="!editActive">
            <div class="layer-text" @click="toggleEdit" v-html="content" />

            <LayerToolbar :layer="layer" @change="$emit('toggleEdit','')" />
        </template>

        <template v-else>
            <QuillEditor content-type="html" :enable="editActive" theme="snow" toolbar="minimal" v-model:content="modelContent" ref="qed" />

            <footer>
                <MBtn @click="save"><MIcon>save</MIcon></MBtn>
            </footer>
        </template>
    </li>
</template>

<script lang="ts" setup>
import MBtn from '@/components/Generic/MBtn.vue';
import MIcon from '@/components/Generic/MIcon.vue';
import { useAppStore } from '@/stores/app';
import type { TextLayer } from '@/types/CanvasLayer';
import { QuillEditor } from '@vueup/vue-quill';
import { computed, ref, type PropType } from 'vue';
import LayerToolbar from './LayerToolbar.vue';

const props = defineProps({
    layer: {
        type: Object as PropType<TextLayer>,
        required: true,
    },
    editActive: {
        type: Boolean,
        default: false,
    }
});
const emit = defineEmits(['toggleEdit']);

const content = computed(() => props.layer.content.length > 0 ? props.layer.content : 'Click to edit the content');
const modelContent = ref('');

const qed = ref<HTMLElement | null>(null);

const toggleEdit = () => {
    emit('toggleEdit', props.layer.id);
    modelContent.value = props.layer.content;

    // Just a quick and dirty way to autofocus the editor.
    // Would implement a better way with ready event in a real life scenario.
    setTimeout(() => qed.value?.focus(), 500);
};

const store = useAppStore();

const save = () => {
    store.updateLayer(props.layer.id, modelContent.value);
    emit('toggleEdit', '');
};
</script>
