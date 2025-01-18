export enum CanvasLayerType {
    IMAGE = "IMAGE",
    TEXT = "TEXT"
}

export interface CanvasLayer {
    id: string;
    type: CanvasLayerType;
}

export interface TextLayer extends CanvasLayer {
    content: string;
}

export interface ImageLayer extends CanvasLayer {
    src: string;
}
