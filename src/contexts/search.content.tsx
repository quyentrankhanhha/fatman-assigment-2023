/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react'

interface SearchContextProps {
  query: string
  searchHandler: (query: string) => void
  cancelSearchHandler: () => void
}

const initialSearchContext: SearchContextProps = {
  query: '',
  searchHandler: (query: string) => {},
  cancelSearchHandler: () => {}
}

export const SearchContext = createContext<SearchContextProps>(initialSearchContext)

export const SearchContextProvider = ({
  children,
  defaultValue = initialSearchContext
}: {
  children: React.ReactNode
  defaultValue?: SearchContextProps
}) => {
  const [query, setQuery] = useState<string>(defaultValue.query)

  const searchHandler = (query: string): void => {
    setQuery(query)
  }

  const cancelSearchHandler = () => {
    setQuery('')
  }

  const value = { query, searchHandler, cancelSearchHandler }

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}
