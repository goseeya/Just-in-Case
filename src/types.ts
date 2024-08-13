export interface Device {
    id: string;
    name: string;
    data?: {
        color?: string;
        generation?: string;
        price?: number;
        "Strap Colour"?: string;
        "Color"?: string;
        year?: number;
        "CPU model"?: string;
        "Hard disk size"?: string;
        "Case Size"?: string;
        "Description"?: string;
        "Capacity"?: string;
        "Screem Size"?: number;
        "Generation"?: string;
        "Price"?: string;
    }
}

export interface Order {
    id: string;
}