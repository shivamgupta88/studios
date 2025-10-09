import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  type?: string;
  href?: string;
  items?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

interface NavbarProps {
  agencyName: string;
  navigation: {
    mainNav: NavItem[];
    cta: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
  };
  logoUrl?: string;
}

export default function Navbar({ agencyName, navigation, logoUrl }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={handleLinkClick}
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={agencyName}
                className="h-8 w-auto transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  {agencyName.charAt(0)}
                </div>
                <span className={`ml-3 font-bold text-xl transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  {agencyName}
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.mainNav.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.type === 'dropdown' && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.type === 'dropdown' ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all ${
                        isScrolled
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          : 'text-white hover:text-blue-200'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200"
                        style={{ zIndex: 9999, paddingTop: '0.5rem' }}
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="p-2">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors group/item"
                              onClick={handleLinkClick}
                            >
                              <div className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                                {subItem.label}
                              </div>
                              {subItem.description && (
                                <div className="text-sm text-gray-500 mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className={`px-3 py-2 rounded-lg font-medium transition-all ${
                      isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-blue-200'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Buttons */}
            <Link
              href={navigation.cta.primary.href}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              onClick={handleLinkClick}
            >
              {navigation.cta.primary.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6">
          {navigation.mainNav.map((item) => (
            <div key={item.label} className="mb-4">
              {item.type === 'dropdown' ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-lg font-semibold text-gray-900 bg-gray-50 rounded-lg"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className="mt-2 space-y-1 pl-4">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="block px-4 py-3 text-lg font-semibold text-gray-900 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="space-y-3 mt-8">
            <Link
              href={navigation.cta.primary.href}
              className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-center rounded-lg hover:shadow-lg transition-all"
              onClick={handleLinkClick}
            >
              {navigation.cta.primary.label}
            </Link>
            <Link
              href={navigation.cta.secondary.href}
              className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold text-center rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
              onClick={handleLinkClick}
            >
              {navigation.cta.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
