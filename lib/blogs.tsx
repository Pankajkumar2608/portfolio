import React from "react";

export type Blog = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: React.ReactNode;
};

export const blogs: Blog[] = [
  {
    slug: "about-me",
    title: "About Me",
    description: "My journey from exploring bug bounties and hacking APIs to building platforms scaling to 50k+ users.",
    date: "April 9, 2026",
    readTime: "3 min read",
    tags: ["Personal", "Journey", "Tech"],
    content: (
      <>
        <p>
          I was born into a middle-class family in India. My first real introduction to the tech world happened in 2015, thanks to my big brother. He had discovered a bug in some cash-giving referral applications. By changing device IMEI numbers, we managed to exploit the system and make around ₹10,000. For a year, we explored this space, but growing up in India, there is a reality you cannot escape: the pressure to study. I pivoted back to academics and ultimately cleared my high school exams with a solid percentage.
        </p>

        <h2>The Distraction & The Jio Exploit</h2>
        <p>
          Soon after, I began preparing for the JEE (Joint Entrance Examination), but frankly, I had zero interest at the time. I had just gotten my first laptop, and my priority shifted entirely to playing video games. Coming from a rural background, broadband wasn't an option. We had to recharge expensive cellular data plans—paying around ₹300 for just 50GB. It wasn't sustainable for my gaming needs. 
        </p>
        <blockquote>
          "Desperation leads to innovation."
        </blockquote>
        <p>
          I started looking for alternatives and stumbled across a YouTube video explaining how to exploit the Jio network using SNI (Server Name Indication) to get unlimited mobile data. I got in touch with the creator, learned the ropes, and started exploiting the network heavily. Deep down, I knew right then that I had to pursue a career in tech.
        </p>

        <h2>The JEE Reality Check</h2>
        <p>
          Eventually, I took the JEE Mains and scored in the 90th percentile—not enough to get into a top-tier engineering college. I also took a state entrance exam, qualified, and secured a seat, but my heart wasn't in it. 
        </p>
        <p>
          By mid-November, reality hit me: I <em>had</em> to crack JEE to get into a good college. Not for the degree, but to surround myself with smart, ambitious people who thought like me. Then, the NTA announced the exam would take place in January. I had roughly 25 days to prepare. 
        </p>
        <p>
          The previous year, Mathematics had destroyed my score, while Physics and Chemistry carried me. So, I dedicated those 25 days entirely to Math. Those were some of the worst days of my life—not just because of the intense academic grind, but also due to personal issues I created for myself. Despite everything, I managed to score in the 95th percentile in the January attempt. It still wasn't quite enough for a top NIT, so rather than trying again in April, I changed paths completely.
        </p>

        <h2>From Exploits to Software Engineering</h2>
        <p>
          I immediately started diving deep into coding and hacking. I got introduced to binning and payment exploits. Eventually, I found vulnerabilities in the V0 payment gateways, .tech domains, BookMyShow, and other platforms. I'll admit—I didn't report them; I was too busy experimenting with them.
        </p>
        <p>
          But soon, the thrill of breaking things evolved into the passion for building them. I shifted my focus to software engineering and started working on a JEE College Predictor platform (<a href="https://motivationkaksha.in" target="_blank" rel="noopener noreferrer">Motivation Kaksha</a>). I wanted to solve the exact problems I faced during JOSAA and CSAB counseling. The platform exploded and scaled to <strong>50,000+ active users</strong>.
        </p>

        <h2>The Industry & What's Next</h2>
        <p>
          In January 2025, I landed my first internship. By mid-March 2025, an incredible opportunity arose at an algorithmic trading startup. I joined them and absolutely loved the work. Since then, I've received several other job offers, but I rejected them all because I loved what I was building there and the team I was with—even if the pay initially wasn't great.
        </p>
        <p>
          I'm a builder at heart. I love solving hard problems, understanding systems deeply, and getting my hands dirty with code. So, if you're building something great, solving a real problem, and you pay well... <strong>hire me.</strong>
        </p>
      </>
    ),
  },
];
