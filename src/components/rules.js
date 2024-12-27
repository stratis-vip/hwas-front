import { useState } from "react";
import { rules } from "../data/rules";

export default function Rules() {
  return (
    <>
      <h1 className={`
      mt-1 text-center  text-2xl font-semibold
      sm:mt-5  sm:text-5xl text-primary`}>
        Welcome to New Athena!
      </h1>
      <div className={`
      sm:mx-8 sm:mt-7`}>
        <h1 className={`
        mt-2 sm:text-2xl 
        text-xl font-bold text-center
        `}>
          General rules of our Guild <br />
          <span className="sm:text-lg text-sm italic font-normal">
            (press at any rule to see a short explanation)
          </span>
        </h1>
        <Text>
          {rules.map((rule) => {
            // debugger
            return <Explanation key={rule.id} rule={rule} />
          })}
        </Text>
      </div>
      <div className="sm:mx-8 sm:mt-7">
        <div>
          {/* <h1 className="text-2xl font-bold mt-10">
              
            </h1> */}
          <Text banner={"Instructions to new Members."}>
            <div className="sm:text-lg">
              <p>We are sure that you enjoy your stay with us!</p>
              <p>Some rules of thumbs to make your life easier!</p>
              <ol>
                <li className="mt-2 ml-3 list-inside list-decimal">
                  Be active and try to get the weekly activity levels.
                  Activities and Titanites help the whole team to develop
                  faster! it&apos;s a win-win practice!
                </li>
                <li className="mt-2 ml-3 list-inside list-decimal">
                  If you need to be offline for some days, inform a general
                  about it!
                </li>

                <ul>
                  <li className="mt-2 ml-6 list-disc list-inside">
                    Do an adventure every day or{" "}
                  </li>
                  <li className="mt-2 ml-6 list-disc list-inside">
                    Keep active the last one (with 4 chests) to raid it the
                    next day.
                  </li>
                  <li className="mt-2 ml-6 list-disc list-inside">
                    We do adventures from lvl10 to 13!
                  </li>
                  <li className="mt-2 ml-6 list-disc list-inside">
                    Adv13 is suggested only on adventure 12 map!
                  </li>
                  <li className="mt-2 ml-6 list-disc list-inside">
                    Recommended paths exists at team&apos;s website!
                  </li>
                  <li className="mt-2 ml-6 list-disc list-inside">
                    if your heroes are over 600K you may be able to get 4
                    chests with a favor buff!
                  </li>
                  <li className="mt-2 ml-6 list-disc list-inside">
                    Ask for people to join or join automatically if adventure
                    is public.
                  </li>
                </ul>
                <li>
                  <li className="mt-2 ml-3 list-inside list-decimal">
                    Anything that feels wrong to you, don&apos;t hesitate to speak
                    about it ta public chat or with pm at any general! we will
                    be happy to resolve any conflict.
                  </li>
                </li>
              </ol>
            </div>
          </Text>
        </div>
        <div>
          <Text banner={"Instructions to new Champions."}>
            <div className="sm:text-lg">
              <p>In war, main planners are Stratis and Fight4Trump.</p>
              <ol>
                <li className="mt-2 ml-3 list-inside list-decimal">
                  We expect you to do all your attacks and we will put any
                  effort to do your attacks in a time frame suitable for you!
                </li>
                <li className="mt-2 ml-3 list-inside list-decimal">
                  If there is a need to leave early, please ask to assign you
                  immidiately.
                </li>

                <li className="mt-2 ml-3 list-decimal list-inside">
                  If you fell that the target assigned is too hard for you or
                  is wrong (mistakes happens too) then say so! it may be a
                  part of the plan or a mistake!
                </li>
                <li className="mt-2 ml-3 list-decimal list-inside">
                  If in doubt, do not attack! Do tell-ask!
                </li>
                <li className="mt-2 ml-3 list-decimal list-inside">
                  We expect to make your tests, when you are not sure about
                  the best line up of your team to the sepcific target.
                  <span className="italic">
                    After a while, we will have a recodrd of your attacks and
                    we can help you too!
                  </span>
                </li>
                <li className="mt-2 ml-3 list-decimal list-inside">
                  Be polite and supportive to other champions. No one wants to
                  loosing at war, but some times it happens! it&apos;s better to
                  support our team mates than to blame them!
                </li>
                <li className="mt-2 ml-3 list-decimal list-inside">
                  If you think you see an error at the plan, or a better
                  approach feel free to tell so
                </li>
              </ol>
            </div>
          </Text>
        </div>
        <div>
          <Text banner={"Guild Master Presents Rules"}>
            <div className="sm:text-lg">
              <p>Gifts will be given every Saturday, like these: </p>
              <ol>
                <div>
                  <li className="mt-2 ml-3 list-inside list-decimal inline-block font-bold">
                    Places 1 - 5:
                  </li>
                  <span>&nbsp; 4 presents</span></div>
                <div>
                  <li className="mt-2 ml-3 list-inside list-decimal inline-block font-bold">
                    Places 6 - 10:
                  </li>
                  <span>&nbsp; 3 presents</span></div>
                <div><li className="mt-2 ml-3 list-inside list-decimal inline-block font-bold">
                  Places 11 - 20:
                </li>
                  <span>&nbsp; 2 presents</span></div>
                {/* 4*5+ 3*5+2*10+1*10 */}
                <li className="mt-2 ml-3 list-inside list-decimal inline-block font-bold">
                  Places 21 - 30:
                </li>
                <span>&nbsp; 1 present</span>
              </ol>
              <div>Every week, at the news page, will announced if the presents was for activities or titanites.</div>
              <div>If there are not enough presents, all category presents will deduced by one.</div>

            </div>
          </Text>
        </div>
      </div>
    </>
  );
}
const Explanation = ({ rule }) => {
  const [hide, setHide] = useState(true);
  return (
    <div key={rule.id} className={`sm:text-xl my-2`}>
      <div
        className="cursor-pointer font-bold "
        onClick={() => setHide((h) => !h)}
      >
        {rule.id}. {rule.title}
      </div>
      <div className={`${hide ? "hidden" : "block"} font-light italic`}>
        {rule.explanation}
      </div>
    </div>
  );
};



const Text = ({ children, banner, subBanner }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="sm:w-2/5 mx-3">
        <h1 className="mt-4 sm:mt-8 sm:text-2xl text-xl font-bold text-center mb-3">
          {banner}
          <br className={`${subBanner ? "block" : "hidden"}`} />
          <span
            className={`${subBanner ? "block" : "hidden"
              } text-lg italic font-normal`}
          >
            {subBanner}
          </span>
        </h1>
        {children}
      </div>
    </div>
  );
};
