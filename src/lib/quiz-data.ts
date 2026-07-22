export type Question = { id: number; difficulty: string; question: string; options: string[]; answer: number; explanation: string; topic: string; };

export const questions: Question[] = [
  {
    "id": 1,
    "difficulty": "Medium",
    "question": "Which type of Operating System allows multiple users to share CPU time, exemplified by UNIX?",
    "options": [
      "Batch OS",
      "Real-Time OS",
      "Time-Sharing OS",
      "Mobile OS"
    ],
    "answer": 2,
    "explanation": "A Time-Sharing OS, such as UNIX, allows multiple users to share the CPU's processing time simultaneously, giving each user the impression of exclusive access.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 2,
    "difficulty": "Medium",
    "question": "Which type of Operating System is used in systems like Air Traffic Control, where instant processing with strict timing is essential?",
    "options": [
      "Batch OS",
      "Distributed OS",
      "Real-Time OS",
      "Mobile OS"
    ],
    "answer": 2,
    "explanation": "A Real-Time OS processes data instantly with strict timing requirements, making it essential for critical systems like Air Traffic Control.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 3,
    "difficulty": "Medium",
    "question": "An OS that manages a group of networked computers is known as a:",
    "options": [
      "Distributed OS",
      "Batch OS",
      "Mobile OS",
      "Time-Sharing OS"
    ],
    "answer": 0,
    "explanation": "A Distributed OS manages a group of networked computers, allowing them to work together and share resources as a unified system.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 4,
    "difficulty": "Easy",
    "question": "Which of the following is a Mobile Operating System based on the Linux kernel?",
    "options": [
      "Windows",
      "macOS",
      "Android",
      "iOS"
    ],
    "answer": 2,
    "explanation": "Android is a Mobile OS developed by Google that is based on the Linux kernel, making it the most widely used mobile OS globally.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 5,
    "difficulty": "Easy",
    "question": "Which Operating System is developed by Apple and used exclusively on iPhones?",
    "options": [
      "Android",
      "iOS",
      "Linux",
      "Windows"
    ],
    "answer": 1,
    "explanation": "iOS is a Mobile OS developed by Apple, used exclusively on iPhones, offering a proprietary, GUI-based mobile experience.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 6,
    "difficulty": "Easy",
    "question": "Which Operating System is open source, highly customisable, and widely used in servers?",
    "options": [
      "Windows",
      "macOS",
      "Linux",
      "iOS"
    ],
    "answer": 2,
    "explanation": "Linux is an open-source Operating System that is free, highly customisable, and widely used in servers due to its cost-effectiveness and security.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 7,
    "difficulty": "Hard",
    "question": "Why do many AP e-Governance back-end servers, such as e-Pragati data centres, run on Linux?",
    "options": [
      "Because Linux is proprietary and expensive",
      "Because Linux offers cost-effectiveness and strong security for server infrastructure",
      "Because Linux cannot support large-scale data processing",
      "Because Linux is only usable on personal desktop computers"
    ],
    "answer": 1,
    "explanation": "AP e-Governance back-end servers often use Linux because it is cost-effective and offers strong security, which are critical requirements for large-scale, citizen-facing data infrastructure.",
    "topic": "Software and Operating Systems"
  },
  {
    "id": 8,
    "difficulty": "Easy",
    "question": "Which Operating System is proprietary and used exclusively on Apple Macintosh computers?",
    "options": [
      "Linux",
      "Android",
      "macOS",
      "iOS"
    ],
    "answer": 2,
    "explanation": "macOS is a proprietary, GUI-based Operating System developed by Apple, used exclusively on Apple Macintosh computers.",
    "topic": "Software and Operating Systems Number Systems"
  },
  {
    "id": 9,
    "difficulty": "Easy",
    "question": "Computers internally understand data using which number system?",
    "options": [
      "Decimal",
      "Binary",
      "Octal",
      "Hexadecimal"
    ],
    "answer": 1,
    "explanation": "Computers internally understand only two states, ON and OFF, represented by 1 and 0, which forms the basis of the Binary Number System.",
    "topic": "Number Systems"
  },
  {
    "id": 10,
    "difficulty": "Easy",
    "question": "What is the base of the Binary Number System?",
    "options": [
      "Base 2",
      "Base 8",
      "Base 10",
      "Base 16"
    ],
    "answer": 0,
    "explanation": "The Binary Number System has a base of 2, using only the digits 0 and 1 to represent all values.",
    "topic": "Number Systems"
  },
  {
    "id": 11,
    "difficulty": "Easy",
    "question": "Which number system uses digits from 0-7?",
    "options": [
      "Binary",
      "Octal",
      "Decimal",
      "Hexadecimal"
    ],
    "answer": 1,
    "explanation": "The Octal Number System has a base of 8 and uses digits ranging from 0 to 7.",
    "topic": "Number Systems"
  },
  {
    "id": 12,
    "difficulty": "Medium",
    "question": "The Hexadecimal Number System uses which of the following sets of digits?",
    "options": [
      "0-7",
      "0-9",
      "0-9 and A-F",
      "0-1"
    ],
    "answer": 2,
    "explanation": "The Hexadecimal Number System has a base of 16 and uses digits 0-9 along with letters A-F to represent values 10 through 15.",
    "topic": "Number Systems"
  },
  {
    "id": 13,
    "difficulty": "Medium",
    "question": "Why is the Binary Number System considered the natural language of computers?",
    "options": [
      "Because binary numbers are easier for humans to read",
      "Because electronic circuits have two stable states that map perfectly to 1 and 0",
      "Because binary uses ten different digit symbols",
      "Because binary numbers require less storage than decimal numbers"
    ],
    "answer": 1,
    "explanation": "Electronic circuits have two stable states, current flowing or not flowing, which map naturally to the binary digits 1 and 0, making binary the natural computational language.",
    "topic": "Number Systems"
  },
  {
    "id": 14,
    "difficulty": "Easy",
    "question": "What is the term used for a single binary digit (either 0 or 1)?",
    "options": [
      "Byte",
      "Bit",
      "Nibble",
      "Word"
    ],
    "answer": 1,
    "explanation": "A 'Bit' is a single Binary Digit, either 0 or 1, and is the smallest unit of data in computing.",
    "topic": "Number Systems"
  },
  {
    "id": 15,
    "difficulty": "Medium",
    "question": "What is the decimal equivalent of the binary number 1010?",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "answer": 1,
    "explanation": "The binary number 1010 equals 8 + 0 + 2 + 0 = 10 in the decimal system, since 1010 represents (1x2^3)+(0x2^2)+(1x2^1)+(0x2^0) = 8+0+2+0 = 10.",
    "topic": "Number Systems"
  },
  {
    "id": 16,
    "difficulty": "Medium",
    "question": "For VRO-level exam preparation, which of the following is a key point to remember about number systems?",
    "options": [
      "Deep binary arithmetic is essential and heavily tested",
      "Basic conversion logic and terms like 'Bit' and 'Byte' are frequently tested rather than deep arithmetic",
      "Number systems are not part of the syllabus at all",
      "Only hexadecimal conversions are tested"
    ],
    "answer": 1,
    "explanation": "For VRO-level exams, deep binary arithmetic mastery is not required; instead, basic conversion logic and foundational terms like Bit and Byte are more frequently and practically tested.",
    "topic": "Number Systems Networking and Internet"
  },
  {
    "id": 17,
    "difficulty": "Easy",
    "question": "A computer network is best defined as:",
    "options": [
      "A single computer with high processing power",
      "A group of two or more computers linked together to share data, resources, and communication",
      "A type of software used to browse the internet",
      "A device used to store data permanently"
    ],
    "answer": 1,
    "explanation": "A computer network is a group of two or more computers linked together to share data, resources such as printers, and enable communication between them.",
    "topic": "Networking and Internet"
  },
  {
    "id": 18,
    "difficulty": "Easy",
    "question": "Which type of network covers a small area such as an office or a single school building?",
    "options": [
      "WAN",
      "MAN",
      "LAN",
      "PAN"
    ],
    "answer": 2,
    "explanation": "LAN (Local Area Network) covers a small area such as an office or a school building, exemplified by a computer lab network.",
    "topic": "Networking and Internet"
  },
  {
    "id": 19,
    "difficulty": "Easy",
    "question": "Which network type covers an entire city, such as a city's cable TV network?",
    "options": [
      "LAN",
      "MAN",
      "WAN",
      "PAN"
    ],
    "answer": 1,
    "explanation": "MAN (Metropolitan Area Network) covers a city-wide area, with a city's cable TV network being a common example.",
    "topic": "Networking and Internet"
  },
  {
    "id": 20,
    "difficulty": "Easy",
    "question": "The Internet itself is considered an example of which type of network?",
    "options": [
      "LAN",
      "PAN",
      "WAN",
      "MAN"
    ],
    "answer": 2,
    "explanation": "WAN (Wide Area Network) covers a country or the globe, and the Internet itself is the largest and most well-known example of a WAN.",
    "topic": "Networking and Internet"
  },
  {
    "id": 21,
    "difficulty": "Easy",
    "question": "A Bluetooth connection between a phone and earphones is an example of which type of network?",
    "options": [
      "LAN",
      "PAN",
      "MAN",
      "WAN"
    ],
    "answer": 1,
    "explanation": "PAN (Personal Area Network) covers a very short range around a person, and a Bluetooth connection between a phone and earphones is a classic example.",
    "topic": "Networking and Internet"
  },
  {
    "id": 22,
    "difficulty": "Medium",
    "question": "Arrange the following network types in increasing order of coverage area: LAN, MAN, PAN, WAN.",
    "options": [
      "LAN < PAN < MAN < WAN",
      "PAN < LAN < MAN < WAN",
      "MAN < LAN < PAN < WAN",
      "WAN < MAN < LAN < PAN"
    ],
    "answer": 1,
    "explanation": "The correct order of increasing coverage area is PAN < LAN < MAN < WAN, as remembered by the mnemonic comparing a small cooking pan to the worldwide WAN.",
    "topic": "Networking and Internet"
  },
  {
    "id": 23,
    "difficulty": "Easy",
    "question": "The Internet is best defined as:",
    "options": [
      "A single website providing information",
      "A global network of interconnected computer networks communicating via common protocols like TCP/IP",
      "A type of application software",
      "A device used to connect a printer to a computer"
    ],
    "answer": 1,
    "explanation": "The Internet is a global network of interconnected computer networks that communicate using a common set of rules called protocols, primarily TCP/IP.",
    "topic": "Networking and Internet"
  },
  {
    "id": 24,
    "difficulty": "Easy",
    "question": "Who is credited with inventing the World Wide Web (WWW)?",
    "options": [
      "Bill Gates",
      "Tim Berners-Lee",
      "Steve Jobs",
      "Mark Zuckerberg"
    ],
    "answer": 1,
    "explanation": "The World Wide Web (WWW) was invented by Tim Berners-Lee in 1989 as a system of interlinked web pages accessible via the internet.",
    "topic": "Networking and Internet"
  },
  {
    "id": 25,
    "difficulty": "Easy",
    "question": "In which year was the World Wide Web (WWW) invented?",
    "options": [
      "1969",
      "1989",
      "1995",
      "2000"
    ],
    "answer": 1,
    "explanation": "The World Wide Web was invented in 1989 by Tim Berners-Lee, establishing a system of interlinked documents accessible over the internet.",
    "topic": "Networking and Internet"
  },
  {
    "id": 26,
    "difficulty": "Hard",
    "question": "Which of the following statements correctly distinguishes the Internet from the WWW?",
    "options": [
      "The Internet and WWW are exactly the same thing",
      "The Internet is the physical/technical network infrastructure, while WWW is a service (linked web pages) that runs on top of it",
      "WWW is the physical infrastructure, while the Internet is a service running on top of it",
      "Neither the Internet nor WWW involves any networking"
    ],
    "answer": 1,
    "explanation": "This is a classic APPSC trap question: the Internet refers to the underlying physical/technical network infrastructure, while WWW is a service built on top of the Internet, consisting of linked documents (web pages).",
    "topic": "Networking and Internet"
  },
  {
    "id": 27,
    "difficulty": "Easy",
    "question": "URL stands for:",
    "options": [
      "Universal Resource Locator",
      "Uniform Resource Locator",
      "Unique Reference Link",
      "Universal Reference Locator"
    ],
    "answer": 1,
    "explanation": "URL stands for Uniform Resource Locator, which serves as the address of a webpage on the internet.",
    "topic": "Networking and Internet"
  },
  {
    "id": 28,
    "difficulty": "Easy",
    "question": "What does the 'S' in HTTPS signify?",
    "options": [
      "Speed",
      "Software",
      "Secure (encrypted communication)",
      "Server"
    ],
    "answer": 2,
    "explanation": "The 'S' in HTTPS stands for Secure, indicating that the communication between the browser and the website is encrypted, unlike plain HTTP.",
    "topic": "Networking and Internet"
  },
  {
    "id": 29,
    "difficulty": "Easy",
    "question": "An ISP (Internet Service Provider) is best described as:",
    "options": [
      "A device that connects computers within a LAN",
      "A company that provides internet access to users, such as BSNL, Jio, or Airtel",
      "A type of web browser",
      "A protocol used for secure data transfer"
    ],
    "answer": 1,
    "explanation": "An ISP (Internet Service Provider) is a company such as BSNL, Jio, or Airtel that provides internet access to individuals and organisations.",
    "topic": "Networking and Internet"
  },
  {
    "id": 30,
    "difficulty": "Easy",
    "question": "An IP Address is best described as:",
    "options": [
      "The name of a website that is easy to remember",
      "A unique numerical address assigned to every device on a network",
      "A type of internet browser",
      "A security protocol for encrypting data"
    ],
    "answer": 1,
    "explanation": "An IP Address is a unique numerical address assigned to every device connected to a network, enabling identification and communication between devices.",
    "topic": "Networking and Internet"
  },
  {
    "id": 31,
    "difficulty": "Medium",
    "question": "A Domain Name, such as ap.gov.in, is used primarily to:",
    "options": [
      "Replace the need for an IP address entirely at the hardware level",
      "Provide an easy-to-remember website name instead of a numerical IP address",
      "Encrypt data during transmission",
      "Convert digital signals to analog signals"
    ],
    "answer": 1,
    "explanation": "A Domain Name provides an easy-to-remember alternative to a numerical IP address, making websites more accessible to users, such as ap.gov.in.",
    "topic": "Networking and Internet"
  },
  {
    "id": 32,
    "difficulty": "Medium",
    "question": "Which device converts digital signals to analog signals and vice versa for internet connectivity?",
    "options": [
      "Router",
      "Modem",
      "Switch",
      "Repeater"
    ],
    "answer": 1,
    "explanation": "A Modem converts digital signals from a computer into analog signals for transmission over telephone lines, and vice versa, enabling internet connectivity.",
    "topic": "Networking and Internet"
  },
  {
    "id": 33,
    "difficulty": "Medium",
    "question": "Which device is primarily responsible for directing data packets between different networks?",
    "options": [
      "Modem",
      "Router",
      "Scanner",
      "Monitor"
    ],
    "answer": 1,
    "explanation": "A Router directs data packets between different networks, ensuring data reaches its correct destination across interconnected networks.",
    "topic": "Networking and Internet"
  },
  {
    "id": 34,
    "difficulty": "Medium",
    "question": "Which type of internet connection uses light signals through glass fibers and is considered the fastest among common options?",
    "options": [
      "Dial-Up",
      "Mobile Data",
      "Fiber Optic",
      "Wi-Fi"
    ],
    "answer": 2,
    "explanation": "Fiber Optic connections use light signals transmitted through glass fibers, making them the fastest among the commonly available internet connection types.",
    "topic": "Networking and Internet"
  },
  {
    "id": 35,
    "difficulty": "Easy",
    "question": "Which of the following is the oldest and slowest type of internet connection, using a telephone line?",
    "options": [
      "Broadband",
      "Dial-Up",
      "Fiber Optic",
      "Wi-Fi"
    ],
    "answer": 1,
    "explanation": "Dial-Up is an old internet connection type that uses a telephone line and is significantly slower than modern alternatives like broadband and fiber optic.",
    "topic": "Networking and Internet"
  },
  {
    "id": 36,
    "difficulty": "Easy",
    "question": "Which of the following best describes a Search Engine?",
    "options": [
      "A device used to connect a printer",
      "A tool used to search for information on the web, such as Google or Bing",
      "A protocol used to secure email transmission",
      "A type of network topology"
    ],
    "answer": 1,
    "explanation": "A Search Engine is a tool used to search for information on the web; Google and Bing are common examples used to locate content across websites.",
    "topic": "Networking and Internet MS Office Suite"
  },
  {
    "id": 37,
    "difficulty": "Easy",
    "question": "MS Word is primarily used for:",
    "options": [
      "Creating spreadsheets for numerical data",
      "Creating, editing, and formatting text documents like letters and reports",
      "Creating slideshows for presentations",
      "Managing databases"
    ],
    "answer": 1,
    "explanation": "MS Word is a word processing application used for creating, editing, and formatting text documents such as letters, reports, and notices.",
    "topic": "MS Office Suite"
  },
  {
    "id": 38,
    "difficulty": "Medium",
    "question": "Which MS Word feature is used for sending personalised letters to multiple recipients using a data source?",
    "options": [
      "Spell Check",
      "Mail Merge",
      "Page Layout",
      "Insert Tab"
    ],
    "answer": 1,
    "explanation": "Mail Merge is an MS Word feature that allows sending personalised letters to multiple recipients by combining a document template with a data source, useful for sending notices to multiple villagers.",
    "topic": "MS Office Suite"
  },
  {
    "id": 39,
    "difficulty": "Easy",
    "question": "In MS Word, which tab would you use to insert tables, pictures, and headers/footers into a document?",
    "options": [
      "Home Tab",
      "Insert Tab",
      "Page Layout Tab",
      "Review Tab"
    ],
    "answer": 1,
    "explanation": "The Insert Tab in MS Word is used to insert elements such as tables, pictures, and headers/footers into a document.",
    "topic": "MS Office Suite"
  },
  {
    "id": 40,
    "difficulty": "Easy",
    "question": "Which MS Word feature automatically detects and corrects grammar and spelling errors in a document?",
    "options": [
      "Mail Merge",
      "Spell Check",
      "Page Layout",
      "Insert Tab"
    ],
    "answer": 1,
    "explanation": "The Spell Check feature in MS Word automatically detects and helps correct spelling and grammar errors as a user types a document.",
    "topic": "MS Office Suite"
  },
  {
    "id": 41,
    "difficulty": "Easy",
    "question": "Which MS Word tab allows you to adjust margins, page orientation, and page size?",
    "options": [
      "Home Tab",
      "Insert Tab",
      "Page Layout Tab",
      "View Tab"
    ],
    "answer": 2,
    "explanation": "The Page Layout Tab in MS Word provides options to adjust margins, orientation (portrait/landscape), and page size for a document.",
    "topic": "MS Office Suite"
  },
  {
    "id": 42,
    "difficulty": "Medium",
    "question": "MS Excel is primarily useful for VROs for which of the following tasks?",
    "options": [
      "Creating presentations for training sessions",
      "Maintaining land records and numerical revenue data through spreadsheets",
      "Writing formal letters to villagers",
      "Scanning paper documents"
    ],
    "answer": 1,
    "explanation": "MS Excel is used for creating spreadsheets, which is particularly useful for VROs while maintaining land records, revenue data, and numerical reports.",
    "topic": "MS Office Suite"
  },
  {
    "id": 43,
    "difficulty": "Easy",
    "question": "In MS Excel, the intersection of a row and a column is called a:",
    "options": [
      "Sheet",
      "Cell",
      "Formula",
      "Chart"
    ],
    "answer": 1,
    "explanation": "A Cell is the basic unit of a spreadsheet in MS Excel, formed at the intersection of a row and a column.",
    "topic": "MS Office Suite"
  },
  {
    "id": 44,
    "difficulty": "Easy",
    "question": "Which MS Excel function is used to add numbers within a specified range?",
    "options": [
      "AVERAGE()",
      "SUM()",
      "SORT()",
      "FILTER()"
    ],
    "answer": 1,
    "explanation": "The SUM() function in MS Excel is used to add all numbers within a specified range of cells.",
    "topic": "MS Office Suite"
  },
  {
    "id": 45,
    "difficulty": "Easy",
    "question": "Which MS Excel function is used to calculate the mean value of a set of numbers?",
    "options": [
      "SUM()",
      "AVERAGE()",
      "COUNT()",
      "MAX()"
    ],
    "answer": 1,
    "explanation": "The AVERAGE() function in MS Excel calculates the mean (average) value of a specified range of numbers.",
    "topic": "MS Office Suite"
  },
  {
    "id": 46,
    "difficulty": "Medium",
    "question": "A VRO maintaining land revenue collection data for 50 villages wants to arrange villages by the highest collection amount. Which MS Excel feature should be used?",
    "options": [
      "Mail Merge",
      "Sorting",
      "Spell Check",
      "Slide Show"
    ],
    "answer": 1,
    "explanation": "Sorting in MS Excel allows data to be arranged based on specified criteria, such as arranging villages by collection amount from highest to lowest.",
    "topic": "MS Office Suite"
  },
  {
    "id": 47,
    "difficulty": "Easy",
    "question": "Where in MS Excel are formulas and functions typically typed for a selected cell?",
    "options": [
      "Status Bar",
      "Formula Bar",
      "Ribbon",
      "Title Bar"
    ],
    "answer": 1,
    "explanation": "The Formula Bar in MS Excel is where formulas and functions are typed and displayed for the currently selected cell.",
    "topic": "MS Office Suite"
  },
  {
    "id": 48,
    "difficulty": "Easy",
    "question": "MS PowerPoint is primarily used for:",
    "options": [
      "Maintaining numerical land revenue data",
      "Creating presentations and slideshows for training or reporting",
      "Editing scanned images",
      "Managing email communication"
    ],
    "answer": 1,
    "explanation": "MS PowerPoint is used for creating presentations and slideshows, useful for departmental training sessions or reporting to higher officials.",
    "topic": "MS Office Suite"
  },
  {
    "id": 49,
    "difficulty": "Easy",
    "question": "In MS PowerPoint, which feature refers to the visual effects that occur between slides?",
    "options": [
      "Animations",
      "Transitions",
      "Slide Layout",
      "Slide Show"
    ],
    "answer": 1,
    "explanation": "Transitions in MS PowerPoint refer to the visual effects applied when moving from one slide to the next during a presentation.",
    "topic": "MS Office Suite"
  },
  {
    "id": 50,
    "difficulty": "Medium",
    "question": "In MS PowerPoint, which feature adds movement effects to individual elements within a single slide?",
    "options": [
      "Transitions",
      "Slide Show",
      "Animations",
      "Slide Layout"
    ],
    "answer": 2,
    "explanation": "Animations in MS PowerPoint add movement effects to individual elements, such as text or images, within a single slide, distinct from Transitions which apply between slides.",
    "topic": "MS Office Suite Cyber Security and Digital Safety"
  },
  {
    "id": 51,
    "difficulty": "Easy",
    "question": "Which malicious program attaches itself to files and spreads while damaging data?",
    "options": [
      "Worm",
      "Virus",
      "Trojan Horse",
      "Spyware"
    ],
    "answer": 1,
    "explanation": "A Virus is a malicious program that attaches itself to files and spreads to other files or systems, causing damage to data.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 52,
    "difficulty": "Medium",
    "question": "Which type of malware is self-replicating and spreads across networks without needing a host file?",
    "options": [
      "Virus",
      "Worm",
      "Trojan Horse",
      "Ransomware"
    ],
    "answer": 1,
    "explanation": "A Worm is a self-replicating malware that spreads across networks independently, without requiring a host file to attach to, unlike a virus.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 53,
    "difficulty": "Easy",
    "question": "Malware disguised as legitimate software to trick users into installing it is known as:",
    "options": [
      "Worm",
      "Spyware",
      "Trojan Horse",
      "Ransomware"
    ],
    "answer": 2,
    "explanation": "A Trojan Horse is malware that disguises itself as legitimate software, tricking users into installing it, after which it can perform malicious activities.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 54,
    "difficulty": "Easy",
    "question": "Fraudulent attempts to obtain sensitive information like passwords or OTPs by pretending to be a trustworthy source is called:",
    "options": [
      "Hacking",
      "Phishing",
      "Spyware",
      "Worm"
    ],
    "answer": 1,
    "explanation": "Phishing is a fraudulent technique used to obtain sensitive information such as passwords or OTPs by impersonating a trustworthy source via fake emails, SMS, or websites.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 55,
    "difficulty": "Easy",
    "question": "Which type of malware secretly monitors user activity and steals information without the user's knowledge?",
    "options": [
      "Ransomware",
      "Spyware",
      "Worm",
      "Trojan Horse"
    ],
    "answer": 1,
    "explanation": "Spyware is malware that secretly monitors a user's activity and steals information, often operating covertly in the background.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 56,
    "difficulty": "Easy",
    "question": "Which type of malware locks or encrypts a user's data and demands payment for its release?",
    "options": [
      "Ransomware",
      "Spyware",
      "Virus",
      "Worm"
    ],
    "answer": 0,
    "explanation": "Ransomware locks or encrypts a user's data and demands a ransom payment in exchange for restoring access to that data.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 57,
    "difficulty": "Easy",
    "question": "Unauthorised access to computer systems or data is referred to as:",
    "options": [
      "Phishing",
      "Hacking",
      "Spyware",
      "Ransomware"
    ],
    "answer": 1,
    "explanation": "Hacking refers to gaining unauthorised access to computer systems or data, often bypassing security measures.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 58,
    "difficulty": "Medium",
    "question": "The mnemonic 'Six Cyber Villains' in the chapter refers to which set of threats?",
    "options": [
      "Virus, Worm, Trojan, Phishing, Spyware, Ransomware",
      "RAM, ROM, CPU, ALU, CU, Registers",
      "LAN, MAN, WAN, PAN, ISP, IP",
      "Windows, Linux, macOS, Android, iOS, Chrome"
    ],
    "answer": 0,
    "explanation": "The 'Six Cyber Villains' mnemonic refers to the six common cyber threats covered in the chapter: Virus, Worm, Trojan, Phishing, Spyware, and Ransomware.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 59,
    "difficulty": "Easy",
    "question": "Which of the following is a recommended protective measure against cyber threats?",
    "options": [
      "Using the same simple password across all accounts",
      "Enabling Two-Factor Authentication (2FA) wherever possible",
      "Sharing OTPs with callers claiming to be bank officials",
      "Disabling antivirus software to increase speed"
    ],
    "answer": 1,
    "explanation": "Enabling Two-Factor Authentication (2FA) wherever possible adds an extra layer of security beyond just a password, making unauthorised access significantly harder.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 60,
    "difficulty": "Medium",
    "question": "Why should users avoid clicking unknown links or downloading attachments from unknown senders?",
    "options": [
      "It slows down internet speed",
      "It may lead to malware infection or phishing attacks",
      "It uses excessive data storage only",
      "It has no security implications"
    ],
    "answer": 1,
    "explanation": "Unknown links or attachments from unfamiliar senders often carry malware or lead to phishing sites designed to steal sensitive information.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 61,
    "difficulty": "Medium",
    "question": "Regularly updating an operating system and software is important mainly because updates:",
    "options": [
      "Make the device slower",
      "Often include security patches that fix vulnerabilities",
      "Are only cosmetic in nature",
      "Are required only for gaming performance"
    ],
    "answer": 1,
    "explanation": "Regular updates often include security patches that fix known vulnerabilities, reducing the risk of exploitation by cyber attackers.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 62,
    "difficulty": "Medium",
    "question": "Which agency serves as India's national body for responding to cyber security incidents?",
    "options": [
      "CERT-In",
      "AP CSOC",
      "IT Act, 2000",
      "MyGov"
    ],
    "answer": 0,
    "explanation": "CERT-In (Indian Computer Emergency Response Team) is the national agency responsible for responding to cyber security incidents across India.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 63,
    "difficulty": "Easy",
    "question": "Which online platform allows citizens to report cyber crimes in India?",
    "options": [
      "cybercrime.gov.in",
      "MyGov.in",
      "UMANG App",
      "DigiLocker"
    ],
    "answer": 0,
    "explanation": "cybercrime.gov.in is the online platform provided by the Government of India for citizens to report cyber crimes.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 64,
    "difficulty": "Easy",
    "question": "Which Indian law primarily governs cyber crime and electronic commerce?",
    "options": [
      "Digital Personal Data Protection Act, 2023",
      "IT Act, 2000",
      "Consumer Protection Act, 2019",
      "RTI Act, 2005"
    ],
    "answer": 1,
    "explanation": "The IT Act, 2000 (and its amendments) is India's primary law dealing with cyber crime and electronic commerce.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 65,
    "difficulty": "Medium",
    "question": "Which Indian law specifically governs the protection of personal digital data?",
    "options": [
      "IT Act, 2000",
      "Digital Personal Data Protection Act, 2023",
      "Companies Act, 2013",
      "Indian Penal Code"
    ],
    "answer": 1,
    "explanation": "The Digital Personal Data Protection Act, 2023 is the Indian law specifically governing the protection of personal digital data.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 66,
    "difficulty": "Medium",
    "question": "Which dedicated body handles digital offences in Andhra Pradesh, reflecting the state's e-Governance security push?",
    "options": [
      "AP Cyber Security Operations Centre (CSOC)",
      "MyGov",
      "UMANG",
      "CERT-In"
    ],
    "answer": 0,
    "explanation": "Andhra Pradesh has its own AP Cyber Security Operations Centre (CSOC) and a dedicated Cyber Crime Wing under AP Police to handle digital offences.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 67,
    "difficulty": "Hard",
    "question": "Why should users avoid sharing OTPs, PINs, or passwords over phone or email, even if the requester claims to be from a bank?",
    "options": [
      "Because banks never need this information and legitimate institutions never ask for it, making such requests a common phishing tactic",
      "Because sharing this information speeds up transactions",
      "Because OTPs are not linked to any sensitive information",
      "Because banks require OTP sharing for verification by phone"
    ],
    "answer": 0,
    "explanation": "Legitimate banks and institutions never ask customers to share OTPs, PINs, or passwords over phone or email; such requests are a common tactic used in phishing scams.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 68,
    "difficulty": "Medium",
    "question": "Using secure (HTTPS) websites is especially important during which type of activity?",
    "options": [
      "Casual web browsing for news only",
      "Financial transactions involving sensitive personal or banking information",
      "Watching non-interactive videos",
      "Reading public government notices"
    ],
    "answer": 1,
    "explanation": "HTTPS ensures encrypted communication, which is especially critical during financial transactions to protect sensitive personal and banking information from interception.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 69,
    "difficulty": "Easy",
    "question": "Which of the following combinations is recommended for creating a strong password?",
    "options": [
      "Only lowercase letters",
      "A combination of letters, numbers, and special characters",
      "Only the user's date of birth",
      "A single common word"
    ],
    "answer": 1,
    "explanation": "A strong password should combine letters, numbers, and special characters to make it significantly harder for attackers to guess or crack.",
    "topic": "Cyber Security and Digital Safety"
  },
  {
    "id": 70,
    "difficulty": "Medium",
    "question": "Which of the following best explains why installing genuine, updated antivirus software is recommended?",
    "options": [
      "It permanently prevents all internet slowdowns",
      "It helps detect and remove malware such as viruses, worms, and trojans, and stays updated against newly emerging threats",
      "It replaces the need for strong passwords entirely",
      "It is only useful for protecting printers"
    ],
    "answer": 1,
    "explanation": "Genuine, regularly updated antivirus software helps detect and remove malware like viruses, worms, and trojans, and stays current against newly emerging cyber threats through periodic updates.",
    "topic": "Cyber Security and Digital Safety Digital India and AP E-Governance"
  },
  {
    "id": 71,
    "difficulty": "Easy",
    "question": "In which year was the Digital India programme launched by the Government of India?",
    "options": [
      "2010",
      "2014",
      "2015",
      "2019"
    ],
    "answer": 2,
    "explanation": "The Digital India programme was launched by the Government of India in 2015 to transform India into a digitally empowered society.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 72,
    "difficulty": "Medium",
    "question": "Which of the following is NOT one of the three core vision areas of the Digital India programme?",
    "options": [
      "Digital Infrastructure as a core utility to every citizen",
      "Governance and Services on Demand",
      "Digital Empowerment of Citizens",
      "Privatisation of all government services"
    ],
    "answer": 3,
    "explanation": "The three core vision areas of Digital India are Digital Infrastructure as a core utility, Governance and Services on Demand, and Digital Empowerment of Citizens. Privatisation of services is not one of these vision areas.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 73,
    "difficulty": "Easy",
    "question": "Aadhaar is primarily used as a:",
    "options": [
      "Payment system for online transactions",
      "Unique 12-digit identification number for residents used for identity verification",
      "Cloud storage platform for documents",
      "Mobile application for accessing multiple government services"
    ],
    "answer": 1,
    "explanation": "Aadhaar is a unique 12-digit identification number issued to residents of India, primarily used for identity verification purposes.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 74,
    "difficulty": "Easy",
    "question": "Which platform allows citizens to store and access verified digital documents in the cloud?",
    "options": [
      "UMANG",
      "DigiLocker",
      "MyGov",
      "CoWIN"
    ],
    "answer": 1,
    "explanation": "DigiLocker is a cloud-based platform that allows citizens to store and access verified digital documents securely.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 75,
    "difficulty": "Medium",
    "question": "UMANG stands for:",
    "options": [
      "Unified Mobile Application for New-age Governance",
      "Universal Mobile App for National Growth",
      "Unified Model for Aadhaar and Networked Governance",
      "Universal Mobile Access for National Government"
    ],
    "answer": 0,
    "explanation": "UMANG stands for Unified Mobile Application for New-age Governance, a single app providing access to multiple government services.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 76,
    "difficulty": "Easy",
    "question": "UPI is best described as:",
    "options": [
      "A cloud storage platform",
      "A real-time digital payment system",
      "A citizen engagement platform for policy participation",
      "A vaccination registration platform"
    ],
    "answer": 1,
    "explanation": "UPI (Unified Payments Interface) is a real-time digital payment system that enables instant money transfers between bank accounts using mobile devices.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 77,
    "difficulty": "Easy",
    "question": "Which platform served as a notable e-governance success case for COVID-19 vaccination registration?",
    "options": [
      "MyGov",
      "CoWIN",
      "UMANG",
      "DigiLocker"
    ],
    "answer": 1,
    "explanation": "CoWIN was the platform used for COVID-19 vaccination registration in India, widely regarded as a notable e-governance success case.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 78,
    "difficulty": "Easy",
    "question": "Which platform allows citizens to engage with and participate in government policy discussions?",
    "options": [
      "MyGov",
      "UPI",
      "CoWIN",
      "Aadhaar"
    ],
    "answer": 0,
    "explanation": "MyGov is a citizen engagement platform that allows people to participate in policy discussions and government initiatives.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 79,
    "difficulty": "Easy",
    "question": "Which platform is described as AP's comprehensive e-governance platform integrating multiple departmental services on a single backbone?",
    "options": [
      "Meebhoomi",
      "e-Pragati",
      "AP Online",
      "Spandana"
    ],
    "answer": 1,
    "explanation": "e-Pragati is AP's comprehensive e-governance platform that integrates multiple departmental services onto a single technological backbone.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 80,
    "difficulty": "Easy",
    "question": "Meebhoomi (■■■■■■) is primarily an online portal used for:",
    "options": [
      "Grievance redressal",
      "Land records, adangal, and 1-B records",
      "Treasury and financial transactions",
      "COVID-19 vaccination registration"
    ],
    "answer": 1,
    "explanation": "Meebhoomi is AP's online portal that provides land records, adangal details, 1-B records, and land ownership information, directly relevant to VRO duties.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 81,
    "difficulty": "Medium",
    "question": "Which AP system focuses on digitised land records and mutation management?",
    "options": [
      "Web Land Management System (WLMS)",
      "Spandana",
      "CFMS",
      "AP Online"
    ],
    "answer": 0,
    "explanation": "The Web Land Management System (WLMS) focuses on digitised land records and the management of land mutations in Andhra Pradesh.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 82,
    "difficulty": "Easy",
    "question": "Which AP portal serves as a citizen service delivery platform for certificates, bill payments, and applications?",
    "options": [
      "Meebhoomi",
      "AP Online",
      "Spandana",
      "CFMS"
    ],
    "answer": 1,
    "explanation": "AP Online is a citizen service delivery portal that provides services such as certificates, bill payments, and various applications.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 83,
    "difficulty": "Medium",
    "question": "Which AP digital tool is used by village or ward volunteers for doorstep delivery of government services?",
    "options": [
      "Gram Volunteer / Ward Volunteer App",
      "Spandana",
      "CFMS",
      "e-Pragati"
    ],
    "answer": 0,
    "explanation": "The Gram Volunteer / Ward Volunteer App is a digital tool used by village and ward volunteers to deliver government services directly at citizens' doorsteps.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 84,
    "difficulty": "Easy",
    "question": "Which AP platform is the primary grievance redressal system of the state government?",
    "options": [
      "Spandana",
      "Meebhoomi",
      "AP Online",
      "WLMS"
    ],
    "answer": 0,
    "explanation": "Spandana is the grievance redressal platform of the Andhra Pradesh Government, allowing citizens to raise and track complaints.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 85,
    "difficulty": "Medium",
    "question": "CFMS (Comprehensive Financial Management System) in Andhra Pradesh is primarily used for:",
    "options": [
      "Land record management",
      "Treasury and financial transactions of the AP Government",
      "COVID-19 vaccination tracking",
      "Grievance redressal"
    ],
    "answer": 1,
    "explanation": "CFMS is used for treasury and financial transactions of the Andhra Pradesh Government, ensuring transparent and efficient financial management.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 86,
    "difficulty": "Easy",
    "question": "Direct Benefit Transfer (DBT) is a mechanism that primarily aims to:",
    "options": [
      "Increase the number of middlemen in welfare schemes",
      "Transfer government welfare scheme benefits directly into a beneficiary's bank account, reducing leakages",
      "Replace Aadhaar-based identification systems",
      "Eliminate the need for bank accounts entirely"
    ],
    "answer": 1,
    "explanation": "DBT transfers government welfare scheme benefits and subsidies directly into a beneficiary's bank account, reducing leakages and the involvement of middlemen.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 87,
    "difficulty": "Easy",
    "question": "The JAM Trinity, which forms the foundation of effective DBT delivery, consists of:",
    "options": [
      "Jan Dhan, Aadhaar, Mobile",
      "Jan Dhan, AP Online, Meebhoomi",
      "Justice, Aadhaar, MyGov",
      "Jan Dhan, ATM, Mobile"
    ],
    "answer": 0,
    "explanation": "The JAM Trinity consists of Jan Dhan (bank accounts), Aadhaar (identity), and Mobile (connectivity), which together enable effective DBT delivery.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 88,
    "difficulty": "Easy",
    "question": "In the JAM Trinity, what does the 'A' represent?",
    "options": [
      "Application",
      "Aadhaar (Identity)",
      "Automation",
      "AP Online"
    ],
    "answer": 1,
    "explanation": "In the JAM Trinity, 'A' stands for Aadhaar, representing the identity component that helps ensure benefits reach the correct beneficiary.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 89,
    "difficulty": "Hard",
    "question": "Why are questions linking 'digital literacy' with the VRO's future job role a favourite framing in APPSC Group-3 exams?",
    "options": [
      "Because VROs never use digital platforms in their duties",
      "Because VROs interact with platforms like Meebhoomi, Web Land, and grievance portals on a near-daily basis",
      "Because digital literacy has no connection with land administration",
      "Because APPSC only tests theoretical computer knowledge"
    ],
    "answer": 1,
    "explanation": "As future VROs will personally interact with Meebhoomi, Web Land, and grievance portals almost daily, APPSC frequently frames questions connecting digital literacy concepts directly with the VRO's real job responsibilities.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 90,
    "difficulty": "Medium",
    "question": "Which of the following AP welfare scheme portals is associated with DBT-based disbursal tracking?",
    "options": [
      "YSR Sunna Vaddi and other welfare scheme portals",
      "CERT-In",
      "IT Act, 2000",
      "OMR"
    ],
    "answer": 0,
    "explanation": "YSR Sunna Vaddi and other welfare scheme portals are associated with DBT (Direct Benefit Transfer) based disbursal tracking for various state welfare schemes.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 91,
    "difficulty": "Hard",
    "question": "Blockchain technology pilots explored in Andhra Pradesh are primarily aimed at:",
    "options": [
      "Improving grievance redressal speed only",
      "Securing land records to prevent tampering and fraud",
      "Replacing the Meebhoomi portal entirely",
      "Managing treasury transactions"
    ],
    "answer": 1,
    "explanation": "AP has explored blockchain technology pilots specifically to secure land records and prevent tampering and fraud, bridging VRO subject knowledge with modern digital literacy concepts.",
    "topic": "Digital India and AP E-Governance"
  },
  {
    "id": 92,
    "difficulty": "Medium",
    "question": "Which of the following best explains why 'naming/rebranding of schemes' is highlighted as an important exam tip in this chapter?",
    "options": [
      "Because scheme names never change over time",
      "Because Digital India and AP e-Governance scheme names can be renamed or updated, so candidates should verify the latest names before the exam",
      "Because scheme names are irrelevant to APPSC questions",
      "Because only central government schemes get renamed, never state schemes"
    ],
    "answer": 1,
    "explanation": "The chapter advises candidates to stay updated because cyber security and Digital India-related schemes evolve over time, and government portals or schemes are sometimes renamed, making it important to verify current names before the exam.",
    "topic": "Digital India and AP E-Governance Emerging Technologies"
  },
  {
    "id": 93,
    "difficulty": "Easy",
    "question": "Machines performing tasks that normally require human intelligence, such as decision-making and recognition, describes:",
    "options": [
      "Cloud Computing",
      "Artificial Intelligence (AI)",
      "Big Data",
      "Blockchain"
    ],
    "answer": 1,
    "explanation": "Artificial Intelligence (AI) refers to machines performing tasks that normally require human intelligence, such as decision-making, recognition, and reasoning.",
    "topic": "Emerging Technologies"
  },
  {
    "id": 94,
    "difficulty": "Easy",
    "question": "A subset of AI where machines learn from data patterns without being explicitly programmed for every scenario is known as:",
    "options": [
      "Machine Learning (ML)",
      "Internet of Things (IoT)",
      "Cloud Computing",
      "Big Data"
    ],
    "answer": 0,
    "explanation": "Machine Learning (ML) is a subset of AI in which machines learn from data patterns rather than being explicitly programmed for every possible scenario.",
    "topic": "Emerging Technologies"
  },
  {
    "id": 95,
    "difficulty": "Easy",
    "question": "A network of physical devices such as sensors and appliances connected to the internet, sharing data, describes:",
    "options": [
      "Cloud Computing",
      "Big Data",
      "Internet of Things (IoT)",
      "Blockchain"
    ],
    "answer": 2,
    "explanation": "The Internet of Things (IoT) refers to a network of physical devices, such as sensors and appliances, that are connected to the internet and share data with each other.",
    "topic": "Emerging Technologies"
  },
  {
    "id": 96,
    "difficulty": "Easy",
    "question": "Storing and accessing data or programs over the internet instead of on a local hard drive is known as:",
    "options": [
      "Cloud Computing",
      "Machine Learning",
      "Blockchain",
      "Big Data"
    ],
    "answer": 0,
    "explanation": "Cloud Computing refers to storing and accessing data or programs over the internet, rather than relying solely on local storage devices such as a hard drive.",
    "topic": "Emerging Technologies"
  },
  {
    "id": 97,
    "difficulty": "Easy",
    "question": "Extremely large datasets that are analysed to reveal patterns and trends are referred to as:",
    "options": [
      "Big Data",
      "Cloud Computing",
      "IoT",
      "Blockchain"
    ],
    "answer": 0,
    "explanation": "Big Data refers to extremely large and complex datasets that are analysed to uncover patterns, trends, and insights that would be difficult to detect otherwise.",
    "topic": "Emerging Technologies"
  },
  {
    "id": 98,
    "difficulty": "Easy",
    "question": "A distributed, tamper-resistant digital ledger technology that forms the base of cryptocurrencies is known as:",
    "options": [
      "Cloud Computing",
      "Blockchain",
      "Big Data",
      "Machine Learning"
    ],
    "answer": 1,
    "explanation": "Blockchain is a distributed, tamper-resistant digital ledger technology that underlies cryptocurrencies and is also explored for applications like securing land records.",
    "topic": "Emerging Technologies"
  },
  {
    "id": 99,
    "difficulty": "Medium",
    "question": "Which emerging technology has AP explored specifically to secure land records against tampering and fraud?",
    "options": [
      "Cloud Computing",
      "Blockchain",
      "Internet of Things",
      "Big Data"
    ],
    "answer": 1,
    "explanation": "AP has explored Blockchain technology pilots specifically to secure land records and prevent tampering and fraud, connecting emerging tech with land administration.",
    "topic": "Emerging Technologies"
  },
  {
    "id": 100,
    "difficulty": "Hard",
    "question": "Which of the following best distinguishes Machine Learning from general Artificial Intelligence?",
    "options": [
      "Machine Learning is unrelated to Artificial Intelligence",
      "Machine Learning is a subset of AI focused on learning from data patterns, while AI is the broader concept of machines performing human-like intelligent tasks",
      "AI is a subset of Machine Learning",
      "Machine Learning only applies to robotics, not software"
    ],
    "answer": 1,
    "explanation": "Machine Learning is a subset of the broader field of Artificial Intelligence; while AI encompasses machines performing any human-like intelligent task, ML specifically focuses on learning from data patterns.",
    "topic": "Emerging Technologies"
  }
];
