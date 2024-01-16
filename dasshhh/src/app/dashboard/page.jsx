"use client";
import React from "react";
import { Circle } from "rc-progress";
import CountUp from "react-countup";
import Layout from "../components/layout";
import GeoChart from "../analytics/charts/geoChart";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import DvrRoundedIcon from "@mui/icons-material/DvrRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-4 gap-12">
          <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-110">
              <div className="flex justify-between">
                <div className="ml-10 mt-6">
                  <Groups3RoundedIcon fontSize="large" />
                </div>
                <div className="mt-5 roundprogress mr-7">
                  <Circle
                    percent={69}
                    strokeWidth={12}
                    trailWidth={9}
                    strokeColor="rgb(2, 132, 199)"
                    trailColor="#b3a4f3"
                  />
                </div>
              </div>
              <div className="pl-7 py-5">
                <div className="text-blue-800  font-bold">Total Users</div>
                <div className="ml-3 text-3xl font-bold">
                  <CountUp start={0} end={649} delay={1} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-110">
              <div className="flex justify-between">
                <div className="ml-10 mt-6">
                  <AssignmentRoundedIcon fontSize="large" />
                </div>
                <div className="mt-5 roundprogress mr-7">
                  <Circle
                    percent={51}
                    strokeWidth={12}
                    trailWidth={9}
                    strokeColor="red"
                    trailColor="#b3a4f3"
                  />
                </div>
              </div>
              <div className="pl-7 py-5">
                <div className="text-blue-800  font-bold">Pending Tasks</div>
                <div className="ml-3 text-3xl font-bold">
                  <CountUp start={0} end={46} delay={1} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-110">
              <div className="flex justify-between">
                <div className="ml-10 mt-6">
                  <CalendarMonthRoundedIcon fontSize="large" />
                </div>
                <div className="mt-5 roundprogress mr-7">
                  <Circle
                    percent={90}
                    strokeWidth={12}
                    trailWidth={9}
                    strokeColor="green"
                    trailColor="#b3a4f3"
                  />
                </div>
              </div>
              <div className="pl-7 py-5">
                <div className="text-blue-800  font-bold">Meetings</div>
                <div className="ml-3 text-3xl font-bold">
                  <CountUp start={0} end={128} delay={1} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 sm:col-span-4 xs:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-110">
              <div className="flex justify-between">
                <div className="ml-10 mt-6">
                  <DvrRoundedIcon fontSize="large" />
                </div>
                <div className="mt-5 roundprogress mr-7">
                  <Circle
                    percent={79}
                    strokeWidth={12}
                    trailWidth={9}
                    strokeColor="orange"
                    trailColor="#b3a4f3"
                  />
                </div>
              </div>
              <div className="pl-7 py-5">
                <div className="text-blue-800  font-bold">Projects</div>
                <div className="ml-3 text-3xl font-bold">
                  <CountUp start={0} end={420} delay={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-10">
          <div className="lg:col-span-1 sm:col-span-3 xs:col-span-3">
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-xl shadow-lg hover:scale-110 min-h-full relative">
              <div className="flex flex-col justify-center items-center">
                <div className="mt-4 roundprogressbar">
                  <Circle
                    percent={70}
                    strokeWidth={6}
                    trailWidth={5}
                    strokeColor="#AAE242"
                    trailColor="#b3a4f3"
                    gapDegree={200}
                    gapPosition="bottom"
                  />
                </div>
                <div className="absolute top-20 flex items-center justify-center text-white text-5xl font-bold">
                  70%
                </div>
                <div className="text-white absolute top-32">Growth</div>
                <div className="text-white absolute top-40">
                  <InsightsRoundedIcon className="text-7xl" />
                </div>
                <div className="text-white absolute top-64 text-3xl font-semibold">
                  $ 92,95,855.544
                </div>
                <div className="text-white">Amount Owned</div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:col-span-1 sm:col-span-3 xs:col-span-3">
            <div className="mx-auto bg-sky-300 rounded-xl shadow-lg hover:scale-110">
              <div className="flex justify-between">
                <div className="ml-10 mt-6">
                  <BookmarksRoundedIcon fontSize="large" />
                </div>
                <div className="mt-5 roundprogress mr-7">
                  <Circle
                    percent={68}
                    strokeWidth={12}
                    trailWidth={9}
                    strokeColor="purple"
                    trailColor="#b3a4f3"
                  />
                </div>
              </div>
              <div className="pl-7 py-5">
                <div className="text-blue-800  font-bold">Paid Invoice</div>
                <div className="ml-3 text-3xl font-bold">
                  <CountUp start={0} end={900} delay={1} />
                </div>
              </div>
            </div>
            <div className="mt-8 lg:col-span-1 sm:col-span-3 xs:col-span-3">
              <div className="mx-auto bg-sky-300 rounded-xl shadow-lg hover:scale-110">
                <div className="flex justify-between">
                  <div className="ml-10 mt-6">
                    <BarChartRoundedIcon fontSize="large" />
                  </div>
                  <div className="mt-5 roundprogress mr-7">
                    <Circle
                      percent={79}
                      strokeWidth={12}
                      trailWidth={9}
                      strokeColor="#1B10F2"
                      trailColor="#b3a4f3"
                    />
                  </div>
                </div>
                <div className="pl-7 py-5">
                  <div className="text-blue-800  font-bold">Market Value</div>
                  <div className="ml-3 text-3xl font-bold">
                    <CountUp start={0} end={358} delay={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:scale-110">
            <GeoChart />
          </div>
        </div>
      </Layout>
    </>
  );
}
