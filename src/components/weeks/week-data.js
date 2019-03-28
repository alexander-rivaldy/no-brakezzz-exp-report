import {
    Bowling,
    DanielUrl,
    Development,
    Discussion,
    Food,
    Game,
    GoCD,
    HandoverIcon,
    HoliIcon,
    Monitor,
    PamelaUrl,
    Peacock,
    PO,
    Poison,
    ShowcaseIcon,
    Toggle
} from "../image";
import {NoBrakezzz} from "../team/team-data";

export const Weeks = [
    {
        weekNum: 0,
        path: "/week-0",
        weekTitle: "I just haven't met you yet",
        weekSummary: "The week No Brakerzzz arrived in Pune.",
        weekDescription: "Flying over to Pune from all around the world, we all arrived with eyes full of hope, high determination" +
            " and the willingness to learn. Then day 0 of TWU64 came and we all interacted with each other without knowing" +
            " we would be in the same team. Little did we know, during dinner time the table arrangement was based on our" +
            " future team! Except that Sarah wasn't there, but Mahsa instead.",
        highlights: [
            {
                name: "Plenty of Presentations",
                imageUrl: ShowcaseIcon
            },
            {
                name: "First interaction: Dinner",
                imageUrl: Food
            }

        ]
    },
    {
        weekNum: 1,
        path: "/week-1",
        weekTitle: "No Brakerzzz Assemble",
        weekSummary: "At this very week, No Brakezzz was born!",
        weekDescription: "The first thing we did after we assembled as a team, and huddled to come up with a name, was to " +
            "meet the Product Owner. That was the moment we were introduced to FreeWheelers as well as our focus for " +
            "the first iteration, Country story.",
        highlights: [
            {
                name: "Team assemble: Peacock!",
                imageUrl: Peacock
            },
            {
                name: "Coming up with team name",
                imageUrl: Discussion
            },
            {
                name: "Gaming Night",
                imageUrl: Game
            },
            {
                name: "First feature development",
                imageUrl: Development
            }
        ]
    },
    {
        weekNum: 2,
        path: "/week-2",
        weekTitle: "Accelerate all day every day",
        weekSummary: "Time to break the pipeline I guess?",
        weekDescription: "After our showcase we found out our CI environment was broken. After looking into it, we found out" +
            " it was broken because it was out of disk space and we fixed it by extending the pipeline script to delete" +
            " old artifacts. When we finally got this fixed we were able to push our first code to production which was" +
            " very exciting. Then we found out we had to back up the production DB and we finally found out how and implemented it.",
        highlights: [
            {
                name: "First Showcase!",
                imageUrl: ShowcaseIcon
            },
            {
                name: "CI ENV broke for the first time",
                imageUrl: GoCD
            },
            {
                name: "First production deploy (Friday night)",
                imageUrl: GoCD
            },
            {
                name: "Backup production DB",
                imageUrl: GoCD
            }
        ],
        showcaseFacilitator: [
            NoBrakezzz.rodney, NoBrakezzz.louise
        ],
        showcaseSpeaker: [
            NoBrakezzz.sarah, NoBrakezzz.jacob, NoBrakezzz.stivali, NoBrakezzz.spandan,
            NoBrakezzz.trystan
        ],
        showcaseScribe: [
            NoBrakezzz.pamela
        ],
        showcaseOperator: [
            NoBrakezzz.zoey
        ],
        showcaseRetro: [
            NoBrakezzz.ann, NoBrakezzz.daniel
        ],
        slideUrl: "https://docs.google.com/a/thoughtworks.com/presentation/d/e/2PACX-1vQ-pstLMNLi3wlENy_p0F-MY2BQyT_F9ypFVbSg7TWRpgg9tPwCKzP4JDf-pLPMH_uGiiU01cLh9Xha/embed?start=false&loop=false&delayms=10000"

    },
    {
        weekNum: 3,
        path: "/week-3",
        weekTitle: "The Halfway checkpoint",
        weekSummary: "For some reason we have so many things happening this week",
        weekDescription: "Our PO was out of the office for a business trip and we had her coworker as our new PO for this" +
            " week. We had to learn how to adapt to this new PO because her style and requirements were vastly different" +
            " from our original PO. This week also featured our team outing to Chang’s plus bowling in Phoenix Mall." +
            " After that we got our build monitor working just in time for Jacob to break the build right before the Lonavala Trip.",
        highlights: [
            {
                name: "Build Monitor",
                imageUrl: Monitor
            },
            {
                name: "PO delegate another person to fill in",
                imageUrl: PO
            },
            {
                name: "Showcase 2",
                imageUrl: ShowcaseIcon
            },
            {
                name: "Feature Togglz",
                imageUrl: Toggle
            },
            {
                name: "Daniel's Birthday!",
                imageUrl: DanielUrl
            },
            {
                name: "Team Outing",
                imageUrl: Bowling
            },
            {
                name: "PO surprise visit",
                imageUrl: PO
            },
            {
                name: "Lonavala weekend broken build",
                imageUrl: GoCD
            }
        ],
        showcaseFacilitator: [
            NoBrakezzz.rodney, NoBrakezzz.jacob
        ],
        showcaseSpeaker: [
            NoBrakezzz.bryce, NoBrakezzz.stivali, NoBrakezzz.alex, NoBrakezzz.trystan
        ],
        showcaseScribe: [
            NoBrakezzz.sarah
        ],
        showcaseOperator: [
            NoBrakezzz.spandan
        ],
        showcaseRetro: [
            NoBrakezzz.sarah, NoBrakezzz.pamela
        ],
        slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vTtY0Si6JhzLA9F281QCNKTF7X1U1AKJZn-G4NeFsRiQQjubszv16CuRgHumJPlUJNtW_sQnlOsii2L/embed?start=false&loop=false&delayms=10000"
    },
    {
        weekNum: 4,
        path: "/week-4",
        weekTitle: "The uh-oh moment",
        weekSummary: "Nope. Just, Nope.",
        weekDescription: "At this stage of Client Engagement, we thought that everything has been going well based on the" +
            " PO’s reacting during showcases. We also had good internal team communication, enforcing our initial" +
            " thinking even more. That vision was quickly shattered by an email from the PO on Friday mentioning that" +
            " she wanted all features to be finished by the next showcase. At that point, we haven’t kicked off the See" +
            " Product Images story yet, and our email reply wasn’t the best too. Uh-oh.",
        highlights: [
            {
                name: "PO demanding all features to be finished",
                imageUrl: PO
            },
            {
                name: "Resolving high effort high pain Tech Debt",
                imageUrl: Development
            }
        ],
        showcaseFacilitator: [
            NoBrakezzz.bryce, NoBrakezzz.alex
        ],
        showcaseSpeaker: [
            NoBrakezzz.sarah, NoBrakezzz.bryce, NoBrakezzz.pamela,
            NoBrakezzz.zoey, NoBrakezzz.spandan, NoBrakezzz.trystan
        ],
        showcaseScribe: [
            NoBrakezzz.stivali
        ],
        showcaseOperator: [
            NoBrakezzz.jacob
        ],
        showcaseRetro: [
            NoBrakezzz.trystan, NoBrakezzz.stivali
        ],
        slideUrl:"https://docs.google.com/presentation/d/e/2PACX-1vS95JUd2MeFxITq-uHpMCojRR-0emuuzbQFh09FF31Gzgt553XVys5Bqi1_YRkJ8qJgCTTVcHWdSWrc/embed?start=false&loop=false&delayms=10000"
    },
    {
        weekNum: 5,
        path: "/week-5",
        weekTitle: "Final acceleration",
        weekSummary: "The bitter-sweet end of ThoughtWorks University 64",
        weekDescription: "The final week of our Client Engagement. We had a lot to deliver because the PO expected us to" +
            " have all of the stories finished that were promised in the inception. Even with all of our hard work we" +
            " couldn’t manage to finish adding multiple items to the shopping cart and product images. We went into" +
            " showcase not knowing how the PO would react and at the very end of the showcase the PO received a call" +
            " from her bosses. We were told we had 5 mins to prepare for a 15 minute demo of our work and as we were" +
            " scrambling to prepare the demo, the PO surprised us all with cake and told us we didn’t actually have to" +
            " demo anything. We all had a good laugh about it and celebrated the end of our project.",
        highlights: [
            {
                name: "Staging ENV broke right before showcase",
                imageUrl: GoCD
            },
            {
                name: "Final Showcase",
                imageUrl: ShowcaseIcon
            },
            {
                name: "Handover document",
                imageUrl: HandoverIcon
            },
            {
                name: "Pamela's Birthday!",
                imageUrl: PamelaUrl
            },
            {
                name: "Happy Holi!",
                imageUrl: HoliIcon
            },
            {
                name: "Mass Food Poisoning",
                imageUrl: Poison
            }
        ],
        showcaseFacilitator: [
            NoBrakezzz.rodney
        ],
        showcaseSpeaker: [
            NoBrakezzz.alex, NoBrakezzz.bryce, NoBrakezzz.jacob, NoBrakezzz.louise,
            NoBrakezzz.pamela, NoBrakezzz.sarah, NoBrakezzz.spandan, NoBrakezzz.stivali,
            NoBrakezzz.trystan, NoBrakezzz.zoey
        ],
        showcaseScribe: [
            NoBrakezzz.rodney
        ],
        showcaseOperator: [
            NoBrakezzz.spandan, NoBrakezzz.stivali
        ],
        showcaseRetro: [
            "Tito"
        ],
        slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ2tHI_iwSoVdoU_p_DlE8I_3Qp4-t6LMCAFmeL-7wbTs8EBqHRe329aS8ho6f--S2X5DpTlVLL89uH/embed?start=false&loop=false&delayms=10000"
    }
];