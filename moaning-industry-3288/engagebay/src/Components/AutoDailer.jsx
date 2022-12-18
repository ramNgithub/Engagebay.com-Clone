import React from "react";
import engagebayawards from "../assets/engagebayawards.png";
import "../styles/auto.css";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { GiCheckMark } from "react-icons/gi";

let data = [
  {
    src: "https://cdn5.engagebay.com/img/powerful-Text-Editors.svg",
    title: "Optimize Call Center Operations",
    des: "Eliminate the glitches that are part of manual dialing such as hanging up, misdirecting, and additional latency.",
  },
  {
    src: "https://cdn5.engagebay.com/img/unlimited-Space-For-Storage.svg",
    title: "Increase Agent Productivity",
    des: "By switching from manual to automatic dialing, increase your agents' productivity.",
  },
  {
    src: "https://cdn5.engagebay.com/img/search-Engine-Friendliness.svg",
    title: "Reduce Idle Time",
    des: "Your agents need not waste time handling disconnected, unanswered, and busy calls, and can focus more on customer interaction and driving sales.",
  },
  {
    src: "https://cdn5.engagebay.com/img/efficiency-Of-Support.svg",
    title: "Avoid Unproductive Numbers",
    des: "Detect unproductive numbers such as Do Not Disturb (DND) and fax lines. Integrate cloud-based autodialers with customer relationship management (CRM) systems seamlessly.",
  },
  {
    src: "https://cdn5.engagebay.com/img/offer-Quicker-Resolutions.svg",
    title: "Generate More Leads",
    des: "Interact with more customers and warm prospects by reducing agent talk time. Maximize lead generation and increase the possibility of sales.",
  },
  {
    src: "https://cdn5.engagebay.com/img/keep-Your-Customers-Happy.svg",
    title: "Convert More Leads",
    des: "Set and adjust time zones for each marketing campaign to reach out to your prospects in their time zones and increase the chances of conversion.",
  },
  {
    src: "https://cdn5.engagebay.com/img/train-new-agents.svg",
    title: "Monitor Performance in Real-Time",
    des: "With the auto-dialer's user-friendly interface, generate multiple reports based on real time data. Check these reports to monitor call center activity and measure agent productivity.",
  },
  {
    src: "https://cdn5.engagebay.com/img/train-new-agents.svg",
    title: "Manage Multiple Marketing Campaigns",
    des: "Run and monitor multiple marketing campaigns at once and also conduct market research and promote your products/services.",
  },
];

