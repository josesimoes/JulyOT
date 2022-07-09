"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8270],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6285:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],s={slug:"08-nano-framework",title:"08: .NET nanoFramework GPIO, I2C, SPI and other IO support",authors:["laurent","jose"],tags:["30days","iot","embeddediot"],draft:!1},l=void 0,p={permalink:"/blog/08-nano-framework",source:"@site/blog/2022-07-08-nano-framework.md",title:"08: .NET nanoFramework GPIO, I2C, SPI and other IO support",description:"Welcome to Day 8 of #JulyOT!",date:"2022-07-08T00:00:00.000Z",formattedDate:"July 8, 2022",tags:[{label:"30days",permalink:"/blog/tags/30-days"},{label:"iot",permalink:"/blog/tags/iot"},{label:"embeddediot",permalink:"/blog/tags/embeddediot"}],readingTime:10.33,truncated:!1,authors:[{name:"Laurent Ellerbach",title:"Principal Engineering Manager @Microsoft",url:"https://github.com/ellerbach",imageURL:"https://github.com/ellerbach.png",key:"laurent"},{name:"Jos\xe9 Sim\xf5es",title:"CEO @Eclo Solutions",url:"https://github.com/josesimoes",imageURL:"https://github.com/josesimoes.png",key:"jose"}],frontMatter:{slug:"08-nano-framework",title:"08: .NET nanoFramework GPIO, I2C, SPI and other IO support",authors:["laurent","jose"],tags:["30days","iot","embeddediot"],draft:!1},prevItem:{title:"08: IoT for Beginners lesson 2!",permalink:"/blog/08-julyot-iot-beginners"},nextItem:{title:"07: A Closed Captioning Example on Raspberry Pi using Azure Cognitive services",permalink:"/blog/07-closed-captioning-rpi"}},c={authorsImageUrls:[void 0,void 0]},m=[],h={toc:m};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://julyot.dev/blog/08-nano-framework"}),(0,i.kt)("meta",{name:"twitter:title",content:".NET nanoFramework GPIO, I2C, SPI and other IO support"}),(0,i.kt)("meta",{name:"twitter:description",content:".NET nanoFramework GPIO, I2C, SPI and other IO support"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://julyot.dev/img/png/JulyOT-banner-8-nanoframework.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@ellerbach"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://julyot.dev/blog/08-nano-framework"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Welcome to Day 8 of ",(0,i.kt)("strong",{parentName:"p"},"#JulyOT"),"!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Page banner",src:n(6338).Z,width:"1000",height:"420"})),(0,i.kt)("h1",{id:"gpio-i2c-spi-pwm-adc-dac-serial-and-more"},"GPIO, I2C, SPI, PWM, ADC, DAC, Serial and more!"),(0,i.kt)("p",null," .NET nanoFramework has support for GPIO, I2C, SPI, PWM, ADC, DAC, Serial, 1-Wire. Also the API are aligned with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/iot/"},".NET IoT")," making it easy for code reuse between development on a Raspberry Pi with .NET 6.0 and an MCU running .NET nanoFramework."),(0,i.kt)("p",null," A comparison on how to reuse code and the differences between .NET IoT and .NET nanoFramework is available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/samples/tree/main/iot/dotnet-iot-and-nanoframework"},"here"),"."),(0,i.kt)("p",null," There are dedicated classes with detailed documentation and samples for each of them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"General Purpose Input and Output (GPIO): ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/System.Device.Gpio"},"System.Device.Gpio")," and associated documentation for the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/api/System.Device.Gpio.html"},"class library")),(0,i.kt)("p",{parentName:"li"},"  And a code snipet to blink a led:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Creates a GPIO controller\nGpioController controller = new();\n// Open the pin\nGpioPin led = controller.OpenPin(12, PinMode.Output);\n// Change the value of the pin. Equivalent code as the next line: controller.Write(12, PinValue.Low)\nled.Write(PinValue.Low);\nwhile (true)\n{\n    // Toggle the value of the pin\n    led.Toggle();\n    Thread.Sleep(125);\n}\n")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/Blinky"},"Blink your first led"),"! ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/Gpio"},"GPIO sample pack")," including event management.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Serial Peripheral Interface (SPI): ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/System.Device.Spi"},"System.Device.Spi"),"and associated document for the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/api/System.Device.Spi.html"},"class library")),(0,i.kt)("p",{parentName:"li"},"  To create a SpiDevice, you need to follow this pattern:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"SpiDevice spiDevice;\nSpiConnectionSettings connectionSettings;\n// Note: the ChipSelect pin should be adjusted to your device, here 12\n// You can adjust as well the bus, here 1 for SPI1\nconnectionSettings = new SpiConnectionSettings(1, 12);\nspiDevice = SpiDevice.Create(connectionSettings);\n")),(0,i.kt)("p",{parentName:"li"},"  You can write a SpanByte like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"SpanByte writeBuffer = new byte[2] { 42, 84 };\nspiDevice.Write(writeBuffer);\n")),(0,i.kt)("p",{parentName:"li"},"  You can write a ushort array like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"ushort[] writeBuffer = new ushort[2] { 4200, 8432 };\nspiDevice.Write(writeBuffer);\n")),(0,i.kt)("p",{parentName:"li"},"  You can write single bytes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"spiDevice.WriteByte(42);\n")),(0,i.kt)("p",{parentName:"li"},"  Read operations are similar:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"SpanByte readBuffer = new byte[2];\n// This will read 2 bytes\nspiDevice.Read(readBuffer);\nushort[] readUshort = new ushort[4];\n// This will read 4 ushort\nspiDevice.Read(readUshort);\n// read 1 byte\nbyte readMe = spiDevice.ReadByte();\n")),(0,i.kt)("p",{parentName:"li"},"  For full transfer, you need to have 2 arrays of the same size and perform a full duplex transfer:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"SpanByte writeBuffer = new byte[4] { 0xAA, 0xBB, 0xCC, 0x42 };\nSpanByte readBuffer = new byte[4];\nspiDevice.TransferFullDuplex(writeBuffer, readBuffer);\n// Same for ushirt arrays:\nushort[] writeBuffer = new ushort[4] { 0xAABC, 0x00BB, 0xCC00, 0x4242 };\nushort[] readBuffer = new ushort[4];\nspiDevice.TransferFullDuplex(writeBuffer, readBuffer);\n")),(0,i.kt)("p",{parentName:"li"},"  More ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/SPI"},"System.Device.Spi samples"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inter-Integrated Circuit (I2C): ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/System.Device.I2c"},"System.Device.I2c")," and associated document for the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/api/System.Device.I2c.html"},"class library")),(0,i.kt)("p",{parentName:"li"},"  Here is a short example on how to use I2C:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// In this case we are opening the bus 1 and the device address 0x42\nI2cDevice i2c = new(new I2cConnectionSettings(1, 0x42));\n// We write a byte, in this case 0x07, we can write a SpanByte as well\nvar res = i2c.WriteByte(0x07);\n// A successfull write will be: 0x10 Write: 1, transferred: 1\n// A non successful one: 0x0F Write: 4, transferred: 0\nDebug.Write($"0x{i:X2} Write: {res.Status}, transferred: {res.BytesTransferred}");\n// We\'re now trying to read 2 bytes\nSpanByte span = new byte[2];\nres = i2c.Read(span);\n// A successfull write will be: Read: 1, transferred: 1\n// A non successfull one: Read: 2, transferred: 0\nDebug.WriteLine($", Read: {res.Status}, transferred: {res.BytesTransferred}");\n')),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/I2C"},"I2C sample sample pack")," containing as well ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/I2C/System.Device.I2c/GPS"},"I2C GPS sample")," and an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/I2C/NanoI2cScanner"},"I2C Scanner sample"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Digital-to-analog converter (DAC): ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/System.Device.Dac"},"System.Device.Dac")," and associated document for the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/api/System.Device.Dac.html"},"class library")),(0,i.kt)("p",{parentName:"li"},"  A simple example for DAC is to create a specific sinus wave for example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Gets the controller\nDacController dac = DacController.GetDefault();\n// Open channel 0\nDacChannel dacChannel = dac.OpenChannel(0);\n// Gete DAC resolution\ndacResolution = dac.ResolutionInBits;\n\nint upperValue, midRange;\ndouble radian = 0;\n// Gets upper value from DAC resolution\nupperValue = (int)Math.Pow(2.0, dacResolution);\n\n// compute a reasonable increment value from the resolution\nfloat increment = maxRads / (dacResolution * 10);\nmidRange = upperValue / 2;\n\nwhile(true)\n{\n    // because the DAC can't output negative values\n    // we have to offset the sine wave to half the DAC output range\n    uint value = (uint)((Math.Sin(radian) * (midRange - 1)) + midRange);\n    //Output the current value to console when in debug.\n    Debug.WriteLine($\"DAC SineWave output current value: {value}\");\n    // output to DAC\n    channel.WriteValue((ushort)value);\n    // increment angle\n    radian += increment;\n    if (radian >= maxRads)\n    {\n        // tweak the value so it doesn't overflow the DAC\n        radian = 0;\n    }\n\n    // Wait 5 milliseconds before the next point\n    Thread.Sleep(5);\n}\n")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/DAC"},"Digital Analog Converter samples"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Analog-to-digital converter (ADC): ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/System.Device.Adc"},"System.Device.Adc")," and associated document for the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/api/System.Device.Adc.html"},"class library")),(0,i.kt)("p",{parentName:"li"},"  Each target device has an ADC Controller. To read a channel, first, instantiate the ADC controller and open the channel you want to read from. To read the raw value from an ADC channel, it's a simple matter of calling the Read() method on an open channel."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"AdcController adc1 = new AdcController();\nAdcChannel channel0 = adc1.OpenChannel(0);\nint myAdcRawvalue = channel0.ReadValue();\n")),(0,i.kt)("p",{parentName:"li"},"  To find details about the ADC controller, query the ADC controller properties, like this."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// get maximum raw value from the ADC controller\nint max1 = adc1.MaxValue;\n// get minimum raw value from the ADC controller\nint min1 = adc1.MinValue;\n// find how many channels are available \nint channelCount = adc1.ChannelCount;\n// resolution provided by the ADC controller\nint adcResolution = adc1.ResolutionInBits;\n")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/ADC"},"Analogic/Digital converter sample"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pulse-width Modulation (PWM): ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/System.Device.Pwm"},"System.Device.Pwm")," and associated document for the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/api/System.Device.Pwm.html"},"class library")),(0,i.kt)("p",{parentName:"li"},"  You can create a PWM channel from a pin number. For an ESP32 device, allocate the pin, for an STM32 device ensure the selected pin is PWM enabled."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Case of ESP32, you need to set the pin function, in this example PWM3 for pin 18:\nConfiguration.SetPinFunction(18, DeviceFunction.PWM3);\nPwmChannel pwmPin = PwmChannel.CreateFromPin(18, 40000);\n// You can check then if it has created a valid one:\nif (pwmPin != null)\n{\n    // You do have a valid one\n}\n")),(0,i.kt)("p",{parentName:"li"},"  You can adjust the duty cycle by using the property:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"pwmPin.DutyCycle = 0.42;\n")),(0,i.kt)("p",{parentName:"li"},"  The duty cycle goes from 0.0 to 1.0."),(0,i.kt)("p",{parentName:"li"},"  It is recommended to set the frequency when creating the PWM Channel. You can technically change it at any time but keep in mind some platforms may not behave properly when adjusting this element."),(0,i.kt)("p",{parentName:"li"},"  Alternatively, if you know the chip/timer Id and the channel then follow this example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"PwmChannel pwmPin = new(1, 2, 40000, 0.5);\n")),(0,i.kt)("p",{parentName:"li"},"  More on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/PWM/System.Device.Pwm"},"System.Device.Pwm sample"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Serial Port: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/System.IO.Ports"},"System.IO.Ports"),"and associated documentation for the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/api/System.IO.Ports.html"},"class library")),(0,i.kt)("p",{parentName:"li"},"  Serial ports are often used to communicate with sensors. The ",(0,i.kt)("inlineCode",{parentName:"p"},"SerialPort")," must be first opened before it can be used. The serial port can also be closed, when the serial port is disposed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"SerialPort")," will perform the close operation regardless of any ongoing receive or transmit operations."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// You can specify baud rate, parity, bit stops and number of bits as well:\nvar port = new SerialPort("COM2");\nport.Open();\n// Do a lot of things here, write, read\nport.Close();\n')),(0,i.kt)("p",{parentName:"li"},"  There are functions to read and write, some are byte related, others string related. Note that string functions will use UTF8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Encoding")," charset."),(0,i.kt)("p",{parentName:"li"},"  Example of sending and reading byte arrays:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"byte[] toSend = new byte[] { 0x42, 0xAA, 0x11, 0x00 };\nbyte[] toReceive = new byte[50];\n// this will send the 4 bytes:\nport.Write(toSend, 0, toSend.Length);\n// This will only send the bytes AA and 11:\nport.Write(toSend, 1, 2);\n// This will check then number of available bytes to read\nvar numBytesToRead = port.BytesToRead;\n// This will read 50 characters:\nport.Read(toReceive, 0, toReceive.Length);\n// this will read 10 characters and place them at the offset position 3:\nport.Read(toReceive, 3, 10);\n// Note: in case of time out while reading or writing, you will receive a TimeoutException\n// And you can as well read a single byte:\nbyte oneByte = port.ReadByte();\n")),(0,i.kt)("p",{parentName:"li"},"  Sending and receiving string example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'string toSend = "I \u2764 nanoFramework";\nport.WriteLine(toSend);\n// this will send the string encoded finishing by a new line, by default `\\n`\n// You can change the new line to be anything:\nport.NewLine = "\u2764\u2764";\n// Now it will send 2 hearts as the line ending `WriteLine` and will use 2 hearts as the terminator for `ReadLine`.\n// You can change it back to the `\\n` default at anytime:\nport.NewLine = SerialPort.DefaultNewLine; // default is "\\n"\n// This will read the existing buffer:\nstring existingString = port.ReadExisting();\n// Note that if it can\'t properly convert the bytes to a string, you\'ll get an exception\n// This will read a full line, it has to be terminated by the NewLine string.\n// If nothing is found ending by the NewLine in the ReadTimeout time frame, a TimeoutException will be raised.\nstring aFullLine = port.ReadLine();\n')),(0,i.kt)("p",{parentName:"li"},"  SerialPort supports events when characters are received."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"    // Subscribe to the event\n    port.DataReceived += DataReceivedNormalEvent;\n\n    // When you're done, you can as well unsubscribe\n    port.DataReceived -= DataReceivedNormalEvent;\n\nprivate void DataReceivedNormalEvent(object sender, SerialDataReceivedEventArgs e)\n{\n    var ser = (SerialPort)sender;\n    // Now you can check how many characters are available, read a line for example\n    var numBytesToRead = port.BytesToRead;\n    string aFullLine = ser.ReadLine();\n}\n")),(0,i.kt)("p",{parentName:"li"},"  There are more supported. Check it in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/Samples/blob/main/samples/SerialCommunication"},"System.IO.Ports serial Communication sample"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One Wire or 1-Wire: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/nanoFramework.Device.OneWire"},"nanoFramework.Device.OneWire")," and associated document for the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/api/nanoFramework.Device.OneWire.html"},"class library")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'To connect to a 1-Wire bus, first, instantiate an OneWireHost object, then perform operations with the connected devices.\n\n```csharp\nOneWireHost _OneWireHost = new OneWireHost();\n```\n\nTo find the first device connected to the 1-Wire bus, and perform a reset on the bus before performing the search, call the `FindFirstDevice` method:\n\n```csharp\n_OneWireHost.FindFirstDevice(true, false);\n```\n\nTo write a byte with the value 0x44 to the connected device:\n\n```csharp\n_OneWireHost.WriteByte(0x44);\n```\n\nTo get a list with the serial number of all the 1-Wire devices connected to the bus:\n\n```csharp\nvar deviceList = _OneWireHost.FindAllDevices();\n\nforeach(byte[] device in deviceList)\n{\n    string serial = "";\n\n    foreach (byte b in device)\n    {\n        serial += b.ToString("X2");\n    }\n\n    Console.WriteLine($"{serial}");\n}\n```\n\nCheck out the [1-Wire sample](https://github.com/nanoframework/Samples/blob/main/samples/1-Wire).\n')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note: devices have different ways to name pins and set them up. It is important to check the default configuration, especially for any STM32 devices. ESP32 devices can be set dynamically. A NuGet package is available for this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/nanoFramework.Hardware.Esp32"},"nanoFramework.Hardware.Esp32"),". In that case, you would have to set the pins if they don't match your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/content/esp32/esp32_pin_out.html"},"defaults pins"),".")),(0,i.kt)("h2",{parentName:"li",id:"iot-repository-and-advanced-bindings"},"IoT Repository and advanced bindings"),(0,i.kt)("p",{parentName:"li"},"The alignment between .NET IoT and .NET nanoFramework allows code reuse between the different platforms. While it's not technically possible to have the same NuGet for both platforms, reusing API and code is possible. A lot of work and effort has been put in place to facilitate the creation of individual NuGet packages for almost all of the .NET IoT bindings! The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/nanoFramework.IoT.Device"},"IoT Device repository")," contains all the tools and the code for all of the available bindings."),(0,i.kt)("p",{parentName:"li"},"The .NET nanoFramework does not ",(0,i.kt)("em",{parentName:"p"},"yet")," support Generics or Linq, and in places, compromises have been made so the framework fits on constrained devices. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanoframework.net/content/architecture/simplifications-and-trade-offs.html"},"This page")," explains most of them."),(0,i.kt)("p",{parentName:"li"},"Tools to help in the migration have been built to automate some of the migration and ",(0,i.kt)("a",{parentName:"p",href:"https://www.nanoframework.net/net-iot-bindings-available/"},"initial work started back in May 2021"),". Now more than 98 bindings are available, some specific for MCU and optimized for a specific platform like ESP32. .NET IoT also benefited from this work as some of those new bindings have been migrated back to .NET IoT."),(0,i.kt)("p",{parentName:"li"},"Here is a view of the devices!"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanoframework/nanoFramework.IoT.Device#list-of-devices"},(0,i.kt)("img",{alt:"device list",src:n(3389).Z,width:"535",height:"1955"}))),(0,i.kt)("p",{parentName:"li"},"Each binding has a sample. All is well organized and you'll find those in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/devices/BindingName/samples")," directory. And as an example, here is how you can use a BMP280:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// bus id on the MCU\nconst int busId = 1;\n\nI2cConnectionSettings i2cSettings = new(busId, Bmp280.DefaultI2cAddress);\nI2cDevice i2cDevice = I2cDevice.Create(i2cSettings);\nusing var i2CBmp280 = new Bmp280(i2cDevice);\n\n// set higher sampling\ni2CBmp280.TemperatureSampling = Sampling.LowPower;\ni2CBmp280.PressureSampling = Sampling.UltraHighResolution;\n\n// Perform a synchronous measurement\nvar readResult = i2CBmp280.Read();\n\n// Print out the measured data\nDebug.WriteLine($"Temperature: {readResult.Temperature?.DegreesCelsius:N1}\\u00B0C");\nDebug.WriteLine($"Pressure: {readResult.Pressure?.Hectopascals:N2}hPa");\n')),(0,i.kt)("p",{parentName:"li"},"Note the usage of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/angularsen/UnitsNet"},"UnitsNet"),". UnitsNet is used to facilitate unit conversions. We've implemented the most popular unit conversions and provided them as NuGet packages. This simplifies development, for example, you don't need to worry about providing a temperature value in Celsius or Fahrenheit. It's just a temperature, the developer can choose the unit to display. The rest of the magic is done for you."))))}d.isMDXComponent=!0},6338:function(e,t,n){t.Z=n.p+"assets/images/JulyOT-banner-8-nanoframework-770d33e22e2443104bc72a8abf8d5fa2.png"},3389:function(e,t,n){t.Z=n.p+"assets/images/iot-device-list-cb73433dfceef7701e9fb58d9e21bcf7.png"}}]);