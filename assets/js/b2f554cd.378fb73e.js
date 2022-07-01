"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"01-nano-framework","metadata":{"permalink":"/blog/01-nano-framework","source":"@site/blog/2022-07-01-nano-framework.md","title":"01: Getting started with nanoFramework!","description":"Getting started with nanoFramework","date":"2022-07-01T00:00:00.000Z","formattedDate":"July 1, 2022","tags":[{"label":"30days","permalink":"/blog/tags/30-days"},{"label":"iot","permalink":"/blog/tags/iot"},{"label":"embeddediot","permalink":"/blog/tags/embeddediot"}],"readingTime":5.47,"truncated":false,"authors":[{"name":"Laurent Ellerbach","title":"Principal Engineering Manager @Microsoft","url":"https://github.com/ellerbach","imageURL":"https://github.com/ellerbach.png","key":"laurent"},{"name":"Jos\xe9 Sim\xf5es","title":"CEO @Eclo","url":"https://github.com/josesimoes","imageURL":"https://github.com/josesimoes.png","key":"jose"}],"frontMatter":{"slug":"01-nano-framework","title":"01: Getting started with nanoFramework!","authors":["laurent","jose"],"tags":["30days","iot","embeddediot"],"draft":false},"nextItem":{"title":"01: Welcome to #JulyOT!","permalink":"/blog/01-julyot-kickoff"}},"content":"<head>\\n  <meta name=\\"twitter:url\\" content=\\"https://julyot.dev/blog/01-nano-framework\\" />\\n  <meta name=\\"twitter:title\\" content=\\"Getting started with nanoFramework\\" />\\n  <meta name=\\"twitter:description\\" content=\\"Getting started with nanoFramework\\" />\\n  <meta name=\\"twitter:image\\" content=\\"https://julyot.dev/img/png/JulyOT-banner-1-nanoframework.png\\" />\\n  <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n  <meta name=\\"twitter:creator\\" content=\\"@jimbobbennett\\" />\\n  <meta name=\\"twitter:site\\" content=\\"@AzureAdvocates\\" /> \\n  <link rel=\\"canonical\\" href=\\"https://julyot.dev/blog/01-nano-framework\\" />\\n</head>\\n\\n> Getting started with nanoFramework\\n\\n![Page banner](/img/png/JulyOT-banner-1-nanoframework.png)\\n\\n## What we have for you today\\n\\n* [**Getting started with nanoFramework**](#getting-started-with-nanoframework)\\n* [**What is .NET nanoFramework?**](#what-is-net-nanoframework)\\n* [**Why use .NET nanoFramework?**](#why-use-net-nanoframework)\\n* [**Associated links:**](#associated-links)\\n\\n## Getting started with nanoFramework\\n\\n.NET nanoFramework: Our mantra is about **making it easy to write C\\\\# code for embedded systems!** And all that we\'re doing here is about that. This free and Open Source platform enables the writing of managed code applications for constrained embedded devices. As a developer, you can use your powerful and familiar tools like Microsoft Visual Studio IDE and your .NET C\\\\# skills to write code on a microcontroller.\\n\\n.NET nanoFramework supports a large variety of Micro Controller Units (MCU): STM32, ESP32, TI, and NXP. The .NET nanoFramework provides access to low-level IO and protocols, as well as networking and advanced security features allowing connection to the Cloud.\\n\\nHere you\'ll find all the tools, examples, documentation and a great developer ecosystem to help you on your next embedded systems project.\\n\\n> **New**: Adoption of .NET nanoFramework is growing fast. It just reached 2 million NuGet downloads, it took 5 years to reach the first million and only 9 months for the second one! Read more about it [here](https://www.nanoframework.net/2-million-nuget-downloads-and-counting/)\\n\\nTo get started, you can use our [step by step guide](https://docs.nanoframework.net/content/getting-started-guides/getting-started-managed.html) containing as well short videos.\\n\\nYou\'ll go through the installation of the Visual Studio extension:\\n\\n![step by step](https://docs.nanoframework.net/images/getting-started-guides/getting-started-extension-installation.gif)\\n\\nThen installing `nanoff`, the tool to flash your device, and flashing your device:\\n\\n![install and flash nanoff](https://docs.nanoframework.net/images/getting-started-guides/getting-started-install-nanoff-flash-esp32.gif)\\n\\nAnd then coding your first hello .NET nanoFramework application and setting debug breakpoints in your code:\\n\\n![Hello nano](https://docs.nanoframework.net/images/getting-started-guides/getting-started-first-project.gif)\\n\\nIn a matter of a few minutes, you\'ll be up and running with .NET nanoFramework!\\n\\nAnd a lot of samples to start: <https://github.com/nanoframework/Samples>\\n\\n## What is .NET nanoFramework?\\n\\n.NET **nanoFramework** is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source_software) platform that enables the writing of managed code applications for constrained [embedded devices](https://en.wikipedia.org/wiki/Embedded_system). It is suitable for many types of projects including IoT sensors, wearables, academic proof of concept, robotics, hobbyist/makers creations, or even complex industrial equipment. The .NET nanoFramework makes development easier, faster, and less costly by giving embedded developers access to modern technologies and tools used by desktop application developers.\\n\\nDevelopers can harness the powerful and familiar [Microsoft Visual Studio IDE](https://www.visualstudio.com/vs/?wt.mc_id=eventspg_16482_webpage_reactor) and their [.NET](https://en.wikipedia.org/wiki/.NET_Framework) [C\\\\#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) knowledge to quickly write code without having to worry about the low-level hardware intricacies of a microcontroller. Desktop .NET developers will feel \u201cat home\u201d and can use their skills in embedded systems development, enlarging the pool of qualified embedded developers. Using Microsoft Visual Studio, a developer can deploy and debug the code directly on real hardware.\\n\\nThe .NET nanoFramework includes a reduced version of the .NET [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) and features a subset of the .NET base class libraries along with the most common APIs included in [.NET IoT](https://docs.microsoft.com/uwp/api/?wt.mc_id=eventspg_16482_webpage_reactor) allowing code reuse from .NET IoT applications, thousands of code examples, and open source projects.\\n\\nThe project is supported by the .NET Foundation.\\n\\nYou can watch this video from the Microsoft [IoT Show](https://aka.ms/iotshow) featuring .NET nanoFramework connected to Azure IoT Hub, measuring a [BMP280 sensors](https://docs.nanoframework.net/devices/Iot.Device.Bmxx80.Bmp280.html), and using the unique deep sleep feature from microcontrollers. A real-life example with .NET nanoFramework:\\n\\n[![IoT Show](/img/jpg/nanoframework-iot-show.jpg)](https://docs.microsoft.com/shows/internet-of-things-show/introduction-to-net-nanoframework?wt.mc_id=eventspg_16482_webpage_reactor)\\n\\n## Why use .NET nanoFramework?\\n\\n.NET **nanoFramework** is the perfect enabler for developing software that works on embedded devices. Start with a low-cost and readily available development board, then use nanoFramework to write, debug and deploy your code.\\n\\nWhether this is your first foray into programming or you are a seasoned developer, if you want a powerful and easy-to-use tool for developing software that runs on embedded devices, you are in the right place. With its modular architecture, it\'s easy to grab the core components (like the CLR, debugger, and interpreter) and extend them to new hardware platforms, .NET nanoFramework is the perfect partner for your project. The current reference implementation uses [ChibiOS](http://www.chibios.org/dokuwiki/doku.php) supporting several [ST Microelectronics](http://www.st.com/content/st_com/en.html) development boards, Espressif [ESP32](https://en.wikipedia.org/wiki/ESP32), Texas Instruments [CC3220 Launchpad](https://www.ti.com/tool/CC3220SF-LAUNCHXL), [CC1352 Launchpad](https://www.ti.com/tool/LAUNCHXL-CC1352R1), and NXP [MIMXRT1060-EVK](https://www.nxp.com/part/MIMXRT1060-EVK#/).\\n\\nBecause it\'s completely [free and Open Source](https://en.wikipedia.org/wiki/Free_and_open-source_software) you have access to and the ability to modify all parts of the code including the ability to leverage what others have already contributed. If you are willing to, you can help shape the future by contributing back to the project and rapidly growing community.\\n\\nHere are a couple of supported boards:\\n\\n![nucleo](https://docs.nanoframework.net/images/reference-targets/nucleo64-f091rc.jpg)![esp32](https://docs.nanoframework.net/images/reference-targets/esp32-devkitc.jpg)![M5Stack](https://docs.nanoframework.net/images/reference-targets/m5stack.jpg)![OrgPall PalThree](https://docs.nanoframework.net/images/reference-targets/orgpal-palthree.jpg)![NXP](https://docs.nanoframework.net/images/reference-targets/mimxrt1060_evk.jpg)\\n\\nOur reference boards can be found [here](https://github.com/nanoframework/nf-interpreter#net-nanoframework-interpreter-for-reference-boards). And community boards [here](https://github.com/nanoframework/nf-Community-Targets#available-community-boards). Depending on your board, it can be a matter of a few hours to get your board supported! A blog post will explain how.\\n\\nHere are some of its unique features:\\n\\n* Can run on resource-constrained devices with as low as 128kB of flash and 64kB of RAM.\\n* Runs directly on bare metal. Currently, [ARM Cortex-M](https://en.wikipedia.org/wiki/ARM_Cortex-M) and [ESP32](https://en.wikipedia.org/wiki/ESP32) devices are supported.\\n* Supports common embedded peripherals and interconnects like GPIO, UART, SPI, I2C, USB, and networking.\\n* Provides multi-threading support natively.\\n* Support for energy-efficient operations such as devices running on batteries.\\n* Support for Interop code allows developers to easily write libraries that have both managed (C\\\\#) and native code (C/C++).\\n* No manual memory management because of its simpler mark-and-sweep [garbage collector](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)).\\n* Execution constraints to catch device lockups and crashes.\\n\\nHere are some advantages over other similar systems:\\n\\n* First-class debugger experience right on the target hardware with breakpoints, single step, step into, step out, step over, pause and stop.\\n* Powerful and free developer tools with [Microsoft Visual Studio IDE](https://www.visualstudio.com/vs/?wt.mc_id=eventspg_16482_webpage_reactor).\\n* Support for a large range of inexpensive boards from several manufacturers including Discovery and Nucleo boards from [ST Microelectronics](http://www.st.com/content/st_com/en.html), [Quail](https://www.mikroe.com/quail) from Mikrobus, [Netduino](https://www.wildernesslabs.co/Netduino) from Wilderness Labs, [ESP32](https://en.wikipedia.org/wiki/ESP32) DevKit C, Texas Instruments [CC3220 Launchpad](https://www.ti.com/tool/CC3220SF-LAUNCHXL), [CC1352 Launchpad](https://www.ti.com/tool/LAUNCHXL-CC1352R1), and NXP [MIMXRT1060-EVK](https://www.nxp.com/part/MIMXRT1060-EVK#/).\\n* Easily expandable to other hardware and [RTOS](https://en.wikipedia.org/wiki/Real-time_operating_system) platforms. Currently targets [CMSIS](https://developer.arm.com/embedded/cmsis) and ESP32 FreeRTOS ports.\\n* Completely free and Open Source. From the core components to the utilities used for building, deploying, debugging, and IDE components.\\n\\n## Associated links:\\n\\n* Official .NET nanoFramework [site and blog](https://www.nanoframework.net/).\\n* [All our documentation](https://docs.nanoframework.net/) for API, classes, how to install, build your own images, architecture, and more!.\\n* THE place to go to get any code: our [Github .NET nanoFramework](https://github.com/nanoframework).\\n\\nFind us on Fridays all July! See you for another post on how to use GPIO, SPI, I2C, PWM, and more on .NET nanoFramework! And feedback is welcome."},{"id":"01-julyot-kickoff","metadata":{"permalink":"/blog/01-julyot-kickoff","source":"@site/blog/2022-07-01.md","title":"01: Welcome to #JulyOT!","description":"Welcome to Day 1 of #JulyOT!!","date":"2022-07-01T00:00:00.000Z","formattedDate":"July 1, 2022","tags":[{"label":"30days","permalink":"/blog/tags/30-days"},{"label":"iot","permalink":"/blog/tags/iot"},{"label":"kickoff","permalink":"/blog/tags/kickoff"},{"label":"iot4b","permalink":"/blog/tags/iot-4-b"},{"label":"embeddediot","permalink":"/blog/tags/embeddediot"},{"label":"aiatedge","permalink":"/blog/tags/aiatedge"},{"label":"iotcerts","permalink":"/blog/tags/iotcerts"}],"readingTime":2.42,"truncated":false,"authors":[{"name":"Jim Bennett","title":"Senior Regional Cloud Advocate @Microsoft","url":"https://github.com/jimbobbennett","imageURL":"https://github.com/jimbobbennett.png","key":"jimb"}],"frontMatter":{"slug":"01-julyot-kickoff","title":"01: Welcome to #JulyOT!","authors":["jimb"],"tags":["30days","iot","kickoff","iot4b","embeddediot","aiatedge","iotcerts"],"draft":false},"prevItem":{"title":"01: Getting started with nanoFramework!","permalink":"/blog/01-nano-framework"},"nextItem":{"title":"00: #JulyOT Is Coming!","permalink":"/blog/julyot-teaser"}},"content":"<head>\\n  <meta name=\\"twitter:url\\" content=\\"https://julyot.dev/blog/01-julyot-kickoff\\" />\\n  <meta name=\\"twitter:title\\" content=\\"Day 1 of #JulyOT!\\" />\\n  <meta name=\\"twitter:description\\" content=\\"Jumpstart 31 days of IoT celebrations with #JulyOT\\" />\\n  <meta name=\\"twitter:image\\" content=\\"https://julyot.dev/img/png/JulyOT-banner-1-welcome.png\\" />\\n  <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n  <meta name=\\"twitter:creator\\" content=\\"@jimbobbennett\\" />\\n  <meta name=\\"twitter:site\\" content=\\"@AzureAdvocates\\" /> \\n  <link rel=\\"canonical\\" href=\\"https://julyot.dev/blog/01-julyot-kickoff\\" />\\n</head>\\n\\n> Welcome to Day 1 of **#JulyOT**!!\\n\\n![Welcome banner](/img/png/JulyOT-banner-1-welcome.png)\\n\\n#JulyOT 2022 is finally here, and we are excited to share 31 days of IoT goodness throughout this month.\\n\\nEach weekday we will be publishing one or more articles here all grouped into the following themes:\\n\\n* Beginners, makers, and students\\n* Embedded development\\n* AI on the Edge\\n* Learning and certifications\\n\\nSome will be full blog posts, others will direct you to videos, GitHub repos, other blogs, or code samples.\\n\\nCheck back here every day for more IoT goodness.\\n\\n## In this post\\n\\n* [**Upskill by joining the IoT Cloud skills challenge**](#iot-cloud-skills-challenge)\\n* [**Learn IoT with IoT For Beginners**](#iot-for-beginners)\\n* [**Digital swag**](#digital-swag)\\n\\n## IoT Cloud Skills Challenge\\n\\nWant to become a subject matter in the IoT Domain? Take the [Microsoft Cloud Skills Challenge](https://docs.microsoft.com/learn/challenges?id=261fd583-fa7b-4b1f-86eb-6a52b5468a23&wt.mc_id=eventspg_16482_webpage_reactor) - skill yourself up in 31 days and complete the Cloud Skills Challenge. This starts 1st July, so sign up now.\\n\\n<table>\\n<tr style={{border:\'0px\', \'background-color\':\'#00000000\'}}>\\n    <td style={{border:\'0px\', \'text-align\': \'center\'}}></td>\\n    <td style={{border:\'0px\', \'text-align\': \'center\'}}>\\n    <form action=\\"https://docs.microsoft.com/learn/challenges\\" target=\\"_blank\\">\\n        <input type=\\"submit\\" value=\\"Join the Cloud Skills Challenge\\" class=\\"clean-btn button button--primary margin-left--md\\"/>\\n        <input type=\\"hidden\\" name=\\"id\\" value=\\"261fd583-fa7b-4b1f-86eb-6a52b5468a23\\" /> \\n        <input type=\\"hidden\\" name=\\"wt.mc_id\\" value=\\"eventspg_16482_webpage_reactor\\" /> \\n    </form>\\n    </td>\\n    <td style={{border:\'0px\', \'text-align\': \'center\'}}></td>\\n</tr>\\n<tr style={{border:\'0px\', \'background-color\':\'#00000000\'}}>\\n    <td style={{border:\'0px\', \'text-align\': \'center\'}}><img src=\'https://docs.microsoft.com/en-us/media/learn/challenge/how_it_works_1.png?branch=main\' width=\'75%\' alt=\'A cuddly document and a purple yeti coding\'/></td>\\n    <td style={{border:\'0px\', \'text-align\': \'center\'}}><img src=\'https://docs.microsoft.com/en-us/media/learn/challenge/how_it_works_2.png?branch=main\' width=\'75%\' alt=\'A cuddly document and a purple yeti coding\'/></td>\\n    <td style={{border:\'0px\', \'text-align\': \'center\'}}><img src=\'https://docs.microsoft.com/en-us/media/learn/challenge/how_it_works_3.png?branch=main\' width=\'75%\' alt=\'A cuddly document and a purple yeti coding\'/></td>\\n</tr>\\n<tr style={{border:\'0px\', \'background-color\':\'#00000000\'}}>\\n    <td style={{border:\'0px\', \'vertical-align\':\'top\'}}><b>Compete</b><br/><br/>Benchmark your progress against friends and coworkers. It\'s always better when we learn together.</td>\\n    <td style={{border:\'0px\', \'vertical-align\':\'top\'}}><b>Learn</b><br/><br/>Increase your understanding with easy-to-read instruction and stay up on the bleeding-edge of technology.</td>\\n    <td style={{border:\'0px\', \'vertical-align\':\'top\'}}><b>Develop skills</b><br/><br/>By the end of the challenge, you will have marketable skills to better yourself and your career.</td>\\n</tr>\\n</table>\\n\\n## IoT For Beginners\\n\\nIoT for beginners is a free, open source, 24-lesson IoT curriculum. The first lesson is live-streamed today from the Microsoft Reactor. Watch it live at 9am Pacific Time, or catch the recording on the Microsoft Reactor YouTube channel.\\n\\n<a href=\'https://www.meetup.com/Microsoft-Reactor-Redmond/events/286453689/\'>\\n<img src=\'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F504717110%2F676x380.webp&w=3840&q=75\'  alt=\'IoT for beginners - Lesson 1, Introduction to IoT, Friday July 1st, 9am Pacific Time\'/>\\n</a>&nbsp;\\n\\n<table>\\n<tr style={{border:\'0px\', \'background-color\':\'#00000000\'}}>\\n    <td style={{border:\'0px\', \'text-align\': \'center\'}}>\\n        <form action=\\"https://www.meetup.com/Microsoft-Reactor-Redmond/events/286453689\\" target=\\"_blank\\">\\n            <input type=\\"submit\\" value=\\"Register on MeetUp\\" class=\\"clean-btn button button--primary margin-left--md\\"/>\\n        </form>\\n    </td>\\n    <td style={{border:\'0px\', \'text-align\': \'center\'}}>\\n        <form action=\\"https://aka.ms/IoTforbeginnersLess1\\" target=\\"_blank\\">\\n            <input type=\\"submit\\" value=\\"Watch on YouTube\\" class=\\"clean-btn button button--secondary margin-left--md\\"/>\\n        </form>\\n    </td>\\n</tr>\\n</table>\\n\\nLearn more about IoT for Beginners on the official [IoT for Beginners GitHub repo](https://aka.ms/iot-beginners).\\n\\n## Digital swag\\n\\nCheck out [digital swag](/digitalswag) page for #JulyOT social media images, sticker templates, desktop backgrounds and video chat backgrounds."},{"id":"julyot-teaser","metadata":{"permalink":"/blog/julyot-teaser","source":"@site/blog/2022-06-23.md","title":"00: #JulyOT Is Coming!","description":"#JulyOT is coming!","date":"2022-06-23T00:00:00.000Z","formattedDate":"June 23, 2022","tags":[{"label":"30days","permalink":"/blog/tags/30-days"},{"label":"iot","permalink":"/blog/tags/iot"},{"label":"kickoff","permalink":"/blog/tags/kickoff"}],"readingTime":3.135,"truncated":false,"authors":[{"name":"Jim Bennett","title":"Senior Regional Cloud Advocate @Microsoft","url":"https://github.com/jimbobbennett","imageURL":"https://github.com/jimbobbennett.png","key":"jimb"}],"frontMatter":{"slug":"julyot-teaser","title":"00: #JulyOT Is Coming!","authors":["jimb"],"tags":["30days","iot","kickoff"],"draft":false},"prevItem":{"title":"01: Welcome to #JulyOT!","permalink":"/blog/01-julyot-kickoff"}},"content":"<head>\\n  <meta name=\\"twitter:url\\" content=\\"https://julyot.dev/blog/julyot-teaser\\" />\\n  <meta name=\\"twitter:title\\" content=\\"Teaser: #JulyOT is Coming - Celebrate IoT All Month Long!\\" />\\n  <meta name=\\"twitter:description\\" content=\\"Jumpstart 31 days of IoT celebrations with #JulyOT\\" />\\n  <meta name=\\"twitter:image\\" content=\\"https://julyot.dev/img/png/julyot-kickoff-banner.png\\" />\\n  <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n  <meta name=\\"twitter:creator\\" content=\\"@jim\\" />\\n  <meta name=\\"twitter:site\\" content=\\"@AzureAdvocates\\" /> \\n  <link rel=\\"canonical\\" href=\\"https://julyot.dev/blog/julyot-teaser\\" />\\n</head>\\n\\n> #JulyOT is coming!\\n\\n![Jumpstart 31 days of IoT celebrations with #JulyOT](../static/img/png/julyot-kickoff-banner.png)\\n\\nWe can\'t believe it\'s already the last week of June!! Wait - you know what that means right?\\n\\nClear up your cables, dust off your Raspberry Pi, dig our your Arduino board, fire up Visual Studio Code with PlatformIO, or the Arduino IDE, and login to the cloud! It\'s almost time to celebrate the Internet of Things, one thing at a time! It\'s almost #JulyOT!\\n\\n![Animated JulyOT logo](../static/img/gif/julyot-single-loop.gif)\\n\\nAs always #JulyOT will be kicking off on the 1st July, and every day we will be bringing you some awesome IoT content to get you excited about the Internet of Things.\\n\\nWe\'ll have a mix of live streams, videos, blog posts and code samples, all grouped into the following themes:\\n\\n* Beginners, makers, and students\\n* Embedded development\\n* AI on the Edge\\n* Learning and certifications\\n\\nWe invite everyone to build and share your creations throughout month as you gain knowledge from these and other resources throughout #JulyOT!  Be sure to spread the word about this initiative and your own projects by sharing the [hashtag #JulyOT on social media](https://twitter.com/hashtag/JulyOT)! We\'ll be sharing our favorite projects that we find.\\n\\nCheck back here daily to get all the latest goodness, or subscribe to [our RSS feed](https://julyot.dev/blog/rss.xml).\\n\\n## #JulyOT has a new home!\\n\\nIn the past #JulyOT has lived on the [Microsoft IoT Tech Community](https://techcommunity.microsoft.com/t5/internet-of-things-blog/bg-p/IoTBlog), but going forward we have a new home - here at [JulyOT.dev](https://julyOT.dev).\\n\\nAll the content for #JulyOT now lives [in GitHub](https://github.com/JulyOT/JulyOT). If you want to submit content then join us there, raise an issue with what you want to add, and we can help get your content shared with the world. For blog posts you can write the whole post here, or link out to your own blog. For all other content we can link to your GitHub repo, video or wherever!\\n\\n## #JulIoT\\n\\n#JulyOT is spreading it wings to Spanish! We are excited to bring you #JulIoT!\\n\\n![Julio T anumated logo](../static/img/gif/juliot.gif)\\n\\nWe have some live streams and blogs in Spanish lined up for you over the month. Check out the [live streams](/livestreams) page for a sneak peak of whats coming!\\n\\n## Our first event\\n\\nLaunching #JulyOT will be a series of IoT for Beginners live streams, based off the hugely popular [IoT for Beginners Curriculum](https://aka.ms/iot-beginners) that offers 24 free, open source lessons on IoT. We will be running the first 4 lessons as live streams, starting Friday 1st July at 9am Pacific Time.\\n\\n<a href=\'https://www.meetup.com/Microsoft-Reactor-Redmond/events/286453689/\'>\\n<img src=\'https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F504717110%2F676x380.webp&w=3840&q=75\' width=\'45%\' alt=\'IoT for beginners - Lesson 1, Introduction to IoT, Friday July 1st, 9am Pacific Time\'/>\\n</a>\\n\\nYou can register for this event on Meetup.com and get a reminder, or join us on YouTube.\\n\\n<a href=\\"https://www.meetup.com/Microsoft-Reactor-Redmond/events/286453689\\"><img src=\\"https://raw.githubusercontent.com/jimbobbennett/ColoredBadges/main/svg/social/meetup.svg\\" alt=\\"Meetup registration link\\"/></a>  <a href=\\"https://aka.ms/IoTforbeginnersLess1\\"><img src=\\"https://raw.githubusercontent.com/jimbobbennett/ColoredBadges/main/svg/streaming/youtube.svg\\" alt=\\"YouTube live stream link\\"/></a>\\n\\n## Microsoft Cloud Skills challenge\\n\\n![A cartoon racoon holding medals](../static/img/svg/image_medals.svg)\\n\\nAs part of #JulyOT we will be running a Microsoft Cloud Skills challenge, giving you a guided path to learn the Microsoft IoT stack, and compete in your learning against others. Check out the [Cloud Skills Challenge page](/skills) to sign up!\\n\\n## JulyOT digital swag\\n\\nThis year we also have [#JulyOT digital swag](/digitalswag)! Get a new desktop background, or a background for your favorite video chat tool like Microsoft Teams.\\n\\n## IoT resources\\n\\nFor more IoT resources, check out the [resources link](/resources) above. Whether you want videos to help you learn, or beginner tutorials, we have you covered."}]}')}}]);