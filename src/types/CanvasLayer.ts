import TextLayer from "@/components/AppCanvas/CanvasLayer/TextLayer.vue";

export enum CanvasLayerType {
    IMAGE = "IMAGE",
    TEXT = "TEXT"
}

export interface LayerBase {
    id: string;
    type: CanvasLayerType;
    [key: string]: string|string[]|number;
}

export interface TextLayer extends LayerBase {
    content: string;
}

export interface ImageLayer extends LayerBase {
    src: string;
}

export type CanvasLayer = TextLayer|ImageLayer;
