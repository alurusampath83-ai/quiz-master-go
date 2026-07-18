export type Question = { id: number; difficulty: string; question: string; options: string[]; answer: number; explanation: string; topic: string; };

export const questions: Question[] = [
  {
    "id": 1,
    "difficulty": "Easy",
    "question": "A computer is best defined as a device that accepts data, processes it as per instructions, and produces:",
    "options": [
      "Only printed output",
      "Meaningful results and stores data for future use",
      "Only electrical signals",
      "Only sound output"
    ],
    "answer": 1,
    "explanation": "A computer accepts input, processes it using a program, produces meaningful output, and also stores data for future use. This is the essence of the IPO (Input-Process-Output) cycle with storage.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 2,
    "difficulty": "Easy",
    "question": "In the IPO cycle of a computer, which unit is responsible for holding data before and after processing?",
    "options": [
      "Input Unit",
      "Processing Unit",
      "Storage Unit",
      "Control Unit"
    ],
    "answer": 2,
    "explanation": "The Storage Unit holds data both before it enters processing and after the results are produced, supporting the Input-Process-Output-Storage cycle described in the chapter.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 3,
    "difficulty": "Easy",
    "question": "Which characteristic of a computer refers to its ability to perform millions of calculations per second?",
    "options": [
      "Accuracy",
      "Speed",
      "Diligence",
      "Versatility"
    ],
    "answer": 1,
    "explanation": "Speed refers to the computer's capacity to execute an enormous number of instructions or calculations within a very short time, often measured in nanoseconds.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 4,
    "difficulty": "Easy",
    "question": "A computer's ability to work continuously for hours without any loss of efficiency or getting tired is known as:",
    "options": [
      "Versatility",
      "Diligence",
      "Accuracy",
      "Storage"
    ],
    "answer": 1,
    "explanation": "Diligence is the characteristic that allows a computer to perform repetitive tasks continuously without fatigue or a drop in performance, unlike a human worker.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 5,
    "difficulty": "Medium",
    "question": "Which of the following is NOT one of the key characteristics of a computer as described in standard computer awareness syllabi?",
    "options": [
      "Accuracy",
      "Emotional Intelligence",
      "Storage",
      "Diligence"
    ],
    "answer": 1,
    "explanation": "A computer has no IQ or emotional intelligence of its own; it works purely as instructed. Emotional Intelligence is a human trait, not a listed computer characteristic.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 6,
    "difficulty": "Easy",
    "question": "The mnemonic 'SAD-SV' used to remember computer characteristics stands for:",
    "options": [
      "Speed, Accuracy, Diligence, Storage, Versatility",
      "Software, Application, Data, Storage, Versatility",
      "Speed, Automation, Data, Security, Versatility",
      "Storage, Accuracy, Data, Speed, Verification"
    ],
    "answer": 0,
    "explanation": "SAD-SV is a memory trick covering the five key characteristics: Speed, Accuracy, Diligence, Storage, and Versatility.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 7,
    "difficulty": "Medium",
    "question": "Why does a computer give error-free results only sometimes?",
    "options": [
      "Because it has its own intelligence",
      "Because accuracy depends on correct input and correct program instructions",
      "Because it randomly generates output",
      "Because computers are inherently unreliable"
    ],
    "answer": 1,
    "explanation": "A computer's accuracy is conditional; it produces error-free results only if the input data and the program instructions given to it are correct, following the Garbage In Garbage Out principle.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 8,
    "difficulty": "Easy",
    "question": "The statement 'a computer has no IQ of its own' means that a computer:",
    "options": [
      "Cannot store data",
      "Cannot think independently and only works as instructed",
      "Cannot perform calculations",
      "Cannot be programmed"
    ],
    "answer": 1,
    "explanation": "This characteristic highlights that a computer cannot think or make decisions on its own; it strictly depends on the instructions given by the user or programmer.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 9,
    "difficulty": "Easy",
    "question": "Which characteristic allows a single computer to perform tasks as varied as word processing, gaming, and data analysis?",
    "options": [
      "Versatility",
      "Accuracy",
      "Diligence",
      "Speed"
    ],
    "answer": 0,
    "explanation": "Versatility refers to a computer's ability to perform many different types of tasks, from simple word processing to complex data analysis, using different software.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 10,
    "difficulty": "Easy",
    "question": "Which of the following best describes 'Storage' as a computer characteristic?",
    "options": [
      "The ability to display output on a monitor",
      "The ability to store huge amounts of data permanently",
      "The speed of processing instructions",
      "The ability to connect to the internet"
    ],
    "answer": 1,
    "explanation": "Storage refers to a computer's capability to retain large volumes of data permanently, which can be retrieved and reused whenever required.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 11,
    "difficulty": "Medium",
    "question": "In the analogy comparing a computer to an obedient clerk, what does the clerk represent about the computer's functioning?",
    "options": [
      "It works only when supervised by another computer",
      "It follows instructions exactly and quickly, without fatigue, provided instructions are correct",
      "It makes independent decisions like a human",
      "It only performs mathematical operations"
    ],
    "answer": 1,
    "explanation": "The analogy emphasizes that a computer executes given instructions precisely and rapidly without tiring, but its correctness depends entirely on the accuracy of the instructions provided.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 12,
    "difficulty": "Easy",
    "question": "Which of the following correctly represents the flow of the IPO cycle?",
    "options": [
      "Output then Input then Processing",
      "Processing then Storage then Input",
      "Input then Processing then Output, with Storage supporting the cycle",
      "Storage then Output then Input"
    ],
    "answer": 2,
    "explanation": "The standard IPO cycle flows from Input to Processing to Output, with the Storage unit supporting the cycle by holding data before, during, and after processing.",
    "topic": "Fundamentals of Computers"
  },
  {
    "id": 13,
    "difficulty": "Easy",
    "question": "Which generation of computers used vacuum tubes as their basic electronic component?",
    "options": [
      "First Generation",
      "Second Generation",
      "Third Generation",
      "Fourth Generation"
    ],
    "answer": 0,
    "explanation": "First generation computers (1940-1956) used vacuum tubes for circuitry, examples being ENIAC and UNIVAC. They were large, generated heat, and consumed enormous electricity.",
    "topic": "Generations of Computers"
  },
  {
    "id": 14,
    "difficulty": "Easy",
    "question": "The replacement of vacuum tubes with transistors marked the beginning of which generation?",
    "options": [
      "First Generation",
      "Second Generation",
      "Third Generation",
      "Fifth Generation"
    ],
    "answer": 1,
    "explanation": "Second generation computers (1956-1963) replaced vacuum tubes with transistors, making machines smaller, faster, and more reliable, examples being IBM 1401 and IBM 7090.",
    "topic": "Generations of Computers"
  },
  {
    "id": 15,
    "difficulty": "Easy",
    "question": "Integrated Circuits (ICs) were introduced in which generation of computers?",
    "options": [
      "Second Generation",
      "Third Generation",
      "Fourth Generation",
      "Fifth Generation"
    ],
    "answer": 1,
    "explanation": "Third generation computers (1964-1971) used Integrated Circuits, which combined multiple transistors onto a single chip, examples being IBM 360 and PDP-8.",
    "topic": "Generations of Computers"
  },
  {
    "id": 16,
    "difficulty": "Easy",
    "question": "The introduction of microprocessors, which led to computers becoming small enough for personal/home use, characterises which generation?",
    "options": [
      "Third Generation",
      "Fourth Generation",
      "Fifth Generation",
      "First Generation"
    ],
    "answer": 1,
    "explanation": "Fourth generation computers (1971-present) use microprocessors, which enabled the shift from room-sized machines to lap-sized personal computers like the Apple II and IBM PC.",
    "topic": "Generations of Computers"
  },
  {
    "id": 17,
    "difficulty": "Easy",
    "question": "Fifth generation computers, which include systems like IBM Watson and ChatGPT-type AI systems, are primarily based on which technology?",
    "options": [
      "Vacuum Tubes",
      "Transistors",
      "Integrated Circuits",
      "Artificial Intelligence"
    ],
    "answer": 3,
    "explanation": "Fifth generation computers are based on Artificial Intelligence technology, representing the present and future direction of computing that focuses on machine learning and intelligent systems.",
    "topic": "Generations of Computers"
  },
  {
    "id": 18,
    "difficulty": "Easy",
    "question": "The mnemonic 'V-T-I-M-A' helps students remember the five generations of computers in the order:",
    "options": [
      "Vacuum tubes, Transistors, ICs, Microprocessors, AI",
      "Versatility, Transistors, Integration, Memory, Accuracy",
      "Vacuum tubes, Time-sharing, ICs, Memory, AI",
      "Voltage, Transistors, Integration, Miniaturisation, Automation"
    ],
    "answer": 0,
    "explanation": "The mnemonic V-T-I-M-A corresponds to the five generations in sequence: Vacuum tubes, Transistors, Integrated Circuits, Microprocessors, and Artificial Intelligence.",
    "topic": "Generations of Computers"
  },
  {
    "id": 19,
    "difficulty": "Medium",
    "question": "Why did first generation computers generate a large amount of heat and consume enormous electricity?",
    "options": [
      "Because of the use of microprocessors",
      "Because of the use of vacuum tubes",
      "Because of the use of transistors",
      "Because of the use of Integrated Circuits"
    ],
    "answer": 1,
    "explanation": "Vacuum tubes, used in first generation computers, generated significant heat and consumed large amounts of electricity, making these machines bulky and expensive to run.",
    "topic": "Generations of Computers"
  },
  {
    "id": 20,
    "difficulty": "Easy",
    "question": "ENIAC and UNIVAC are examples of which generation of computers?",
    "options": [
      "First Generation",
      "Second Generation",
      "Third Generation",
      "Fourth Generation"
    ],
    "answer": 0,
    "explanation": "ENIAC and UNIVAC were among the earliest electronic computers, built using vacuum tube technology, representing the First Generation of computers.",
    "topic": "Generations of Computers"
  },
  {
    "id": 21,
    "difficulty": "Medium",
    "question": "Which generation of computers is associated with the shift from room-sized machines to lap-sized machines that we use today?",
    "options": [
      "First Generation",
      "Second Generation",
      "Third Generation",
      "Fourth Generation"
    ],
    "answer": 3,
    "explanation": "The introduction of microprocessors in the Fourth Generation dramatically reduced the size of computers, moving from room-sized mainframes to compact, lap-sized personal computers.",
    "topic": "Generations of Computers"
  },
  {
    "id": 22,
    "difficulty": "Easy",
    "question": "IBM 1401 and IBM 7090 are examples associated with which generation of computers?",
    "options": [
      "First Generation (Vacuum Tubes)",
      "Second Generation (Transistors)",
      "Third Generation (Integrated Circuits)",
      "Fourth Generation (Microprocessors)"
    ],
    "answer": 1,
    "explanation": "IBM 1401 and IBM 7090 are Second Generation computers that used transistors instead of vacuum tubes, making them smaller and more energy-efficient than their predecessors.",
    "topic": "Generations of Computers"
  },
  {
    "id": 23,
    "difficulty": "Medium",
    "question": "Which of the following correctly lists the time period of Third Generation computers?",
    "options": [
      "1940-1956",
      "1956-1963",
      "1964-1971",
      "1971-present"
    ],
    "answer": 2,
    "explanation": "Third Generation computers span the period 1964 to 1971 and are characterised by the use of Integrated Circuits, examples being IBM 360 and PDP-8.",
    "topic": "Generations of Computers"
  },
  {
    "id": 24,
    "difficulty": "Medium",
    "question": "A key distinguishing feature between Fourth and Fifth generation computers is:",
    "options": [
      "Fourth generation uses vacuum tubes while Fifth uses transistors",
      "Fourth generation uses microprocessors while Fifth generation focuses on Artificial Intelligence",
      "Fourth generation is the current generation while Fifth generation is now obsolete",
      "There is no difference between the two"
    ],
    "answer": 1,
    "explanation": "Fourth generation computers are built on microprocessor technology, while Fifth generation computers focus on Artificial Intelligence-driven systems for advanced, intelligent processing.",
    "topic": "Generations of Computers"
  },
  {
    "id": 25,
    "difficulty": "Easy",
    "question": "Apple II and IBM PC are examples of computers from which generation?",
    "options": [
      "Second Generation",
      "Third Generation",
      "Fourth Generation",
      "Fifth Generation"
    ],
    "answer": 2,
    "explanation": "Apple II and IBM PC are examples of Fourth Generation computers, which are based on microprocessor technology and became widely used as personal computers.",
    "topic": "Generations of Computers"
  },
  {
    "id": 26,
    "difficulty": "Hard",
    "question": "Which statement about the evolution of computer generations is correct?",
    "options": [
      "Each generation used the same core technology as the previous one",
      "The evolution moved from bulky, high-power vacuum tube machines to compact, intelligent microprocessor and AI-based systems",
      "Fifth generation computers reverted to using vacuum tubes for reliability",
      "Second generation computers were the first to use microprocessors"
    ],
    "answer": 1,
    "explanation": "The generational evolution reflects a clear technological progression from large, power-hungry vacuum tube machines to compact, efficient microprocessor-based systems, and now toward AI-driven Fifth Generation systems.",
    "topic": "Generations of Computers"
  },
  {
    "id": 27,
    "difficulty": "Easy",
    "question": "Which type of computer is used for extremely complex scientific calculations and offers the highest processing speed?",
    "options": [
      "Microcomputer",
      "Minicomputer",
      "Supercomputer",
      "Mainframe Computer"
    ],
    "answer": 2,
    "explanation": "Supercomputers, such as PARAM (India) and CRAY, offer extremely high processing speed and are used for complex scientific and research calculations.",
    "topic": "Types of Computers"
  },
  {
    "id": 28,
    "difficulty": "Medium",
    "question": "Which organisation developed India's PARAM series of supercomputers?",
    "options": [
      "ISRO",
      "C-DAC, Pune",
      "IIT Delhi",
      "BARC"
    ],
    "answer": 1,
    "explanation": "The PARAM series of supercomputers was developed by C-DAC (Centre for Development of Advanced Computing), Pune, under India's supercomputing programme.",
    "topic": "Types of Computers"
  },
  {
    "id": 29,
    "difficulty": "Easy",
    "question": "Large organisations like banks and railways, which need to process bulk data, typically use which type of computer?",
    "options": [
      "Microcomputer",
      "Mainframe Computer",
      "Minicomputer",
      "Supercomputer"
    ],
    "answer": 1,
    "explanation": "Mainframe computers, such as the IBM zSeries, are large systems used by big organisations like banks and railways for bulk data processing.",
    "topic": "Types of Computers"
  },
  {
    "id": 30,
    "difficulty": "Easy",
    "question": "A Minicomputer is best described as a computer that is:",
    "options": [
      "Extremely large and used only for scientific research",
      "Mid-sized, typically used by small or medium businesses",
      "The smallest type of computer used for personal computing",
      "Used exclusively for supercomputing tasks"
    ],
    "answer": 1,
    "explanation": "Minicomputers, such as the PDP-11, are mid-sized computers used by small and medium businesses, positioned between mainframes and microcomputers in scale.",
    "topic": "Types of Computers"
  },
  {
    "id": 31,
    "difficulty": "Easy",
    "question": "The personal computer that we use daily, such as a desktop or laptop, is classified as a:",
    "options": [
      "Mainframe Computer",
      "Supercomputer",
      "Microcomputer",
      "Minicomputer"
    ],
    "answer": 2,
    "explanation": "A Microcomputer, commonly known as a Personal Computer (PC), includes desktops and laptops used for everyday personal and office tasks.",
    "topic": "Types of Computers"
  },
  {
    "id": 32,
    "difficulty": "Medium",
    "question": "India's National Supercomputing Mission (NSM) is most closely associated with which type of computer?",
    "options": [
      "Minicomputer",
      "Microcomputer",
      "Supercomputer",
      "Mainframe Computer"
    ],
    "answer": 2,
    "explanation": "The National Supercomputing Mission (NSM) is India's programme aimed at developing and deploying supercomputers like the PARAM series for scientific and research use.",
    "topic": "Types of Computers"
  },
  {
    "id": 33,
    "difficulty": "Medium",
    "question": "Which of the following is an example of a Mainframe Computer?",
    "options": [
      "PARAM",
      "IBM zSeries",
      "PDP-11",
      "Apple II"
    ],
    "answer": 1,
    "explanation": "IBM zSeries is a well-known example of a Mainframe Computer, used by large organisations for high-volume, bulk data processing.",
    "topic": "Types of Computers"
  },
  {
    "id": 34,
    "difficulty": "Hard",
    "question": "Why are AP e-Governance systems conceptually linked to mainframe-level processing?",
    "options": [
      "Because they run entirely on supercomputers",
      "Because they rely on large server infrastructure similar to mainframe-level processing for bulk citizen data",
      "Because they use only microcomputers",
      "Because they do not process large volumes of data"
    ],
    "answer": 1,
    "explanation": "AP's e-Governance systems rely on large server infrastructure conceptually similar to mainframe-level processing, given the scale of citizen data they must handle across the state.",
    "topic": "Types of Computers"
  },
  {
    "id": 35,
    "difficulty": "Easy",
    "question": "Which term refers to the physical, touchable parts of a computer?",
    "options": [
      "Software",
      "Hardware",
      "Firmware",
      "Middleware"
    ],
    "answer": 1,
    "explanation": "Hardware refers to all the physical, touchable components of a computer such as the CPU, keyboard, monitor, and hard disk.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 36,
    "difficulty": "Easy",
    "question": "Which unit is often called the 'brain of the computer'?",
    "options": [
      "Input Unit",
      "Output Unit",
      "CPU (Central Processing Unit)",
      "Storage Unit"
    ],
    "answer": 2,
    "explanation": "The CPU (Central Processing Unit) is called the brain of the computer because it carries out all processing, calculation, and control functions.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 37,
    "difficulty": "Easy",
    "question": "Which of the following is NOT a main part of the CPU?",
    "options": [
      "ALU",
      "Control Unit",
      "Memory Unit (Registers)",
      "Scanner"
    ],
    "answer": 3,
    "explanation": "The CPU consists of the ALU, Control Unit, and Memory Unit (Registers). A Scanner is an input device, not part of the CPU.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 38,
    "difficulty": "Easy",
    "question": "Which part of the CPU performs all mathematical calculations and logical comparisons?",
    "options": [
      "Control Unit (CU)",
      "Arithmetic Logic Unit (ALU)",
      "Registers",
      "RAM"
    ],
    "answer": 1,
    "explanation": "The Arithmetic Logic Unit (ALU) is responsible for performing mathematical operations like addition and subtraction, as well as logical comparisons like greater than or less than.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 39,
    "difficulty": "Easy",
    "question": "In the CPU, which unit acts like a 'traffic police officer', directing and coordinating all internal activities?",
    "options": [
      "ALU",
      "Control Unit (CU)",
      "Memory Unit",
      "ROM"
    ],
    "answer": 1,
    "explanation": "The Control Unit (CU) coordinates and directs all activities inside the computer, telling other units what to do and when, similar to a traffic police officer managing traffic flow.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 40,
    "difficulty": "Medium",
    "question": "Registers, the tiny and very fast storage locations inside the CPU, are used to:",
    "options": [
      "Permanently store large files",
      "Hold data currently being processed",
      "Connect to the internet",
      "Display output on the monitor"
    ],
    "answer": 1,
    "explanation": "Registers are extremely fast, small storage locations within the CPU that hold data currently being processed, enabling quick access during calculations.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 41,
    "difficulty": "Medium",
    "question": "In the kitchen analogy for CPU components, who represents the 'head chef' giving instructions on what to cook and in what order?",
    "options": [
      "ALU",
      "Control Unit (CU)",
      "Registers",
      "RAM"
    ],
    "answer": 1,
    "explanation": "In the analogy, the Control Unit is the head chef who gives instructions on what to do and in what sequence, similar to how it coordinates operations inside the CPU.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 42,
    "difficulty": "Easy",
    "question": "Which of the following devices is used to convert paper documents into digital images?",
    "options": [
      "Scanner",
      "Joystick",
      "Printer",
      "Speaker"
    ],
    "answer": 0,
    "explanation": "A scanner is an input device that converts physical paper documents into digital image formats that a computer can process and store.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 43,
    "difficulty": "Medium",
    "question": "For Aadhaar-based authentication and e-KYC verification relevant to VRO duties, which input device is primarily used?",
    "options": [
      "Joystick",
      "Biometric Scanner (Fingerprint/Iris)",
      "OMR",
      "Bar Code Reader"
    ],
    "answer": 1,
    "explanation": "Biometric Scanners, which capture fingerprint or iris data, are used for Aadhaar-based authentication and e-KYC verification, directly relevant to VRO duties like Meebhoomi verification.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 44,
    "difficulty": "Easy",
    "question": "An OMR (Optical Mark Reader) is primarily used for:",
    "options": [
      "Reading barcodes in ration shops",
      "Reading marked answer sheets in examinations",
      "Converting sound into digital signals",
      "Capturing live video"
    ],
    "answer": 1,
    "explanation": "An OMR (Optical Mark Reader) reads marked answer sheets, such as those used in competitive examinations, by detecting the position of marks made by candidates.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 45,
    "difficulty": "Easy",
    "question": "A Bar Code Reader is commonly used in which of the following contexts?",
    "options": [
      "Gaming",
      "PDS ration shops and billing",
      "Video conferencing",
      "Land survey mapping"
    ],
    "answer": 1,
    "explanation": "Bar Code Readers are commonly used in billing systems and PDS (Public Distribution System) ration shops to quickly read product or item codes.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 46,
    "difficulty": "Medium",
    "question": "Which output device is most useful for printing large-scale drawings or maps, making it relevant to land survey work?",
    "options": [
      "Plotter",
      "Dot Matrix Printer",
      "Speaker",
      "Monitor"
    ],
    "answer": 0,
    "explanation": "A Plotter is used for printing large-scale drawings and maps, which is particularly relevant to land survey work carried out by VROs.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 47,
    "difficulty": "Easy",
    "question": "Which type of printer uses toner and a laser beam, offering fast speed and very high print quality?",
    "options": [
      "Dot Matrix Printer",
      "Inkjet Printer",
      "Laser Printer",
      "Thermal Printer"
    ],
    "answer": 2,
    "explanation": "Laser Printers use toner and a laser beam to produce output, offering fast printing speed and very high quality, making them suitable for bulk office printing.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 48,
    "difficulty": "Medium",
    "question": "Which printer type is commonly used for multi-copy bills in government offices due to its impact-based technology?",
    "options": [
      "Laser Printer",
      "Inkjet Printer",
      "Dot Matrix Printer",
      "3D Printer"
    ],
    "answer": 2,
    "explanation": "Dot Matrix Printers use impact technology, where pins strike a ribbon, allowing them to produce multi-copy bills common in government offices, though at slower speed and lower quality.",
    "topic": "Computer Organisation and Hardware"
  },
  {
    "id": 49,
    "difficulty": "Easy",
    "question": "Which input device is primarily used for typing text and issuing commands to a computer?",
    "options": [
      "Mouse",
      "Keyboard",
      "Joystick",
      "Webcam"
    ],
    "answer": 1,
    "explanation": "The keyboard is the primary input device used for typing text and entering commands into a computer system.",
    "topic": "Input Devices"
  },
  {
    "id": 50,
    "difficulty": "Easy",
    "question": "Which input device is mainly used for pointing and clicking on graphical elements of a screen?",
    "options": [
      "Keyboard",
      "Mouse",
      "Microphone",
      "Scanner"
    ],
    "answer": 1,
    "explanation": "The mouse is an input device used for pointing at and clicking on graphical elements, enabling navigation within a graphical user interface.",
    "topic": "Input Devices"
  },
  {
    "id": 51,
    "difficulty": "Easy",
    "question": "Which device converts sound into a digital signal for input into a computer?",
    "options": [
      "Speaker",
      "Microphone",
      "Webcam",
      "Plotter"
    ],
    "answer": 1,
    "explanation": "A microphone converts sound waves into digital signals that a computer can process, store, or transmit, functioning as an audio input device.",
    "topic": "Input Devices"
  },
  {
    "id": 52,
    "difficulty": "Easy",
    "question": "A Webcam is primarily used to:",
    "options": [
      "Capture live video",
      "Print documents",
      "Scan paper documents",
      "Read barcodes"
    ],
    "answer": 0,
    "explanation": "A webcam is an input device used to capture live video, commonly used for video conferencing and online communication.",
    "topic": "Input Devices"
  },
  {
    "id": 53,
    "difficulty": "Easy",
    "question": "Which input device is typically used in gaming applications?",
    "options": [
      "Joystick",
      "OMR",
      "Bar Code Reader",
      "Scanner"
    ],
    "answer": 0,
    "explanation": "A joystick is an input device primarily designed for controlling movement and actions in gaming applications.",
    "topic": "Input Devices"
  },
  {
    "id": 54,
    "difficulty": "Easy",
    "question": "Input devices are best defined as devices that:",
    "options": [
      "Display processed results to the user",
      "Allow data and instructions to be entered into a computer",
      "Store data permanently",
      "Perform calculations on data"
    ],
    "answer": 1,
    "explanation": "Input devices allow users to enter data and instructions into a computer system so that it can be processed further.",
    "topic": "Input Devices"
  },
  {
    "id": 55,
    "difficulty": "Easy",
    "question": "Which of the following is an example of a biometric input device?",
    "options": [
      "Fingerprint Scanner",
      "Dot Matrix Printer",
      "Plotter",
      "Speaker"
    ],
    "answer": 0,
    "explanation": "A Fingerprint Scanner is a biometric input device that captures unique physical characteristics for identity verification, widely used in Aadhaar-linked e-KYC processes.",
    "topic": "Input Devices"
  },
  {
    "id": 56,
    "difficulty": "Medium",
    "question": "Which input device would be most useful for a government office needing to digitise old paper land records?",
    "options": [
      "Joystick",
      "Scanner",
      "Speaker",
      "Plotter"
    ],
    "answer": 1,
    "explanation": "A Scanner converts paper documents, such as old land records, into digital images, making it the most suitable input device for digitisation efforts.",
    "topic": "Input Devices"
  },
  {
    "id": 57,
    "difficulty": "Medium",
    "question": "Which of the following statements about input devices is correct?",
    "options": [
      "Input devices only work with text-based data",
      "Input devices can capture text, images, sound, and video depending on the device type",
      "Input devices cannot be used with biometric data",
      "All input devices produce printed output"
    ],
    "answer": 1,
    "explanation": "Input devices are varied and can capture different forms of data, including text via keyboard, images via scanner, sound via microphone, and video via webcam.",
    "topic": "Input Devices"
  },
  {
    "id": 58,
    "difficulty": "Medium",
    "question": "Bar Code Readers used in PDS ration shops function primarily as:",
    "options": [
      "Output devices for printing receipts",
      "Input devices for reading coded product/item information",
      "Storage devices for saving transaction data",
      "Processing devices for calculating totals"
    ],
    "answer": 1,
    "explanation": "Bar Code Readers are input devices that scan and read coded information printed on products, which is then processed by billing software.",
    "topic": "Input Devices"
  },
  {
    "id": 59,
    "difficulty": "Easy",
    "question": "Which of the following is the primary function of an output device?",
    "options": [
      "To accept data from the user",
      "To display or produce processed results for the user",
      "To store data permanently",
      "To process raw data into information"
    ],
    "answer": 1,
    "explanation": "Output devices display or produce the processed results of a computer for the user to see, hear, or use, such as monitors and printers.",
    "topic": "Output Devices"
  },
  {
    "id": 60,
    "difficulty": "Easy",
    "question": "A Monitor is also referred to by which of the following terms?",
    "options": [
      "CPU",
      "VDU (Visual Display Unit)",
      "ALU",
      "ROM"
    ],
    "answer": 1,
    "explanation": "A Monitor is also known as a VDU (Visual Display Unit) since it visually displays the processed output of a computer.",
    "topic": "Output Devices"
  },
  {
    "id": 61,
    "difficulty": "Easy",
    "question": "Which output device produces sound as its result?",
    "options": [
      "Printer",
      "Speaker",
      "Plotter",
      "Monitor"
    ],
    "answer": 1,
    "explanation": "A Speaker is an output device that converts digital audio signals into sound, allowing the user to hear the processed output.",
    "topic": "Output Devices"
  },
  {
    "id": 62,
    "difficulty": "Easy",
    "question": "Which type of printer is best suited for producing high-quality colour prints at home or in offices?",
    "options": [
      "Dot Matrix Printer",
      "Inkjet Printer",
      "Impact Printer",
      "OMR Printer"
    ],
    "answer": 1,
    "explanation": "An Inkjet Printer sprays liquid ink to produce medium-speed but high-quality colour prints, making it ideal for home and office colour printing needs.",
    "topic": "Output Devices"
  },
  {
    "id": 63,
    "difficulty": "Medium",
    "question": "Which output device would be most appropriate for printing large-scale land survey maps?",
    "options": [
      "Speaker",
      "Plotter",
      "Dot Matrix Printer",
      "Monitor"
    ],
    "answer": 1,
    "explanation": "A Plotter is specifically designed to print large-scale drawings and maps, making it the most appropriate device for land survey work.",
    "topic": "Output Devices"
  },
  {
    "id": 64,
    "difficulty": "Medium",
    "question": "Among Dot Matrix, Inkjet, and Laser printers, which one offers the fastest speed and highest print quality for bulk office printing?",
    "options": [
      "Dot Matrix Printer",
      "Inkjet Printer",
      "Laser Printer",
      "None of these"
    ],
    "answer": 2,
    "explanation": "Laser Printers offer the fastest speed and highest print quality among the three, using toner and a laser beam, making them the best choice for bulk office printing.",
    "topic": "Output Devices"
  },
  {
    "id": 65,
    "difficulty": "Medium",
    "question": "Why are Dot Matrix printers still used in some government offices despite being slower and of lower quality?",
    "options": [
      "They cannot print at all",
      "They are useful for producing multi-copy bills using impact technology",
      "They only work with digital documents",
      "They are the fastest printers available"
    ],
    "answer": 1,
    "explanation": "Dot Matrix printers use impact technology (pins striking a ribbon), which allows carbon-copy printing, making them useful for producing multi-copy bills in government offices.",
    "topic": "Output Devices"
  },
  {
    "id": 66,
    "difficulty": "Easy",
    "question": "Which of the following is an output device rather than an input device?",
    "options": [
      "Scanner",
      "Microphone",
      "Monitor",
      "Joystick"
    ],
    "answer": 2,
    "explanation": "A Monitor is an output device that displays processed results, whereas the Scanner, Microphone, and Joystick are input devices.",
    "topic": "Output Devices"
  },
  {
    "id": 67,
    "difficulty": "Easy",
    "question": "Which category of printer technology sprays liquid ink onto paper to form images and text?",
    "options": [
      "Laser Printer",
      "Inkjet Printer",
      "Dot Matrix Printer",
      "3D Printer"
    ],
    "answer": 1,
    "explanation": "Inkjet Printers use a technology where liquid ink is sprayed onto paper to form the desired text or image, offering high quality at medium speed.",
    "topic": "Output Devices"
  },
  {
    "id": 68,
    "difficulty": "Medium",
    "question": "A Plotter differs from a regular printer mainly in that it is designed for:",
    "options": [
      "Printing small text documents only",
      "Printing large-scale drawings, blueprints, and maps",
      "Producing only black-and-white output",
      "Scanning physical documents"
    ],
    "answer": 1,
    "explanation": "Unlike regular printers designed for standard documents, a Plotter is specifically built for printing large-scale technical drawings, blueprints, and maps.",
    "topic": "Output Devices"
  },
  {
    "id": 69,
    "difficulty": "Easy",
    "question": "Which type of memory is directly accessible by the CPU and is generally faster but more expensive?",
    "options": [
      "Secondary Memory",
      "Primary Memory",
      "Optical Storage",
      "Flash Storage"
    ],
    "answer": 1,
    "explanation": "Primary Memory (RAM/ROM) is directly accessible by the CPU, offering very fast speed, though it is more expensive per unit compared to secondary memory.",
    "topic": "Memory and Storage"
  },
  {
    "id": 70,
    "difficulty": "Medium",
    "question": "Which of the following is a characteristic of Secondary Memory?",
    "options": [
      "It is directly accessible by the CPU",
      "It is volatile and loses data when power is switched off",
      "Data must first be loaded into RAM before the CPU can access it",
      "It is more expensive per unit than Primary Memory"
    ],
    "answer": 2,
    "explanation": "Secondary Memory is not directly accessible by the CPU; data stored in it must first be loaded into RAM before processing, unlike Primary Memory.",
    "topic": "Memory and Storage"
  },
  {
    "id": 71,
    "difficulty": "Easy",
    "question": "RAM is described as 'volatile' because:",
    "options": [
      "It is very expensive",
      "Its data is lost when the computer is switched off",
      "It can only be read, not written to",
      "It stores data permanently"
    ],
    "answer": 1,
    "explanation": "RAM is volatile memory, meaning all data stored in it is lost as soon as the power supply to the computer is switched off.",
    "topic": "Memory and Storage"
  },
  {
    "id": 72,
    "difficulty": "Easy",
    "question": "Which of the following best describes ROM?",
    "options": [
      "Temporary memory that is erased when power is off",
      "Permanent, mostly Read-Only memory that stores firmware/BIOS instructions",
      "A type of secondary storage device",
      "A device used only for input operations"
    ],
    "answer": 1,
    "explanation": "ROM (Read Only Memory) is non-volatile and mostly read-only, storing essential firmware or BIOS instructions needed to start the computer.",
    "topic": "Memory and Storage"
  },
  {
    "id": 73,
    "difficulty": "Medium",
    "question": "Which of the following are types of RAM?",
    "options": [
      "PROM and EPROM",
      "SRAM and DRAM",
      "EEPROM and Flash",
      "BIOS and Firmware"
    ],
    "answer": 1,
    "explanation": "RAM has two main types: SRAM (Static RAM) and DRAM (Dynamic RAM), both used as volatile primary memory in computers.",
    "topic": "Memory and Storage"
  },
  {
    "id": 74,
    "difficulty": "Medium",
    "question": "Which of the following are types of ROM?",
    "options": [
      "SRAM and DRAM",
      "Cache and Register",
      "PROM, EPROM, and EEPROM",
      "HDD and SSD"
    ],
    "answer": 2,
    "explanation": "ROM has several types including PROM (Programmable ROM), EPROM (Erasable Programmable ROM), and EEPROM (Electrically Erasable Programmable ROM).",
    "topic": "Memory and Storage"
  },
  {
    "id": 75,
    "difficulty": "Easy",
    "question": "The memory trick 'RAM = Remember And Memorise temporarily' highlights which key property of RAM?",
    "options": [
      "RAM stores data permanently",
      "RAM is volatile and forgets data once power is switched off",
      "RAM cannot be written to",
      "RAM is a type of secondary storage"
    ],
    "answer": 1,
    "explanation": "The mnemonic highlights that RAM temporarily holds data, similar to how we forget a dream once we wake up, i.e., data is erased once power is off.",
    "topic": "Memory and Storage"
  },
  {
    "id": 76,
    "difficulty": "Easy",
    "question": "How many bits make up one byte?",
    "options": [
      "4 bits",
      "8 bits",
      "16 bits",
      "32 bits"
    ],
    "answer": 1,
    "explanation": "One byte is composed of 8 bits, which is a foundational unit of measurement in computer memory and data representation.",
    "topic": "Memory and Storage"
  },
  {
    "id": 77,
    "difficulty": "Easy",
    "question": "1 Kilobyte (KB) is equal to how many bytes?",
    "options": [
      "100 Bytes",
      "1000 Bytes",
      "1024 Bytes",
      "1024 Bits"
    ],
    "answer": 2,
    "explanation": "In computer memory measurement, 1 Kilobyte (KB) is equal to 1024 Bytes, following the binary (base-2) counting system rather than the decimal system.",
    "topic": "Memory and Storage"
  },
  {
    "id": 78,
    "difficulty": "Easy",
    "question": "1 Megabyte (MB) is equal to:",
    "options": [
      "1000 KB",
      "1024 KB",
      "1024 MB",
      "1000 Bytes"
    ],
    "answer": 1,
    "explanation": "1 Megabyte (MB) equals 1024 Kilobytes (KB), continuing the standard binary chain used for computer memory measurement.",
    "topic": "Memory and Storage"
  },
  {
    "id": 79,
    "difficulty": "Easy",
    "question": "Which of the following correctly represents the memory unit hierarchy from smallest to largest?",
    "options": [
      "GB, MB, KB, TB",
      "KB, MB, GB, TB",
      "TB, GB, MB, KB",
      "MB, KB, TB, GB"
    ],
    "answer": 1,
    "explanation": "The correct hierarchy from smallest to largest is Kilobyte (KB), Megabyte (MB), Gigabyte (GB), and Terabyte (TB), each unit being 1024 times the previous one.",
    "topic": "Memory and Storage"
  },
  {
    "id": 80,
    "difficulty": "Easy",
    "question": "1 Gigabyte (GB) is equal to how many Megabytes (MB)?",
    "options": [
      "1000 MB",
      "1024 MB",
      "512 MB",
      "2048 MB"
    ],
    "answer": 1,
    "explanation": "Following the binary chain used in computing, 1 Gigabyte (GB) equals 1024 Megabytes (MB).",
    "topic": "Memory and Storage"
  },
  {
    "id": 81,
    "difficulty": "Hard",
    "question": "Why does APPSC caution students not to confuse the 1024 chain with the decimal (1000) system?",
    "options": [
      "Because computers do not use binary units at all",
      "Because storage device marketing often uses the decimal (1000) system, which differs from the binary system used internally by computers",
      "Because 1000 is always the correct value for computer memory",
      "Because ROM uses a different measurement system than RAM"
    ],
    "answer": 1,
    "explanation": "Storage manufacturers often market devices using the decimal (1000) system for capacity, while computers internally calculate memory using the binary (1024) system, leading to a common point of confusion.",
    "topic": "Memory and Storage"
  },
  {
    "id": 82,
    "difficulty": "Easy",
    "question": "Which secondary storage device has an approximate capacity of 1.44 MB and is now considered obsolete?",
    "options": [
      "CD",
      "DVD",
      "Floppy Disk",
      "Pen Drive"
    ],
    "answer": 2,
    "explanation": "The Floppy Disk had a capacity of approximately 1.44 MB and is now obsolete, though it is still asked about historically in exams.",
    "topic": "Memory and Storage"
  },
  {
    "id": 83,
    "difficulty": "Medium",
    "question": "A standard single-layer DVD has an approximate storage capacity of:",
    "options": [
      "700 MB",
      "1.44 MB",
      "4.7 GB",
      "1 TB"
    ],
    "answer": 2,
    "explanation": "A single-layer DVD has an approximate capacity of 4.7 GB, which is significantly higher than a CD's 700 MB capacity.",
    "topic": "Memory and Storage"
  },
  {
    "id": 84,
    "difficulty": "Easy",
    "question": "Which secondary storage technology uses magnetic storage with moving parts?",
    "options": [
      "SSD",
      "HDD",
      "Pen Drive",
      "Memory Card"
    ],
    "answer": 1,
    "explanation": "HDD (Hard Disk Drive) uses magnetic storage technology with moving mechanical parts, unlike SSDs which use flash memory chips with no moving parts.",
    "topic": "Memory and Storage"
  },
  {
    "id": 85,
    "difficulty": "Medium",
    "question": "Which of the following is TRUE regarding SSD compared to HDD?",
    "options": [
      "SSD is slower than HDD",
      "SSD makes more mechanical noise than HDD",
      "SSD is generally faster and more durable due to the absence of moving parts",
      "SSD always has a lower price per GB than HDD"
    ],
    "answer": 2,
    "explanation": "SSD (Solid State Drive) is generally faster and more durable than HDD because it uses flash memory chips with no moving parts, unlike HDD's magnetic spinning disk.",
    "topic": "Memory and Storage"
  },
  {
    "id": 86,
    "difficulty": "Easy",
    "question": "Which of the following storage devices is portable and commonly used to transfer files between computers via a USB port?",
    "options": [
      "Hard Disk Drive",
      "Pen Drive / USB Drive",
      "CD-ROM",
      "Cache Memory"
    ],
    "answer": 1,
    "explanation": "A Pen Drive (USB Drive) is a portable flash storage device commonly used to transfer files between different computers via a USB port.",
    "topic": "Memory and Storage"
  },
  {
    "id": 87,
    "difficulty": "Easy",
    "question": "Which of the following memory types would typically be found inside a digital camera or mobile phone for storing photos?",
    "options": [
      "Cache Memory",
      "Memory Card",
      "ROM",
      "Register"
    ],
    "answer": 1,
    "explanation": "A Memory Card is commonly used in digital cameras and mobile phones for storing photos and other data, offering portable and expandable storage.",
    "topic": "Memory and Storage"
  },
  {
    "id": 88,
    "difficulty": "Hard",
    "question": "Why is Primary Memory generally more expensive per unit than Secondary Memory?",
    "options": [
      "Because Primary Memory offers much higher speed and direct CPU accessibility",
      "Because Secondary Memory is volatile",
      "Because Primary Memory has lower storage capacity limits only",
      "Because Secondary Memory cannot store any data"
    ],
    "answer": 0,
    "explanation": "Primary Memory (RAM/ROM) is more expensive per unit mainly because it offers significantly higher speed and is directly accessible by the CPU, unlike the comparatively slower and cheaper Secondary Memory.",
    "topic": "Memory and Storage"
  },
  {
    "id": 89,
    "difficulty": "Easy",
    "question": "If hardware is the body of a computer, software is best described as:",
    "options": [
      "The skeleton",
      "The soul that makes the body function meaningfully",
      "An unnecessary add-on",
      "A type of hardware component"
    ],
    "answer": 1,
    "explanation": "Software is the set of instructions that tells hardware what to do; without it, hardware alone cannot function meaningfully, similar to a body without a soul.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 90,
    "difficulty": "Easy",
    "question": "Which of the following is the correct broad classification of software?",
    "options": [
      "System Software and Application Software",
      "Input Software and Output Software",
      "Primary Software and Secondary Software",
      "Volatile Software and Non-volatile Software"
    ],
    "answer": 0,
    "explanation": "Software is broadly classified into System Software, which manages hardware, and Application Software, which helps users perform specific tasks.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 91,
    "difficulty": "Easy",
    "question": "Which category of software acts as a bridge between hardware and the user, managing and controlling hardware resources?",
    "options": [
      "Application Software",
      "System Software",
      "Utility Software (only)",
      "Firmware (only)"
    ],
    "answer": 1,
    "explanation": "System Software, such as an Operating System, manages and controls hardware while acting as a bridge between the hardware and the user.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 92,
    "difficulty": "Easy",
    "question": "Which of the following is an example of Application Software?",
    "options": [
      "Windows",
      "Linux",
      "MS Word",
      "Device Driver"
    ],
    "answer": 2,
    "explanation": "MS Word is Application Software, designed to help users perform a specific task such as word processing, unlike Windows and Linux which are Operating Systems (System Software).",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 93,
    "difficulty": "Easy",
    "question": "Antivirus software and Disk Cleanup tools fall under which category of software?",
    "options": [
      "Application Software",
      "Utility Software",
      "Firmware",
      "Middleware"
    ],
    "answer": 1,
    "explanation": "Utility Software, including antivirus and disk cleanup tools, is designed to maintain and optimise system performance rather than perform user-specific tasks.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 94,
    "difficulty": "Easy",
    "question": "Which of the following best defines an Operating System (OS)?",
    "options": [
      "A hardware component that stores data permanently",
      "System software that manages hardware resources and acts as an interface between the user and hardware",
      "An application used only for typing documents",
      "A type of secondary storage device"
    ],
    "answer": 1,
    "explanation": "An Operating System is the most important system software; it manages hardware resources like CPU, memory, and storage, and provides an interface between the user and the hardware.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 95,
    "difficulty": "Medium",
    "question": "Which OS function involves managing multiple running programs simultaneously?",
    "options": [
      "File Management",
      "Process Management",
      "Device Management",
      "Security Management"
    ],
    "answer": 1,
    "explanation": "Process Management is the OS function responsible for managing multiple programs running concurrently, allocating CPU time appropriately to each.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 96,
    "difficulty": "Easy",
    "question": "Which OS function is responsible for organising data into files and folders?",
    "options": [
      "Process Management",
      "Memory Management",
      "File Management",
      "User Interface"
    ],
    "answer": 2,
    "explanation": "File Management is the OS function that organises data into files and folders, enabling users to store, retrieve, and manage data efficiently.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 97,
    "difficulty": "Medium",
    "question": "Which OS function involves controlling input/output devices via drivers?",
    "options": [
      "Device Management",
      "Security Management",
      "Memory Management",
      "Process Management"
    ],
    "answer": 0,
    "explanation": "Device Management is the OS function responsible for controlling input/output devices, typically through the use of device drivers.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 98,
    "difficulty": "Easy",
    "question": "Which OS function protects data through user accounts and passwords?",
    "options": [
      "File Management",
      "Security Management",
      "Device Management",
      "Process Management"
    ],
    "answer": 1,
    "explanation": "Security Management is the OS function that protects data by implementing user accounts, passwords, and access controls.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 99,
    "difficulty": "Easy",
    "question": "GUI and CLI are two forms of which OS function?",
    "options": [
      "Memory Management",
      "User Interface",
      "Device Management",
      "Process Management"
    ],
    "answer": 1,
    "explanation": "The User Interface function of an OS provides either a GUI (Graphical User Interface) or a CLI (Command Line Interface) for user interaction with the computer.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 100,
    "difficulty": "Medium",
    "question": "Which type of Operating System processes jobs in batches without any user interaction during execution?",
    "options": [
      "Real-Time OS",
      "Batch OS",
      "Time-Sharing OS",
      "Distributed OS"
    ],
    "answer": 1,
    "explanation": "A Batch OS processes a group of jobs together without requiring user interaction during execution, a method commonly used in early mainframe systems.",
    "topic": "Software and Operating Systems"
  }
];
