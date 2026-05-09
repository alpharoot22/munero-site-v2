import type { Metadata } from "next";
import {
  GuideShell,
  GuideHero,
  TableOfContents,
  Callout,
  AlsoInSeries,
  MuneroCTA,
} from "../../../components/guides/GuidePrimitives";

export const metadata: Metadata = {
  title: "How to Build Your First Email Campaign | Munero Guides",
  description:
    "Step-by-step for first-time email marketers. List building, segmentation, subject lines, send timing, and the metrics that actually matter.",
};

const TOC = [
  { id: "list-building", label: "List building, before you can send anything" },
  { id: "platform", label: "Choosing an email platform" },
  { id: "automations", label: "Your first three automations" },
  { id: "subject-lines", label: "Writing subject lines that get opened" },
  { id: "design", label: "Email design, simple beats beautiful" },
  { id: "segmentation", label: "Segmentation from day one" },
  { id: "measure", label: "What to measure and when to optimize" },
  { id: "calendar", label: "The email marketing calendar for beginners" },
];

export default function EmailGuide() {
  return (
    <GuideShell>
      <GuideHero
        platform="Email Marketing"
        title="How to Build Your First Email Campaign"
        description="List building, segmentation, subject lines, and the metrics that actually move revenue. For people doing it themselves for the first time."
        readTime="9 min read"
      />

      <TableOfContents items={TOC} />

      <article className="guide-content">
        <h2 id="list-building">List building, before you can send anything</h2>
        <p>
          A list of <span className="guide-stat">500</span> people who asked to
          hear from you outperforms a list of 50,000 you scraped, every time.
          Resist the temptation to buy or rent.
        </p>
        <p>The four sources that work:</p>
        <ul>
          <li>
            <strong>Site signups</strong> with a real reason (a useful PDF, a
            tool, a discount). Not a generic newsletter checkbox.
          </li>
          <li>
            <strong>Post-purchase</strong> capture for e-commerce. The highest
            engagement list you&apos;ll ever build.
          </li>
          <li>
            <strong>Lead magnets</strong> on landing pages running paid traffic.
          </li>
          <li>
            <strong>Content opt-ins</strong> at the end of articles or videos
            you produce.
          </li>
        </ul>
        <Callout label="Always use double opt-in">
          Send a confirmation email after signup. People who confirm engage
          5 to 10x more than people who don&apos;t. Worse deliverability later
          on a single-opt-in list isn&apos;t worth the extra subscriber.
        </Callout>

        <h2 id="platform">Choosing an email platform</h2>
        <p>
          Don&apos;t over-engineer this. Three useful brackets:
        </p>
        <ul>
          <li>
            <strong>Free / under 1,000 subscribers:</strong> Beehiiv,
            Substack, or MailerLite. All have a generous free tier and clean
            editors.
          </li>
          <li>
            <strong>1,000 to 10,000 subscribers:</strong> Klaviyo if e-commerce,
            ConvertKit if creator/B2B, Customer.io if SaaS with product events.
          </li>
          <li>
            <strong>10,000+:</strong> by this point you have data telling you
            what you need. Migrating later is annoying but doable.
          </li>
        </ul>
        <p>
          What actually matters across all of them:{" "}
          <strong>deliverability</strong> (do emails land in inbox or
          promotions),{" "}
          <strong>automation flexibility</strong> (can you build behavior-based
          flows), and{" "}
          <strong>list health tools</strong> (sunset rules, engagement
          segmentation).
        </p>

        <h2 id="automations">Your first three automations</h2>
        <p>
          Before sending a single broadcast, set up three automations. They
          will outperform every campaign you run for the next year.
        </p>
        <h3>1. Welcome series (3 to 5 emails)</h3>
        <p>
          Triggered when someone joins the list. The first email confirms the
          subscription and delivers any promised lead magnet. Emails 2 to 5,
          spaced 2 to 3 days apart, tell the brand story, share useful
          content, and end with a soft offer.
        </p>
        <h3>2. Abandoned cart / abandoned signal (3 emails)</h3>
        <p>
          For e-commerce, abandoned cart. For SaaS, abandoned signup or
          abandoned trial. Email 1 at 1 hour, email 2 at 24 hours, email 3 at
          72 hours. This single flow typically recovers 5 to 15% of abandoned
          revenue.
        </p>
        <h3>3. Post-purchase / post-conversion (2 to 3 emails)</h3>
        <p>
          Thank the buyer, set expectations, ask for a review at day 14, offer
          a re-purchase incentive at day 60. The cheapest revenue you&apos;ll
          ever generate.
        </p>

        <h2 id="subject-lines">Writing subject lines that get opened</h2>
        <p>
          The job of the subject line is to earn the open. That&apos;s it. Not
          to sell, not to inform, just to earn the click.
        </p>
        <ul>
          <li>
            <strong>Length:</strong>{" "}
            <span className="guide-stat">28 to 50</span> characters. Mobile
            inboxes truncate beyond that.
          </li>
          <li>
            <strong>Lowercase</strong> often outperforms title case in 2026.
            Reads as personal, not promotional.
          </li>
          <li>
            <strong>Specific beats clever.</strong> &ldquo;3 changes that cut
            our CAC by 40%&rdquo; beats &ldquo;A new chapter for our brand.&rdquo;
          </li>
          <li>
            <strong>One thing.</strong> Subject lines that promise multiple
            things rarely earn the open. Pick the highest-leverage angle.
          </li>
          <li>
            <strong>Test the preheader.</strong> The preview text is half of
            what gets the open on mobile. Don&apos;t leave it empty.
          </li>
        </ul>

        <h2 id="design">Email design, simple beats beautiful</h2>
        <p>
          The highest-converting marketing emails of 2026 look like personal
          emails. One column. Plain text or near-plain. No banner image at
          the top. No 4-column footer.
        </p>
        <ul>
          <li>
            <strong>One CTA per email.</strong> Multiple links dilute the
            click. Pick the one action you want and ask for it.
          </li>
          <li>
            <strong>600px max width.</strong> Above this and email clients
            start breaking layouts.
          </li>
          <li>
            <strong>Mobile first.</strong>{" "}
            <span className="guide-stat">60 to 70%</span> of opens are on
            mobile. Test there first, desktop second.
          </li>
          <li>
            <strong>Plain text alternative.</strong> Every HTML email needs a
            plain text version. Spam filters check.
          </li>
          <li>
            <strong>From-name matters more than design.</strong> &ldquo;Sara
            from [Brand]&rdquo; outperforms &ldquo;[Brand]&rdquo; consistently.
          </li>
        </ul>

        <h2 id="segmentation">Segmentation from day one</h2>
        <p>
          Don&apos;t wait until you have 10,000 subscribers to segment. Start
          with two cuts on day one.
        </p>
        <ul>
          <li>
            <strong>Engaged vs unengaged.</strong> Anyone who hasn&apos;t
            opened in 60 days is unengaged. Email them differently or stop
            emailing them, your deliverability depends on it.
          </li>
          <li>
            <strong>Customer vs non-customer.</strong> The two audiences need
            different content. A customer doesn&apos;t want your &ldquo;why you
            should try us&rdquo; pitch. A non-customer doesn&apos;t care about
            your shipping update.
          </li>
        </ul>
        <p>
          Once those two cuts are working, layer in lifecycle stage (new vs
          repeat customer), product interest (which category they bought),
          and recency (last 30 days vs 30 to 90 days vs 90+).
        </p>

        <h2 id="measure">What to measure and when to optimize</h2>
        <p>The numbers that actually matter:</p>
        <ul>
          <li>
            <strong>Open rate:</strong> aim for{" "}
            <span className="guide-stat">25%+</span> on broadcasts to engaged
            segments. Below 15% your subject lines or list health are the
            problem.
          </li>
          <li>
            <strong>CTR (click-to-open):</strong> aim for{" "}
            <span className="guide-stat">10%+</span>. Below 5% the body or CTA
            is the problem.
          </li>
          <li>
            <strong>Revenue per email sent:</strong> the only metric that pays
            the bills for e-commerce. Track it per send.
          </li>
          <li>
            <strong>Unsubscribe rate:</strong> over{" "}
            <span className="guide-stat">0.5%</span> per send is a warning.
            Over 1% means the audience didn&apos;t want what you sent.
          </li>
          <li>
            <strong>Spam complaint rate:</strong>{" "}
            <span className="guide-stat">below 0.1%</span> or you risk
            deliverability. Above 0.3% and providers will start blocking.
          </li>
        </ul>
        <Callout label="Open rate is partially broken since 2021">
          Apple Mail Privacy Protection auto-opens emails for many users. Treat
          open rate as a relative metric, not absolute. Trends week-over-week
          are signal. Single-day numbers are noise.
        </Callout>

        <h2 id="calendar">The email marketing calendar for beginners</h2>
        <p>
          A first-year cadence that&apos;s aggressive enough to matter and
          calm enough to stay deliverable:
        </p>
        <ul>
          <li>
            <strong>Week 1:</strong> 1 broadcast to engaged. Useful content,
            no sell.
          </li>
          <li>
            <strong>Week 2:</strong> 1 broadcast to engaged. Soft sell,
            tied to last week&apos;s content.
          </li>
          <li>
            <strong>Week 3:</strong> 1 broadcast to engaged. Useful content,
            no sell.
          </li>
          <li>
            <strong>Week 4:</strong> 2 broadcasts (one offer, one content).
            Add seasonal moments and product launches as they come.
          </li>
        </ul>
        <p>
          Aim for <strong>4 to 8 sends per month</strong> to your engaged
          segment in year one. More than that and you&apos;ll exhaust the
          list. Less and you&apos;ll be forgotten.
        </p>
      </article>

      <MuneroCTA platformLine="This is what Munero researches before you write your first email." />

      <AlsoInSeries currentSlug="email-marketing" />
    </GuideShell>
  );
}
