import { useCallback } from "react";

// Custom hook returns a slugify function
const useSlugify = () =>
    useCallback(
        (text) =>
            text
                .toLowerCase()
                .replace(/[^\w ]+/g, "")
                .replace(/ +/g, "-"),
        []
    );

export default useSlugify;