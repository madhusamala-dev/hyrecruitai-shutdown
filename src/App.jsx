import React, { useState } from 'react';
import logoImg from './assets/logo.png';

export default function App() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const handleCopy = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2500);
      }).catch(() => {
        // Fallback if clipboard API is restricted
        prompt('Copy email address:', text);
      });
    } else {
      prompt('Copy email address:', text);
    }
  };

  const faqs = [
    {
      q: "What is the reason for the HyRecruitAI platform discontinuation?",
      a: "Following an internal strategic review, HyRecruitAI has ceased all commercial, research, and technical operations. All hosted AI recruitment and talent screening services have been permanently discontinued."
    },
    {
      q: "Were any user accounts, resumes, or candidate profiles created or stored?",
      a: "No. There were zero registered users on the HyRecruitAI platform during its operational existence. No candidate accounts, recruiter databases, user profiles, or credentials were created or stored."
    },
    {
      q: "Have all residual server logs and system backups been permanently deleted?",
      a: "In compliance with strict regulatory transparency standards, we do not claim that all ancillary system logs or routine disaster-recovery backups have been deleted unless independently verified. While the primary hosting infrastructure has been shut down, any residual diagnostic logs or backup snapshots expire automatically in accordance with standard infrastructure lifecycle schedules and are not processed for any operational or recruiting activities."
    },
    {
      q: "How long will this closure notice remain available online?",
      a: "This official public decommissioning notice and the associated contact channels will remain active and publicly accessible until 21 October 2026."
    },
    {
      q: "How do I submit a formal privacy or data protection inquiry?",
      a: "You may reach out to our dedicated privacy contact channel at madhu@hyrecruitai.com. Inquiries regarding statutory rights under GDPR, CCPA, or applicable regional data privacy frameworks will be reviewed promptly."
    },
    {
      q: "Who should I contact for general administrative or technical inquiries?",
      a: "For all general or administrative correspondence regarding HyRecruitAI, please direct your inquiry to madhu@hyrecruitai.com."
    }
  ];

  return (
    <>
      {/* Pure CSS Ambient Glow Backdrop */}
      <div className="bg-ambient" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <main className="page-wrapper">
        {/* Site Header & Official Status Bar */}
        <header className="site-header">
          <div className="notice-status-bar" role="region" aria-label="Notice Status">
            <div className="status-indicator">
              <span className="pulse-dot" aria-hidden="true"></span>
              <span>Official Notice: Operations Discontinued</span>
            </div>
            <div className="notice-validity">
              <span>Public Notice Window: Active through <strong>21 October 2026</strong></span>
            </div>
          </div>

          <div className="nav-brand-container">
            <div className="logo-wrapper">
              <img
                src={logoImg}
                alt="HyRecruitAI Logo"
                className="brand-logo-img"
                width="600"
                height="127"
                loading="eager"
              />
            </div>
            <div className="brand-badge">
              Platform Decommissioned
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section" aria-labelledby="main-heading">
          <div className="kicker-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Service Sunset Notice
          </div>

          <h1 id="main-heading" className="main-heading">
            HyRecruitAI Operations Have Been <span className="gradient-text">Permanently Discontinued</span>
          </h1>

          <p className="hero-lead">
            Please be advised that HyRecruitAI has ceased all operational, commercial, and technical activities. 
            All platform services, applicant screening workflows, and related systems have been permanently decommissioned.
          </p>

          {/* Key Facts Triple Cards */}
          <div className="key-facts-grid" role="region" aria-label="Key Facts Summary">
            <article className="fact-card highlight-blue">
              <div className="fact-card-header">
                <div className="fact-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                  </svg>
                </div>
                <h2 className="fact-title">Platform Discontinued</h2>
              </div>
              <p className="fact-detail">
                All HyRecruitAI services and infrastructure have been fully taken offline and permanently retired.
              </p>
            </article>

            <article className="fact-card highlight-green">
              <div className="fact-card-header">
                <div className="fact-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="18" y1="8" x2="23" y2="13"></line>
                    <line x1="23" y1="8" x2="18" y2="13"></line>
                  </svg>
                </div>
                <h2 className="fact-title">Zero Registered Users</h2>
              </div>
              <p className="fact-detail">
                There were <strong>no registered users</strong> on the HyRecruitAI platform during its operational existence.
              </p>
            </article>

            <article className="fact-card highlight-amber">
              <div className="fact-card-header">
                <div className="fact-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h2 className="fact-title">Notice Availability</h2>
              </div>
              <p className="fact-detail">
                This official closure statement and contact points remain available until <strong>21 October 2026</strong>.
              </p>
            </article>
          </div>
        </section>

        {/* Detailed Closure Statement Section */}
        <section className="section-container" aria-labelledby="statement-title">
          <div className="section-title-wrap">
            <span className="section-label">Official Declaration</span>
            <h2 id="statement-title" className="section-title">Closure Summary & Operational Status</h2>
            <p className="section-subtitle">Formal record of platform retirement and system deactivation.</p>
          </div>

          <div className="content-card">
            <p className="text-paragraph">
              HyRecruitAI was originally conceived to provide AI-assisted recruitment tools and automated candidate screening workflows. 
              Following an executive assessment, the decision was made to bring all platform operations, maintenance, and technical developments to a definitive close.
            </p>
            <p className="text-paragraph">
              <strong>User Account Clarification:</strong> We formally confirm that <strong>there were no registered users</strong> on the HyRecruitAI platform. 
              No public or enterprise customer accounts were provisioned, and no recruitment pipelines or applicant databases are active.
            </p>
            <p className="text-paragraph">
              All public access to platform functions has been permanently disabled. Visitors to this domain will only find this static decommissioning record.
            </p>
          </div>
        </section>

        {/* Dedicated Privacy Enquiry Section */}
        <section className="section-container" id="privacy-section" aria-labelledby="privacy-heading">
          <div className="section-title-wrap">
            <span className="section-label">Data Protection & Privacy</span>
            <h2 id="privacy-heading" className="section-title">Dedicated Privacy Enquiry Section</h2>
            <p className="section-subtitle">Information on statutory privacy compliance, data handling, and Data Subject Access Requests (DSAR).</p>
          </div>

          <div className="content-card">
            <div className="privacy-grid">
              {/* Privacy Handling Statement */}
              <div className="privacy-subcard">
                <div className="privacy-subcard-header">
                  <div className="privacy-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="privacy-subcard-title">Data Handling & Transparent Decommissioning</h3>
                </div>
                <p className="text-paragraph">
                  Because <strong>no registered users</strong> existed on HyRecruitAI, no candidate databases, resume files, account passwords, or recruiter profiles were ever established.
                </p>
                <div className="callout-box amber">
                  <strong>Verification Statement:</strong> In strict accordance with privacy reporting principles, we do not claim that all routine system logs, diagnostic telemetry, or infrastructure backups have been deleted unless independently verified. Any remaining server snapshots expire automatically according to standard cloud retention lifecycles and will not be accessed or processed.
                </div>
              </div>

              {/* DSAR & Privacy Contact Card */}
              <div className="privacy-subcard">
                <div className="privacy-subcard-header">
                  <div className="privacy-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <h3 className="privacy-subcard-title">Submitting a Privacy Enquiry</h3>
                </div>
                <p className="text-paragraph">
                  Individuals seeking confirmation or exercising statutory rights under GDPR, CCPA, or applicable data protection laws may submit inquiries directly to our privacy desk.
                </p>
                <div className="callout-box">
                  <strong>Privacy Response Window:</strong> Formal privacy enquiries receive an acknowledgment and review within statutory timeframes (normally 30 calendar days).
                </div>
              </div>
            </div>

            {/* Privacy Channel Contact Details */}
            <div className="contact-channels-grid">
              <div className="contact-card">
                <div className="contact-card-top">
                  <span className="contact-badge badge-privacy">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    Dedicated Privacy Channel
                  </span>
                  <h3 className="contact-title">Data Protection & Privacy Desk</h3>
                  <p className="contact-desc">
                    For statutory data inquiries, compliance verification, or Data Subject Access Requests (DSAR).
                  </p>
                </div>

                <div className="email-display-box">
                  <span className="email-address-text">madhu@hyrecruitai.com</span>
                </div>

                <div className="contact-actions">
                  <button
                    type="button"
                    className={`btn ${copiedKey === 'privacy' ? 'btn-success' : 'btn-secondary'}`}
                    onClick={() => handleCopy('madhu@hyrecruitai.com', 'privacy')}
                    aria-label="Copy privacy email to clipboard"
                  >
                    {copiedKey === 'privacy' ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Copied to Clipboard
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copy Privacy Email
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:madhu@hyrecruitai.com?subject=HyRecruitAI%20Privacy%20Enquiry"
                    className="btn btn-primary"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Email Privacy Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Support Section */}
        <section className="section-container" id="support-section" aria-labelledby="support-heading">
          <div className="section-title-wrap">
            <span className="section-label">General Communications</span>
            <h2 id="support-heading" className="section-title">Support & Administrative Correspondence</h2>
            <p className="section-subtitle">Dedicated support contact for general inquiries regarding the closure of HyRecruitAI.</p>
          </div>

          <div className="content-card">
            <div className="contact-channels-grid">
              <div className="contact-card">
                <div className="contact-card-top">
                  <span className="contact-badge badge-support">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Official Support Contact
                  </span>
                  <h3 className="contact-title">Administrative & General Support</h3>
                  <p className="contact-desc">
                    For corporate correspondence, vendor reconciliation, or general questions regarding the platform closure.
                  </p>
                </div>

                <div className="email-display-box">
                  <span className="email-address-text">madhu@hyrecruitai.com</span>
                </div>

                <div className="contact-actions">
                  <button
                    type="button"
                    className={`btn ${copiedKey === 'support' ? 'btn-success' : 'btn-secondary'}`}
                    onClick={() => handleCopy('madhu@hyrecruitai.com', 'support')}
                    aria-label="Copy support email to clipboard"
                  >
                    {copiedKey === 'support' ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Copied to Clipboard
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copy Support Email
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:madhu@hyrecruitai.com?subject=HyRecruitAI%20General%20Support%20Inquiry"
                    className="btn btn-primary"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Send Email to Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decommission Milestones & Timeline */}
        <section className="section-container" aria-labelledby="timeline-heading">
          <div className="section-title-wrap">
            <span className="section-label">Transition Schedule</span>
            <h2 id="timeline-heading" className="section-title">Decommissioning Milestones</h2>
            <p className="section-subtitle">Chronological record of the shutdown lifecycle and public notice retention.</p>
          </div>

          <div className="content-card">
            <div className="timeline-track" role="list">
              <div className="timeline-item" role="listitem">
                <span className="timeline-node done" aria-hidden="true"></span>
                <span className="timeline-date">Phase 1 • Initial Operations</span>
                <h3 className="timeline-title">Platform Development & Testing</h3>
                <p className="timeline-desc">
                  HyRecruitAI infrastructure established. Zero registered user accounts were created or onboarded during operations.
                </p>
              </div>

              <div className="timeline-item" role="listitem">
                <span className="timeline-node done" aria-hidden="true"></span>
                <span className="timeline-date">Phase 2 • Service Discontinuation</span>
                <h3 className="timeline-title">Permanent Infrastructure Deactivation</h3>
                <p className="timeline-desc">
                  All active AI recruitment pipelines, screening algorithms, and platform services permanently taken offline.
                </p>
              </div>

              <div className="timeline-item" role="listitem">
                <span className="timeline-node active" aria-hidden="true"></span>
                <span className="timeline-date">Phase 3 • Active Notice Window (Current)</span>
                <h3 className="timeline-title">Public Decommissioning Notice Available</h3>
                <p className="timeline-desc">
                  This static official notice and inquiry contact channels will remain active and publicly accessible through <strong>21 October 2026</strong>.
                </p>
              </div>

              <div className="timeline-item" role="listitem">
                <span className="timeline-node" aria-hidden="true"></span>
                <span className="timeline-date">Phase 4 • Final Sunset</span>
                <h3 className="timeline-title">Archival & Domain Transition</h3>
                <p className="timeline-desc">
                  Following 21 October 2026, the public notification period concludes, completing all platform sunset obligations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions (Interactive Accordion) */}
        <section className="section-container" aria-labelledby="faq-heading">
          <div className="section-title-wrap">
            <span className="section-label">Questions & Answers</span>
            <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Answers regarding platform discontinuation, data handling, and notice duration.</p>
          </div>

          <div className="faq-list" role="region" aria-label="FAQ Accordion">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon-chevron" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className="faq-content"
                    >
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Official Notice Verification Card */}
        <section className="verification-meta-card" aria-label="Document Metadata">
          <div className="meta-group">
            <span>Notice Identifier</span>
            <span>HYR-DECOMMISSION-2026</span>
          </div>
          <div className="meta-group">
            <span>Entity Covered</span>
            <span>HyRecruitAI</span>
          </div>
          <div className="meta-group">
            <span>Registered Users</span>
            <span>Zero (0)</span>
          </div>
          <div className="meta-group">
            <span>Notice Validity End Date</span>
            <span>21 October 2026</span>
          </div>
          <div className="meta-group">
            <span>Hosting Architecture</span>
            <span>Standalone Static (Zero External Dependencies)</span>
          </div>
        </section>

        {/* Site Footer */}
        <footer className="site-footer">
          <div className="footer-links">
            <a href="#privacy-section" className="footer-link">Privacy Section</a>
            <a href="#support-section" className="footer-link">Support Contact</a>
            <a href="mailto:madhu@hyrecruitai.com" className="footer-link">madhu@hyrecruitai.com</a>
          </div>

          <p className="footer-copy">
            &copy; 2026 HyRecruitAI. All operations discontinued. This standalone static notice will remain online until 21 October 2026.
          </p>

          <span className="zero-dependencies-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            No external APIs • No cookies • No analytics tracking
          </span>
        </footer>
      </main>
    </>
  );
}
