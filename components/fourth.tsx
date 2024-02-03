"use client";


import React, { Component } from 'react';

import SecondaryButton from './ui/secondaryButton'
import Image from 'next/image';

import input from "@/public/input.svg"


interface TabData {
  id: string;
  title: string;
  content: string;
  active: boolean;
}


const tabData: TabData[] = [
  {
    id: '01',
    title: 'Job search',
    content: 'Begin your job search by exploring a wide range of job openings.',
    active: true
  },
  {
    id: '02',
    title: 'Salary estimate',
    content: 'Provide your profile details to receive a salary estimate.',
    active: false
  },
  {
    id: '03',
    title: 'Read reviews',
    content: 'Gain valuable insights about potential employers.',
    active: false
  },
  {
    id: '04',
    title: 'Apply and connect',
    content: 'Connect with employers, attend interviews.',
    active: false
  }
];


class App extends Component {
  state = {
    tabs: tabData,
    activeTab: tabData[0] as TabData
  };

  selectTab = (tab: TabData) => {
    const updatedTabs = this.state.tabs.map(t => ({
      ...t,
      active: t.id === tab.id
    }));
    this.setState({ tabs: updatedTabs, activeTab: tab });
  };

  renderTab = (tab: TabData) => {
    return (
      <div
        key={tab.id}
        className={`w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0 cursor-pointer ${tab.active ? 'border-b-4 border-purple-600' : ''
          }`}
        onClick={() => this.selectTab(tab)}
      >
        <h3 className="text-xl mb-3">{tab.id}</h3>
        <h4 className="text-lg font-semibold mb-3">{tab.title}</h4>
        <p className="text-gray-400">{tab.content}</p>
      </div>
    );
  };

  render() {
    const { tabs, activeTab } = this.state;

    return (
      <div className='bg-[#111317] mx-16 -translate-y-80 rounded-3xl'>
        <div className='min-h-screen px-24 py-36 '>

          <div className='flex flex-col space-y-4' >

            <span className='w-full uppercase font-semibold bg-clip-text flex gap-2 items-center text-transparent bg-gradient-to-b from-[#8550ec] to-[#924ee9] '>
              how it works
            </span>

            <span className='text-4xl'>
              Gettting started is easy
            </span>

            <div className='flex justify-between w-full'>
              <p>
                Upon gaining entry to the JobBoard platform, your initial <br /> task involves inputting your initial team positions or roles.
              </p>
              <SecondaryButton text='Learn More' />
            </div>
          </div>

          <div className="py-24 ">
            <div className="flex flex-wrap -mx-4 bg-[#14161b] rounded-md px-2 py-6 border border-[#2f2849]">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 ">
                <div className="bg-[#1f1b30] p-2 rounded-lg shadow-lg border border-[#2f2849]">
                 <Image src={input}  alt=""/>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-semibold mb-4">{activeTab.title}</h2>
                  <p className="text-gray-400">{activeTab.content}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mt-12">{tabs.map(this.renderTab)}</div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;