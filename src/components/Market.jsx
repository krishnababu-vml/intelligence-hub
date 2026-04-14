import React, { useState } from "react";

const experiments = [
  {
    year: 2025,
    market: "Australia",
    pc: "PC19",
    title: "Linking Latest Offers with Lead Form (RAQ CTA Addition)",
    description: `The Latest Offers page represents one of the highest-intent touchpoints in the Australian funnel, where users are actively evaluating pricing, promotions, and overall value before making a decision. However, the previous experience created a clear drop-off point by requiring users to leave this page and navigate elsewhere to initiate a lead action, introducing unnecessary friction at a critical decision moment.

    This experiment addressed that disconnect by embedding a prominent and contextually relevant 'Request a Quote (RAQ)' CTA directly within the offer exploration experience. The CTA was placed alongside pricing and promotional content, ensuring it aligned with the user's evaluation mindset and remained highly visible without disrupting browsing flow.

    The underlying behavioral hypothesis was that users engaging deeply with offers are already in a high-consideration stage and are more receptive to taking action if the pathway is immediate and intuitive. By reducing the number of steps between intent and action, this change aimed to minimize cognitive effort, prevent intent decay, and convert passive offer consumption into active lead generation.`,
    result: "+194% CR, 721 leads",
    duration: "36 days",
    jira: "#",
    tags: ["Capture Intent", "Reduce Friction", "Improve Visibility"],
  },
  {
    year: 2025,
    market: "Philippines",
    pc: "PC64",
    title: "Form Banner Everest",
    description: `Lead forms such as Request a Quote and Test Drive previously presented a highly functional but generic interface, lacking strong visual reinforcement of the specific vehicle the user had been exploring. This created a psychological disconnect, as users moved from a rich, product-driven browsing experience into a neutral, form-heavy environment, increasing the likelihood of hesitation or drop-off.

    To bridge this gap, a relevant vehicle visual (Everest model) was introduced as a banner on the form page, dynamically aligned with the user's prior selection. This ensured continuity between browsing and conversion stages, reinforcing the user's original intent.

    The hypothesis was grounded in behavioral consistency and emotional reinforcement: visually reintroducing the product at the point of conversion would strengthen user confidence, validate their choice, and reduce second-guessing. By making the form feel more personalized and product-centric rather than transactional, the experiment aimed to sustain momentum and improve completion rates.`,
    result: "+16% CR, 88 leads",
    duration: "52 days",
    jira: "#",
    tags: ["Build Trust", "Improve Clarity"],
  },
  {
    year: 2025,
    market: "South Africa",
    pc: "PC138",
    title: "Increased Test Drive CTA Visibility on Latest Offers",
    description: `Offer detail pages were previously optimized around a single primary action — 'Request a Quote (RAQ)' — implicitly assuming that all users reaching this stage were ready for a pricing conversation. However, user intent at this stage is often heterogeneous, with some users seeking experiential validation rather than immediate financial commitment.

    To better align with these varying motivations, a secondary CTA — 'Book a Test Drive' — was introduced alongside the existing RAQ option, providing an alternative pathway for users not yet ready to engage on pricing.

    The behavioral hypothesis was that users progress through different psychological stages of decision-making, and forcing a single action can create friction or misalignment. By offering multiple, intent-aligned CTAs, users could self-select the action that best matched their readiness level. This reduces decision friction, increases perceived control, and ultimately improves overall conversion by capturing a broader spectrum of user intent.`,
    result: "+126% CR, 14 leads",
    duration: "59 days",
    jira: "#",
    tags: ["Add More Options", "Guide User"],
  },
  {
    year: 2025,
    market: "South Africa",
    pc: "PC152",
    title: "Personalized Journey Navigator",
    description: `The existing experience treated all users uniformly, presenting identical CTAs regardless of whether they were first-time visitors or returning users. This lack of personalization failed to account for differences in familiarity, intent maturity, and decision readiness, often leading to irrelevant choices and increased cognitive load.

    This experiment introduced a dynamic 'Journey Navigator' module that adapted CTA options based on user type. First-time users were guided toward exploratory actions such as browsing offers, using Build & Price, or connecting with a dealer, while returning users were presented with more action-oriented options like quick callbacks, offers, and test drives.

    The hypothesis was rooted in behavioral segmentation: aligning available actions with the user's stage in the journey would improve relevance, reduce decision fatigue, and accelerate progression toward conversion. By simplifying the decision environment and surfacing the most appropriate next steps, the module aimed to increase engagement efficiency and conversion likelihood.`,
    result: "+85% CR, 148 leads",
    duration: "16 days",
    jira: "#",
    tags: ["Personalize Experience", "Guide User"],
  },
  {
    year: 2025,
    market: "South Africa",
    pc: "PC139",
    title: "Still Exploring Widget",
    description: `Users spending extended time (60+ seconds) on high-intent pages such as nameplate or model pages demonstrate strong engagement but often fail to transition into conversion actions, indicating potential indecision or lack of clear next steps.

    To address this, a timed intervention was introduced in the form of a pop-up widget triggered after 60 seconds of active engagement. The messaging ('Still exploring your options? We'll help you decide.') was designed to be supportive rather than intrusive, and presented two clear next-step CTAs: Book a Test Drive and Inquire Now (RAQ).

    The hypothesis was that prolonged dwell time is a signal of intent coupled with hesitation. By introducing a timely nudge with simplified choices, the experience reduces decision paralysis, provides guidance, and captures users at a moment of peak attention. This leverages behavioral triggers to convert passive exploration into active engagement.`,
    result: "+66% CR, 380 leads",
    duration: "54 days",
    jira: "#",
    tags: ["Nudge User", "Guide User"],
  },
  {
    year: 2025,
    market: "Philippines",
    pc: "PC187",
    title: "Prominent Offer Section",
    description: `On nameplate pages, especially on mobile devices, the Latest Offers section was positioned below the fold, requiring users to scroll or interact before discovering key promotional information. Given that offers are a primary decision driver, this created unnecessary friction and reduced the likelihood of users engaging with high-value content.

    The experiment introduced a prominently positioned, above-the-fold Latest Offers section, ensuring immediate visibility upon page load. This repositioning aligned critical decision-making information with the user's initial attention window.

    The hypothesis was that visibility directly influences engagement: surfacing offers early would capture attention, reinforce value perception, and encourage deeper interaction. By reducing discovery effort and aligning content hierarchy with user priorities, the change aimed to increase engagement with offers and drive higher conversion rates.`,
    result: "+146% CR, 16 leads",
    duration: "41 days",
    jira: "#",
    tags: ["Improve Visibility", "Highlight Value"],
  },
  {
    year: 2026,
    market: "South Africa",
    pc: "PC146",
    title: "Guided Offer Journey Pilot",
    description: `The Latest Offers page in the South African market represents one of the highest-traffic and highest-intent environments in the funnel, where users actively browse vehicle options, compare promotions, and evaluate value propositions. Despite strong engagement, the existing experience created a passive browsing pattern, as offer cards lacked clear next-step actions, forcing users to click into individual offer detail pages before taking any meaningful action.

    This introduced unnecessary friction and diluted intent, particularly for users who had already made a decision at the listing level but were still required to navigate deeper into the journey to initiate a lead.

    To address this, the experiment introduced two strategically placed CTAs directly on each offer card. The first CTA, 'Inquire Now', allowed users to bypass intermediate steps and directly access the Request a Quote (RAQ) form for the selected model, significantly reducing the effort required to convert. The second CTA, 'More Details', provided a clear pathway for users who were still in the evaluation stage, directing them to the offer detail page for deeper exploration.

    The underlying behavioral hypothesis was that users on the offers listing page are not uniform in intent — some are ready to convert immediately, while others require additional information before progressing. By introducing dual, intent-aligned CTAs at the card level, the experience accommodates both high-intent and exploratory users simultaneously.

    This change aimed to reduce friction for action-ready users, guide undecided users toward the next logical step, and transform the offers page from a passive browsing interface into an active decision-making and conversion layer.`,
    result: "+49% CR, 44 leads",
    duration: "84 days",
    jira: "#",
    tags: ["Reduce Friction", "Guide User", "Capture Intent"],
  },
];

