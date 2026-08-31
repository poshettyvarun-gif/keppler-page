const Logo = () => (
  <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Keppler OCR home"><Logo /><span>Keppler <b>OCR</b></span></a>
        <nav aria-label="Primary navigation">
          <a href="#capabilities">Platform</a><a href="#languages">Languages</a><a href="#industries">Solutions</a>
          <a href="#security">Security</a><a href="#contact">Contact</a><a href="/about-us/">About Us</a>
        </nav>
        <div className="nav-actions"><a className="text-link" href="/login/">Login</a><a className="button small" href="/register/">Register <span>↗</span></a></div>
      </header>
      <div className="reading-rule" aria-hidden="true"><span /></div>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span>✦</span> Keppler — Multilingual AI OCR Platform</p>
          <h1>Read anything.<br /><em>In any language.</em><br />At scale.</h1>
          <p className="lede">Keppler is a standalone AI-powered OCR engine that extracts, understands, and structures text from complex, low-quality, and legacy documents with enterprise-grade accuracy, speed, and security.</p>
          <div className="hero-actions"><a className="button" href="#contact">Request a Demo <span>↗</span></a><a className="button secondary" href="#capabilities">View Platform <span>↓</span></a></div>
          <div className="trust-row"><span>AI-trained, not rule-based</span><span>Enterprise-grade delivery</span><span>Cloud · On-prem · Hybrid</span></div>
        </div>
        <div className="archive-hero reveal delay-1" aria-label="Keppler OCR processing a historical multilingual document">
          <img src="/images/keppler-archival-hero.png" alt="Open archival book being scanned and converted into structured data" />
          <div className="scan-label"><span>KEPPLER FIELD SCAN</span><b>01</b><small>DOCUMENT → DATA</small></div>
          <div className="float-card accuracy"><span>98.6%</span><small>field confidence</small></div>
          <div className="float-card structured"><span>✦</span><small>Tables structured</small></div>
        </div>
      </section>
      <div className="logo-strip"><span>Built for the documents others can’t read</span><b>LOW-QUALITY SCANS</b><b>HANDWRITING</b><b>MIXED SCRIPTS</b><b>LEGACY ARCHIVES</b></div>

      <section className="section specimens" aria-labelledby="specimen-title">
        <div className="section-heading"><p className="kicker">Document Specimens</p><h2 id="specimen-title">From difficult pages to <em>dependable data.</em></h2><p>See how Keppler handles the formats where generic OCR breaks down: imperfect scans, handwriting, complex tables, and mixed scripts.</p></div>
        <div className="specimen-grid">
          <article className="specimen-card manuscript"><div className="specimen-meta"><span>SPECIMEN 01</span><b>Legacy records</b></div><div className="manuscript-lines"><i/><i/><i/><i/><i/></div><div className="margin-note">low contrast<br/>restored</div><p>Low-quality scans</p></article>
          <article className="specimen-card ledger"><div className="specimen-meta"><span>SPECIMEN 02</span><b>Field ledger</b></div><div className="ledger-grid"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="stamp">TABLE<br/>FOUND</div><p>Tables & fields</p></article>
          <article className="specimen-card scripts"><div className="specimen-meta"><span>SPECIMEN 03</span><b>Language plate</b></div><div className="script-lines"><b>हिन्दी</b><b>తెలుగు</b><b>தமிழ்</b><b>العربية</b></div><div className="proof-mark">mixed script<br/>verified</div><p>Multilingual pages</p></article>
        </div>
      </section>

      <section className="section intro" id="capabilities">
        <div className="section-heading">
          <p className="kicker">Why Keppler</p>
          <h2>Complex documents in.<br /><em>Clean, useful data out.</em></h2>
          <p>Keppler extracts, understands, and structures complex content while preserving tables, fields, and intent across languages and scripts.</p>
        </div>
        <div className="feature-grid three">
          <article className="feature-card peach"><span className="card-num">01</span><div className="icon">✦</div><h3>AI-first engine</h3><p>Purpose-built OCR models for multilingual and mixed-language pages.</p><a href="#capabilities">Explore platform <span>→</span></a></article>
          <article className="feature-card green"><span className="card-num">02</span><div className="icon">◎</div><h3>Enterprise accuracy</h3><p>Reliable performance on low-quality scans, photos, and handwritten forms.</p><a href="#capabilities">See capabilities <span>→</span></a></article>
          <article className="feature-card purple"><span className="card-num">03</span><div className="icon">⌘</div><h3>Structured outputs</h3><p>JSON, CSV, and XML with intact tables, fields, and relationships.</p><a href="#capabilities">View outputs <span>→</span></a></article>
        </div>
      </section>

      <section className="section language-section" id="languages">
        <div className="language-visual">
          <span className="atlas-title">LINGUISTIC ATLAS · PLATE VII</span>
          <span className="atlas-note note-a">scripts observed<br/>on one page</span>
          <span className="atlas-note note-b">index &amp; cross-reference</span>
          <div className="orbit orbit-one">हिन्दी</div><div className="orbit orbit-two">తెలుగు</div><div className="orbit orbit-three">தமிழ்</div>
          <div className="language-core"><small>ONE PAGE</small><b>Any script.</b><span>Mixed-language<br/>ready</span></div>
          <div className="orbit orbit-four">বাংলা</div><div className="orbit orbit-five">العربية</div><div className="orbit orbit-six">English</div>
        </div>
        <div className="language-copy">
          <p className="kicker">Supported Languages</p><h2>Global coverage with strong <em>Indian language support.</em></h2>
          <p>English, Spanish, French, Hindi, Telugu, Tamil, Kannada, Marathi, Bengali, and Arabic through optional modules. Keppler supports mixed-language documents on the same page.</p>
          <div className="tag-cloud">{['English','Spanish','French','Hindi','Telugu','Tamil','Kannada','Marathi','Bengali','Arabic'].map((x)=><span key={x}>{x}</span>)}</div>
          <p className="checkline">✓ Mixed-language pages supported</p>
        </div>
      </section>

      <section className="section capabilities">
        <div className="section-heading split"><div><p className="kicker">Platform</p><h2>Everything your documents need to become <em>production-ready.</em></h2></div><p>From first scan to structured output, Keppler combines accuracy, context, and format fidelity in one enterprise engine.</p></div>
        <div className="cap-grid">
          {[
            ['⌁','Advanced AI OCR','High accuracy on scanned PDFs, images, and photos with layout fidelity.'],
            ['文','Multilingual & script-aware','Understands global and Indian scripts, including mixed pages.'],
            ['✎','Handwritten text recognition','Reads forms, registers, and notes without custom templates.'],
            ['▦','Intelligent document structuring','Outputs JSON, CSV, and XML with preserved tables and fields.'],
            ['↔','Enterprise APIs','REST APIs for batch pipelines and real-time processing.'],
            ['✓','Output you can trust','Accurate tables, special characters, and field-level confidence.']
          ].map(([icon,title,copy],i)=><article className="cap-card" key={title}><span className="card-num">0{i+1}</span><div className="icon">{icon}</div><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="section process" aria-labelledby="process-title">
        <div className="section-heading center-heading"><p className="kicker">The Keppler Method</p><h2 id="process-title">A scientific workflow for <em>every document.</em></h2><p>One clear path from an archival original to an output your systems can use.</p></div>
        <div className="process-steps">
          {[
            ['I','Scan','Ingest PDFs, images, photos, and difficult legacy material.'],
            ['II','Recognize','Read multilingual, handwritten, and low-quality pages with AI-trained models.'],
            ['III','Structure','Preserve tables, fields, relationships, and document context.'],
            ['IV','Deliver','Send trustworthy JSON, CSV, XML, batch, or real-time outputs.']
          ].map(([number,title,copy])=><article key={title}><span className="process-number">{number}</span><span className="process-node">✦</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="section industries" id="industries">
        <div className="section-heading"><p className="kicker">Industries & Use Cases</p><h2>Built for teams who need <em>accuracy, scale, and compliance.</em></h2></div>
        <div className="industry-list">
          {[
            ['01','Government','Digitize legacy citizen records and archives at speed.','Archives · Citizen records'],
            ['02','Healthcare','Process medical records, prescriptions, and EMR ingestion securely.','Prescriptions · EMR'],
            ['03','Banking & BFSI','Automate KYC, forms, and statements with audit-ready outputs.','KYC · Statements'],
            ['04','Legal','Turn contracts, affidavits, and court records into searchable data.','Contracts · Court records'],
            ['05','Oil & Gas','Extract technical logs, reports, and legacy field data.','Logs · Field reports'],
            ['06','Enterprise ops','Standardize document processing across teams and regions.','Forms · Operations']
          ].map(([n,title,copy,tags])=><article key={title}><span>{n}</span><h3>{title}</h3><p>{copy}</p><small>{tags}</small><b>↗</b></article>)}
        </div>
      </section>

      <section className="section case-studies" aria-labelledby="case-study-title">
        <div className="section-heading split"><div><p className="kicker">Archive Notes</p><h2 id="case-study-title">Enterprise complexity, <em>made legible.</em></h2></div><p>A record of the document work Keppler is designed to make easier: accurate, scalable, and ready for regulated environments.</p></div>
        <div className="case-grid">
          <article><span className="case-seal">GOV</span><p className="case-index">CASE FILE 01 / PUBLIC RECORDS</p><h3>From archive shelf to searchable record.</h3><p>Digitize legacy citizen records and archives at speed while preserving essential fields and context.</p><small>Government · Legacy archives</small></article>
          <article><span className="case-seal">BFSI</span><p className="case-index">CASE FILE 02 / REGULATED FORMS</p><h3>Audit-ready data from every critical page.</h3><p>Automate KYC, forms, and statements with the traceability demanded by banking and BFSI teams.</p><small>Banking · KYC · Statements</small></article>
          <article><span className="case-seal">HLTH</span><p className="case-index">CASE FILE 03 / CLINICAL MATERIAL</p><h3>Make sensitive medical material usable.</h3><p>Process records, prescriptions, and EMR ingestion securely across complex and handwritten inputs.</p><small>Healthcare · Prescriptions · EMR</small></article>
        </div>
      </section>

      <section className="section deployment">
        <div className="section-heading"><p className="kicker">Deployment Options</p><h2>Your infrastructure.<br/><em>Your level of control.</em></h2><p>Choose cloud, on-premise, or hybrid — without sacrificing control.</p></div>
        <div className="deploy-grid">
          <article><span>☁</span><h3>Cloud</h3><p>Fully managed, scalable, and always up-to-date.</p><small>Fastest to deploy</small></article>
          <article className="featured"><span>▣</span><h3>On-Premise</h3><p>Secure, air-gapped deployments for regulated workloads.</p><small>Maximum control</small></article>
          <article><span>◫</span><h3>Hybrid</h3><p>Blend on-prem processing with cloud elasticity.</p><small>Flexible at scale</small></article>
        </div>
      </section>

      <section className="section security" id="security">
        <div className="security-copy"><p className="kicker light">Security & Compliance</p><h2>Designed for sensitive, <em>regulated data.</em></h2><p>Encryption at rest and in transit, role-based access, and audit logging are baked in. HIPAA-aligned and GDPR-ready architecture keeps your teams compliant.</p><a className="button light-button" href="#contact">Talk to our security team <span>↗</span></a></div>
        <div className="security-panel">
          {['Encryption at rest and in transit','Role-based access controls','Audit logging and traceability','HIPAA-aligned & GDPR-ready'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b><i>✓</i></div>)}
        </div>
      </section>

      <section className="section comparison">
        <div className="section-heading"><p className="kicker">Why Enterprises Choose Keppler</p><h2>The multilingual OCR engine built for <em>real-world complexity.</em></h2></div>
        <div className="pill-row"><span>Multilingual accuracy</span><span>API-first architecture</span><span>Indian language strength</span><span>Enterprise security</span><span>Batch & real-time</span></div>
      </section>

      <section className="cta-band"><div><p className="kicker light">Start with your hardest document</p><h2>Get started with <em>Keppler.</em></h2><p>Request a demo, talk to our OCR experts, or pilot Keppler on your data.</p></div><div className="cta-actions"><a className="button light-button" href="#contact">Request Demo <span>↗</span></a><a className="button ghost-light" href="/register/">Start a Pilot <span>→</span></a></div></section>

      <section className="section contact" id="contact">
        <div className="contact-info"><p className="kicker">Get in Touch</p><h2>Let’s make your documents <em>useful.</em></h2><p>Tell us what you’re processing and where the complexity lies. Our OCR experts will help you find the right path.</p><a href="mailto:info@thekeppler.com" className="email-link">info@thekeppler.com <span>↗</span></a>
          <div className="address-grid"><address><b>USA</b>13111 Westheimer Rd., Suite 311<br/>Houston, TX, 77077</address><address><b>Nearshore Development Centre</b>Golden Triangle Mall, Ironshore, ST James<br/>Montego Bay, Jamaica</address><address><b>Offshore Development Centre</b>H No: 3-2-25/A Chaithnyapuri Enclave Colony<br/>Manikonda, Hyderabad, Telangana, 500089</address><address><b>Offshore Operations Centre</b>4th Floor, 2VRG+C9F IT Hub<br/>Siddipet, Nancharpally, Telangana 502277</address></div>
        </div>
        <form className="contact-form" action="mailto:info@thekeppler.com" method="post" encType="text/plain"><h3>Send us a message</h3><label>Full Name<input name="name" placeholder="Your full name" required /></label><label>Email Address<input type="email" name="email" placeholder="you@company.com" required /></label><label>Subject<input name="subject" placeholder="How can we help?" required /></label><label>Your Message<textarea name="message" placeholder="Tell us about your documents..." rows={5} required /></label><button className="button" type="submit">Send Message <span>↗</span></button></form>
      </section>

      <footer><div className="footer-top"><div className="footer-brand"><a className="brand" href="#top"><Logo/><span>Keppler <b>OCR</b></span></a><p>Multilingual AI OCR engine that reads anything, in any language, at enterprise scale.</p></div><div><h3>Platform</h3><a href="#capabilities">Capabilities</a><a href="#languages">Language Support</a><a href="#security">Security & Compliance</a></div><div><h3>Company</h3><a href="/about-us">About Us</a><a href="#contact">Contact</a><a href="https://kalpratech.com/careers/">Careers ↗</a></div><div><h3>Developers</h3><span>API Docs</span><span>SDKs</span><a href="/contact-us">Talk to Experts</a></div></div><div className="footer-bottom"><span>© 2025 Keppler OCR. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
