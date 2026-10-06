import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 6, 2026">
      <p>
        This policy explains how {site.legalName} (DUNS {site.duns}) (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) handles information when you visit{" "}
        {site.url.replace("https://", "")} (the &ldquo;Site&rdquo;). Short
        version: we collect as little as possible.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong className="text-foreground">Nothing directly.</strong> The
          Site has no accounts, forms, cookies, or analytics of our own.
        </li>
        <li>
          <strong className="text-foreground">Email.</strong> If you email us,
          we receive your address and whatever you choose to include, and use
          it only to reply.
        </li>
        <li>
          <strong className="text-foreground">Hosting logs.</strong> Our
          hosting provider (GitHub Pages) may log technical data such as IP
          address, browser type, and pages requested for security and
          operations. See{" "}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            GitHub&apos;s privacy statement
          </a>
          .
        </li>
        <li>
          <strong className="text-foreground">Fonts.</strong> Fonts are
          self-hosted with the Site, so no third-party font requests are made.
        </li>
      </ul>

      <h2>2. How we use it</h2>
      <p>
        To respond to messages and to keep the Site running and secure. We
        don&apos;t sell, rent, or share personal information for advertising.
      </p>

      <h2>3. Third-party sites</h2>
      <p>
        Links to external projects take you to sites with their own privacy
        practices. This policy doesn&apos;t cover them.
      </p>

      <h2>4. Retention</h2>
      <p>
        We keep email correspondence only as long as needed to deal with it,
        or as required by law.
      </p>

      <h2>5. Your rights</h2>
      <p>
        Depending on where you live (for example under the GDPR or CCPA), you
        may have the right to access, correct, or delete personal information
        we hold about you, or to object to how we use it. Email us and
        we&apos;ll help.
      </p>

      <h2>6. Children</h2>
      <p>
        The Site isn&apos;t directed at children under 13, and we don&apos;t
        knowingly collect their information.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update this policy. The date at the top shows the latest
        revision.
      </p>

      <h2>8. Contact</h2>
      <p>
        Privacy questions or requests:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        {site.legalName} · DUNS {site.duns}
      </p>
    </LegalPage>
  );
}
