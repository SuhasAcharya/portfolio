import Navbar from "../components/Navbar/Navbar";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-screen">
      <Navbar />
      {children}
    </section>
  );
}
