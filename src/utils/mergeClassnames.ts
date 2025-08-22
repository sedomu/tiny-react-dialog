export default function mergeClassnames(
    baseClassname: string,
    addedClassNames: string | undefined
) {
    return [baseClassname, addedClassNames].filter(Boolean).join(" ");
}
