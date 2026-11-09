import React, { useState } from "react";

const experiments = [
    {
        "year": 2026,
        "market": "Vietnam",
        "pc": "PC314",
        "title": "Auto Jump to Next Form Field (RAQ & Test Drive)",
        "description": "This pilot focused on reducing interaction effort within Ford Vietnam's Request a Quote and Test Drive forms. In the existing experience, users had to manually tap into the next input field after completing the current one. While each tap is small, these repeated interactions add up across the form and create unnecessary effort during lead submission, particularly on mobile devices.\n\nTo streamline form completion, an auto-advance function was introduced for fields with predictable, fixed-format inputs. The cursor automatically moved to the next field once the current field met predefined completion criteria:\n\nA valid 10-digit mobile number had been entered.\nA valid email address had been completed, detected by recognized domains. For the Vietnam market, these were gmail.com, outlook.com and yahoo.com, with hotmail.com requested as a fourth domain.\n\nAuto-advance was deliberately applied only to fields with predictable, fixed-length inputs, avoiding the risk of moving users on before they had finished typing.\n\nThe hypothesis was that removing repeated manual taps between fields would create a faster, smoother and more continuous form-filling experience, reducing interruptions and increasing form completions.\n\nThe pilot was executed as an A/B test from 10 August to 31 October 2026, comparing the existing form experience against the auto-advance experience. Each group received around 153,000 visits (153,266 control, 153,762 test). Success was measured through Quote Completes.\n\nQuote completions rose from 951 in the control group to 1,212 in the test group, delivering a statistically significant 27% increase in conversion rate and 258 incremental leads. Following this result, the experience has been scaled and is now live. The results show that removing small, repeated micro-frictions from high-volume form journeys can produce meaningful gains in lead generation.",
        "result": "+27% CR, 258 leads",
        "duration": "82 days",
        "jira": "#",
        "tags": ["Reduce Friction", "Guide User"]
    },
    {
        "year": 2026,
        "market": "Thailand",
        "pc": "PC232",
        "title": "Latest Offers CTA on Model Detail Pages",
        "description": "This pilot aimed to improve the visibility of current promotions on Ford Thailand's Model Detail Pages. These pages focused mainly on vehicle imagery, specifications and starting price, while current offers were not shown prominently. Users interested in offers had to find them through separate navigation paths. Interest in vehicle models was strong, but bounce rates on Model Detail Pages were high, which pointed to missed conversion opportunities.\n\nOffers are a key decision driver in vehicle purchases. Hiding them away from the page where users evaluate a specific model created a gap between interest and action, especially for price-conscious users weighing up value.\n\nTo close this gap, a prominent \"Latest Offers\" CTA was added directly below the starting price on the Model Detail Page. The CTA showed that offers were available for the selected model and took users to the matching Offer Page. It was designed to stand out while following existing design patterns, and it worked the same way on desktop and mobile. No changes were made to existing pricing, specification content or other CTAs.\n\nThe hypothesis was that showing offers next to pricing, at the moment users judge affordability and value, would raise engagement with promotions and encourage more users to move toward a lead action.\n\nThe pilot was run as a Pre-Post test on Ranger model pages from 18 May to 28 June 2026. Performance after launch was compared against the historical baseline. Success was measured through visits to Latest Offers pages after users viewed a model page, along with downstream lead generation.\n\nThe pilot delivered a statistically significant 152.5% increase in Latest Offers visits from model pages, generating 1,990 incremental offer visits. This engagement uplift translated into a statistically significant 65% increase in lead conversion rate, resulting in 68 incremental leads. Following this result, the experience has been scaled. The results show that putting value information, such as offers, next to pricing at the point of model evaluation can turn high-intent browsing into lead generation.",
        "result": "+65% CR, 68 leads",
        "duration": "41 days",
        "jira": "#",
        "tags": ["Improve Visibility", "Highlight Value", "Capture Intent"]
    },
    {
        "year": 2026,
        "market": "South Africa",
        "pc": "PC282",
        "title": "Bring Finance Calculator Closer to Vehicle Exploration",
        "description": "This pilot aimed to give users quicker access to finance tools while they explore vehicles. On Ford South Africa's nameplate and model pages, finance tools weren't directly available. Users who wanted to know what a vehicle would cost them each month had to go to a separate finance section, which added steps to the journey and took them away from the vehicle they were looking at.\n\nAffordability is one of the main questions in a vehicle purchase decision. When finance information is hard to reach during exploration, users either leave the page to find it or postpone the question, and both slow progress toward a lead action.\n\nTo fix this, a Finance Calculator icon was added next to the sticky Shop dropdown on nameplate and model pages. Because it sat in the sticky navigation, the tool stayed within reach as users scrolled. When users opened the Finance Calculator, the vehicle they were viewing was already selected, so they didn't have to enter it again and could see relevant figures straight away.\n\nThe hypothesis was that putting finance tools within easy reach during exploration, with the vehicle already filled in, would encourage more users to check affordability and lead to more enquiries.\n\nThe pilot was run as a Pre-Post test on the Everest overview page from 18 May to 30 June 2026. Performance after launch was compared against the historical baseline. Success was measured through visits to the Everest Finance Calculator, along with downstream lead generation.\n\nThe pilot delivered a statistically significant 161.8% increase in Finance Calculator visits, generating 98 incremental calculator visits. This engagement uplift translated into a statistically significant 120% increase in lead conversion rate, resulting in 66 incremental leads. Following this result, the experience has been scaled. The results show that giving users easy access to affordability tools during vehicle exploration, while keeping the context of the vehicle they're viewing, can turn research into enquiries.",
        "result": "+120% CR, 66 leads",
        "duration": "43 days",
        "jira": "#",
        "tags": ["Reduce Friction", "Highlight Value", "Improve Visibility"]
    },
    {
        "year": 2026,
        "market": "Australia",
        "pc": "PC280",
        "title": "Lead Gen CTA on Ranger Super Duty Hero Banners",
        "description": "This pilot focused on improving lead generation on Ford Australia's Ranger Super Duty nameplate overview page by surfacing a key conversion action in the page's most prominent section, the hero banners. In the existing experience, the hero banners had no strong or clearly visible lead generation CTA. Users landing on the page from media campaigns, many of them arriving with high intent, were not given an immediate next step.\n\nThe hero banner is the first thing users see and often gets the most attention on the page. Without a clear action in this space, users who were ready to enquire had to scroll or navigate elsewhere to find one, creating friction at the moment their interest was highest and leading to missed opportunities to capture leads.\n\nTo address this, a prominent \"Request A Quote\" CTA was added directly to the hero banners. The CTA was designed to be clearly visible while matching the banner design. On click, users were taken to the Request a Quote form with Ranger Super Duty already selected, so they could continue their enquiry without re-entering the model they were interested in.\n\nThe hypothesis was that placing a clear lead action in the most visible part of the page, at the point where campaign traffic first lands, would capture high-intent users earlier and increase quote starts and lead submissions.\n\nThe pilot was run as a Pre-Post test on the Ranger Super Duty overview page from 12 May to 23 June 2026. Performance after launch was compared against the historical baseline. Success was measured through Quote Starts after visiting the Ranger Super Duty overview page, along with downstream lead generation.\n\nThe pilot delivered a statistically significant 57.5% increase in quote starts, generating 443 incremental quote starts. This engagement uplift translated into a statistically significant 86% increase in lead conversion rate, resulting in 65 incremental leads. Following this result, the experience has been scaled. The results show that giving high-intent users a clear, immediate action in the first part of the page they see, combined with a pre-filled form, can turn landing traffic into leads.",
        "result": "+86% CR, 65 leads",
        "duration": "42 days",
        "jira": "#",
        "tags": ["Capture Intent", "Improve Visibility", "Reduce Friction"]
    },
    {
        "year": 2026,
        "market": "Australia",
        "pc": "PC275",
        "title": "All Offers & All Specifications CTAs on Ranger Model Pages",
        "description": "This pilot aimed to improve the discovery and evaluation experience on Ford Australia's Ranger Model Detail Pages by making key next steps easier to see and reach. In the existing experience, the top section of the page didn't prominently show CTAs for latest offers or full specifications. Users had to scroll down or navigate separately to find this information, which created friction during discovery and decision-making.\n\nOffers and specifications are two of the most important inputs when users evaluate a vehicle. One answers \"what value can I get?\" and the other answers \"is this the right vehicle for me?\" When both are hard to find, users who are actively evaluating a model have to work harder to move forward, and some lose momentum before taking a lead action.\n\nTo address this, two secondary CTAs were added directly below the vehicle name on the Ranger Model Detail Pages (Black Edition, XLT, Wildtrak and Wolftrak):\n\nAll Offers, which took users to the Latest Offers page.\nAll Specifications, which scrolled users down to the specifications section on the same page.\n\nBecause the Offers page has several Ranger nameplate filters, the All Offers CTA took users to the main Latest Offers page rather than a filtered view.\n\nThe hypothesis was that putting offers and specifications within immediate reach, at the top of the page, would help users evaluate vehicles faster and move them from the discovery phase toward lead-oriented actions.\n\nThe pilot was run as an A/B test on Ranger model pages from 12 May to 24 June 2026. Each group received around 66,000 visits (66,114 control, 66,675 test). Success was measured through visits to Latest Offers or Build & Price after viewing a Ranger model page, along with downstream lead generation.\n\nThe pilot delivered a statistically significant 3.3% increase in visits to Latest Offers or Build & Price, generating 450 incremental visits. While the engagement lift was modest, it translated into a statistically significant 41% increase in lead conversion rate, resulting in 35 incremental leads. The results suggest that making key evaluation content easier to reach at the top of the page doesn't just increase clicks, it helps users who are already evaluating a vehicle move on to an enquiry.",
        "result": "+41% CR, 35 leads",
        "duration": "43 days",
        "jira": "#",
        "tags": ["Improve Visibility", "Reduce Friction", "Guide User"]
    },
    {
        "year": 2026,
        "market": "Australia",
        "pc": "PC302",
        "title": "Direct Contact CTAs on Dealer Locator Cards",
        "description": "This pilot aimed to turn Ford Australia's Dealer Locator page into a place where users take action, not just find information. The page received a lot of traffic, but many users left without doing anything else. Dealer cards showed dealer information only, with no CTAs, so users had to work out their next step on their own.\n\nUsers searching for a dealer are often close to purchase. Most are looking for somewhere to see a vehicle, book a test drive or speak to sales. Without a clear next step on the dealer card, that intent went unused, and the page missed chances to generate leads.\n\nTo address this, two CTAs were added to each dealer card:\n\nView More, which took users to the dealer details page.\nEnquire Now, which let users start an enquiry with the selected dealer through the vehicle enquiry form.\n\nThe hypothesis was that giving users clear, relevant next steps right at the dealer card would reduce uncertainty and encourage more of them to contact a dealer.\n\nThe pilot was run as an A/B test on the Dealer Locator page from 29 June to 1 September 2026. Each group received around 9,000 visits (9,498 control, 8,981 test). Success was measured through Quote Starts, along with downstream lead generation.\n\nQuote starts rose from 114 in the control group to 1,885 in the test group. That is a statistically significant increase of more than 1,600% in quote start rate, generating 1,777 incremental quote starts. Leads rose from 37 to 332, a statistically significant 849% increase in lead conversion rate and 297 incremental leads. Following this result, the experience has been scaled. The results show that when high-intent users have no clear path forward, simply adding one can unlock a large amount of hidden demand.",
        "result": "+849% CR, 297 leads",
        "duration": "64 days",
        "jira": "#",
        "tags": ["Guide User", "Capture Intent", "Reduce Friction"]
    },
    {
        "year": 2026,
        "market": "New Zealand",
        "pc": "PC269",
        "title": "Search Visibility with Text Label (Mobile)",
        "description": "This pilot aimed to make the search feature on Ford New Zealand's mobile website easier to see and use. In the existing experience, the mobile header showed only a search icon, with no supporting text. Some users may not have recognized the icon or understood what it did, and search usage was very low across markets.\n\nSearch is one of the quickest ways for users to find a specific vehicle, offer or piece of information. If users don't notice it or don't understand it, they have to rely on menus and browsing, which takes more effort, and some of them leave before finding what they came for.\n\nTo address this, a \"SEARCH\" text label was added below the existing search icon in the mobile header and navigation. The icon itself was unchanged, and the label followed existing design guidelines so the header stayed clean. The change applied to mobile users only and did not affect how search worked.\n\nThe hypothesis was that pairing the icon with a clear text label would make the feature easier to recognize, increase search usage and help users find relevant content faster.\n\nThe pilot was run as a Pre-Post test across all pages on mobile from 1 July to 31 October 2026. Performance after launch was compared against the historical baseline. Success was measured through clicks on the search icon, along with downstream lead generation.\n\nThe results were mixed. Against the primary measure, search icon clicks fell by a statistically significant 63.7%, about 1,817 fewer clicks than expected, so the pilot did not meet its engagement goal. Lead generation, however, rose by a statistically significant 36% in conversion rate, resulting in 38 incremental leads, and the experience is now live. Because search usage fell while leads rose, the lead lift is unlikely to have come from more people using search. It may reflect a clearer header overall, changes in traffic mix over the pre and post periods, or a tracking difference, and it should be validated before the insight is reused elsewhere.",
        "result": "+36% CR, 38 leads",
        "duration": "122 days",
        "jira": "#",
        "tags": ["Improve Clarity", "Improve Visibility"]
    },
    {
        "year": 2026,
        "market": "Australia",
        "pc": "PC310",
        "title": "Pre-filled Enquiry Forms for Offer Card CTAs",
        "description": "This pilot aimed to turn offer cards on Ford Australia's Latest Offers page into a direct route to enquiry. Offer cards for Ranger Hybrid, F-150 MY23 and F-150 MY24 each had only one CTA, \"Ford Finance Offer\". Users who had seen an offer they liked and were ready to talk to a dealer had no direct way to enquire from the card, so they had to find the enquiry form themselves and select their vehicle again.\n\nUsers browsing offers are among the most purchase-ready visitors on the site. They are comparing value and deciding which deal is worth acting on. When the only option on an offer card is a finance route, users who want to enquire about the vehicle itself face extra steps at the moment their intent is highest.\n\nTo address this, a new primary CTA was added to each offer card, and the existing \"Ford Finance Offer\" CTA moved to the secondary position. The new CTA copy was matched to each offer:\n\nRanger Hybrid: \"Enquire Now\"\nF-150 MY23: \"$8k Off\"\nF-150 MY24: \"Driveaway Offer\"\n\nEach primary CTA linked to the vehicle enquiry form with the model, and where available the series, already selected and locked based on the card the user clicked. Users didn't have to choose their vehicle again and could go straight to submitting their details.\n\nThe hypothesis was that giving offer-driven users a clear enquiry action, using copy that repeats the offer value and a form that keeps their vehicle selection, would reduce friction and increase lead submissions while keeping the finance route available.\n\nThe pilot was run as a Pre-Post test on the Latest Offers page from 10 July to 31 August 2026. Performance after launch was compared against the historical baseline. Success was measured through users moving on from the Latest Offers page, along with downstream lead generation.\n\nThe pilot delivered a statistically significant increase of more than 1,400% on the primary engagement measure, generating 4,750 incremental visits. This translated into a statistically significant 29% increase in lead conversion rate, resulting in 93 incremental leads. The results show that offer cards work harder when they give users a direct, pre-filled path to enquiry with copy that repeats the value of the offer.",
        "result": "+29% CR, 93 leads",
        "duration": "52 days",
        "jira": "#",
        "tags": ["Capture Intent", "Reduce Friction", "Highlight Value"]
    },
    {
        "year": 2026,
        "market": "Philippines",
        "pc": "PC315",
        "title": "Outcome-Based CTA on Lead Forms",
        "description": "This pilot looked at the final step of Ford Philippines' Request a Quote and Test Drive forms: the submit button. Both forms ended with a generic \"Submit\" CTA. The label described the action users were taking but not what they would get by taking it, so it didn't reinforce why they were filling in the form.\n\nThe final CTA is the last thing users read before they commit their details. At this point some users hesitate, especially when they are sharing personal contact information. A generic label does nothing to ease that hesitation, while a label that names the outcome reminds users what they get in return and makes the last click feel more worthwhile.\n\nTo address this, the generic \"Submit\" label was replaced with market-approved labels that describe the outcome of each form:\n\nRequest a Quote form: an outcome-based label such as \"Request a Quote\"\nTest Drive form: an outcome-based label such as \"Try Before You Buy\"\n\nNothing else on the forms changed. The fields, layout and submission flow stayed the same, so any difference in results came from the button copy alone.\n\nThe hypothesis was that making the CTA clearly say what users would receive would reduce last-step hesitation and increase form completions.\n\nThe pilot was run as an A/B test from 30 July to 30 September 2026. Each group received around 1,500 visits (1,508 control, 1,506 test). Success was measured through Test Drive completions.\n\nCompletions rose from 42 in the control group to 62 in the test group. That's a statistically significant 48% increase in conversion rate and 20 incremental leads. Following this result, the experience is now live. The results show that even a copy-only change at the final step of a form can lift completions when the label tells users what they get, not just what they're doing.",
        "result": "+48% CR, 20 leads",
        "duration": "62 days",
        "jira": "#",
        "tags": ["Improve Clarity", "Highlight Value"]
    },
    {
        "year": 2026,
        "market": "Vietnam",
        "pc": "PC42",
        "title": "Monthly EMI Rate Display",
        "description": "This pilot aimed to make vehicle pricing more approachable by displaying the estimated monthly repayment amount directly on the Ranger and Territory model-walk pages.\n\nThe idea was based on the insight that many customers evaluate vehicle purchases based on monthly affordability rather than total vehicle price. While users may be interested in a vehicle, the absence of financing information can create uncertainty around affordability and delay progression to a lead action.\n\nTo address this, Ford introduced a monthly payment estimate calculated using a standard financing assumption of 20% down payment, 5% annual interest rate, and an 8-year (96-month) loan tenure. By surfacing financing information earlier in the consideration journey, the experience sought to help users quickly understand the cost of ownership and reduce the effort required to estimate repayments themselves.\n\nThe test was conducted as a Pre-Post experiment, meaning the experience was rolled out to 100% of site traffic and performance after launch was compared against the historical baseline. Success was measured using Quote Completes following a Model Walk interaction.\n\nThe pilot delivered a statistically significant 37% increase in conversion rate, generating an estimated 39 incremental leads, indicating that providing affordability cues during vehicle exploration can positively influence lead generation.",
        "result": "+37% CR, 39 leads",
        "duration": "172 days",
        "jira": "#",
        "tags": ["Highlight Value", "Improve Clarity", "Reduce Friction"]
    },
    {
        "year": 2026,
        "market": "Thailand",
        "pc": "PC176",
        "title": "Sticky Model Selector with Lead CTAs | Models Page",
        "description": "This pilot was designed to address a key navigation and conversion friction on the vehicle model pages. User analysis showed that once visitors scrolled down a model detail page, the model selector and primary lead-generation actions disappeared from view. To switch to another variant, start a purchase journey, or request a quote, users had to scroll back to the top of the page, creating unnecessary effort and interrupting their browsing experience.\n\nTo reduce this friction, a sticky model selector bar was introduced that remained visible as users scrolled through the page. The bar provided quick access to:\n\nOther models and variants within the same nameplate.\nBuild & Price CTA (\"Start Your Purchase\").\nRequest a Quote CTA.\n\nThe solution was designed around the principle of keeping high-intent actions continuously accessible during product exploration. Rather than forcing users to navigate back to the top of the page, the experience brought key conversion actions directly to where users were engaging with vehicle content.\n\nAn additional enhancement was implemented whereby users clicking a quote or form CTA from the sticky navigation would arrive at a form with the nameplate and selected model pre-populated, reducing form effort and maintaining context from the page they were viewing.\n\nThe pilot was executed as an A/B test on Thailand model pages, with success measured by visits to Quote Start or Build & Price pages, alongside lead generation performance. The hypothesis was that improving discoverability of key actions and reducing navigation friction would encourage more users to progress into purchase and lead-generation journeys.\n\nThe test generated a statistically significant 51% increase in lead conversion rate, resulting in 78 incremental leads, while also delivering a substantial uplift in visits to Quote Start and Build & Price journeys. The results validated that persistent access to model navigation and lead-generation actions can effectively shorten the path from vehicle consideration to conversion.",
        "result": "+51% CR, 78 leads",
        "duration": "154 days",
        "jira": "#",
        "tags": ["Reduce Friction", "Improve Visibility", "Guide User"]
    },
    {
        "year": 2026,
        "market": "South Africa",
        "pc": "PC213",
        "title": "Sticky \"Enquire Now\" CTA in the Model Specifications Section",
        "description": "This pilot focused on capturing high-intent users who were actively reviewing vehicle specifications on the Everest model page. Analysis suggested that visitors spending time in the Model Specifications section were likely further along in the consideration journey, evaluating detailed vehicle features and comparing options before making an enquiry.\n\nHowever, while users were consuming detailed specification content, there was no contextual lead-generation action aligned with their intent. The page displayed a generic sticky \"Shop\" CTA, which was less relevant for users focused on researching vehicle specifications. Additionally, the specifications section required users to expand multiple accordions, creating a lengthy scrolling experience with limited prompts to take the next step.\n\nTo address this, the existing sticky Shop CTA was replaced with a more action-oriented \"Enquire Now\" CTA that appeared only when users entered the Model Specifications section. The CTA remained visible while users were reviewing specifications and directed them to a dedicated vehicle enquiry form featuring messaging that clearly communicated that a preferred dealer would contact them with a quotation.\n\nThe hypothesis was that users engaging deeply with specification content exhibit stronger purchase intent, and presenting a relevant enquiry action at this point would reduce friction and encourage progression into the lead-generation journey.\n\nThe pilot was executed as a Pre-Post test, meaning the experience was rolled out to 100% of eligible traffic and performance after implementation was compared against the historical baseline. Success was primarily measured through lead generation and quote-start activity.\n\nWhile quote starts showed only a modest and statistically inconclusive uplift, the pilot delivered a statistically significant 75% increase in lead conversion rate, generating 107 incremental leads. The results indicate that contextual CTAs aligned with user intent can be highly effective in converting engaged vehicle researchers into sales enquiries, particularly when surfaced at key decision-making moments within the browsing journey.",
        "result": "+75% CR, 107 leads",
        "duration": "83 days",
        "jira": "#",
        "tags": ["Capture Intent", "Reduce Friction", "Guide User"]
    },
    {
        "year": 2026,
        "market": "Philippines",
        "pc": "PC225",
        "title": "Menu for Main KBAs on Homepage",
        "description": "This pilot was designed to better serve returning visitors who often come back to the Ford homepage with a specific intent, such as building a vehicle, booking a test drive, or requesting a quote. While these users were likely further along in their purchase journey, the homepage did not prominently surface these high-intent actions, requiring users to navigate through menus or multiple pages before reaching their desired destination.\n\nTo reduce this friction, a dedicated Key Business Actions (KBA) section was introduced on the homepage featuring direct access to Ford's primary conversion journeys:\n\nBuild & Price\nTry Before You Buy (Test Drive)\nRequest a Quote\n\nThe new section was designed to be highly visible and easily scannable, allowing users to quickly resume or continue their purchase journey directly from the homepage. The underlying hypothesis was that reducing the number of steps required to reach these high-value actions would increase engagement with purchase journeys and ultimately drive more leads.\n\nThe pilot was executed as a Pre-Post test, meaning the experience was rolled out to 100% of homepage visitors and performance after launch was compared against the historical baseline.\n\nSuccess was measured through starts of Ford's key conversion journeys (Build & Price, Test Drive, and Request a Quote). The pilot delivered a statistically significant 10.7% increase in KBA starts, generating 129 incremental journey starts, and translated into a 49% increase in lead conversion rate, resulting in 22 incremental leads. The results demonstrate that making high-intent actions more accessible on the homepage can effectively accelerate users into conversion-focused journeys and improve lead generation performance.",
        "result": "+49% CR, 22 leads",
        "duration": "58 days",
        "jira": "#",
        "tags": ["Reduce Friction", "Improve Visibility", "Guide User"]
    },
    {
        "year": 2026,
        "market": "South Africa",
        "pc": "PC237",
        "title": "Auto Select the Model in Build & Price Page",
        "description": "This pilot was designed to improve journey continuity between the vehicle model pages and the Build & Price experience. Analysis identified a usability issue where users who clicked the Build & Price CTA from a specific Everest model page would land on the Build & Price tool without their selected model being carried over. As a result, users had to manually locate and reselect the model they had already expressed interest in, creating unnecessary friction and disrupting the purchase journey.\n\nTo address this, the Build & Price experience was enhanced to automatically pre-select the vehicle model that the user had chosen on the previous page. When users clicked the Build & Price CTA from a specific model overview page, they were taken directly to the relevant configuration and pricing experience with the selected model already active.\n\nThe hypothesis was that maintaining context between pages would reduce confusion, eliminate redundant user actions, and create a smoother transition into the Build & Price journey. By removing this friction, more users would continue exploring vehicle configurations rather than abandoning the process.\n\nThe pilot was executed as a Pre-Post test, meaning the enhancement was rolled out to 100% of eligible traffic and performance after launch was compared against historical performance before implementation.\n\nSuccess was measured through visits to the Build & Price Customise journey and downstream lead generation. The pilot delivered a statistically significant 75.8% increase in Build & Price customisation visits, generating 660 incremental journey starts. This engagement uplift translated into a 55% increase in lead conversion rate, resulting in 13 incremental leads. The results highlight the impact of preserving user context across journeys and reducing unnecessary steps in the vehicle research and purchase process.",
        "result": "+55% CR, 13 leads",
        "duration": "65 days",
        "jira": "#",
        "tags": ["Reduce Friction", "Guide User", "Personalize Experience"]
    },
    {
        "year": 2026,
        "market": "South Africa",
        "pc": "PC157",
        "title": "Return User RAQ Prompt on Model Walk (Territory & Everest)",
        "description": "This pilot was designed to leverage the higher purchase intent of returning visitors who had previously viewed a vehicle nameplate page but had not yet submitted an enquiry. The hypothesis was that returning users are often further along in their decision-making journey and may only need a timely reminder or a simplified path to conversion to take the next step.\n\nTo capitalize on this intent, Ford introduced a personalized Request a Quote (RAQ) prompt immediately below the Model Walk section for returning users. The experience dynamically referenced the vehicle model the user had previously viewed and presented a contextual message encouraging them to continue their journey. The messaging was intentionally framed in a conversational style to make the interaction feel more personal and relevant.\n\nIn addition to the personalized prompt, users were presented with a Short Journey Request a Quote experience, allowing them to quickly express interest in their preferred vehicle without navigating through multiple pages. By reducing the effort required to start an enquiry and reminding users of a vehicle they had already shown interest in, the pilot aimed to increase quote requests and lead submissions.\n\nThe pilot was executed as a Pre-Post test, meaning the experience was deployed to 100% of eligible returning users and performance after implementation was compared against the historical baseline. The experience was only shown to users who had previously visited a relevant nameplate page, making it a targeted personalization initiative rather than a site-wide change.\n\nSuccess was measured through Quote Starts by Returning Users and downstream lead generation. The pilot delivered a statistically significant 12.1% increase in quote starts, generating 104 incremental quote journeys, and translated into an 86% increase in lead conversion rate, resulting in 37 incremental leads. The results suggest that personalized messaging combined with a simplified enquiry path can effectively re-engage returning users and accelerate them toward conversion.",
        "result": "+86% CR, 37 leads",
        "duration": "66 days",
        "jira": "#",
        "tags": ["Personalize Experience", "Capture Intent", "Reduce Friction"]
    },
    {
        "year": 2026,
        "market": "South Africa",
        "pc": "PC183",
        "title": "Form Personalization – Ranger Request a Quote",
        "description": "This pilot focused on improving the Request a Quote (RAQ) and Test Drive form experience for users arriving from Ranger model and overview pages. The hypothesis was that users who had already selected a vehicle model were being presented with a generic form experience that lacked context and required unnecessary effort, creating friction during the lead submission process.\n\nTo create a more relevant and intuitive experience, the forms were personalized based on the vehicle the user had previously viewed. A hero image of the selected vehicle model was displayed at the top of the form, reinforcing the user's choice and providing visual confirmation that they had landed in the correct place. In addition, the form structure was reorganized so that pre-populated vehicle fields (Model and Series) appeared first, followed by personal information fields and dealer selection fields.\n\nThe redesign was intended to reduce cognitive load by making the form feel more personalized, minimizing the effort required to review vehicle selections, and presenting information in a sequence that aligned with the user's decision-making process.\n\nThe pilot was executed as a Pre-Post test, meaning the personalized form experience was rolled out to 100% of eligible users and performance after implementation was compared against the historical baseline.\n\nSuccess was measured through Immediate Quote Completes from users who had visited Ranger overview and model pages. The pilot delivered a statistically significant 15.8% increase in quote completions, generating 72 incremental quote completions. This translated directly into a 16% increase in lead conversion rate, resulting in 72 incremental leads. The results demonstrate that reinforcing user context and simplifying form interactions can improve completion rates and increase lead generation without requiring major changes to the overall journey.",
        "result": "+16% CR, 72 leads",
        "duration": "79 days",
        "jira": "#",
        "tags": ["Personalize Experience", "Build Trust", "Reduce Friction"]
    },
    {
        "year": 2026,
        "market": "South Africa",
        "pc": "PC146",
        "title": "Guided Offer Journey Pilot",
        "description": "The Latest Offers page in the South African market represents one of the highest-traffic and highest-intent environments in the funnel, where users actively browse vehicle options, compare promotions, and evaluate value propositions. Despite strong engagement, the existing experience created a passive browsing pattern, as offer cards lacked clear next-step actions, forcing users to click into individual offer detail pages before taking any meaningful action.\n\nThis introduced unnecessary friction and diluted intent, particularly for users who had already made a decision at the listing level but were still required to navigate deeper into the journey to initiate a lead.\n\nTo address this, the experiment introduced two strategically placed CTAs directly on each offer card. The first CTA, 'Inquire Now', allowed users to bypass intermediate steps and directly access the Request a Quote (RAQ) form for the selected model, significantly reducing the effort required to convert. The second CTA, 'More Details', provided a clear pathway for users who were still in the evaluation stage, directing them to the offer detail page for deeper exploration.\n\nThe underlying behavioral hypothesis was that users on the offers listing page are not uniform in intent — some are ready to convert immediately, while others require additional information before progressing. By introducing dual, intent-aligned CTAs at the card level, the experience accommodates both high-intent and exploratory users simultaneously.\n\nThis change aimed to reduce friction for action-ready users, guide undecided users toward the next logical step, and transform the offers page from a passive browsing interface into an active decision-making and conversion layer.",
        "result": "+49% CR, 44 leads",
        "duration": "84 days",
        "jira": "#",
        "tags": ["Reduce Friction", "Guide User", "Capture Intent"]
    },
    {
        "year": 2025,
        "market": "Australia",
        "pc": "PC19",
        "title": "Linking Latest Offers with Lead Form (RAQ CTA Addition)",
        "description": "The Latest Offers page represents one of the highest-intent touchpoints in the Australian funnel, where users are actively evaluating pricing, promotions, and overall value before making a decision. However, the previous experience created a clear drop-off point by requiring users to leave this page and navigate elsewhere to initiate a lead action, introducing unnecessary friction at a critical decision moment.\n\nThis experiment addressed that disconnect by embedding a prominent and contextually relevant 'Request a Quote (RAQ)' CTA directly within the offer exploration experience. The CTA was placed alongside pricing and promotional content, ensuring it aligned with the user's evaluation mindset and remained highly visible without disrupting browsing flow.\n\nThe underlying behavioral hypothesis was that users engaging deeply with offers are already in a high-consideration stage and are more receptive to taking action if the pathway is immediate and intuitive. By reducing the number of steps between intent and action, this change aimed to minimize cognitive effort, prevent intent decay, and convert passive offer consumption into active lead generation.",
        "result": "+194% CR, 721 leads",
        "duration": "36 days",
        "jira": "#",
        "tags": ["Capture Intent", "Reduce Friction", "Improve Visibility"]
    },
    {
        "year": 2025,
        "market": "Philippines",
        "pc": "PC64",
        "title": "Form Banner Everest",
        "description": "Lead forms such as Request a Quote and Test Drive previously presented a highly functional but generic interface, lacking strong visual reinforcement of the specific vehicle the user had been exploring. This created a psychological disconnect, as users moved from a rich, product-driven browsing experience into a neutral, form-heavy environment, increasing the likelihood of hesitation or drop-off.\n\nTo bridge this gap, a relevant vehicle visual (Everest model) was introduced as a banner on the form page, dynamically aligned with the user's prior selection. This ensured continuity between browsing and conversion stages, reinforcing the user's original intent.\n\nThe hypothesis was grounded in behavioral consistency and emotional reinforcement: visually reintroducing the product at the point of conversion would strengthen user confidence, validate their choice, and reduce second-guessing. By making the form feel more personalized and product-centric rather than transactional, the experiment aimed to sustain momentum and improve completion rates.",
        "result": "+16% CR, 88 leads",
        "duration": "52 days",
        "jira": "#",
        "tags": ["Build Trust", "Improve Clarity"]
    },
    {
        "year": 2025,
        "market": "South Africa",
        "pc": "PC138",
        "title": "Increased Test Drive CTA Visibility on Latest Offers",
        "description": "Offer detail pages were previously optimized around a single primary action — 'Request a Quote (RAQ)' — implicitly assuming that all users reaching this stage were ready for a pricing conversation. However, user intent at this stage is often heterogeneous, with some users seeking experiential validation rather than immediate financial commitment.\n\nTo better align with these varying motivations, a secondary CTA — 'Book a Test Drive' — was introduced alongside the existing RAQ option, providing an alternative pathway for users not yet ready to engage on pricing.\n\nThe behavioral hypothesis was that users progress through different psychological stages of decision-making, and forcing a single action can create friction or misalignment. By offering multiple, intent-aligned CTAs, users could self-select the action that best matched their readiness level. This reduces decision friction, increases perceived control, and ultimately improves overall conversion by capturing a broader spectrum of user intent.",
        "result": "+126% CR, 14 leads",
        "duration": "59 days",
        "jira": "#",
        "tags": ["Add More Options", "Guide User"]
    },
    {
        "year": 2025,
        "market": "South Africa",
        "pc": "PC152",
        "title": "Personalized Journey Navigator",
        "description": "The existing experience treated all users uniformly, presenting identical CTAs regardless of whether they were first-time visitors or returning users. This lack of personalization failed to account for differences in familiarity, intent maturity, and decision readiness, often leading to irrelevant choices and increased cognitive load.\n\nThis experiment introduced a dynamic 'Journey Navigator' module that adapted CTA options based on user type. First-time users were guided toward exploratory actions such as browsing offers, using Build & Price, or connecting with a dealer, while returning users were presented with more action-oriented options like quick callbacks, offers, and test drives.\n\nThe hypothesis was rooted in behavioral segmentation: aligning available actions with the user's stage in the journey would improve relevance, reduce decision fatigue, and accelerate progression toward conversion. By simplifying the decision environment and surfacing the most appropriate next steps, the module aimed to increase engagement efficiency and conversion likelihood.",
        "result": "+85% CR, 148 leads",
        "duration": "16 days",
        "jira": "#",
        "tags": ["Personalize Experience", "Guide User"]
    },
    {
        "year": 2025,
        "market": "South Africa",
        "pc": "PC139",
        "title": "Still Exploring Widget",
        "description": "Users spending extended time (60+ seconds) on high-intent pages such as nameplate or model pages demonstrate strong engagement but often fail to transition into conversion actions, indicating potential indecision or lack of clear next steps.\n\nTo address this, a timed intervention was introduced in the form of a pop-up widget triggered after 60 seconds of active engagement. The messaging ('Still exploring your options? We'll help you decide.') was designed to be supportive rather than intrusive, and presented two clear next-step CTAs: Book a Test Drive and Inquire Now (RAQ).\n\nThe hypothesis was that prolonged dwell time is a signal of intent coupled with hesitation. By introducing a timely nudge with simplified choices, the experience reduces decision paralysis, provides guidance, and captures users at a moment of peak attention. This leverages behavioral triggers to convert passive exploration into active engagement.",
        "result": "+66% CR, 380 leads",
        "duration": "54 days",
        "jira": "#",
        "tags": ["Nudge User", "Guide User"]
    },
    {
        "year": 2025,
        "market": "Philippines",
        "pc": "PC187",
        "title": "Prominent Offer Section",
        "description": "On nameplate pages, especially on mobile devices, the Latest Offers section was positioned below the fold, requiring users to scroll or interact before discovering key promotional information. Given that offers are a primary decision driver, this created unnecessary friction and reduced the likelihood of users engaging with high-value content.\n\nThe experiment introduced a prominently positioned, above-the-fold Latest Offers section, ensuring immediate visibility upon page load. This repositioning aligned critical decision-making information with the user's initial attention window.\n\nThe hypothesis was that visibility directly influences engagement: surfacing offers early would capture attention, reinforce value perception, and encourage deeper interaction. By reducing discovery effort and aligning content hierarchy with user priorities, the change aimed to increase engagement with offers and drive higher conversion rates.",
        "result": "+146% CR, 16 leads",
        "duration": "41 days",
        "jira": "#",
        "tags": ["Improve Visibility", "Highlight Value"]
    }
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
      case "New Zealand":
        return "NZ";
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
              {["All", "Australia", "New Zealand", "Philippines", "South Africa", "Thailand", "Vietnam"].map((m) => (
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
