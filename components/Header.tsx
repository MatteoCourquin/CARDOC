import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SearchBar from './SearchBar';
import Button from './Button';
import Upload from './Upload';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const createBreadcrumbs = (pathname: string) => {
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = '/' + segments.slice(0, index + 1).join('/');
      return (
        <span key={index} className="flex items-center">
          <Link href={path} className="text-blue-500 hover:underline">
            {segment}
          </Link>
          {index < segments.length - 1 && <span className="mx-2">/</span>}
        </span>
      );
    });
  };

  return (
    <header className="flex items-center justify-between">
      {/* Fil d'Ariane */}
      <nav className="flex items-center space-x-2">
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        {pathname !== '/' && (
          <>
            <span className="mx-2">/</span>
            {createBreadcrumbs(pathname)}
          </>
        )}
      </nav>
      <div className="flex gap-4">
        <Button type="primary" onClick={() => setIsUploadOpen(true)}>
          Ajouter un véhicule
        </Button>
        <SearchBar onChange={(value) => console.log(value)} />
      </div>
      <Upload isOpen={isUploadOpen} setIsOpen={setIsUploadOpen} />
    </header>
  );
};

export default Header;
