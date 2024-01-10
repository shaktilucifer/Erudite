import { useCallback } from "react";

export function useCreateBook(){
    return useCallback(() => {
            // do call to save book
    }, []);
}