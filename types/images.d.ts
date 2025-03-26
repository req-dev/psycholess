import type {StaticImageData} from "next/image";

declare module "*.png" {
    const value: import("next/image").StaticImageData;
    export default value;
}

declare module '*.jpg' {
    const value: import("next/image").StaticImageData;
    export default value;
}

declare module '*.svg' {
    const value: import("next/image").StaticImageData;
    export default value;
}

declare module "*.webp" {
    const value: import("next/image").StaticImageData;
    export default value;
}
