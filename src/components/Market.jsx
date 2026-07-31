import React, { useState } from "react";

const experiments = [
  {
    year: 2026,
    market: "Vietnam",
    pc: "PC254",
    title: "Smart Keypad Activation",
    description: `This pilot focused on removing a small but high-frequency friction point within Ford Vietnam's mobile lead generation forms. Analysis suggested that users completing Request a Quote and Test Drive forms on mobile devices were required to perform an unnecessary extra step when entering their phone number, as the field triggered a standard alphanumeric keyboard rather than a numeric keypad.


    While seemingly minor, phone number entry is one of the most critical fields within automotive lead forms and is completed by every user. Requiring visitors to manually switch keyboard types adds effort, increases the likelihood of input errors, and can create unnecessary friction during form completion.


    To streamline the experience, the phone number field was updated so that a numeric keypad automatically appeared when users tapped into the field on mobile devices. The enhancement was designed to make data entry faster, more intuitive, and better aligned with user expectations on both Android and iOS devices.


    The hypothesis was that reducing effort at a key form field would improve overall form completion rates by creating a smoother mobile experience and minimizing interruptions during the lead submission process.


    The pilot was executed as an A/B test, allowing Ford to directly compare the existing experience against the enhanced mobile form experience. The change was limited to mobile traffic, while desktop users continued to see the existing experience.


    Success was measured through combined Request a Quote and Test Drive completions. Despite being a relatively small UX enhancement, the pilot delivered a statistically significant 25.4% increase in form completions, generating an estimated 300 incremental leads. The results demonstrate how removing micro-frictions from high-volume form fields can produce meaningful improvements in lead generation performance, particularly on mobile devices where ease of input is critical.`,
    result: "+25% CR, 300 leads",
    duration: "67 days",
    jira: "#",
    tags: ["Reduce Friction", "Improve Clarity"],
  },
  {
    year: 2026,
    market: "Vietnam",
    pc: "PC42",
    title: "Monthly EMI Rate Display",
    description: `This pilot aimed to make vehicle pricing more approachable by displaying the estimated monthly repayment amount directly on the Ranger and Territory model-walk pages.

    The idea was based on the insight that many customers evaluate vehicle purchases based on monthly affordability rather than total vehicle price. While users may be interested in a vehicle, the absence of financing information can create uncertainty around affordability and delay progression to a lead action.

    To address this, Ford introduced a monthly payment estimate calculated using a standard financing assumption of 20% down payment, 5% annual interest rate, and an 8-year (96-month) loan tenure. By surfacing financing information earlier in the consideration journey, the experience sought to help users quickly understand the cost of ownership and reduce the effort required to estimate repayments themselves.

    The test was conducted as a Pre-Post experiment, meaning the experience was rolled out to 100% of site traffic and performance after launch was compared against the historical baseline. Success was measured using Quote Completes following a Model Walk interaction.

    The pilot delivered a statistically significant 37% increase in conversion rate, generating an estimated 39 incremental leads, indicating that providing affordability cues during vehicle exploration can positively influence lead generation.`,

    result: "+37% CR, 39 leads",
    duration: "172 days",
    jira: "#",
    tags: ["Highlight Value", "Improve Clarity", "Reduce Friction"],
  },

  {
    year: 2026,
    market: "Thailand",
    pc: "PC176",
    title: "Sticky Model Selector with Lead CTAs | Models Page",
    description: `This pilot was designed to address a key navigation and conversion friction on the vehicle model pages. User analysis showed that once visitors scrolled down a model detail page, the model selector and primary lead-generation actions disappeared from view. To switch to another variant, start a purchase journey, or request a quote, users had to scroll back to the top of the page, creating unnecessary effort and interrupting their browsing experience.

    To reduce this friction, a sticky model selector bar was introduced that remained visible as users scrolled through the page. The bar provided quick access to:

    Other models and variants within the same nameplate.

    Build & Price CTA ("Start Your Purchase").

    Request a Quote CTA.

    The solution was designed around the principle of keeping high-intent actions continuously accessible during product exploration. Rather than forcing users to navigate back to the top of the page, the experience brought key conversion actions directly to where users were engaging with vehicle content.

    An additional enhancement was implemented whereby users clicking a quote or form CTA from the sticky navigation would arrive at a form with the nameplate and selected model pre-populated, reducing form effort and maintaining context from the page they were viewing.

    The pilot was executed as an A/B test on Thailand model pages, with success measured by visits to Quote Start or Build & Price pages, alongside lead generation performance. The hypothesis was that improving discoverability of key actions and reducing navigation friction would encourage more users to progress into purchase and lead-generation journeys.

    The test generated a statistically significant 51% increase in lead conversion rate, resulting in 78 incremental leads, while also delivering a substantial uplift in visits to Quote Start and Build & Price journeys. The results validated that persistent access to model navigation and lead-generation actions can effectively shorten the path from vehicle consideration to conversion.`,

    result: "+51% CR, 78 leads",
    duration: "154 days",
    jira: "#",
    tags: ["Reduce Friction", "Improve Visibility", "Guide User"],
  },
  {
    year: 2026,
    market: "South Africa",
    pc: "PC213",
    title: 'Sticky "Enquire Now" CTA in the Model Specifications Section',
    description: `This pilot focused on capturing high-intent users who were actively reviewing vehicle specifications on the Everest model page. Analysis suggested that visitors spending time in the Model Specifications section were likely further along in the consideration journey, evaluating detailed vehicle features and comparing options before making an enquiry.

    However, while users were consuming detailed specification content, there was no contextual lead-generation action aligned with their intent. The page displayed a generic sticky "Shop" CTA, which was less relevant for users focused on researching vehicle specifications. Additionally, the specifications section required users to expand multiple accordions, creating a lengthy scrolling experience with limited prompts to take the next step.

    To address this, the existing sticky Shop CTA was replaced with a more action-oriented "Enquire Now" CTA that appeared only when users entered the Model Specifications section. The CTA remained visible while users were reviewing specifications and directed them to a dedicated vehicle enquiry form featuring messaging that clearly communicated that a preferred dealer would contact them with a quotation.

    The hypothesis was that users engaging deeply with specification content exhibit stronger purchase intent, and presenting a relevant enquiry action at this point would reduce friction and encourage progression into the lead-generation journey.

    The pilot was executed as a Pre-Post test, meaning the experience was rolled out to 100% of eligible traffic and performance after implementation was compared against the historical baseline. Success was primarily measured through lead generation and quote-start activity.

    While quote starts showed only a modest and statistically inconclusive uplift, the pilot delivered a statistically significant 75% increase in lead conversion rate, generating 107 incremental leads. The results indicate that contextual CTAs aligned with user intent can be highly effective in converting engaged vehicle researchers into sales enquiries, particularly when surfaced at key decision-making moments within the browsing journey.`,
    result: "+75% CR, 107 leads",
    duration: "83 days",
    jira: "#",
    tags: ["Capture Intent", "Reduce Friction", "Guide User"],
  },
  {
    year: 2026,
    market: "Philippines",
    pc: "PC225",
    title: "Menu for Main KBAs on Homepage",
    description: `This pilot was designed to better serve returning visitors who often come back to the Ford homepage with a specific intent, such as building a vehicle, booking a test drive, or requesting a quote. While these users were likely further along in their purchase journey, the homepage did not prominently surface these high-intent actions, requiring users to navigate through menus or multiple pages before reaching their desired destination.

    To reduce this friction, a dedicated Key Business Actions (KBA) section was introduced on the homepage featuring direct access to Ford's primary conversion journeys:

    Build & Price

    Try Before You Buy (Test Drive)

    Request a Quote

    The new section was designed to be highly visible and easily scannable, allowing users to quickly resume or continue their purchase journey directly from the homepage. The underlying hypothesis was that reducing the number of steps required to reach these high-value actions would increase engagement with purchase journeys and ultimately drive more leads.

    The pilot was executed as a Pre-Post test, meaning the experience was rolled out to 100% of homepage visitors and performance after launch was compared against the historical baseline.

    Success was measured through starts of Ford's key conversion journeys (Build & Price, Test Drive, and Request a Quote). The pilot delivered a statistically significant 10.7% increase in

    KBA starts, generating 129 incremental journey starts, and translated into a 49% increase in lead conversion rate, resulting in 22 incremental leads. The results demonstrate that making high-intent actions more accessible on the homepage can effectively accelerate users into conversion-focused journeys and improve lead generation performance.`,
    result: "+49% CR, 22 leads",
    duration: "58 days",
    jira: "#",
    tags: ["Reduce Friction", "Improve Visibility", "Guide User"],
  },
  {
    year: 2026,
    market: "South Africa",
    pc: "PC237",
    title: "Auto Select the Model in Build & Price Page",
    description: `This pilot was designed to improve journey continuity between the vehicle model pages and the Build & Price experience. Analysis identified a usability issue where users who clicked the Build & Price CTA from a specific Everest model page would land on the Build & Price tool without their selected model being carried over. As a result, users had to manually locate and reselect the model they had already expressed interest in, creating unnecessary friction and disrupting the purchase journey.

    To address this, the Build & Price experience was enhanced to automatically pre-select the vehicle model that the user had chosen on the previous page. When users clicked the Build & Price CTA from a specific model overview page, they were taken directly to the relevant configuration and pricing experience with the selected model already active.

    The hypothesis was that maintaining context between pages would reduce confusion, eliminate redundant user actions, and create a smoother transition into the Build & Price journey. By removing this friction, more users would continue exploring vehicle configurations rather than abandoning the process.

    The pilot was executed as a Pre-Post test, meaning the enhancement was rolled out to 100% of eligible traffic and performance after launch was compared against historical performance before implementation.

    Success was measured through visits to the Build & Price Customise journey and downstream lead generation. The pilot delivered a statistically significant 75.8% increase in Build & Price customisation visits, generating 660 incremental journey starts. This engagement uplift translated into a 55% increase in lead conversion rate, resulting in 13 incremental leads. The results highlight the impact of preserving user context across journeys and reducing unnecessary steps in the vehicle research and purchase process.`,

    result: "+55% CR, 13 leads",
    duration: "65 days",
    jira: "#",
    tags: ["Reduce Friction", "Guide User", "Personalize Experience"],
  },
  {
    year: 2026,
    market: "South Africa",
    pc: "PC157",
    title: "Return User RAQ Prompt on Model Walk (Territory & Everest)",
    description: `This pilot was designed to leverage the higher purchase intent of returning visitors who had previously viewed a vehicle nameplate page but had not yet submitted an enquiry. The hypothesis was that returning users are often further along in their decision-making journey and may only need a timely reminder or a simplified path to conversion to take the next step.

    To capitalize on this intent, Ford introduced a personalized Request a Quote (RAQ) prompt immediately below the Model Walk section for returning users. The experience dynamically referenced the vehicle model the user had previously viewed and presented a contextual message encouraging them to continue their journey. The messaging was intentionally framed in a conversational style to make the interaction feel more personal and relevant.

    In addition to the personalized prompt, users were presented with a Short Journey Request a Quote experience, allowing them to quickly express interest in their preferred vehicle without navigating through multiple pages. By reducing the effort required to start an enquiry and reminding users of a vehicle they had already shown interest in, the pilot aimed to increase quote requests and lead submissions.

    The pilot was executed as a Pre-Post test, meaning the experience was deployed to 100% of eligible returning users and performance after implementation was compared against the historical baseline. The experience was only shown to users who had previously visited a relevant nameplate page, making it a targeted personalization initiative rather than a site-wide change.

    Success was measured through Quote Starts by Returning Users and downstream lead generation. The pilot delivered a statistically significant 12.1% increase in quote starts, generating 104 incremental quote journeys, and translated into an 86% increase in lead conversion rate, resulting in 37 incremental leads. The results suggest that personalized messaging combined with a simplified enquiry path can effectively re-engage returning users and accelerate them toward conversion.`,

    result: "+86% CR, 37 leads",
    duration: "66 days",
    jira: "#",
    tags: ["Personalize Experience", "Capture Intent", "Reduce Friction"],
  },
  {
    year: 2026,
    market: "South Africa",
    pc: "PC183",
    title: "Form Personalization – Ranger Request a Quote",
    description: `This pilot focused on improving the Request a Quote (RAQ) and Test Drive form experience for users arriving from Ranger model and overview pages. The hypothesis was that users who had already selected a vehicle model were being presented with a generic form experience that lacked context and required unnecessary effort, creating friction during the lead submission process.

    To create a more relevant and intuitive experience, the forms were personalized based on the vehicle the user had previously viewed. A hero image of the selected vehicle model was displayed at the top of the form, reinforcing the user's choice and providing visual confirmation that they had landed in the correct place. In addition, the form structure was reorganized so that pre-populated vehicle fields (Model and Series) appeared first, followed by personal information fields and dealer selection fields.

    The redesign was intended to reduce cognitive load by making the form feel more personalized, minimizing the effort required to review vehicle selections, and presenting information in a sequence that aligned with the user's decision-making process.

    The pilot was executed as a Pre-Post test, meaning the personalized form experience was rolled out to 100% of eligible users and performance after implementation was compared against the historical baseline.

    Success was measured through Immediate Quote Completes from users who had visited Ranger overview and model pages. The pilot delivered a statistically significant 15.8% increase in quote completions, generating 72 incremental quote completions. This translated directly into a 16% increase in lead conversion rate, resulting in 72 incremental leads. The results demonstrate that reinforcing user context and simplifying form interactions can improve completion rates and increase lead generation without requiring major changes to the overall journey.`,

    result: "+16% CR, 72 leads",
    duration: "79 days",
    jira: "#",
    tags: ["Personalize Experience", "Build Trust", "Reduce Friction"],
  },
  {
    year: 2025,
    market: "Australia",
    pc: "PC19",
    title: "Linking Latest Offers with Lead Form (RAQ CTA Addition)",
    description: `The Latest Offers page represents one of the highest-intent touchpoints in the Australian funnel, where users are actively evaluating pricing, promotions, and overall value before making a decision. However, the previous experience created a clear drop-off point by requiring users to leave this page and navigate elsewhere to initiate a lead action, introducing unnecessary friction at a critical decision moment.

    This experiment addressed that disconnect by embedding a prominent and contextually relevant 'Request a Quote (RAQ)' CTA directly within the offer exploration experience. The CTA was placed alongside pricing and promotional content, ensuring it aligned with the user's evaluation mindset and remained highly visible without disrupting browsing flow.

    The underlying behavioral hypothesis was that users engaging deeply with offers are already in a high-consideration stage and are more receptive to taking action if the pathway is immediate and intuitive. By reducing the number of steps between intent and action, this

    change aimed to minimize cognitive effort, prevent intent decay, and convert passive offer consumption into active lead generation.`,
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

    The behavioral hypothesis was that users progress through different psychological stages of decision-making, and forcing a single action can create friction or misalignment. By offering

    multiple, intent-aligned CTAs, users could self-select the action that best matched their readiness level. This reduces decision friction, increases perceived control, and ultimately improves overall conversion by capturing a broader spectrum of user intent.`,

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8">
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
                      ? "bg-blue-600 text-white border-blue-600"
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
                      ? "bg-blue-600 text-white border-blue-600"
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
                      ? "bg-blue-600 text-white border-blue-600"
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
                className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] hover:ring-1 hover:ring-blue-300 transition-all duration-200 cursor-pointer relative overflow-hidden"
                onClick={() => setSelected(exp)}
              >
                <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500" />

                <div className="p-5">
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
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
                        className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700"
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
                        className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700"
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
                    className="text-blue-600 underline"
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
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white rounded-lg shadow-md transition"
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
            className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
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
