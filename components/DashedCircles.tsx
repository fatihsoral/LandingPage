import React from "react";
import SvgVector1 from "../icons/Vector1";
import SvgVector2 from "../icons/Vector2";
import SvgVector3 from "../icons/Vector3";
import SvgVector4 from "../icons/Vector4";
import SvgVector5 from "../icons/Vector5";
import SvgVector6 from "../icons/Vector6";
import SvgVector7 from "../icons/Vector7";
import SvgVector8 from "../icons/Vector8";
import SvgVector9 from "../icons/Vector9";
import Image from "next/image";

const DashedCircles = () => {
  return (
    <div>
      <div className="relative w-80 h-80  md:w-[420px] md:h-[420px] inline-flex items-center justify-center">
        <SvgVector9 className="md:animate-spin-10s" />
        <div className="absolute inset-4 inline-flex items-center justify-center">
          <SvgVector8 className="md:animate-spin-9s" />
          <div className="absolute inset-4 md:inset-0 inline-flex items-center justify-center">
            <SvgVector7 className="md:animate-spin-8s" />
            <div className="absolute inset-4 md:inset-0 inline-flex items-center justify-center">
              <SvgVector6 className="md:animate-spin-7s" />
              <div className="absolute inset-0 inline-flex items-center justify-center">
                <SvgVector5 className="md:animate-spin-6s" />
                <div className="absolute inset-4 inline-flex items-center justify-center">
                  <SvgVector4 className="md:animate-spin-5s" />
                  <div className="absolute inset-4 inline-flex items-center justify-center">
                    <SvgVector3 className="md:animate-spin-4s" />
                    <div className="absolute inset-4 inline-flex items-center justify-center">
                      <SvgVector2 className="md:animate-spin-3s" />
                      <div className="absolute inset-4 inline-flex items-center justify-center">
                        <SvgVector1 className="md:animate-spin-2s" />
                        <div className="absolute md:bottom-2 md:-right-8 w-2/3 md:w-auto -bottom-14 -right-20">
                          <Image
                            src={"/azuredevops.svg"}
                            alt={""}
                            width={80}
                            height={80}
                          ></Image>
                        </div>
                        <div className="absolute md:-top-2 md:-left-4 w-2/3 md:w-auto -top-14 -left-14">
                          <Image
                            src={"/jira.svg"}
                            alt={""}
                            width={80}
                            height={80}
                          ></Image>
                        </div>
                        <div className="absolute md:-top-4 md:-right-4 w-2/3 md:w-auto -top-14 -right-20">
                          <Image
                            src={"/teams.svg"}
                            alt={""}
                            width={80}
                            height={80}
                          ></Image>
                        </div>
                        <div className="absolute md:bottom-0 md:-left-6 w-2/3 md:w-auto -bottom-12 -left-16">
                          <Image
                            src={"/slack.svg"}
                            alt={""}
                            width={80}
                            height={80}
                          ></Image>
                        </div>
                        <div className="absolute">
                          <Image
                            src={"/black-logo.svg"}
                            alt={""}
                            width={100}
                            height={26}
                          ></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DashedCircles);
