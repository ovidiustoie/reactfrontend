import { useState } from "react";
import { debounce } from '@mui/material/utils';
export const useSearchController = () => {
    const [search, setSearch] = useState('');
    const debouncedOnChange = debounce((value: string)  => setSearch(value), 500);
    return { 
        search,
        setSearchValue: debouncedOnChange
    }

}