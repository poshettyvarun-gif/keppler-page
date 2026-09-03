const Logo = ({ transparent = false }: { transparent?: boolean }) => (
  <span className="brand-mark logo-3d">
    <img
      src={transparent ? "/images/keppler-logo-transparent.png" : "/images/keppler-logo.jpg"}
      alt="Keppler logo"
    />
  </span>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
          <a className="brand" href="#top" aria-label="Keppler OCR home"><Logo transparent /></a>
        <nav aria-label="Primary navigation">
          <a href="#capabilities">Platform</a><a href="#languages">Language Support</a><a href="#industries">Industries &amp; Use Cases</a>
          <a href="#security">Security &amp; Compliance</a><a href="#contact">Contact</a><a href="/about-us/">About Us</a>
        </nav>
        <div className="nav-actions"><a className="text-link" href="/login/">Login</a><a className="button small" href="/register/">Register <span>↗</span></a></div>
      </header>
      <div className="reading-rule" aria-hidden="true"><span /></div>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span>✦</span> Keppler – Multilingual AI OCR Platform</p>
          <h1>Read anything.<br /><em>In any language.</em><br />At scale.</h1>
          <p className="lede">Keppler is a standalone AI-powered OCR engine that extracts, understands, and structures text from complex, low-quality, and legacy documents with enterprise-grade accuracy, speed, and security.</p>
          <div className="hero-actions"><a className="button" href="#contact">Request a Demo <span>↗</span></a><a className="button secondary" href="#capabilities">View Platform <span>↓</span></a></div>
          <div className="trust-row"><span>AI-trained, not rule-based</span><span>Handles multilingual, low-quality, and legacy documents without brittle templates.</span><span>Built for speed, security, and accuracy at production scale.</span></div>
        </div>
        <div className="archive-hero reveal delay-1" aria-label="Keppler OCR">
          <img src="/images/keppler-archival-hero.png" alt="Keppler OCR" />
          <div className="scan-label"><span>KEPPLER OCR</span><b>AI</b><small>MULTILINGUAL DOCUMENT</small></div>
          <div className="float-card accuracy"><span>AI</span><small>AI-trained, not rule-based</small></div>
          <div className="float-card structured"><span>JSON</span><small>JSON · CSV · XML</small></div>
        </div>
      </section>
      <div className="logo-strip"><span>Keppler OCR</span><b>AI OCR</b><b>JSON · CSV · XML</b><b>BATCH · REAL-TIME</b><b>ENCRYPTED</b></div>

      <section className="section specimens" aria-labelledby="specimen-title">
        <div className="section-heading"><p className="kicker">Keppler OCR</p><h2 id="specimen-title">AI-trained, <em>not rule-based.</em></h2><p>Handles multilingual, low-quality, and legacy documents without brittle templates.</p></div>
        <div className="specimen-grid">
          <article className="specimen-card manuscript"><div className="specimen-meta"><span>01</span><b>AI OCR</b></div><div className="manuscript-lines"><i/><i/><i/><i/><i/></div><div className="margin-note">AI-trained,<br/>not rule-based</div><p>Multilingual document</p></article>
          <article className="specimen-card ledger"><div className="specimen-meta"><span>02</span><b>Output</b></div><div className="ledger-grid"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="stamp">JSON<br/>CSV · XML</div><p>JSON · CSV · XML</p></article>
          <article className="specimen-card scripts"><div className="specimen-meta"><span>03</span><b>Language Support</b></div><div className="script-lines"><b>हिन्दी</b><b>తెలుగు</b><b>தமிழ்</b><b>العربية</b></div><div className="proof-mark">Mixed-language<br/>pages supported</div><p>Mixed-language pages supported</p></article>
        </div>
      </section>

      <section className="section intro" id="capabilities">
        <div className="section-heading">
          <p className="kicker">Why Keppler</p>
          <h2>Solves multilingual, low-quality, and legacy documents with <em>AI-trained models instead of rules.</em></h2>
          <p>Keppler extracts, understands, and structures complex content while preserving tables, fields, and intent across languages and scripts.</p>
        </div>
        <div className="feature-grid three">
          <article className="feature-card peach"><span className="card-num">01</span><div className="icon">✦</div><h3>AI-first engine</h3><p>Purpose-built OCR models for multilingual and mixed-language pages.</p><a href="#capabilities">View Platform <span>→</span></a></article>
          <article className="feature-card green"><span className="card-num">02</span><div className="icon">◎</div><h3>Enterprise accuracy</h3><p>Reliable performance on low-quality scans, photos, and handwritten forms.</p><a href="#capabilities">View Platform <span>→</span></a></article>
          <article className="feature-card purple"><span className="card-num">03</span><div className="icon">⌘</div><h3>Structured outputs</h3><p>JSON, CSV, and XML with intact tables, fields, and relationships.</p><a href="#capabilities">View Platform <span>→</span></a></article>
        </div>
      </section>

      <section className="section language-section" id="languages">
        <div className="language-visual">
          <span className="atlas-title">SUPPORTED LANGUAGES</span>
          <span className="atlas-note note-a">Mixed-language<br/>pages supported</span>
          <span className="atlas-note note-b">Indian language<br/>support</span>
          <div className="orbit orbit-one">हिन्दी</div><div className="orbit orbit-two">తెలుగు</div><div className="orbit orbit-three">தமிழ்</div>
          <div className="language-core"><small>KEPPLER OCR</small><b>Multilingual<br/>document</b><span>AI OCR</span></div>
          <div className="orbit orbit-four">বাংলা</div><div className="orbit orbit-five">العربية</div><div className="orbit orbit-six">English</div>
        </div>
        <div className="language-copy">
          <p className="kicker">Supported Languages</p><h2>Global coverage with strong <em>Indian language support.</em></h2>
          <p>English, Spanish, French, Hindi, Telugu, Tamil, Kannada, Marathi, Bengali, Arabic (optional modules). Keppler supports mixed-language documents on the same page.</p>
          <div className="tag-cloud">{['English','Spanish','French','Hindi','Telugu','Tamil','Kannada','Marathi','Bengali','Arabic'].map((x)=><span key={x}>{x}</span>)}</div>
          <p className="checkline">✓ Mixed-language pages supported</p>
        </div>
      </section>

      <section className="section capabilities">
        <div className="section-heading split"><div><p className="kicker">Platform</p><h2>Core capabilities that keep your documents <em>production-ready.</em></h2></div><p>Accurate tables, special characters, and field-level confidence.</p></div>
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
        <div className="section-heading center-heading"><p className="kicker">Platform</p><h2 id="process-title">Core capabilities that keep your documents <em>production-ready.</em></h2><p>Accurate tables, special characters, and field-level confidence.</p></div>
        <div className="process-steps">
          {[
            ['I','Advanced AI OCR','High accuracy on scanned PDFs, images, and photos with layout fidelity.'],
            ['II','Multilingual & script-aware','Understands global and Indian scripts, including mixed pages.'],
            ['III','Handwritten text recognition','Reads forms, registers, and notes without custom templates.'],
            ['IV','Intelligent document structuring','Outputs JSON, CSV, and XML with preserved tables and fields.']
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
        <div className="section-heading split"><div><p className="kicker">Industries &amp; Use Cases</p><h2 id="case-study-title">Built for teams who need <em>accuracy, scale, and compliance.</em></h2></div><p>Strong Indian language OCR, scalable processing, and flexible deployments give teams the control they need.</p></div>
        <div className="case-grid">
          <article><span className="case-seal">01</span><p className="case-index">Government</p><h3>Government</h3><p>Digitize legacy citizen records and archives at speed.</p><small>Government</small></article>
          <article><span className="case-seal">02</span><p className="case-index">Banking &amp; BFSI</p><h3>Banking &amp; BFSI</h3><p>Automate KYC, forms, and statements with audit-ready outputs.</p><small>Banking &amp; BFSI</small></article>
          <article><span className="case-seal">03</span><p className="case-index">Healthcare</p><h3>Healthcare</h3><p>Process medical records, prescriptions, and EMR ingestion securely.</p><small>Healthcare</small></article>
        </div>
      </section>

      <section className="section deployment">
        <div className="section-heading"><p className="kicker">Deployment Options</p><h2>Choose cloud, on-premise, or hybrid — <em>without sacrificing control.</em></h2><p>Choose cloud, on-premise, or hybrid — without sacrificing control.</p></div>
        <div className="deploy-grid">
          <article><span>☁</span><h3>Cloud</h3><p>Fully managed, scalable, and always up-to-date.</p><small>Fully managed, scalable, and always up-to-date.</small></article>
          <article className="featured"><span>▣</span><h3>On-Premise</h3><p>Secure, air-gapped deployments for regulated workloads.</p><small>Secure, air-gapped deployments for regulated workloads.</small></article>
          <article><span>◫</span><h3>Hybrid</h3><p>Blend on-prem processing with cloud elasticity.</p><small>Blend on-prem processing with cloud elasticity.</small></article>
        </div>
      </section>

      <section className="section security" id="security">
        <div className="security-copy"><p className="kicker light">Security &amp; Compliance</p><h2>Designed for sensitive, <em>regulated data.</em></h2><p>Encryption at rest and in transit, role-based access, and audit logging are baked in. HIPAA-aligned and GDPR-ready architecture keeps your teams compliant.</p><a className="button light-button" href="#contact">Talk to Experts <span>↗</span></a></div>
        <div className="security-panel">
          {['Encryption at rest and in transit','Role-based access controls','Audit logging and traceability','HIPAA-aligned & GDPR-ready'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b><i>✓</i></div>)}
        </div>
      </section>

      <section className="section comparison">
        <div className="section-heading"><p className="kicker">Why Enterprises Choose Keppler</p><h2>Superior multilingual accuracy with an <em>API-first design and enterprise security.</em></h2></div>
        <div className="pill-row"><span>Multilingual accuracy</span><span>API-first architecture</span><span>Indian language strength</span><span>Enterprise security</span><span>Batch & real-time</span></div>
      </section>

      <section className="cta-band"><div><p className="kicker light">Keppler OCR</p><h2>Get started with <em>Keppler.</em></h2><p>Request a demo, talk to our OCR experts, or pilot Keppler on your data. Enterprise-grade OCR that is ready for production.</p></div><div className="cta-actions"><a className="button light-button" href="#contact">Request Demo <span>↗</span></a><a className="button ghost-light" href="/register/">Start a Pilot <span>→</span></a></div></section>

      <section className="section contact" id="contact">
        <div className="contact-info"><p className="kicker">Get in Touch</p><h2>Contact <em>Information.</em></h2><p>For more information about KalpraTech and our services, please visit our website or contact us at info@thekeppler.com.</p><a href="mailto:info@thekeppler.com" className="email-link">info@thekeppler.com <span>↗</span></a>
          <div className="address-grid"><address><b>USA</b>13111 Westheimer Rd., Suite 311<br/>Houston, TX, 77077</address><address><b>Nearshore Development Centre</b>Golden Triangle Mall, Ironshore, ST James<br/>Montego Bay, Jamaica</address><address><b>Offshore Development Centre</b>H No: 3-2-25/A Chaithnyapuri Enclave Colony<br/>Manikonda, Hyderabad, Telangana, 500089</address><address><b>Offshore Operations Centre</b>4th Floor, 2VRG+C9F IT Hub<br/>Siddipet, Nancharpally, Telangana 502277</address></div>
        </div>
        <form className="contact-form" action="mailto:info@thekeppler.com" method="post" encType="text/plain"><h3>Send us a message</h3><label>Full Name<input name="name" required /></label><label>Email Address<input type="email" name="email" required /></label><label>Subject<input name="subject" required /></label><label>Your Message<textarea name="message" rows={5} required /></label><button className="button" type="submit">Send Message <span>↗</span></button></form>
      </section>

      <footer><div className="footer-top"><div className="footer-brand"><a className="brand" href="#top"><Logo transparent /></a><p>Multilingual AI OCR engine that reads anything, in any language, at enterprise scale.</p></div><div><h3>Platform</h3><a href="#capabilities">Capabilities</a><a href="#languages">Language Support</a><a href="#security">Security & Compliance</a></div><div><h3>Company</h3><a href="/about-us">About Us</a><a href="#contact">Contact</a><a href="https://kalpratech.com/careers/">Careers ↗</a></div><div><h3>Developers</h3><span>API Docs</span><span>SDKs</span><a href="/contact-us">Talk to Experts</a></div></div><div className="footer-bottom"><span>© 2025 Keppler OCR. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
