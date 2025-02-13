import RouterPage from "./RouterPage";

//字体
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div className="bg-pink-500 h-[100%]">
      <RouterPage />
    </div>
  );
}
