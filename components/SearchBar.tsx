import clsx from 'clsx';
import { useRef, useState } from 'react';
import { IconSearch } from './Icons';

const SearchBar = ({ onChange }: { onChange: (value: string) => void }) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<string>('');

  return (
    <div
      className="group flex w-fit cursor-pointer items-center rounded-lg bg-white px-4 py-2"
      onClick={() => searchRef.current?.focus()}
    >
      <input
        ref={searchRef}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onChange(e.target.value);
        }}
        className={clsx(
          'w-0 bg-transparent outline-none transition-all focus:w-44 focus:pr-3',
          search.length > 0 && 'w-44 pr-3',
        )}
        placeholder="Recherche"
      />
      <IconSearch />
    </div>
  );
};

export default SearchBar;
