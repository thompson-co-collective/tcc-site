import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

// Page status types
type PageStatus = 'live' | 'coming-soon';

interface PageInfo {
  path: string;
  title: string;
  description: string;
  status: PageStatus;
  children?: PageInfo[];
}

export default function SitemapPage() {
  useEffect(() => {
    document.title = "Sitemap | Thompson & Co Collective";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Complete site navigation for Thompson & Co Collective. Find all pages, services, and resources for employer brand and recruitment marketing."
      );
    }
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex';
      document.head.appendChild(meta);
    }
  }, []);

  // Sitemap structure - update as pages launch
  const sitemap: PageInfo[] = [
    {
      path: '/',
      title: 'Home',
      description: 'Thompson & Co Collective homepage',
      status: 'live',
    },
    {
      path: '/about',
      title: 'About',
      description: 'Our story, values, and team',
      status: 'live',
    },
    {
      path: '/capabilities',
      title: 'Capabilities',
      description: 'Our core service offerings',
      status: 'live',
      children: [
        {
          path: '/capabilities#employer-brand-evp',
          title: 'Employer Brand & EVP',
          description: 'Define and articulate your employee value proposition',
          status: 'live',
        },
        {
          path: '/capabilities#recruitment-marketing',
          title: 'Recruitment Marketing',
          description: 'Multi-channel strategies to attract qualified talent',
          status: 'live',
        },
        {
          path: '/capabilities#candidate-experience',
          title: 'Candidate Experience',
          description: 'Optimize every touchpoint from awareness to offer',
          status: 'live',
        },
      ],
    },
    {
      path: '/our-approach',
      title: 'Our Approach',
      description: 'How we work and what makes us different',
      status: 'live',
      children: [
        {
          path: '/attraction-diagnostic',
          title: 'Attraction Diagnostic',
          description: 'Paid evidence pass across narrative, channels, candidate experience, and credibility governance',
          status: 'live',
        },
        {
          path: '/our-approach#ai-visibility',
          title: 'AI & Visibility',
          description: 'Optimize for AI-powered search and discovery',
          status: 'live',
        },
      ],
    },
    {
      path: '/insights',
      title: 'Insights',
      description: 'Perspectives and thinking on talent attraction and employer brand',
      status: 'live',
    },
    {
      path: '/audit',
      title: 'Talent Maturity Audit',
      description: 'Self-assessment diagnostic tool to establish your talent attraction baseline',
      status: 'live',
    },
    {
      path: '/contact',
      title: 'Contact',
      description: 'Get in touch with our team',
      status: 'live',
    },
    {
      path: '/partner',
      title: 'Partner Program',
      description: 'Collaboration opportunities for agencies and consultants',
      status: 'live',
    },
  ];

  // Utility pages
  const utilityPages: PageInfo[] = [
    {
      path: '/privacy',
      title: 'Privacy Policy',
      description: 'How we handle your data',
      status: 'live',
    },
    {
      path: '/terms',
      title: 'Terms of Service',
      description: 'Terms and conditions',
      status: 'live',
    },
    {
      path: '/sitemap',
      title: 'Sitemap',
      description: 'Complete site structure',
      status: 'live',
    },
  ];

  const StatusBadge = ({ status }: { status: PageStatus }) => {
    if (status === 'live') {
      return (
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs"
          style={{
            backgroundColor: 'rgba(17, 124, 146, 0.1)',
            color: '#117C92',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
          }}
        >
          <CheckCircle size={12} />
          Live
        </span>
      );
    }
    return (
      <span
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs"
        style={{
          backgroundColor: 'rgba(170, 170, 170, 0.1)',
          color: '#888888',
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
        }}
      >
        Coming Soon
      </span>
    );
  };

  const PageItem = ({ page, isChild = false }: { page: PageInfo; isChild?: boolean }) => {
    const isExternal = page.path.startsWith('http');
    const isAnchor = page.path.includes('#');

    return (
      <div
        className={`${isChild ? 'ml-8' : ''}`}
        style={{
          borderLeft: isChild ? '2px solid #E5E5E5' : 'none',
          paddingLeft: isChild ? '1.5rem' : '0',
        }}
      >
        <div className="py-3 flex items-start justify-between gap-4 group">
          <div className="flex-1 min-w-0">
            {page.status === 'live' ? (
              isExternal ? (
                <a
                  href={page.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group/link"
                >
                  <span
                    className="group-hover/link:text-[#117C92] transition-colors"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: isChild ? '1rem' : '1.125rem',
                      fontWeight: 600,
                      color: '#0A1220',
                    }}
                  >
                    {page.title}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-gray-400 group-hover/link:text-[#117C92] transition-colors"
                  />
                </a>
              ) : (
                <Link
                  to={page.path}
                  className="group/link"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isChild ? '1rem' : '1.125rem',
                    fontWeight: 600,
                    color: '#0A1220',
                  }}
                >
                  <span className="group-hover/link:text-[#117C92] transition-colors">
                    {page.title}
                  </span>
                </Link>
              )
            ) : (
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: isChild ? '1rem' : '1.125rem',
                  fontWeight: 600,
                  color: '#888888',
                }}
              >
                {page.title}
              </span>
            )}
            <p
              className="mt-1"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: '#666666',
                lineHeight: 1.5,
              }}
            >
              {page.description}
            </p>
            {page.path && !isChild && (
              <p
                className="mt-1"
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.75rem',
                  color: '#AAAAAA',
                }}
              >
                {page.path}
              </p>
            )}
          </div>
          <StatusBadge status={page.status} />
        </div>
        {page.children && page.children.length > 0 && (
          <div className="mt-1">
            {page.children.map((child) => (
              <PageItem key={child.path} page={child} isChild />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <main id="main-content" className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 600,
              fontFamily: 'var(--font-serif)',
              color: '#0A1220',
              lineHeight: 1.2,
            }}
          >
            Sitemap
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              fontFamily: 'var(--font-sans)',
              color: '#666666',
              lineHeight: 1.6,
            }}
          >
            Complete overview of our website structure and available pages.
          </p>
        </div>

        {/* Stats Bar */}
        <div
          className="mb-12 p-6 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(17, 124, 146, 0.05), rgba(14, 90, 106, 0.05))',
            borderLeft: '4px solid #117C92',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: '#117C92',
                }}
              >
                {sitemap.filter((p) => p.status === 'live').length}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: '#666666',
                  marginTop: '0.25rem',
                }}
              >
                Live Pages
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: '#888888',
                }}
              >
                {sitemap.filter((p) => p.status === 'coming-soon').length}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: '#666666',
                  marginTop: '0.25rem',
                }}
              >
                Coming Soon
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: '#0A1220',
                }}
              >
                {sitemap.reduce((acc, p) => acc + 1 + (p.children?.length || 0), 0)}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: '#666666',
                  marginTop: '0.25rem',
                }}
              >
                Total Sections
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Pages */}
        <section className="mb-12">
          <h2
            className="mb-6 pb-3 border-b-2"
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              fontFamily: 'var(--font-serif)',
              color: '#0A1220',
              borderColor: '#E5E5E5',
            }}
          >
            Main Navigation
          </h2>
          <div className="space-y-2">
            {sitemap.map((page) => (
              <PageItem key={page.path} page={page} />
            ))}
          </div>
        </section>

        {/* Utility Pages */}
        <section>
          <h2
            className="mb-6 pb-3 border-b-2"
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              fontFamily: 'var(--font-serif)',
              color: '#0A1220',
              borderColor: '#E5E5E5',
            }}
          >
            Utility Pages
          </h2>
          <div className="space-y-2">
            {utilityPages.map((page) => (
              <PageItem key={page.path} page={page} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p
            className="mb-6"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.125rem',
              color: '#666666',
            }}
          >
            Have questions or need assistance navigating our site?
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded text-white transition-all hover:shadow-2xl hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
              boxShadow: '0 8px 24px rgba(17,124,146,.35)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: '1.0625rem',
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}