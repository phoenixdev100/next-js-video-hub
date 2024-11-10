import Image from "next/image";
import Link from "next/link";

export default function VideoDetail({ params }) {
  const { id } = params;

  const video = videoData.find((video) => video.id === id);

  if (!video) {
    return <p>Video not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-2/3 w-full">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?start=0&autoplay=1&origin=http://localhost:3000`}
            frameborder="0"
            title={video.title}
            allowFullScreen
            className="w-full h-[300px] md:h-[450px] lg:h-[600px]"
          ></iframe>
          <h1 className="text-xl md:text-2xl font-bold mt-4">{video.title}</h1>
          <p className="mt-2 text-gray-600">{video.description}</p>
        </div>
        <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
          <h2 className="text-xl font-semibold mb-4">Recommended Videos:</h2>
          <ul className="space-y-4">
            {videoData
              .filter((vid) => vid.id !== id)
              .map((vid) => {
                return (
                  <Link href={`/videos/${vid.id}`} key={vid.id} className="flex items-start space-x-4">
                    <Image
                      height={192}
                      width={192}
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-lg font-semibold">{vid.title}</p>
                    </div>
                  </Link>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const videoData = [
  {
    id: "sDrd9rzLIRM",
    title: "React Tutorial for Beginners",
    description:
      "Thunderbolts* is an upcoming American superhero film based on the Marvel Comics team Thunderbolts. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the 36th film in the Marvel Cinematic Universe.",
    thumbnail:
      "https://i.ytimg.com/vi/v-94Snw-H4o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAlm78be2GpG8BW-4PUnBmxWcN5cg",
    channel: "Marvel Entertainment",
    views: "9.3M",
    uploadedAt: "2 hours ago",
  },
  {
    id: "gCzLh_QdyRk",
    title:
      "MERN Stack Project | Build a Full Stack Auction Platform With MongoDB, Express, React, Node.js",
    description:
      "Learn how to build a complete Auction Platform from scratch using the MERN stack (MongoDB, Express, React, Node.js). This tutorial covers everything you need to create a fully functional and responsive auction website. You'll learn how to manage bids, handle user authentication, implement a dashboard, and automate tasks such as payment verification using advanced MongoDB features. Perfect for web developers looking to enhance their skills in full-stack development with hands-on experience in a real-world project. Don’t forget to like, subscribe, and hit the notification bell for more MERN stack tutorials!",
    thumbnail: "https://i.ytimg.com/vi/gCzLh_QdyRk/maxresdefault.jpg",
    channel: "CodeWithZeeshu",
    views: "7.1k",
    uploadedAt: "Sep 4, 2024",
  },
  {
    id: "9OGhwqWQ8fI",
    title:
      "MERN Stack Project: Build a Full Stack Hospital Management System with React, Node, MongoDB, Express",
    description:
      "🚀 Welcome to CodeWithZeeshu! In this comprehensive tutorial, I'll guide you through the creation of a dynamic MERN Stack hospital management system from scratch. Learn how to leverage MongoDB, Express.js, React, and Node.js to build a powerful platform for patients and admins alike. Follow along step-by-step as we cover everything from setting up the backend server to designing a user-friendly frontend interface. Whether you're a beginner or an experienced developer, this project will equip you with the skills to create your own professional-grade hospital management system. Subscribe now and let's dive into the world of MERN Stack development together!",
    thumbnail: "https://i.ytimg.com/vi/9OGhwqWQ8fI/maxresdefault.jpg",
    channel: "CodeWithZeeshu",
    views: "147k",
    uploadedAt: "July 23, 2024",
  },
  {
    id: "3omr6Zqzwt0",
    title:
      "MERN Stack Project: Building Job Portal with React, Node, MongoDB, Express, Redux and Redux-Toolkit",
    description:
      "Welcome to my latest tutorial on building a feature-rich MERN stack job portal! In this video, we'll dive deep into creating a job portal application with advanced features like automated newsletters using Node Cron, user profile management, job posting, and more.",
    thumbnail:
      "https://i.ytimg.com/vi/3omr6Zqzwt0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2FAfxS5Vgbeqjr91qnJ1F7ocfbg",
    channel: "Marvel Entertainment",
    views: "9.3M",
    uploadedAt: "2 hours ago",
  },
  {
    id: "A5_OCuXZaao",
    title: "Squid Game: Season 2 | Special Teaser | Netflix",
    description:
      "Three years after winning Squid Game, Player 456 gave up going to the states and comes back with a new resolution in his mind. Gi-hun once again dives into the mysterious survival game, starting another life-or-death game with new participants gathered to win the prize of 45.6 billion won. Director Hwang Dong-hyuk, who made history at the 74th Primetime Emmys® becoming the first Asian to win Outstanding Directing for a Drama Series, once again helms the series as director, writer, and producer. Lee Jung-jae, Lee Byung-hun, Wi Ha-jun, and Gong Yoo reprise their roles from Season 1 with an impeccable list of new cast members including Yim Si-wan, Kang Ha-neul, Park Gyu-young, Lee Jin-uk, Park Sung-hoon, Yang Dong-geun, Kang Ae-sim, Lee David, Choi Seung-hyun, Roh Jae-won, Jo Yu-ri, and Won Ji-an rounding out the ensemble of colorful characters in the new season.",
    thumbnail:
      "https://i.ytimg.com/vi/1GqzyjUbT4c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBraKNA5LjNBXKnSFWGqFLDYMGKBQ",
    channel: "Netflix",
    views: "9.3M",
    uploadedAt: "2 hours ago",
  },
  {
    id: "wuND4V_062Q",
    title:
      "Complete Backend Mastery In One Video | With MERN ProjectReact Tutorial for Beginners",
    description:
      "Hey, are you a beginner? Don't know backend? Don't worry, I'm here to teach you the backend essentials with Node.js and Express.js from scratch!",
    thumbnail: "https://i.ytimg.com/vi/wuND4V_062Q/maxresdefault.jpg",
    channel: "CodeWithZeeshu",
    views: "5.5k",
    uploadedAt: "June 6, 2024",
  },
  {
    id: "K5KAc5CoCuk",
    title: "Indila - Dernière Danse (Clip Officiel)",
    description: "A famous song with billions of views.",
    thumbnail: "https://i.ytimg.com/vi/K5KAc5CoCuk/maxresdefault.jpg",
    channel: "Indila",
    views: "1.1B",
    uploadedAt: "10 years ago",
  },
  {
    id: "V1Pl8CzNzCw",
    title: "Billie Eilish, Khalid - lovely",
    description: "Directed by Matty Peacock and Taylor Cohen",
    thumbnail: "https://i.ytimg.com/vi/V1Pl8CzNzCw/maxresdefault.jpg",
    channel: "Billie Eilish",
    views: "2.1B",
    uploadedAt: "6 years ago",
  },
  {
    id: "awkkyBH2zEo",
    title: "LISA - 'LALISA' M/V",
    description: "내 뒷모습만 봐도 알잖아",
    thumbnail: "https://i.ytimg.com/vi/awkkyBH2zEo/maxresdefault.jpg",
    channel: "BLACKPINK",
    views: "720M",
    uploadedAt: "3 years ago",
  },
  {
    id: "5dWeeUIZFgA",
    title: "Khaled - C'Est La Vie",
    description: "Khaled",
    thumbnail: "https://i.ytimg.com/vi/5dWeeUIZFgA/sddefault.jpg",
    channel: "Khaled",
    views: "462M",
    uploadedAt: "12 years ago",
  },
];
