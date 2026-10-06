import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="October 6, 2026">
      <p>
        These terms govern your use of {site.url.replace("https://", "")} (the
        &ldquo;Site&rdquo;), operated by {site.legalName} (DUNS {site.duns}) (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;). By using the Site you agree to these terms. If you
        don&apos;t agree, please don&apos;t use it.
      </p>

      <h2>1. What this Site is</h2>
      <p>
        The Site is an informational portfolio. It describes projects we have
        built or contributed to and links out to them. It does not offer any
        product, service, account, or transaction directly.
      </p>

      <h2>2. Third-party projects and links</h2>
      <p>
        The Site links to external websites and protocols, including
        decentralized finance applications. Those are governed by their own
        terms and policies. We don&apos;t control them and aren&apos;t
        responsible for their content, availability, or behavior. Your use of
        any linked project is at your own risk.
      </p>

      <h2>3. No financial advice</h2>
      <p>
        Nothing on the Site is financial, investment, legal, or tax advice, or
        an offer or solicitation to buy or sell any asset. Digital assets and
        DeFi protocols carry significant risk, including total loss of funds.
        Do your own research.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        Unless stated otherwise, the Site&apos;s content, name, and design
        belong to {site.legalName}. You may link to the Site, but you may not
        copy or reuse its content in a way that suggests endorsement or
        affiliation without our permission. Open-source code we publish is
        licensed under the terms in its own repository.
      </p>

      <h2>5. Acceptable use</h2>
      <p>
        Don&apos;t use the Site to break the law, interfere with its operation,
        or attempt to gain unauthorized access to any system.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        The Site is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo;, without warranties of any kind, express or implied.
        We don&apos;t guarantee that information on the Site is accurate,
        complete, or current.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.legalName} will not be
        liable for any indirect, incidental, special, or consequential damages,
        or any loss of profits, data, or digital assets, arising from your use
        of the Site or any linked project.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update these terms at any time. The date at the top of this page
        shows when they last changed. Continued use of the Site means you
        accept the updated terms.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about these terms:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        {site.legalName} · DUNS {site.duns}
      </p>
    </LegalPage>
  );
}