export const AutoDailer = () => {
  return (
    <div>
      <div>
        <h1 className="auto-heading">Auto Dialer Software</h1>
        <h2 className="sub-heading">
          Power up your outbound calls by automating them and increase agent
          productivity.
        </h2>
        <p className="auto-para">
          Signup now & get a <b>FREE</b> onboarding session worth $1199
        </p>
      </div>
      <div className="auto-signup">
        <input placeholder="Your email address" />
        <button>FREE SIGNUP</button>
        <img
          src="https://cdn5.engagebay.com/img/try-it-out.svg"
          alt="tryout-svg"
        />
      </div>

      <div className="auto-features">
        <div className="auto-check">
          <GiCheckMark className="text-amber-600" />
          <h2>Free for 15 users</h2>
        </div>
        <div className="auto-check">
          <GiCheckMark className="text-amber-600" />
          <h2>No credit card required</h2>
        </div>
      </div>

      <div className="w-9/12 m-auto my-16">
        <img
          src="https://cdn5.engagebay.com/engagebay-images/360-degree/engagebay-360-degree-view.webp"
          alt="autodiler-pic1"
        />
      </div>

      <div>
        <img src={engagebayawards} alt="engagebayawards" />
      </div>

      <div id="info" className="my-10">
        {/* 1 */}
        <div className="auto-info-odd">
          {/* left */}
          <div className="auto-info-content">
            <h1>Outbound Calls</h1>
            <p>
              Make calls from the EngageBay dashboard with a single click.
              Whether it's a standalone call or a set of calls to different
              contacts in succession, the auto-dialer makes it quick and easy
              for you.
            </p>
          </div>
          {/* right */}
          <div>
            <img
              src="https://cdn5.engagebay.com/images/simple-contact-management.png"
              alt="first"
            />
          </div>
        </div>
        {/* 2 */}
        <div className="auto-info-even">
          {/* left */}
          <div>
            <img
              src="https://cdn5.engagebay.com/images/nurture-leads.png"
              alt="first"
            />
          </div>
          {/* right */}
          <div className="auto-info-content">
            <h1>Inbound Calls</h1>
            <p>
              Don’t leave your CRM to receive calls from your contacts. Gain
              valuable insight into caller details with readily accessible views
              of customer information before, during or after a call.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="auto-info-odd">
          {/* left */}
          <div className="auto-info-content">
            <h1>Alerts For Missed Calls</h1>
            <p>
              Know who called when you couldn't be available to receive the
              call. Be notified about missed calls by receiving an automated
              alert each time that you miss a call.
            </p>
          </div>
          {/* right */}
          <div>
            <img
              src="https://cdn5.engagebay.com/images/automated-tasks-and-appointment-scheduling-2.png"
              alt="first"
            />
          </div>
        </div>
        {/* 4 */}
        <div className="auto-info-even">
          {/* left */}
          <div>
            <img
              src="https://cdn5.engagebay.com/images/make-calls-from-crm.webp"
              alt="first"
            />
          </div>
          {/* right */}
          <div className="auto-info-content">
            <h1>Tagging Calls</h1>
            <p>
              For precise identification of your contacts in the future, add
              different call tags to contacts you speak with. Every time you
              check your call history, you’ll know who you spoke to.
            </p>
          </div>
        </div>
        {/* 5 */}
        <div className="auto-info-odd">
          {/* left */}
          <div className="auto-info-content">
            <h1>Muting Calls</h1>
            <p>
              A colleague has something important to convey during a call? The
              mute feature ensures that you can put the contact on hold any time
              you need to address something else during the call.
            </p>
          </div>
          {/* right */}
          <div>
            <img
              src="https://cdn5.engagebay.com/images/automated-tasks-and-appointment-scheduling-2.png"
              alt="first"
            />
          </div>
        </div>
        {/* 6 */}
        <div className="auto-info-even">
          {/* left */}
          <div>
            <img
              src="https://cdn5.engagebay.com/images/make-calls-from-crm-1.png"
              alt="first"
            />
          </div>
          {/* right */}
          <div className="auto-info-content">
            <h1>Recording Calls & Playback</h1>
            <p>
              Always stay focused on the call instead of taking notes. For
              future reference, you can record important calls at any time.
              Refer to the records to re-visit whatever was discussed.
            </p>
          </div>
        </div>
        {/* 7 */}
        <div className="auto-info-odd">
          {/* left */}
          <div className="auto-info-content">
            <h1>Log Calls</h1>
            <p>
              EngageBay's real-time call logs help you keep track of your
              communications and of those of your team members'. Have everybody
              stay accountable by referencing these logs.
            </p>
          </div>
          {/* right */}
          <div>
            <img
              src="https://cdn5.engagebay.com/images/automated-tasks-and-appointment-scheduling-2.png"
              alt="first"
            />
          </div>
        </div>
        {/* 8 */}
        <div className="auto-info-even">
          {/* left */}
          <div>
            <img
              src="https://cdn5.engagebay.com/images/make-calls-from-crm-1.png"
              alt="first"
            />
          </div>
          {/* right */}
          <div className="auto-info-content">
            <h1>Wrap-up Calls</h1>
            <p>
              Always stay focused on the call instead of taking notes. For
              future reference, you can record important calls at any time.
              Refer to the records to re-visit whatever was discussed.
            </p>
          </div>
        </div>
        {/* 9 */}
        <div className="auto-info-odd">
          {/* left */}
          <div className="auto-info-content">
            <h1>Call Reporting</h1>
            <p>
              Get regular email reports about the call activity of your team
              members and manage performance better, understand areas of
              improvement, and ensure everyone is on the job.
            </p>
          </div>
          {/* right */}
          <div>
            <img
              src="https://cdn5.engagebay.com/images/automated-tasks-and-appointment-scheduling-2.png"
              alt="first"
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="sub-heading">Benefits of auto dialer software</h1>
      </div>
      {/* FAQ */}
      <div className="auto-faq">
        {data.map((item, i) => (
          <div className="text-center" key={i}>
            <img className="w-16 m-auto" src={item.src} alt="item.title" />
            <h3>{item.title}</h3>
            <p className="text-sm text-center">{item.des}</p>
          </div>
        ))}
      </div>

      {/* Accordion */}
      <div>
        <h1 className="text-4xl font-normal text-center">
          Auto Dialer Software Frequently Asked Questions (FAQ's):
        </h1>
      </div>
      <div className="auto-accordion">
        {/* left */}
        <div className="auto-info-content">
          <Accordion allowToggle className="w-10/12 m-auto">
            <AccordionItem className="rounded-lg mb-4 bg-slate-50 border-solid border-2 p-2">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What is auto dialer software?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-justify px-6 py-4">
                An auto dialer, also known as an automatic dialer is an
                electronic device or software that automatically dials telephone
                numbers from a database. It can be programmed to leave messages
                for people on answering machines, receive recorded responses or
                dial telephone numbers for an operator. Auto dialers are
                extensively used in call centers, telemarketing and customer
                support. Auto dialers are used with telephones, pager networks
                or mobile phones. Once calls are established, auto dialers
                announce verbal messages or transmit digital data to caller
                parties.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="rounded-lg mb-4 bg-slate-50 border-solid border-2 p-2">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    How do sales teams benefit from using a predictive dialer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-justify px-6 py-4">
                There are many benefits for sales teams in using a predictive
                dialer. Some of these are: Lower costs for outbound calling: The
                lesser the idle time, more are the conversations. Engagement and
                communication has a greater potential for closing more sales.
                Optimization of time and work: It is obvious that dialing
                numbers manually can take more time than automated dialing. And
                let's not forget the time spent listening to a dial tone. Using
                a predictive dialer eliminates most of it, resulting in more
                conversations much faster. Improving the reach rate: A
                predictive dialer analyzes each call, and filters out the
                unproductive ones, passing over only the genuine calls answered
                by real people. This, in turn, can increase your reach rates
                substantially. More lead engagement time: Saving time by not
                having to dial numbers manually means that you can focus on each
                lead for longer. You no longer need to go through the call list
                quickly. Instead, you can concentrate on what you really love
                doing – connecting with and engaging prospects.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        {/* right */}
        <div className="auto-info-content">
          <Accordion allowToggle className=" w-10/12 m-auto">
            <AccordionItem className="rounded-lg mb-4 bg-slate-50 border-solid border-2 p-2">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    How can an auto dialer boost your business communication?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-justify px-6 py-4">
                Auto-dialers can boost your business communication in several
                ways such as: It is time-saving: Making outbound calls manually
                to a large number of customers is a lengthy and time-consuming
                process. An automatic dialer ensures an organized, quick and
                scalable outbound calling process. Reduces dependency on
                manpower: Auto dialer software helps reduce dependency on human
                resources by increasing the productivity of your agents, thereby
                allowing businesses to get more done with fewer resources.
                Increases sales: An auto dialer can make more calls than a human
                caller in the same time frame, and also can make calls in
                parallel. This efficiency significantly increases a company’s
                sales. Increases revenue: By using an automated dialer software,
                businesses can generate and convert more leads, ultimately
                resulting in higher revenue.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="rounded-lg mb-4 bg-slate-50 border-solid border-2 p-2">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What types of businesses are best suited for
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-justify px-6 py-4">
                Auto-dialers are not only meant for large telemarketing firms
                and call centers. Auto-dialer software is extremely versatile;
                you can use it in any outbound calling situation. So, if you
                make sales calls on a regular basis or if your business can
                improve by closing more deals over the phone, the auto-dialer
                software is just right for you.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* bottom part */}
      <div className="auto-bottom">
        {/* left */}
        <div className="auto-bottom-left">
          <div>
            <h1>
              Unlimited users{" "}
              <span className="font-extrabold text-blue-900">free forever</span>
            </h1>
            <p>
              With awesome software backed by a dedicated support team, make
              every part of your marketing, sales & helpdesk more effective.
            </p>
          </div>
          <div className="flex gap-8 mt-6">
            <div className="flex gap-2">
              <GiCheckMark className="text-amber-600" />
              <h2>Affordable</h2>
            </div>
            <div className="flex gap-2">
              <GiCheckMark className="text-amber-600" />
              <h2>All-in-one Software</h2>
            </div>
            <div className="flex gap-2">
              <GiCheckMark className="text-amber-600" />
              <h2>Free Onboarding Sessions</h2>
            </div>
          </div>

          <div className="auto-bottom-img">
            <img
              src="https://cdn5.engagebay.com/images/engagebay-capterra.png"
              alt="poster"
            />
            <img
              src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/eb-supreme-software-new.png"
              alt="poster"
            />
            <img
              src="https://cdn5.engagebay.com/img/engagebay-saasworthy.png"
              alt="poster"
            />
            <img
              src="https://cdn5.engagebay.com/images/engagebay-g2crowd.png"
              alt="poster"
            />
            <img
              src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/eb-expert-choice-new.png"
              alt="poster"
            />
          </div>
        </div>
        {/* right */}
        <div className="auto-bottom-right">
          <h1>Get Started</h1>
          {/* form */}
          <div>
            <form>
              <input
                placeholder="Name"
              />
              <input
                placeholder="Email"
              />
              <input
                placeholder="Password"
              />
              <input
                type={"submit"}
                value="SIGNUP FREE"
                className="auto-bottom-right-submit"
              />
            </form>
          </div>
          <div>
            <button >SCHEDULE A CALL</button>
          </div>
        </div>
      </div>
    </div>
  );
};
