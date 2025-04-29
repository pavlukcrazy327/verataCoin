'use client';
import Image from "next/image";
import Link from 'next/link';
import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';
import whitelistData from '@/src/constant/whitelist.json';

export default function Header() {
  const { address, isConnected } = useAccount();
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const truncateAddress = (address: string) => {
    localStorage.setItem('address', address ?? '');
    return address.slice(0, 6) + '...' + address.slice(-4);
  };

  useEffect(() => {
    if (address) {
      const isAddressWhitelisted = whitelistData.whitelist.some(whiteListAddress =>
        whiteListAddress.toLowerCase() === address.toLowerCase()
      );
      setIsWhitelisted(isAddressWhitelisted);
    }
  }, [address]);


  return (
    <>
      <header className="fixed-top">
        <div className="container-fluid g-0 logo-row">
          <div className="d-flex justify-content-between">
            <div className="flex-grow-1 nav-line nav-left">
              <Link className="navbar-brand" href="/">
                <Image src="/images/logos/WOMLOGO.svg" alt="Logo" width={100} height={100} />
              </Link>
            </div>
            <div className="mid-nav">
              <nav className="navbar navbar-expand-xl navbar-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" href="/" aria-current="page">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/create">
                        Create Collection
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        NFTs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/artists">
                      Synaps
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Community
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="flex-grow-1 nav-line nav-right">
              <div className='d-flex justify-content-between'>
                <div className='flex-grow-1 nav-left'>
                  {isWhitelisted &&
                    (<Link className="nav-link" href="/mint">
                      <button className="btn btn-nav btn-gr mx-2 px-4">Create</button>
                    </Link>)
                  }
                </div>

                <div className='flex-grow-1 nav-right'>
                  <Link className="nav-link" href="/account">
                    {isConnected && address ? (
                      <button className="btn btn-nav btn-gr px-4"
                      >
                        {truncateAddress(address)}
                      </button>) : (
                      <button className="btn btn-nav btn-gr mx-2 px-4">User Account Page</button>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  )
}