export default function Market() {
  const [copiedId, setCopiedId] = useState(null);
  const [promptCopied, setPromptCopied] = useState(false);
  const [market, setMarket] = useState("All");
  const [year, setYear] = useState("All");
  const [selected, setSelected] = useState(null);
  const [tag, setTag] = useState("All");

  const filtered = experiments.filter((e) => {
    const marketMatch = market === "All" || e.market === market;
    const yearMatch = year === "All" || String(e.year) === year;
    const tagMatch = tag === "All" || e.tags?.includes(tag);
    return marketMatch && yearMatch && tagMatch;
  });

  const getMarketTag = (market) => {
    switch (market) {
      case "Australia":
        return "AU";
      case "South Africa":
        return "ZA";
      case "Thailand":
        return "TH";
      case "Philippines":
        return "PH";
      case "Vietnam":
        return "VN";
      default:
        return "";
    }
  };

  const fallbackCopy = (text) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);

      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);

      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success;
    } catch (e) {
      return false;
    }
  };

  const safeCopy = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        return fallbackCopy(text);
      }
    } catch (e) {
      return fallbackCopy(text);
    }
  };

  const copyFullPromptWithExperiment = async (exp, e) => {
    if (e) e.stopPropagation();

    const experimentText = `Year: ${exp.year}
Market: ${exp.market}
PC Code: ${exp.pc}
Title: ${exp.title}
Description: ${exp.description}
Result: ${exp.result}
Pilot Duration: ${exp.duration}
Jira: ${exp.jira}
Behavioral Themes: ${exp.tags?.join(", ")}`;

    const cleanedPrompt = prompt
      .replace("[PASTE EXPERIMENT DETAILS AND RESULTS HERE]", "")
      .trim();

    const fullText = `${cleanedPrompt}

${experimentText}`;

    try {
      const success = await safeCopy(fullText);
      setCopiedId(success ? `${exp.pc}-full` : "failed");
    } catch (err) {
      setCopiedId("failed");
    }

    setTimeout(() => {
      setCopiedId(null);
    }, 1800);
  };

  const prompt = `You are a senior CRO strategist, experimentation analyst, and growth ideation partner.

You will receive one real experiment/pilot and its results. Your job is NOT to repeat the experiment. Your job is to reverse-engineer the underlying behavioral insight, then generate a strong set of new A/B test ideas that extend beyond the original execution.

Core thinking rules:

* Do not think linearly.
* Do not stop at the surface-level tactic.
* Find the deeper user problem, motivation, friction, or behavior pattern behind the win or loss.
* Use the experiment as evidence, then generalize the insight to other parts of the website and other conversion opportunities.
* Explore adjacent opportunities, not just copy changes.
* Think across page types, funnel stages, CTA patterns, messaging, timing, personalization, UX structure, and behavioral triggers.

What to extract first:

1. The likely user insight behind the experiment.
2. Why the variation probably worked or failed.
3. What user behavior it reveals.
4. Which other pages, modules, or journeys may share the same behavior.
5. What new hypotheses can be formed from that insight.

What to generate next:

* New A/B test ideas inspired by the insight
* Variations on copy, design, CTA, placement, timing, personalization, and triggers
* Ideas for related pages such as Nameplate, Model, Build & Price, Offers, Forms, or any other relevant journey step
* Both conservative ideas and more creative ideas
* Ideas that can be tested before the original step, after the original step, or in a parallel step
* Ideas that help the team learn more about user intent, hesitation, and conversion behavior

Important:

* You are allowed to move beyond the exact surface area of the original experiment.
* You should look for transferable patterns.
* A useful answer should help the team say: “This is the behavioral principle, and here are several places we can apply it.”
* Make the ideas practical, testable, and conversion-focused.

Output format:

1. Insight summary
2. Why this experiment likely worked / failed
3. Transferable principle
4. New experiment ideas

   * Give at least 8 ideas
   * Mix copy, UX, placement, timing, and personalization ideas
   * Include the page or journey area for each idea
   * Keep each idea concise but meaningful
5. Optional next-step recommendations

   * Which ideas to prioritize first
   * Which ones are highest-confidence vs more exploratory

Tone:

* Strategic
* Analytical
* Creative but grounded
* Clear and actionable

Now analyze the following experiment and generate the ideas:

[PASTE EXPERIMENT DETAILS AND RESULTS HERE]`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-1">🚀 DAE Intelligence Hub</h1>
        <p className="text-gray-600 mb-4">
          Experimentation insights and CRO intelligence dashboard
        </p>

        <div className="text-sm text-gray-600 mb-4">
          Showing {filtered.length} experiments
        </div>

        <div className="mb-6 space-y-4">
          <div>
            <p className="text-xs text-gray-500 mb-2">Filter by Market</p>
            <br />
            <div className="flex gap-2 flex-wrap">
              {["All", "Australia", "Philippines", "South Africa"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMarket(m)}
                  className={`px-3 py-1 rounded-full text-sm border transition ${
                    market === m
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-2">Filter by Year</p>
            <br />
            <div className="flex gap-2 flex-wrap">
              {[
                "All",
                ...[...new Set(experiments.map((e) => String(e.year)))],
              ].map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`px-3 py-1 rounded-full text-sm border transition ${
                    year === y
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-2">Filter by Tag</p>
            <br />
            <div className="flex gap-2 flex-wrap">
              {[
                "All",
                ...[...new Set(experiments.flatMap((e) => e.tags || []))],
              ].map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={`px-3 py-1 rounded-full text-sm border transition ${
                    tag === t
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <br />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            No experiments found. Try another filter.
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {filtered.map((exp, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] hover:ring-1 hover:ring-purple-300 transition-all duration-200 cursor-pointer relative overflow-hidden"
                onClick={() => setSelected(exp)}
              >
                <div className="h-1 bg-gradient-to-r from-purple-400 to-indigo-500" />

                <div className="p-5">
                  <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-md">
                    {getMarketTag(exp.market)}
                  </div>

                  <h2 className="font-semibold text-base pr-10 mb-2">
                    {exp.title}
                  </h2>

                  <div className="mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-medium">
                      {exp.pc}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {exp.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                    {exp.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {selected && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl w-2/3 max-h-[80vh] overflow-y-auto shadow-xl">
              <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="text-xs uppercase text-gray-400 mb-1">Tags</p>
                  <div className="flex flex-wrap gap-1">
                    {selected.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400 mb-1">Meta</p>
                  <p>
                    <b>Year:</b> {selected.year} | <b>Market:</b>{" "}
                    {selected.market} | <b>PC:</b> {selected.pc}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-400 mb-1">
                    Performance
                  </p>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                    {selected.result}
                  </span>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-400 mb-1">
                    Details
                  </p>
                  <p className="leading-relaxed">{selected.description}</p>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-400 mb-1">Links</p>
                  <a
                    href={selected.jira}
                    className="text-purple-600 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Jira
                  </a>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={(e) => copyFullPromptWithExperiment(selected, e)}
                  className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white rounded-lg shadow-md transition"
                >
                  {copiedId === `${selected.pc}-full`
                    ? "Copied ✓"
                    : copiedId === "failed"
                      ? "Failed"
                      : "⚡ Copy for LLM"}
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-3">LLM Prompt</h2>
          <textarea
            value={prompt}
            readOnly
            className="w-full p-3 border border-gray-200 rounded-lg text-sm"
          />
          <button
            onClick={async () => {
              const success = await safeCopy(prompt);
              setPromptCopied(success ? true : "failed");
              setTimeout(() => setPromptCopied(false), 1800);
            }}
            className="mt-3 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
          >
            {promptCopied === true
              ? "Copied ✓"
              : promptCopied === "failed"
                ? "Failed"
                : "Copy Prompt"}
          </button>
        </div>
      </div>
    </div>
  );
}
