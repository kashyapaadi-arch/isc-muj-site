export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "faculty" | "executive" | "core";
  department?: string;
  image?: string;
  linkedin?: string;
  email?: string;
  initials: string;
  bio?: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: "delegation" | "mou" | "team" | "conference";
  country?: string;
  partner: string;
  date?: string;
  description: string;
  image?: string;
  tag: string;
}

export interface ObjectiveItem {
  title: string;
  description: string;
  icon: string;
}

export const ISC_DATA = {
  university: {
    name: "Manipal University Jaipur",
    shortName: "MUJ",
    accreditation: "NAAC A+ Accredited | AICTE & UGC Approved",
    department: "Directorate of International Collaborations (DoIC)",
    cellName: "International Student Cell (ISC)",
    tagline: "Unlocking Global Horizons, Shaping Future Leaders",
    address: "Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007",
    contactEmail: "doic@jaipur.manipal.edu",
    contactPhone: "+91 141 3999100",
    whatsappNumber: "+91 9999999999",
    linkedinUrl: "https://www.linkedin.com/company/international-student-cell-doic-muj/",
    portalUrl: "https://jaipur.manipal.edu",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "International Collaborations", href: "#about" },
    { label: "Student Exchange", href: "#objectives" },
    { label: "International Student Cell", href: "#" },
  ],

  stats: [
    { value: "50+", label: "Global Partner Universities" },
    { value: "15+", label: "International Delegations" },
    { value: "25+", label: "Countries Connected" },
    { value: "100%", label: "Dedicated Student Support" },
  ],

  about: {
    headline: "Unlocking Global Horizons, Shaping Future Leaders",
    lead: "MUJ proudly introduces ISC, a pioneering initiative aimed at broadening the global horizons of our students. This dedicated cell stands as a testament to our commitment to providing a world-class educational experience that transcends borders.",
    p1: "ISC is not just an initiative; it's a philosophy that embodies our belief in the transformative power of international exposure. Through ISC, we strive to nurture global citizens who are equipped with the skills, knowledge, and cultural sensitivity to thrive in an interconnected world.",
    p2: "ISC offers a myriad of opportunities for students to engage with the world beyond our campus. From international student exchanges to global internships, from collaborative research projects to cultural immersion programs, ISC opens doors to a world of possibilities. Our goal is to empower students to become global leaders who can navigate diverse cultures, collaborate across borders, and tackle global challenges with confidence and empathy.",
  },

  doicOverview: {
    title: "International Student Cell (ISC)?",
    p1: "The International Student Cell-ISC at DoIC – MUJ is a dedicated initiative focused on providing students with invaluable international exposure. It serves as a gateway to a world of opportunities, creating awareness of global initiatives and fostering collaborations on a global scale. ISC proactively supports various programs such as student exchanges, internships, and research opportunities, aiming to enhance the overall educational experience at MUJ.",
    p2: "One of the primary goals of ISC is to elevate MUJ's presence on the international stage by facilitating global networking and partnerships. Through its activities, the cell promotes a deeper understanding of global issues and encourages students to become global citizens.",
    p3: "ISC plays a crucial role in promoting awareness of global collaborations and opportunities for both MUJ students and incoming international students. Programs like Explore India, semester exchanges, internships, and winter and summer schools are organized to provide students with diverse cultural experiences and academic enrichment.",
    p4: "Overall, ISC is more than just a cell; it is a catalyst for transforming students into global leaders, equipped with the skills and knowledge to thrive in an interconnected world.",
  },

  objectives: {
    title: "Key Objectives",
    narrative: "Our goal is to organize and promote international events and activities that enhance the internationalization of MUJ. This includes managing opportunities for student exchanges, internships, projects, semester exchanges, cultural exchanges, and educational tours. We also aim to strengthen our global outreach by initiating School Connect activities abroad through our students in countries with significant Indian diaspora populations. Additionally, we plan to host an annual international conference to discuss the prospects and challenges of internationalizing education in India. This conference will provide valuable networking opportunities for our faculty and students. These efforts will significantly expand our global network, fostering meaningful collaborations and enhancing the university's international reputation.",
    pillars: [
      {
        title: "Student & Semester Exchanges",
        description: "Coordinating bilateral semester exchange programs, research semesters, and winter/summer academies with top international institutions.",
        badge: "Mobility",
      },
      {
        title: "Global Internships & Projects",
        description: "Facilitating international experiential learning, cross-border research internships, and collaborative capstone projects.",
        badge: "Careers",
      },
      {
        title: "School Connect Abroad",
        description: "Promoting MUJ's academic excellence through diaspora outreach and school connect programs across international regions.",
        badge: "Outreach",
      },
      {
        title: "Annual International Conference",
        description: "Organizing an annual premier forum uniting international educators, researchers, and global thought leaders at MUJ.",
        badge: "Symposium",
      },
      {
        title: "Cultural & Explore India Programs",
        description: "Hosting incoming international students with immersive cultural tours, language exchanges, and academic mentorship.",
        badge: "Culture",
      },
      {
        title: "Global Network Expansion",
        description: "Signing MOUs and strategic partnerships that elevate academic and joint-research prestige worldwide.",
        badge: "Partnerships",
      },
    ],
  },

  events: [
    {
      id: "event-1",
      title: "Delegation Visit – IOWA State University, USA",
      category: "delegation",
      partner: "IOWA State University, USA",
      tag: "USA Delegation",
      description: "High-level bilateral dialogue on engineering exchange programs, joint dual-degree frameworks, and collaborative STEM research with faculty leadership from Iowa State University.",
      image: "/images/events/iowa-state-delegation.jpg",
    },
    {
      id: "event-2",
      title: "Campus France – Team",
      category: "team",
      partner: "Campus France",
      tag: "Higher Education in France",
      description: "Interactive briefing and certification session with the official Campus France delegation, exploring master's pathways, Charpak scholarships, and Franco-Indian research partnerships.",
      image: "/images/events/campus-france-team.jpg",
    },
    {
      id: "event-3",
      title: "Delegation Visit – University of Melbourne Australia",
      category: "delegation",
      partner: "University of Melbourne, Australia",
      tag: "Australia Delegation",
      description: "Strategic delegation roundtable hosted at Destination Manipal Jaipur, discussing international articulation pathways, student immersion tours, and global curriculum synergy.",
      image: "/images/events/melbourne-delegation.jpg",
    },
    {
      id: "event-4",
      title: "MOU Signing Ceremony with University of Galway, Ireland",
      category: "mou",
      partner: "University of Galway, Ireland",
      tag: "MOU Signing",
      description: "Formal bilateral signing ceremony establishing academic mobility, joint medical/biotech research collaborations, and reciprocal semester exchange pathways.",
      image: "/images/events/galway-mou.jpg",
    },
    {
      id: "event-5",
      title: "MOU Signing Ceremony with Auckland University of Technology, New Zealand",
      category: "mou",
      partner: "Auckland University of Technology, New Zealand",
      tag: "MOU Signing",
      description: "Signing of institutional partnership agreement with AUT representatives, opening doors for student internships, design and computing exchange programs in New Zealand.",
      image: "/images/events/aut-mou.jpg",
    },
    {
      id: "event-6",
      title: "Delegation Visit – DAAD Germany",
      category: "delegation",
      partner: "DAAD German Academic Exchange Service",
      tag: "Germany Delegation",
      description: "Grand student auditorium orientation on German higher education, DAAD scholarships, working in Germany, and advanced research funding opportunities for MUJ scholars.",
      image: "/images/events/daad-germany.jpg",
    },
  ] as EventItem[],

  team: {
    facultyAdvisors: [
      {
        id: "ravi-kumar-sharma",
        name: "Dr. Ravi Kumar Sharma",
        role: "Director, DoIC",
        category: "faculty",
        initials: "RS",
        department: "Directorate of International Collaborations",
        image: "/images/team/ravi-kumar-sharma.jpg",
        bio: "Leading international strategy, strategic partnerships, and global academic initiatives at Manipal University Jaipur.",
      },
      {
        id: "punit-balichwal",
        name: "Mr. Punit Balichwal",
        role: "Deputy Manager, DoIC",
        category: "faculty",
        initials: "PB",
        department: "Directorate of International Collaborations",
        image: "/images/team/punit-balichwal.jpg",
        bio: "Managing international operations, MoU executions, exchange protocols, and student international support services.",
      },
    ] as TeamMember[],

    executiveCommittee: [
      {
        id: "ojas-kumar",
        name: "Ojas Kumar",
        role: "President",
        category: "executive",
        initials: "OK",
        image: "/images/team/ojas-kumar.jpg",
        bio: "Leading the student body to conceptualize global student experiences, external relations, and strategic cell operations.",
      },
      {
        id: "pihu-malhotra",
        name: "Pihu Malhotra",
        role: "Vice President",
        category: "executive",
        initials: "PM",
        image: "/images/team/pihu-malhotra.jpg",
        bio: "Spearheading student engagement, overseas student orientation, and international conference coordination.",
      },
      {
        id: "asmi-dhadiwal",
        name: "Asmi Dhadiwal",
        role: "General Secretary",
        category: "executive",
        initials: "AD",
        image: "/images/team/asmi-dhadiwal.jpg",
        bio: "Overseeing day-to-day administrative execution, institutional liaison, and inter-departmental communications.",
      },
      {
        id: "arsh-agrawal",
        name: "Arsh Agrawal",
        role: "Treasurer",
        category: "executive",
        initials: "AA",
        image: "/images/team/arsh-agrawal.jpg",
        bio: "Managing the cell's financial planning, sponsorship budgets, and resource allocation for international delegations.",
      },
      {
        id: "vedika-amol-deshpande",
        name: "Vedika Amol Deshpande",
        role: "Creative Director",
        category: "executive",
        initials: "VD",
        image: "/images/team/vedika-amol-deshpande.jpg",
        bio: "Directing visual identity, branding, publication design, and global digital presence for ISC.",
      },
    ] as TeamMember[],

    coreCommittee: [
      {
        id: "manya-aggarwal",
        name: "Manya Aggarwal",
        role: "Core Committee",
        category: "core",
        initials: "MA",
        image: "/images/team/manya-aggarwal.jpg",
        bio: "Active coordinator for exchange delegations, event hospitality, and student international outreach.",
      },
      {
        id: "soumyadeepa-pal",
        name: "Soumyadeepa Pal",
        role: "Core Committee",
        category: "core",
        initials: "SP",
        image: "/images/team/soumyadeepa-pal.jpg",
        bio: "Coordinating peer mentorship for incoming international scholars and university partnership coordination.",
      },
      {
        id: "nandan-r-p",
        name: "Nandan R P",
        role: "Core Committee",
        category: "core",
        initials: "NP",
        image: "/images/team/nandan-r-p.jpg",
        bio: "Managing event logistics, multimedia documentation, and technical support for international conferences.",
      },
      {
        id: "pragya-mridu",
        name: "Pragya Mridu",
        role: "Core Committee",
        category: "core",
        initials: "PM",
        image: "/images/team/pragya-mridu.jpg",
        bio: "Engaging in student outreach programs, school connect initiatives, and student cultural immersion.",
      },
    ] as TeamMember[],
  },
};
