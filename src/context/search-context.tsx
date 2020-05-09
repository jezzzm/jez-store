import { createContext, Dispatch, SetStateAction } from 'react';

type SearchType = [string, Dispatch<SetStateAction<string>>];

const INITIAL_VALUE: SearchType = ['', () => {}];

const SearchContext = createContext(INITIAL_VALUE);

export default SearchContext;
